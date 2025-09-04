import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of the section must be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
      <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
      <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
    </nav>
  );
}

export default Navbar;
