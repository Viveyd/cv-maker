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
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quasi nostrum vero fugit deleniti! Enim at aliquid tenetur qui culpa laboriosam nam maxime possimus inventore asperiores nihil, nisi dolor debitis!",
    links: [],
  });
  const [education, setEdu] = useState([
    {
      id: 0,
      school: "",
      course: "",
      degree: "",
      yearEnd: "",
      achievements: "Honors, Projects, Awards",
    },
  ]);
  const [experience, setExp] = useState([
    {
      id: 0,
      company: "",
      city: "",
      country: "",
      position: "",
      yearStart: "",
      yearEnd: "",
      achievements:
        "Sample Job Responsibility 1, Sample Job Responsibility 2, Achievement 1, Achievement 2",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: 0,
      label: "Skills",
      values: "Planning, SEO, Sales, Advertising",
    },
    {
      id: 1,
      label: "Interests",
      values: "Reddit, Korean Drama, Long distance running, Mukbang",
    },
  ]);
  const [achievements, setAchievements] = useState([
    {
      id: 0,
      achievement: "Lorem, ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 1,
      achievement: "Lorem, ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]);
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
      <Preview data={(personal, education, experience, skills, achievements)} />
    </>
  );
}

export default App;
