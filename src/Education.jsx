import InputText from "./InputText";

export default function Education({ data, updater }) {
  function addData(e) {
    e.preventDefault();
    const newData = {
      id: data.length ? data[data.length - 1].id + 1 : 0,
      school: "",
      course: "",
      degree: "",
      yearEnd: "",
      achievements: [],
    };
    updater(data.concat(newData));
  }

  function editData(e, id, key) {
    const newData = [...data];
    newData.find((item) => item.id === id)[key] =
      key === "achievements" ? e.target.value.split(",") : e.target.value;
    updater(newData);
  }

  return (
    <section>
      <h1> Education </h1>
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
