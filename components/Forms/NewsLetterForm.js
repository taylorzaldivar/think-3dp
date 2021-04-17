import { useState } from "react";
import axios from "axios";
import TextInput from "./fields/TextInput";
import { Form, Field } from "react-final-form";
import { isEmpty } from "../../utils/objectHelpers";
import { useRouter } from "next/router";
import {
  required,
  phoneValidation,
  emailValidator,
  composeValidators,
} from "./Validators";
export default function NewsLetterForm() {
  const [formErrorMessage, setFormErrorMessage] = useState("");
  const [buttonText, setButtonText] = useState("Sign Up");
  const router = useRouter();

  return (
    <div>
      <Form
        onSubmit={async (e, form) => {
          try {
            setButtonText("Sending...");
            setFormErrorMessage("");
            const formData = new FormData();
            for (var key in e) {
              formData.append(key, e[key]);
            }
            await axios.post(
              `${NEXT_PUBLIC_FORM_API}${process.env.NEXT_PUBLIC_FORM_NEWSLETTER_KEY}`,
              formData,
              {
                headers: {
                  "content-type": "multipart/form-data",
                },
              }
            );
            router.push("/contact/confirmation");
            setButtonText("Send Request");
          } catch (err) {
            console.log(err);
            setFormErrorMessage(
              "Something went wrong please email us for assistance."
            );
            setButtonText("Send Request");
          }
        }}
        render={({ handleSubmit, submitting, errors }) => (
          <form className="flex" onSubmit={handleSubmit}>
            <Field
              name="Email"
              validate={required}
              component={TextInput}
              placeholder="Email"
              required
            />
            <div>
              <button
                type="submit"
                className={`bg-lime hover:bg-lime-dark text-white font-bold rounded-r py-4 px-10`}
                disabled={submitting || !isEmpty(errors)}
              >
                {buttonText}
              </button>
              <p className="text-red-500 font-body">{formErrorMessage}</p>
            </div>
          </form>
        )}
      />
    </div>
  );
}
