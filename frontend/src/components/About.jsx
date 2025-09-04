import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section pt-5 section" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="section-title text-center">About Me</h2>

            <p className="about-intro">
              Hi, I’m <strong>Abdul Azeez</strong>, a Computer Science Engineering student
              (B.Tech 2022–2026) at <strong>Prasad V. Potluri Siddhartha Institute of Technology</strong>
              with a CGPA of 8.05.
            </p>

            <p className="about-paragraph">
              I am passionate about <strong>problem-solving, cybersecurity, machine learning, and
              full-stack development</strong>. Over the years, I have gained hands-on experience through
              projects, hackathons, and competitive programming.
            </p>

            <div className="about-callout">
              <div className="about-callout-bar" />
              <p className="mb-0">
                I believe in building impactful real-world solutions by combining adaptability,
                collaboration, and technical expertise.
              </p>
            </div>

            <h3 className="key-title">Key Highlights</h3>

            <ul className="about-list">
              <li>
                Strong skills in <b>C, C++, Python, Java, Machine Learning,
                Web Development, and Cybersecurity</b>
              </li>
              <li>
                Active in <b>competitive programming</b> (CodeChef Diamond Badge, HackerRank achievements)
              </li>
              <li>
                Participated in <b>E-Summit (IIT Hyderabad)</b>, Ideathons (Infosys, ISTE), SIH, and multiple hackathons
              </li>
              <li>
                Certifications from <b>NPTEL, Infosys, LetsUpgrade, and Spoken Tutorials</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
