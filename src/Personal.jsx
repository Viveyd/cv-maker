import InputText from "./InputText";

export default function Personal({ data = {}, active, updater, toggler }) {
  function updateData(e, name) {
    updater({ ...data, [name]: e.target.value });
  }

  function setActive(e) {
    e.preventDefault();
    toggler("personal");
  }

  function Content() {
    if (!active) return;
    return (
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
    );
  }

  return (
    <section className="personal">
      <a href="" onClick={setActive}>
        <h1> Personal Information </h1>
      </a>
      <Content />
    </section>
  );
}
