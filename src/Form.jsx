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
  const [activeSection, setActiveSection] = useState("personal");

  function changeActiveSection(section) {
    if (activeSection === section) setActiveSection(null);
    else setActiveSection(section);
  }

  return (
    <form>
      <Personal
        data={personal}
        updater={setPersonal}
        toggler={changeActiveSection}
        active={activeSection === "personal"}
      />
      <Education
        data={education}
        updater={setEdu}
        toggler={changeActiveSection}
        active={activeSection === "education"}
      />
      <Experience
        data={experience}
        updater={setExp}
        toggler={changeActiveSection}
        active={activeSection === "experience"}
      />
      <Skills
        data={skills}
        updater={setSkills}
        toggler={changeActiveSection}
        active={activeSection === "skills"}
      />
      <Achievements
        data={achievements}
        updater={setAchievements}
        toggler={changeActiveSection}
        active={activeSection === "achievements"}
      />
    </form>
  );
}
