import React, { useState } from "react";
import './App.css';

import PersonalInformation from "./components/PersonalInfo"; // Import your components here
import Education from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";
import SkillsInfo from "./components/SkillsInfo";
import CVDisplay from "./components/CVDisplay";

function App() {
  const [showPreview, setShowPreview] = useState(false); // State variable to track if the preview should be shown

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleGenerateCV = () => {
    setShowPreview(true); // Set showPreview to true when "Generate CV" button is clicked
  };

  const handleHidePreview = () => {
    setShowPreview(false); // Set showPreview to false when "Hide Preview" button is clicked
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='data-filling'>
          <h1>CV Builder</h1>
          <PersonalInformation personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
          <Education value={education} onChange={handleEducationChange} />
          <WorkInfo value={experience} onChange={handleExperienceChange} />
          <SkillsInfo value={skills} onChange={handleSkillsChange} />
          <button onClick={handleGenerateCV}>Generate CV</button>
          {showPreview && (
            <>
              <CVDisplay
                personalInfo={personalInfo}
                education={education}
                experience={experience}
                skills={skills}
              />
              <button onClick={handleHidePreview}>Hide Preview</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
