export default function Skills({ data, updater, active, toggler }) {
  function updateData(e, key) {
    updater({ ...data, [key]: e.target.value });
  }
  function setActive(e) {
    e.preventDefault();
    toggler("skills");
  }

  return (
    <section className="skills">
      <a href="" onClick={setActive}>
        <h1> Skills & Interests</h1>
      </a>
      {active && (
        <>
          <label>
            <span> Skills </span>
            <textarea
              value={data.skills}
              onChange={(e) => updateData(e, "skills")}
            ></textarea>
          </label>
          <label>
            <span> Interests </span>
            <textarea
              value={data.interests}
              onChange={(e) => updateData(e, "interests")}
            ></textarea>
          </label>
        </>
      )}
    </section>
  );
}
