import InputText from "./InputText";
import DropdownAnchor from "./DropdownAnchor";

export default function Achievements({ data = [], updater, active, toggler }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      achievement: "",
      description: "",
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
    toggler("achievements");
  }

  function AchievementFS(data) {
    return (
      <fieldset key={data.id}>
        <legend> Achievement </legend>
        <InputText
          label="Label"
          value={data.achievement}
          changeHandler={(e) => editData(e, data.id, "achievement")}
        />

        <label>
          <span> Description </span>
          <textarea
            value={data.description}
            onChange={(e) => editData(e, data.id, "description")}
          ></textarea>
        </label>
      </fieldset>
    );
  }

  return (
    <section className="achievements">
      <DropdownAnchor
        label="Achievements"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <div className="dd-content">
          {data.map((item) => AchievementFS(item))}
        </div>
      )}
    </section>
  );
}
