import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Preview from "./Preview";

function App() {
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

  return (
    <>
      <Form
        data={{
          personal,
          education,
          experience,
          skills,
          achievements,
          activeSection,
        }}
        updater={{
          setPersonal,
          setEdu,
          setExp,
          setSkills,
          setAchievements,
          setActiveSection,
        }}
      />
      <Preview
        data={{ personal, education, experience, skills, achievements }}
      />
    </>
  );
}

export default App;
