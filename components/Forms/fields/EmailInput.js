export default function EmailInput({ input, meta, required }) {
  return (
    <div
      className={`flex-1 bb-form__input-group ${
        meta.error && meta.touched ? "bb-form__input-group--error" : ""
      }`}
    >
      {" "}
      <label>
        {input.name}
        {required ? "*" : ""}
      </label>
      <input {...input} type="email" className="" />
      {meta.error && meta.touched && (
        <span className="bb-error">{meta.error}</span>
      )}
    </div>
  );
}
