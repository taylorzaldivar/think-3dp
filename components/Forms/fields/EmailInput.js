export default function EmailInput({ input, meta, placeholder, required }) {
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
      {meta.error && meta.touched && (
        <span className="bb-error text-red-600 font-medium">{meta.error}</span>
      )}
    </div>
  );
}
