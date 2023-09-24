import { useState } from "react";
import InputText from "./InputText";
import Education from "./Education";
import Experience from "./Experience";
export default function Form() {
  const [{ name, email, phone, country, city }, setPersonal] = useState({});
  const [education, setEdu] = useState([]);
  const [experience, setExp] = useState([]);
  function changeHandler(e, name) {
    setFormData({ ...formData, [name]: e.target.value });
  }

  return (
    <form>
      <section className="personal-info">
        <InputText
          label="Name"
          name="name"
          value={name}
          changeHandler={changeHandler}
        />
        <InputText
          label="Email"
          name="email"
          type="email"
          value={email}
          changeHandler={changeHandler}
        />
        <InputText
          label="Phone Number"
          name="phone"
          type="phone"
          value={phone}
          changeHandler={changeHandler}
        />
        <InputText
          label="Country"
          name="country"
          value={country}
          changeHandler={changeHandler}
        />
        <InputText
          label="City"
          name="city"
          value={city}
          changeHandler={changeHandler}
        />
      </section>
      <Education data={education} updater={setEdu} />
      <Experience data={experience} updater={setExp} />
      <section className="skills">
        <h1> Skills</h1>
      </section>
      <section className="achievements">
        <h1> Achievements</h1>
      </section>
    </form>
  );
}
