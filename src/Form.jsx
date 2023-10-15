import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Achievements from "./Achievements";
export default function Form({ data, updater }) {
  const {
    personal,
    education,
    experience,
    skills,
    achievements,
    activeSection,
  } = data;
  const {
    setPersonal,
    setEdu,
    setExp,
    setSkills,
    setAchievements,
    setActiveSection,
  } = updater;

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
      <Experience
        data={experience}
        updater={setExp}
        toggler={changeActiveSection}
        active={activeSection === "experience"}
      />
      <Education
        data={education}
        updater={setEdu}
        toggler={changeActiveSection}
        active={activeSection === "education"}
      />
      <Achievements
        data={achievements}
        updater={setAchievements}
        toggler={changeActiveSection}
        active={activeSection === "achievements"}
      />
      <Skills
        data={skills}
        updater={setSkills}
        toggler={changeActiveSection}
        active={activeSection === "skills"}
      />
    </form>
  );
}
