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

  return (
    <section className="achievements">
      <DropdownAnchor
        label="Achievements"
        toggle={setActive}
        add={active ? addData : null}
      />
      {active && (
        <div className="dd-content">
          {data.map((item, index) => {
            return (
              <fieldset key={item.id}>
                <legend> Achievement {index + 1} </legend>
                <InputText
                  label="Label"
                  value={data.achievement}
                  placeholder="Relevant side-projects or accomplishments"
                  changeHandler={(e) => editData(e, item.id, "achievement")}
                />

                <label>
                  <span> Description </span>
                  <textarea
                    value={data.description}
                    placeholder="Good points/review of the accomplishment"
                    onChange={(e) => editData(e, item.id, "description")}
                  ></textarea>
                </label>
              </fieldset>
            );
          })}
        </div>
      )}
    </section>
  );
}
