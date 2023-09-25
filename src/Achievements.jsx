import InputText from "./InputText";

export default function Achievements({ data = [], updater }) {
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

  return (
    <section className="achievements">
      <h1> Achievements </h1>
      <button onClick={addData}> + </button>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {Object.keys(item).map((propName) => {
                if (propName === "id") return;
                return (
                  <InputText
                    key={propName}
                    label={propName}
                    value={item[propName]}
                    type="text"
                    changeHandler={(e) => editData(e, item.id, propName)}
                  />
                );
              })}
            </li>
          );
        })}
      </ul>
    </section>
  );
}