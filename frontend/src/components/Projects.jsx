import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section container py-5 section" id="projects">
      <h2 className="section-title text-center mb-4">🚀 Projects</h2>

      <div className="row">
        {/* Machine Learning */}
        <div className="col-md-6 mb-4">
          <div className="project-card p-3">
            <h4>🔹 Machine Learning</h4>
            <ul>
              <li>
                <b>Heart Disease Prediction</b> – Built a predictive model for early detection. <br />
                <a
                  href="https://github.com/AbdulAzeez1312005/ml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 GitHub
                </a>
              </li>
              <li>
                <b>Sentiment Analysis on Amazon Reviews</b> – Applied NLP to classify reviews. <br />
                <a
                  href="https://github.com/AbdulAzeez1312005/Sentiment-Analysis-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* IoT */}
        <div className="col-md-6 mb-4">
          <div className="project-card p-3">
            <h4>🔹 IoT</h4>
            <ul>
              <li>
                <b>Flood Detection System</b> – IoT-based monitoring with alerts. <br />
                <a
                  href="https://github.com/AbdulAzeez1312005/Flood_Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 GitHub
                </a>
              </li>
              <li>
                <b>Food Spoilage Detection</b> – Sensors (MQ-135, DHT11) + Arduino for rice spoilage detection. <br />
                <a
                  href="https://github.com/AbdulAzeez1312005/Food-Spoilage-Detection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Full Stack Web Development */}
        <div className="col-md-12 mb-4">
          <div className="project-card p-3">
            <h4>🔹 Full Stack Web Development</h4>
            <ul>
              <li>
                <b>Events Website</b> – Event management platform with registration. <br />
                <a
                  href="https://github.com/AbdulAzeez1312005/PVPSIT-Events-Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
