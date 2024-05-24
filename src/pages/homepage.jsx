import React from "react";
import NavBar from "../components/navbar";
import WorkSection from "../components/work";
import ContactUsSection from "../components/contact";
import Main from "../components/main";
import AboutSection from "../components/about";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Main />
      <WorkSection />
      <AboutSection />
      <ContactUsSection />
    </div>
  );
}

export default HomePage;
