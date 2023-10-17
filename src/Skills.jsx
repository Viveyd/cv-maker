import DeleteBtn from "./DeleteBtn";
import DropdownAnchor from "./DropdownAnchor";
import { v4 as generateId } from "uuid";

export default function Skills({ data, updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: generateId(),
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

  function deleteData(id) {
    updater(data.filter((item) => item.id !== id));
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
        <div className={data.length ? "dd-content" : "dd-content empty"}>
          {data.length
            ? data.map((item, index) => (
                <SkillGroup
                  key={item.id}
                  index={index}
                  data={item}
                  updater={updateData}
                  deleter={() => deleteData(item.id)}
                />
              ))
            : "Click + to add some of your skills / interests. This section is omitted from the resume until you do so."}
        </div>
      )}
    </section>
  );
}

function SkillGroup({ data, index, updater, deleter }) {
  return (
    <fieldset>
      <legend>
        <span>Group {index + 1}</span> <DeleteBtn onClickHandler={deleter} />
      </legend>
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
