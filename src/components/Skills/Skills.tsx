// import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./SkillCard";

import React from "react";

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
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"></p>

      <div className="w-full min-h-full bg-zinc-800 ">
        <div className="px-5 lg:px-20 md:px-16 sm:px-5">
          <div className="Heading secondary_font text-[8vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]">
            <h1>Skills</h1>
          </div>
          <div className=" grid grid-rows-4 lg:grid-rows-2 md:grid-rows-2 sm:grid-rows-1 grid-cols-3 gap-3 ">
            {[4, 2, 3, 4].map((index, item) => {
              return (
                <>
                  <CardContainer className="inter-var border-2 border-white w-[400px]">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6   ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        Make things float in air
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        Hover over this card
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4">
                        <div>Image</div>
                        {/* <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          Try now →
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Sign up
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
