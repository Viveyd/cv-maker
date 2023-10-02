import InputText from "./InputText";
import DropdownAnchor from "./DropdownAnchor";

export default function Experience({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      company: "",
      city: "",
      country: "",
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

  return (
    <section className="experience">
      <DropdownAnchor
        label="Experience"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <>
          <button onClick={addData}> Add Work Experience </button>
          {data.map((item, index) => (
            <ExperienceFS
              key={item.id}
              data={item}
              index={index}
              updater={editData}
            />
          ))}
        </>
      )}
    </section>
  );
}

function ExperienceFS({ data, index, updater }) {
  return (
    <fieldset>
      <legend> Experience {index + 1} </legend>
      <InputText
        label="Company"
        value={data.company}
        changeHandler={(e) => updater(e, index, "company")}
      />
      <InputText
        label="Country"
        value={data.country}
        changeHandler={(e) => updater(e, index, "country")}
      />
      <InputText
        label="City"
        value={data.city}
        changeHandler={(e) => updater(e, index, "city")}
      />
      <InputText
        label="Position at Company"
        value={data.position}
        changeHandler={(e) => updater(e, index, "position")}
      />
      <InputText
        label="Year Started"
        value={data.yearStart}
        changeHandler={(e) => updater(e, index, "yearStart")}
      />
      <InputText
        label="Year Left"
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
