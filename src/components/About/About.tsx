// import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-[70%] bg-zinc-800 text-zinc-300  pt-20 text-left lg:text-justify md:text-justify ">
      <div className="content px-5 lg:px-20 md:px-16 sm:px-5">
        <div className="HEading secondary_font text-[8vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]">
          <h1>About</h1>
        </div>
        <div className="ABOUT w-[90%]   primary_font_400 tracking-tighter">
          <p className="text-clip text-[5vw] lg:text-[2.5vw] md:text-[3.5vw] sm:text-[5vw] ">
            I'm a passionate software developer with a recent graduation in
            2023. I'm highly proficient in modern web development technologies,
            particularly React.js, Node.js, MongoDB, Express.js, and I possess
            strong foundations in JavaScript, TypeScript, and Java.
          </p>
        </div>
        <div className="BasicInfo w-[100%] flex flex-col items-end pt-5 text-[4vw] lg:text-[1.5vw] md:text-[1.5vw] sm:text-[4vw] font-thin">
          <span>K Chetan Kumar</span>
          <span>dropmailtochetan@gmail.com</span>
          <span>+91 9113952177</span>
        </div>
      </div>
    </div>
  );
};

export default About;
