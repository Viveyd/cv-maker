export default function Preview({ data }) {
  const { personal, education, experience, skills, achievements } = data;
  return (
    <section className="preview">
      <section className="personal">
        <h1> {personal.name || "Johnny C. Dough"}</h1>
        <span>
          {`${personal.email || "johnny.dough@gmail.com"} | ${
            personal.phone || "+679542541128"
          } | ${personal.city || "Manila"}, ${
            personal.country || "Philippines"
          }`}
        </span>
      </section>
      <hr></hr>
      <section className="experience">
        <h2>Work Experience</h2>
        <hr className="t-margin-2"></hr>
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
      <section className="education">
        <h2>Educational Background</h2>
        <hr className="t-margin-2"></hr>
        <ul>
          {education.map((item) => {
            const {
              id,
              school,
              city,
              country,
              course,
              degree,
              yearEnd,
              achievements,
            } = item;
            return (
              <li key={id}>
                <h3>
                  <span>{`${school || "School Name"}`}</span>
                  <span>{`${city || "City/Province"}, ${
                    country || "Country"
                  }`}</span>
                </h3>
                <p>
                  <span>{`${degree || "Bachelor's"} Degree, Major in ${
                    course || "Information Technology"
                  }`}</span>
                  <span> {`${yearEnd || "Year Graduated / Left"} `}</span>
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
      <section className="skills">
        <h2>Skills & Interests</h2>
        <hr className="t-margin-2"></hr>
        <ul>
          {skills.map((item) => {
            const { id, label, values } = item;

            return (
              <li key={id}>
                {`${label}: ${values
                  .split(",")
                  .map((item) => item.trim())
                  .join(";")}`}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
