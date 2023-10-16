import { useEffect } from "react";

export default function Preview({ data }) {
  const { personal, education, experience, skills, achievements } = data;

  useEffect(() => {
    function resize() {
      const wrapper = document.querySelector("div#root");
      const content = document.querySelector("section.preview");
      const [wrapperW, wrapperH] = [
        wrapper.clientWidth,
        wrapper.clientHeight - 75,
      ]; // 75 to offset the height occupied by header
      const [contentW, contentH] = [content.offsetWidth, content.offsetHeight];
      const scale = Math.min(wrapperW / contentW, wrapperH / contentH);
      content.style.transform = `scale(${scale})`;
    }
    resize();
    window.addEventListener("resize", resize);
  }, []);

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
      <section>
        {personal.summary ||
          "Vestibulum lacinia diam eu nunc gravida pellentesque. Quisque quis quam justo. Donec turpis tellus, dignissim in ullamcorper at, finibus sed risus. Mauris ornare justo vitae erat dapibus, sit amet bibendum est vehicula. Sed fermentum turpis in urna pulvinar, in egestas elit fermentum. Suspendisse imperdiet faucibus hendrerit. Maecenas varius lectus nulla, at varius orci auctor in."}
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
                  <span className="italic">{`${
                    company || "Company Name"
                  }`}</span>
                  <span className="italic">{`${city || "City/Province"}, ${
                    country || "Country"
                  }`}</span>
                </p>
                <ul className="achievements preview-list-box">
                  {achievements.length ? (
                    achievements
                      .split(",")
                      .map((item, index) => (
                        <li key={index}> {item.trim()} </li>
                      ))
                  ) : (
                    <>
                      <li>Achievements</li>
                      <li>Accomplishments</li>
                      <li> Responsibilities</li>
                    </>
                  )}
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
                  <span className="italic">{`${
                    degree || "Bachelor's"
                  } Degree, Major in ${
                    course || "Information Technology"
                  }`}</span>
                  <span className="italic">
                    {" "}
                    {`${yearEnd || "Year Graduated / Left"} `}
                  </span>
                </p>
                <ul className="achievements preview-list-box">
                  {achievements.length ? (
                    achievements
                      .split(",")
                      .map((item, index) => (
                        <li key={index}> {item.trim()} </li>
                      ))
                  ) : (
                    <>
                      <li> Honors & Awards </li>
                      <li> Relevant Projects </li>
                      <li> Relevant Activities </li>
                    </>
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="achievements">
        <h2>Achievements</h2>
        <hr className="t-margin-2"></hr>
        <ul className="preview-list-box">
          {achievements.length ? (
            achievements.map((item) => {
              const { id, achievement, description } = item;
              return (
                <li key={id}>
                  <strong>
                    {" "}
                    {achievement || "Relevant accomplishment "}.{" "}
                  </strong>
                  <span>
                    {description ||
                      "Fusce sem nisl, cursus nec feugiat vitae, commodo eu turpis. Duis risus erat, scelerisque iaculis odio id, mattis dapibus erat. Nunc ligula nulla, efficitur non dignissim ut,ullamcorper eget sapien."}
                  </span>
                </li>
              );
            })
          ) : (
            <>
              <li>
                <strong> Personal Project. </strong>
                <span>
                  Cras non velit auctor, tempor mi ut, convallis libero. Quisque
                  placerat dapibus tempor.
                </span>
              </li>
              <li>
                <strong> Certification. </strong>
                <span>
                  In scelerisque magna arcu. Sed urna eros, elementum at
                  malesuada sed, fermentum ullamcorper sapien.{" "}
                </span>
              </li>
              <li>
                <strong> Accomplishment. </strong>
                <span></span>
              </li>
            </>
          )}
        </ul>
      </section>
      <section className="skills">
        <h2>Skills & Interests</h2>
        <hr className="t-margin-2"></hr>
        <ul className="preview-list-box">
          {skills.map((item) => {
            const { id, label, values } = item;
            return (
              <li key={id}>
                <strong> {label}: </strong>
                <span>
                  {values
                    .split(",")
                    .map((item) => item.trim())
                    .join("; ")}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
