import React from "react";
import { PinContainer } from "./PinCard";

const Projects: React.FC = () => {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-0.2"
      className='w-[100vw] min-h-[100vh] bg-[#1a1a1a] overflow-x-hidden'
    >
      <div className='min-h-[100vh] w-full bg-[#111]  bg-grid-small-white/[0.2] relative '>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-[#111] [mask-image:radial-gradient(transparent_30%,black)]'></div>
        <div className='px-5 lg:px-20 md:px-16 sm:px-5 py-5'>
          <div className='Heading text-zinc-200 secondary_font text-[9vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]'>
            <h1>Projects</h1>
          </div>
          <div className='primary_font_400 w-full flex flex-col lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-5 pt-20 '>
            {/* project 1 */}
            <div className='min-h-[450px] w-full'>
              <div className=''>
                <a href='https://ping-r7s3.onrender.com' target={"_blank"}>
                  <PinContainer
                    className='min-h-[400px] w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw] '
                    title='https://ping-r7s3.onrender.com'
                    url='https://ping-r7s3.onrender.com'
                  >
                    <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] '>
                      <h3 className='text-[25px] max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                        Ping
                      </h3>
                      <div className='text-base !m-0 !p-0 font-normal w-full'>
                        <span className='text-slate-500 '>
                          Ping is a scalable and responsive Real time chat
                          application Developed using the MERN stack and
                          Socket.IO and context api from state management.
                        </span>
                      </div>
                      <div className='flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500'>
                        <img
                          className='object-cover '
                          src={
                            "https://res.cloudinary.com/dlek1smmu/image/upload/v1709961023/Screenshot_2024-03-09_10372xsdfs7_atltun.png"
                          }
                          alt=''
                        />
                      </div>
                    </div>
                  </PinContainer>
                </a>
              </div>
            </div>
            {/* project 2 */}

            <div className='min-h-[450px] w-full'>
              <div className=''>
                <a href='https://ping-r7s3.onrender.com' target={"_blank"}>
                  <PinContainer
                    className='min-h-[400px] h-auto w-[70vw] lg:w-[30vw] md:w-[35vw] sm:w-[70vw]'
                    title='https://ping-r7s3.onrender.com'
                    url='https://ping-r7s3.onrender.com'
                  >
                    <div className='flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 h-[20rem] '>
                      <h3 className='text-[25px] max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                        Obay
                      </h3>
                      <div className='text-base !m-0 !p-0 font-normal w-full'>
                        <span className='text-slate-500 '>
                          Obay is a full-fledged e-commerce web application
                          built using the MERN stack and Redux Toolkit for state
                          management. It integrates Razorpay payments.
                        </span>
                      </div>
                      <div className='flex flex-1 w-full rounded-lg mt-4'>
                        <img
                          className='object-cover h-[80%] w-full'
                          src={
                            "https://res.cloudinary.com/dzudljnu4/image/upload/v1702537458/tqm2on24qt2uapluxiem.png"
                          }
                          alt=''
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
    </div>
  );
};

export default Projects;
