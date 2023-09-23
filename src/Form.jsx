import { useState } from "react";
import InputText from "./InputText";
export default function Form() {
  const [formData, setFormData] = useState({});

  function changeHandler(e, name) {
    setFormData({ ...formData, [name]: e.target.value });
  }

  return (
    <form>
      <section className="personal-info">
        <InputText
          label="Name"
          name="name"
          value={formData.name}
          changeHandler={changeHandler}
        />
        <InputText
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          changeHandler={changeHandler}
        />
        <InputText
          label="Phone Number"
          name="phone"
          type="phone"
          value={formData.phone}
          changeHandler={changeHandler}
        />
        <InputText
          label="Country"
          name="country"
          value={formData.country}
          changeHandler={changeHandler}
        />
        <InputText
          label="City"
          name="city"
          value={formData.city}
          changeHandler={changeHandler}
        />
      </section>
      <section className="education">
        <h1>Education</h1>
      </section>
      <section className="experience">
        <h1> Experience</h1>
      </section>
      <section className="skills">
        <h1> Skills</h1>
      </section>
      <section className="achievements">
        <h1> Achievements</h1>
      </section>
    </form>
  );
}
