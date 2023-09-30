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

  function Label({ id, label }) {
    return (
      <label>
        <span> Label </span>
        <input
          value={label}
          onChange={(e) => updateData(e, id, "label")}
        ></input>
      </label>
    );
  }

  function Values({ id, values }) {
    return (
      <label>
        <span> Values </span>
        <textarea
          value={values}
          onChange={(e) => updateData(e, id, "values")}
        ></textarea>
      </label>
    );
  }

  function SkillGroup({ data }) {
    return (
      <fieldset>
        <legend> Group </legend>
        <Label id={data.id} label={data.label} />
        <Values id={data.id} values={data.values} />
      </fieldset>
    );
  }

  return (
    <section className="skills">
      <a href="" onClick={setActive}>
        <h1> Skills & Interests</h1>
      </a>
      {active && (
        <>
          <button onClick={addData}> Add group </button>
          <ul>
            {data.map((item) => (
              <SkillGroup key={item.id} data={item} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
