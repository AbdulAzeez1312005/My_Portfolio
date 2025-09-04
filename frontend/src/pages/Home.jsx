import React from "react";
import PortfolioNavbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <PortfolioNavbar />
      <section id="home" className="section"><Hero /></section>
      <section id="about" className="section"><About /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="contact" className="section"><Contact /></section>
      <Footer />
    </>
  );
}

export default Home;
