export default function Preview({ data }) {
  const { personal, education, experience, skills, achievements } = data;
  return (
    <section className="preview">
      <h1> {personal.name}</h1>
      <p>
        {personal.email} * {personal.phone} * {personal.city},{" "}
        {personal.country}
      </p>
      <hr></hr>
      <section className="experience">
        <h2>Work Experience</h2>
        <ul>
          {experience.map((item) => {
            const {
              id,
              position,
              yearStart,
              yearEnd,
              company,
              city,
              country,
              achievements,
            } = item;
            return (
              <li key={id}>
                <h3>
                  <span>{`${position || "Job Title"}`}</span>
                  <span>{`${yearStart || "Year Started"} - ${
                    yearEnd || "Year Left"
                  }`}</span>
                </h3>
                <p>
                  <span>{`${company || "Company Name"}`}</span>
                  <span>{`${city || "City/Province"}, ${
                    country || "Country"
                  }`}</span>
                </p>
                <ul className="achievements">
                  {achievements.split(",").map((item, index) => (
                    <li key={index}> {item.trim()} </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <hr></hr>
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
