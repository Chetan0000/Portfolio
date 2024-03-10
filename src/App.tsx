import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { Element } from "react-scroll";
import Navbar from "./components/navbar/Navbar";
import LandingComponent from "./components/landing/LandingComponent";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

type refType = HTMLDivElement | null;

function App() {
  useEffect(() => {
    const mp = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
    mp();
  }, []);

  const landingRef = useRef<refType>(null);
  const aboutRef = useRef<refType>(null);
  const skillsRef = useRef<refType>(null);
  const projectsRef = useRef<refType>(null);
  const contactRef = useRef<refType>(null);

  return (
    <div className="w-[100vw] h-[100vh] m-auto">
      <button
        onClick={() => {
          projectsRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Jump to skill
      </button>
      <Navbar />
      <Element name="home">
        <LandingComponent />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
