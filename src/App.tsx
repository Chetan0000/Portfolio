import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import LandingComponent from "./components/landing/LandingComponent";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
function App() {
  useEffect(() => {
    const mp = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
    mp();
  }, []);

  return (
    <div className=" w-[100vw] h-[100vh] m-auto">
      <Navbar />

      <LandingComponent />

      <About />

      <Skills />
    </div>
  );
}

export default App;
