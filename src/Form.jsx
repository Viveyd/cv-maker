import { useState } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";
export default function Form() {
  const [personal, setPersonal] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });
  const [education, setEdu] = useState([]);
  const [experience, setExp] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);

  return (
    <form>
      <Personal data={personal} updater={setPersonal} />
      <Education data={education} updater={setEdu} />
      <Experience data={experience} updater={setExp} />
      <Skills data={skills} updater={setSkills} />
      <Achievements data={achievements} updater={setAchievements} />
    </form>
  );
}
