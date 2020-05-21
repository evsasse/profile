import React from "react";

import BackToHomepage from "../components/resume/BackToHomepage";
import Header from "../components/resume/Header";
import Professional from "../components/resume/Professional";
import Education from "../components/resume/Education";
import TechnicalSkills from "../components/resume/TechnicalSkills";
import Language from "../components/resume/Language";
import Interests from "../components/resume/Interests";

function ResumePage() {
  return (
    <main className="container mx-auto p-5 my-8">
      <div className="grid gap-20">
        <BackToHomepage />

        <Header />
        <Professional />
        <Education />
        <TechnicalSkills />
        <Language />
        <Interests />

        <BackToHomepage />
      </div>
    </main>
  );
}

export default ResumePage;
