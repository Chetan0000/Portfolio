// import Image from "next/image"

import "./skill.css";

import { CardBody, CardContainer, CardItem } from "./SkillCard";
import tailWIndSVG from "../../assets/tailwind-css.svg";
import express from "../../assets/pngwing.com.png";
import React from "react";

//  ------- Icons
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";

import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

import { LiaDocker } from "react-icons/lia";
import { FaAws } from "react-icons/fa";

import { FaJava } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

const Skills = () => {
  const skills = {
    frontEnd: {
      name: "FrontEnd",
      skills: [
        "React js",
        "Redux Toolkit",
        "Context API",
        "Tailwind css",
        "Radix ui",
      ],
    },
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      // data-enable-touch-speed
      className="w-full min-h-[100vh] bg-[#1a1a1a]"
    >
      <div className="min-h-[100vh] w-full bg-[#111]   bg-grid-small-white/[0.2] relative ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#111] [mask-image:radial-gradient(transparent_30%,black)]"></div>
        <div className="px-5 lg:px-20 md:px-16 sm:px-5 mt-[50] py-5">
          <div className="Heading text-zinc-200 secondary_font text-[9vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]">
            <h1>Skills</h1>
          </div>
          <div className=" grid grid-rows-4 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-1 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 primary_font_400 mt-[6vw] lg:mt-[3vw] md:mt-[3vw]">
            {/* ----- front end  */}
            <div className="FRONTEND">
              <CardContainer className="inter-var  ">
                <CardBody className=" bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
                  <CardItem
                    translateZ="50"
                    className="react_icon text-[6vw] lg:text-[2vw] md:text-[2.5vw] sm:text-[5vw] font-bold text-neutral-600 dark:text-zinc-400"
                  >
                    Frontend
                  </CardItem>
                  <>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  w-[70vw] lg:w-full md:w-full"
                    >
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[18px]">
                          <FaReact className="text-[#61DBFB]" />
                        </span>
                        <span className="">React js</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px]">
                          <SiRedux className="text-[#764abc]" />
                        </span>
                        <span className="">Redux Toolkit</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] -ml-1">
                          <img
                            className="   w-[22px] h-[22px] "
                            src={tailWIndSVG}
                            alt="TailWend svg"
                          />
                        </span>
                        <span className="">Tailwend css</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px]">
                          <ImHtmlFive2 className="text-[#f06529]" />
                        </span>
                        <span className="">HTML</span>
                      </div>
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px]">
                          <TbBrandCss3 className="text-[#2965f1]" />
                        </span>
                        <span className="">CSS</span>
                      </div>
                    </CardItem>
                  </>
                </CardBody>
              </CardContainer>
            </div>

            {/* Back end */}
            <div className="BACKEND">
              <CardContainer className="inter-var  ">
                <CardBody className="h-auto bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6   ">
                  <CardItem
                    translateZ="50"
                    className="react_icon text-[6vw] lg:text-[2vw] md:text-[2.5vw] sm:text-[5vw] font-bold text-neutral-600 dark:text-zinc-400"
                  >
                    Backend
                  </CardItem>
                  <>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  w-[70vw] lg:w-full md:w-full"
                    >
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[18px]">
                          <FaNodeJs className="text-[#3c873a]" />
                        </span>
                        <span className="">Node js</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] -ml-[2px]">
                          <img
                            className="   w-[22px] h-[22px] object-cover"
                            src={express}
                            alt="TailWend svg"
                          />
                        </span>
                        <span className="">Express js</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] -ml-1">
                          <DiMongodb className="text-[#00ED64] text-[20px] ml-[2px]" />
                        </span>
                        <span className="">Mongo DB</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          <GrMysql className="text-[#00758f] " />
                        </span>
                        <span className="">SQL</span>
                      </div>
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">. </span>
                      </div>
                    </CardItem>
                  </>
                </CardBody>
              </CardContainer>
            </div>

            {/* devops */}
            <div className="DEVOPS">
              <CardContainer className="inter-var  ">
                <CardBody className="h-auto bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6   ">
                  <CardItem
                    translateZ="50"
                    className="react_icon text-[6vw] lg:text-[2vw] md:text-[2.5vw] sm:text-[5vw] font-bold text-neutral-600 dark:text-zinc-400"
                  >
                    Devops
                  </CardItem>
                  <>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  w-[70vw] lg:w-full md:w-full"
                    >
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[18px]">
                          <LiaDocker className="text-[#1D63ED]" />
                        </span>
                        <span className="">Docker</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] -ml-[2px]">
                          <FaAws className="text-[#FF9900]" />
                        </span>
                        <span className="">AWS</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">.</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">.</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">.</span>
                      </div>
                    </CardItem>
                  </>
                </CardBody>
              </CardContainer>
            </div>

            {/* programming languages */}

            <div className="LANGUAGES">
              <CardContainer className="inter-var  ">
                <CardBody className="h-auto bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6   ">
                  <CardItem
                    translateZ="50"
                    className="react_icon text-[6vw] lg:text-[2vw] md:text-[2.5vw] sm:text-[5vw] font-bold text-neutral-600 dark:text-zinc-400"
                  >
                    Languages
                  </CardItem>
                  <>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  w-[70vw] lg:w-full md:w-full"
                    >
                      <div className="flex items-center gap-1 ">
                        <span className=" text-[18px]">
                          <RiJavascriptLine className="text-[#F0DB4F]" />
                        </span>
                        <span className="">JavaScript</span>
                      </div>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] -ml-[2px]">
                          <FaJava className="text-[#f89820]" />
                        </span>
                        <span className="">Java</span>
                      </div>
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          <TbBrandTypescript className="text-[#007acc] " />
                        </span>
                        <span className="">TypeScript</span>
                      </div>
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">.</span>
                      </div>
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="70"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      <div className="flex justify-center items-center gap-1">
                        <span className=" text-[18px] font-bold">
                          {/* <GrMysql className="text-[#00758f] " /> */}
                        </span>
                        <span className="text-black">.</span>
                      </div>
                    </CardItem>
                  </>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
