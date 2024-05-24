import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkPage from "./pages/workpage";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutus";
import ContactPage from "./pages/contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home"element={<HomePage/>}/>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage/>}  />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
