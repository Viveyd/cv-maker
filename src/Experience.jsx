import InputText from "./InputText";

export default function Experience({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      company: "",
      city: "",
      position: "",
      yearStart: "",
      yearEnd: "",
      achievements:
        "Sample Job Responsibility 1, Sample Job Responsibility 2, Achievement 1, Achievement 2",
    };
    updater(data.concat(newData));
  }

  function editData(e, id, key) {
    const newData = [...data];
    newData.find((item) => item.id === id)[key] = e.target.value;
    updater(newData);
  }

  function setActive(e) {
    e.preventDefault();
    toggler("experience");
  }

  function ExperienceFS(data, index) {
    return (
      <fieldset key={data.id}>
        <legend> Experience {index + 1} </legend>
        <InputText
          label="Company"
          value={data.company}
          changeHandler={(e) => editData(e, index, "company")}
        />
        <InputText
          label="Country"
          value={data.country}
          changeHandler={(e) => editData(e, index, "country")}
        />
        <InputText
          label="City"
          value={data.city}
          changeHandler={(e) => editData(e, index, "city")}
        />
        <InputText
          label="Position at Company"
          value={data.position}
          changeHandler={(e) => editData(e, index, "position")}
        />
        <InputText
          label="Year Started"
          value={data.yearStart}
          changeHandler={(e) => editData(e, index, "yearStart")}
        />
        <InputText
          label="Year Left"
          value={data.yearEnd}
          changeHandler={(e) => editData(e, index, "yearEnd")}
        />
        <label>
          <span> Achievements </span>
          <textarea
            value={data.achievements}
            onChange={(e) => editData(e, index, "achievements")}
          ></textarea>
        </label>
      </fieldset>
    );
  }

  return (
    <section className="experience">
      <a href="" onClick={setActive}>
        <h1> Work Experience </h1>
      </a>
      {active && (
        <>
          <button onClick={addData}> Add Work Experience </button>
          {data.map((item, index) => ExperienceFS(item, index))}
        </>
      )}
    </section>
  );
}
