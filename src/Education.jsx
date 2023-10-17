import InputText from "./InputText";
import DropdownAnchor from "./DropdownAnchor";
import DeleteBtn from "./DeleteBtn";

export default function Education({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      school: "",
      location: "",
      degreeMajor: "",
      yearEnd: "",
      achievements: "",
    };
    updater(data.concat(newData));
  }

  function editData(e, id, key) {
    const newData = [...data];
    newData.find((item) => item.id === id)[key] = e.target.value;
    updater(newData);
  }

  function deleteData(id) {
    updater(data.filter((item) => item.id !== id));
  }

  function setActive(e) {
    e.preventDefault();
    toggler("education");
  }

  return (
    <section className="education">
      <DropdownAnchor
        label="Education"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <div className="dd-content">
          {data.map((item, index) => (
            <EducationFS
              key={item.id}
              data={item}
              {...{ index }}
              updater={editData}
              deleter={() => deleteData(item.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function EducationFS({ data, index, updater, deleter }) {
  return (
    <fieldset>
      <legend>
        <span>Education {index + 1}</span>
        <DeleteBtn onClickHandler={deleter} />
      </legend>
      <InputText
        label="School"
        value={data.school}
        placeholder="Name of School"
        changeHandler={(e) => updater(e, index, "school")}
      />
      <InputText
        label="Degree & Major (If applicable)"
        value={data.degreeMajor}
        placeholder="Ex. BS, Computer Science or Highschool if N/A"
        changeHandler={(e) => updater(e, index, "degreeMajor")}
      />
      <InputText
        label="Location"
        value={data.location}
        placeholder="Name of City / Province"
        changeHandler={(e) => updater(e, index, "location")}
      />
      <InputText
        label="Year Graduated / Left"
        value={data.yearEnd}
        placeholder="Date you left the school"
        changeHandler={(e) => updater(e, index, "yearEnd")}
      />
      <label>
        <span> Achievements (separate with commas) </span>
        <textarea
          value={data.achievements}
          placeholder="Honors and awards to show achiever attitude. Projects / courses / competitions relevant to the job, hintig at capability."
          onChange={(e) => updater(e, index, "achievements")}
        ></textarea>
      </label>
    </fieldset>
  );
}
