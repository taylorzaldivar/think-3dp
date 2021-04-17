export default function TextInput({ input, meta, required, placeholder }) {
  return (
    <div
      className={`flex-1 bb-form__input-group ${
        meta.error && meta.touched ? "bb-form__input-group--error" : ""
      }`}
    >
      <input
        {...input}
        className="p-4 w-full rounded-l"
        type="text"
        placeholder={placeholder}
      />
      {/* {meta.error && meta.touched && (
        <span className="bb-error">{meta.error}</span>
      )} */}
    </div>
  );
}
