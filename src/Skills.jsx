export default function Skills({ data, updater, active, toggler }) {
  function updateData(e) {
    updater(e.target.value.split(","));
  }
  function setActive(e) {
    e.preventDefault();
    toggler("skills");
  }

  function Content() {
    if (!active) return;
    return (
      <>
        <textarea onChange={updateData} value={data.join(",")}></textarea>
      </>
    );
  }
  return (
    <section className="skills">
      <a href="" onClick={setActive}>
        <h1> Skills</h1>
      </a>
      <Content />
    </section>
  );
}
