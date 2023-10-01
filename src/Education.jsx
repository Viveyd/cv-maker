import InputText from "./InputText";

export default function Education({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      school: "",
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

  return (
    <section className="education">
      <a href="" onClick={setActive}>
        <h1> Education </h1>
      </a>
      {active && (
        <>
          <button onClick={addData}> Add Education </button>
          {data.map((item, index) => (
            <EducationFS
              key={item.id}
              data={item}
              {...{ index }}
              updater={editData}
            />
          ))}
        </>
      )}
    </section>
  );
}

function EducationFS({ data, index, updater }) {
  return (
    <fieldset>
      <legend> Education {index + 1} </legend>
      <InputText
        label="School"
        value={data.school}
        changeHandler={(e) => updater(e, index, "school")}
      />
      <InputText
        label="Course"
        value={data.course}
        changeHandler={(e) => updater(e, index, "course")}
      />
      <InputText
        label="Degree"
        value={data.degree}
        changeHandler={(e) => updater(e, index, "degree")}
      />
      <InputText
        label="Year Graduated / Left"
        value={data.yearEnd}
        changeHandler={(e) => updater(e, index, "yearEnd")}
      />
      <label>
        <span> Achievements </span>
        <textarea
          value={data.achievements}
          onChange={(e) => updater(e, index, "achievements")}
        ></textarea>
      </label>
    </fieldset>
  );
}
