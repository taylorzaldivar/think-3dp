import { useState } from "react";
import axios from "axios";
import EmailInput from "./fields/EmailInput";
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div>
      {formSubmitted ? (
        <div className="">
          <p className="font-medium text-xl md:text-2xl">
            Thank you for submitting your email.{" "}
          </p>
        </div>
      ) : (
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
                `${process.env.NEXT_PUBLIC_FORM_API}${process.env.NEXT_PUBLIC_FORM_NEWSLETTER_KEY}`,
                formData,
                {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                }
              );
              setFormSubmitted(true);
              // router.push("/contact/confirmation");
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
                component={EmailInput}
                validate={composeValidators(required, emailValidator)}
                required
                placeholder="Email"
              />

              <div>
                <button
                  type="submit"
                  className={`bg-lime hover:bg-lime-dark text-white font-medium text-sm md:text-base rounded-r py-4 px-10`}
                  disabled={submitting || !isEmpty(errors)}
                >
                  {buttonText}
                </button>
                <p className="text-red-500 font-body">{formErrorMessage}</p>
              </div>
            </form>
          )}
        />
      )}
    </div>
  );
}
