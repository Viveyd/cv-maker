export default function InputText({
  label,
  value,
  type = "text",
  placeholder = "",
  changeHandler,
}) {
  return (
    <label>
      <span> {label} </span>
      <input
        type={type}
        onChange={changeHandler}
        value={value}
        placeholder={placeholder}
      ></input>
    </label>
  );
}
