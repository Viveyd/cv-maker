export default function InputText({
  label,
  value,
  type = "text",
  changeHandler,
}) {
  return (
    <label>
      <span> {label} </span>
      <input type={type} onChange={changeHandler} value={value}></input>
    </label>
  );
}
