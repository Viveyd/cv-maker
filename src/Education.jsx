import InputText from "./InputText";

export default function Education({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      school: "",
      city: "",
      country: "",
      course: "",
      degree: "",
      yearEnd: "",
      achievements: "Honors, Projects, Awards",
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
    toggler("education");
  }

  function EducationFS(data, index) {
    return (
      <fieldset key={data.id}>
        <legend> Education {index + 1} </legend>
        <InputText
          label="School"
          value={data.school}
          changeHandler={(e) => editData(e, index, "school")}
        />
        <InputText
          label="City"
          value={data.school}
          changeHandler={(e) => editData(e, index, "city")}
        />
        <InputText
          label="Country"
          value={data.school}
          changeHandler={(e) => editData(e, index, "country")}
        />
        <InputText
          label="Course"
          value={data.course}
          changeHandler={(e) => editData(e, index, "course")}
        />
        <InputText
          label="Degree"
          value={data.degree}
          changeHandler={(e) => editData(e, index, "degree")}
        />
        <InputText
          label="Year Graduated / Left"
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
    <section className="education">
      <a href="" onClick={setActive}>
        <h1> Education </h1>
      </a>
      {active && (
        <>
          <button onClick={addData}> Add Education </button>
          {data.map((item, index) => EducationFS(item, index))}
        </>
      )}
    </section>
  );
}
