import DropdownAnchor from "./DropdownAnchor";

export default function Skills({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      label: "",
      values: "",
    };
    updater(data.concat(newData));
  }

  function updateData(e, id, key) {
    const updatedData = data.map((item) => {
      if (item.id === id) item[key] = e.target.value;
      return item;
    });
    updater(updatedData);
  }

  function setActive(e) {
    e.preventDefault();
    toggler("skills");
  }

  return (
    <section className="skills">
      <DropdownAnchor
        label="Skills & Interests"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <div className="dd-content">
          {data.map((item, index) => (
            <SkillGroup
              key={item.id}
              index={index}
              data={item}
              updater={updateData}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function SkillGroup({ data, index, updater }) {
  return (
    <fieldset>
      <legend> Group {index + 1} </legend>
      <label>
        <span> Label </span>
        <input
          value={data.label}
          placeholder="Name / classification of skills"
          onChange={(e) => updater(e, data.id, "label")}
        ></input>
      </label>
      <label>
        <span> Values (separate with commas) </span>
        <textarea
          value={data.values}
          placeholder="List of skills / interests (separated by commas)"
          onChange={(e) => updater(e, data.id, "values")}
        ></textarea>
      </label>
    </fieldset>
  );
}
