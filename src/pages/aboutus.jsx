import React from "react";
import NavBar from "../components/navbar";
import ContactUsSection from "../components/contact";
import AboutSection from "../components/about";

function AboutPage() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <ContactUsSection />
    </div>
  );
}

export default AboutPage;
