import InputText from "./InputText";

export default function Personal({ data = {}, updater }) {
  function updateData(e, name) {
    updater({ ...data, [name]: e.target.value });
  }
  return (
    <section className="personal">
      <h1> Personal Information </h1>
      <ul>
        {Object.keys(data).map((item, index) => {
          return (
            <li key={index}>
              <InputText
                label={item}
                name={item}
                value={data[item]}
                changeHandler={updateData}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
