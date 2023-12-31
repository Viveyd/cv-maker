import InputText from "./InputText";
import DropdownAnchor from "./DropdownAnchor";
import DeleteBtn from "./DeleteBtn";
import { v4 as generateId } from "uuid";

export default function Experience({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: generateId(),
      company: "",
      city: "",
      country: "",
      position: "",
      yearStart: "",
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

  function setActive(e) {
    e.preventDefault();
    toggler("experience");
  }

  function deleteData(id) {
    updater(data.filter((item) => item.id !== id));
  }

  return (
    <section className="experience">
      <DropdownAnchor
        label="Experience"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <div className={data.length ? "dd-content" : "dd-content empty"}>
          {data.length
            ? data.map((item, index) => (
                <ExperienceFS
                  key={item.id}
                  data={item}
                  index={index}
                  updater={editData}
                  deleter={() => deleteData(item.id)}
                />
              ))
            : "Click + to add in your working experience. This section is omitted from the resume until you do so."}
        </div>
      )}
    </section>
  );
}

function ExperienceFS({ data, index, updater, deleter }) {
  return (
    <fieldset>
      <legend>
        <span>Experience {index + 1}</span>
        <DeleteBtn onClickHandler={deleter} />
      </legend>

      <InputText
        label="Company"
        value={data.company}
        placeholder="Name of Company"
        changeHandler={(e) => updater(e, index, "company")}
      />
      <InputText
        label="Job Title"
        value={data.position}
        placeholder="Your position"
        changeHandler={(e) => updater(e, index, "position")}
      />
      <InputText
        label="Country"
        value={data.country}
        placeholder="Name of country"
        changeHandler={(e) => updater(e, index, "country")}
      />
      <InputText
        label="City"
        value={data.city}
        placeholder="Name of city/province"
        changeHandler={(e) => updater(e, index, "city")}
      />
      <InputText
        label="Year Started"
        value={data.yearStart}
        placeholder="Year/date you started"
        changeHandler={(e) => updater(e, index, "yearStart")}
      />
      <InputText
        label="Year Left"
        value={data.yearEnd}
        placeholder="Year/date you left"
        changeHandler={(e) => updater(e, index, "yearEnd")}
      />
      <label>
        <span> Achievements (separate with commas) </span>
        <textarea
          value={data.achievements}
          placeholder="Separated by commas, list what you did for the company. Your responsibilities and accomplishments. Numbers look good here."
          onChange={(e) => updater(e, index, "achievements")}
        ></textarea>
      </label>
    </fieldset>
  );
}
