import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="hero text-center p-5"
      style={{
        minHeight: "100vh",
        scrollMarginTop: "80px", // Prevents navbar from covering title
        background: "linear-gradient(180deg, #000000, #0a0a23)",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Title */}
      <h1 style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#ffffff", marginTop: "30px" }}>
        Welcome to My Portfolio
      </h1>

      {/* Job Roles */}
      <p style={{ marginTop: "15px", fontSize: "1.1rem", maxWidth: "700px" }}>
        I am a MERN Stack Developer, Full Stack Developer, Software Developer,
        Machine Learning Engineer, Cybersecurity Enthusiast, and IoT Developer.
      </p>


      {/* Tagline */}
      <p style={{ marginTop: "10px", fontSize: "1.2rem", color: "#b0bec5" }}>
        Passionate about problem-solving, AI, and full-stack development.
      </p>

      {/* Profile Image */}
      <img
        src="/myimage.png"
        alt="My Profile"
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          objectFit: "cover",
          marginTop: "20px",
          boxShadow: "0 0 20px #2196f3",
        }}
      />

      {/* Name under image */}
      <h2 style={{ fontSize: "2rem", marginTop: "15px", color: "#2196f3" }}>
        Abdul Azeez
      </h2>

      {/* Buttons */}
      <div style={{ marginTop: "30px" }}>
        <a href="#projects">
          <button
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "30px",
              marginRight: "15px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#2196f3";
              e.currentTarget.style.border = "2px solid #2196f3";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2196f3";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.border = "none";
            }}
          >
            View Projects
          </button>
        </a>

        <a href="/Abdul_Azeez.pdf" download>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#2196f3",
              border: "2px solid #2196f3",
              padding: "12px 25px",
              borderRadius: "30px",
              marginRight: "15px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#2196f3";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#2196f3";
            }}
          >
            Download Resume
          </button>
        </a>

        <a href="#contact">
          <button
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              border: "none",
              padding: "12px 25px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#000000";
              e.currentTarget.style.color = "#2196f3";
              e.currentTarget.style.border = "2px solid #2196f3";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#2196f3";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.border = "none";
            }}
          >
            Hire Me
          </button>
        </a>
      </div>

      {/* Social Links */}
      <div style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
        <a
          href="https://github.com/AbdulAzeez1312005"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            fontSize: "2rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#2196f3";
            e.currentTarget.style.textShadow = "0 0 15px #2196f3";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-azeez-a07714271/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffffff",
            fontSize: "2rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#2196f3";
            e.currentTarget.style.textShadow = "0 0 15px #2196f3";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
