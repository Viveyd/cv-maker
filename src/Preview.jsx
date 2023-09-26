export default function Preview({ data }) {
  const { personal, education, experience, skills, achievements } = data;
  return (
    <section className="preview">
      <h1> {personal.name}</h1>
      <section className="education">
        <h2>Educational Background</h2>
        <ul>
          {education.map((item) => {
            return (
              <li key={item.id}>
                <h3> {item.school || "School"} </h3>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
