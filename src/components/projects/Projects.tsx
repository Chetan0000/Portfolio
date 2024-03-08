import React from "react";
import { PinContainer } from "./PinCard";

const Projects: React.FC = () => {
  return (
    <div className="w-full min-h-full bg-zinc-800 pt-2 py-5 border-2 border-red-400">
      <div className="px-5 lg:px-20 md:px-16 sm:px-5 mt-[50px]">
        <div className="Heading secondary_font text-[8vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]">
          <h1>Projects</h1>
        </div>
        <div className="  primary_font_400 min-h-[80vw] flex flex-col gap-5">
          <div className="min-h-[450px] w-full flex flex-col items-center justify-center ">
            <div className="ml-0 lg:-ml-[35vw] md:-ml-[40vw]">
              <a href="https://ping-r7s3.onrender.com" target={"_blank"}>
                <PinContainer
                  className="min-h-[400px] w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw]"
                  title="https://ping-r7s3.onrender.com"
                  url="https://ping-r7s3.onrender.com"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Ping
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal w-full">
                      <span className="text-slate-500 ">
                        Ping is a scalable and responsive Real time chat
                        application Developed using the MERN stack and Socket.IO
                        and context api from state management.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                      <img
                        className="object-cover "
                        src={
                          "https://res.cloudinary.com/dzudljnu4/image/upload/v1702536752/bqnglstcdvarympgswvb.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          </div>
          {/* project 2 */}

          <div className="min-h-[450px] w-full flex flex-col items-center justify-center  mt-0 lg:-mt-[10rem] md:-mt-[10rem]">
            <div className="mr-0 lg:-mr-[40vw] md:-mr-[40vw]">
              <a href="https://ping-r7s3.onrender.com" target={"_blank"}>
                <PinContainer
                  className="min-h-[400px] h-auto w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw]"
                  title="https://ping-r7s3.onrender.com"
                  url="https://ping-r7s3.onrender.com"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Ping
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal w-full">
                      <span className="text-slate-500 ">
                        Ping is a scalable and responsive Real time chat
                        application Developed using the MERN stack and Socket.IO
                        and context api from state management.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4">
                      <img
                        className="object-cover"
                        src={
                          "https://res.cloudinary.com/dzudljnu4/image/upload/v1702536752/bqnglstcdvarympgswvb.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          </div>

          {/* project 3 */}

          <div className="min-h-[450px] w-full flex flex-col items-center justify-center  mt-0 lg:-mt-[10rem] md:-mt-[10rem]">
            <div className="ml-0 lg:-ml-[35vw] md:-ml-[40vw]">
              <a href="https://ping-r7s3.onrender.com" target={"_blank"}>
                <PinContainer
                  className="min-h-[400px] h-auto w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw]"
                  title="https://ping-r7s3.onrender.com"
                  url="https://ping-r7s3.onrender.com"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Ping
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal w-full">
                      <span className="text-slate-500 ">
                        Ping is a scalable and responsive Real time chat
                        application Developed using the MERN stack and Socket.IO
                        and context api from state management.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4">
                      <img
                        className="object-cover"
                        src={
                          "https://res.cloudinary.com/dzudljnu4/image/upload/v1702536752/bqnglstcdvarympgswvb.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          </div>

          {/* Project 4 */}

          <div className="min-h-[450px] w-full flex flex-col items-center justify-center  mt-0 lg:-mt-[10rem] md:-mt-[10rem]">
            <div className="mr-0 lg:-mr-[40vw] md:-mr-[40vw]">
              <a href="https://ping-r7s3.onrender.com" target={"_blank"}>
                <PinContainer
                  className="min-h-[400px] h-auto w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw]"
                  title="https://ping-r7s3.onrender.com"
                  url="https://ping-r7s3.onrender.com"
                >
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      Ping
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal w-full">
                      <span className="text-slate-500 ">
                        Ping is a scalable and responsive Real time chat
                        application Developed using the MERN stack and Socket.IO
                        and context api from state management.
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4">
                      <img
                        className="object-cover"
                        src={
                          "https://res.cloudinary.com/dzudljnu4/image/upload/v1702536752/bqnglstcdvarympgswvb.png"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
