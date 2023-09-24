export default function Skills({ data, updater }) {
  function updateData(e) {
    updater(e.target.value.split(","));
  }
  return (
    <section className="skills">
      <h1> Skills</h1>
      <textarea onChange={updateData} value={data.join(",")}></textarea>
    </section>
  );
}
