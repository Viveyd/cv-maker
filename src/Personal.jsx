import InputText from "./InputText";

export default function Personal({ data = {}, updater }) {
  function updateData(e, name) {
    updater({ ...data, [name]: e.target.value });
  }
  return (
    <section className="personal-info">
      <h1> Personal Information </h1>
      {Object.keys(data).map((item, index) => {
        return (
          <InputText
            key={index}
            label={item}
            name={item}
            value={data[item]}
            changeHandler={updateData}
          />
        );
      })}
    </section>
  );
}
