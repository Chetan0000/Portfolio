import React from "react";
import { Link } from "react-scroll";

const Contact = () => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <div className="w-full h-[100vh] bg-zinc-800 text-zinc-300 pt-2 text-left lg:text-justify md:text-justify border-2 border-pink-600">
      <div className="content px-5 lg:px-20 md:px-16 sm:px-5 mt-[50px]">
        <div className="HEading secondary_font text-[8vw] lg:text-[5vw] md:text-[6vw] sm:text-[8vw]">
          <h1>Contact</h1>
        </div>

        <div className="w-full h-full border-2 border-blue-700 flex flex-col lg:flex-row md:flex-row sm:flex-col gap-[20px] mt-11">
          <div className="LINS w-full h-full border-2 border-green-500 flex flex-row primary_font_400 text-[17px] ">
            <div className="SocialLinks">
              {/* Social Links */}
              <div className="SOCIAL flex flex-col">
                <span>S:</span>

                <div className="flex flex-col mt-[10px]">
                  <a
                    href="https://www.instagram.com/i_thechetan/"
                    target={"_blank"}
                  >
                    {" "}
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chetankkumar/"
                    target={"_blank"}
                  >
                    {" "}
                    <span>Linkedin</span>
                  </a>
                  <a href="https://github.com/Chetan0000" target={"_blank"}>
                    {" "}
                    <span>GitHub</span>
                  </a>
                  <a href="https://leetcode.com/natehc/" target={"_blank"}>
                    {" "}
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

              <div className="LINKS mt-[25px] flex flex-col">
                <span>L:</span>

                <a href="" className="mt-[10px]">
                  <span>Portfolio</span>
                </a>
              </div>

              <div className="Email mt-[25px] flex flex-col">
                <span>E:</span>

                <a href="" className="mt-[10px] w-[60vw] lg:w-auto md:w-auto">
                  <span className="">dropmailtochetan@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="MenuLinks h-full w-full mt-[0px] lg:mt-[50px] md:mt-[50px] flex  justify-end pr-[10px]">
              {/* menu Links */}
              <div className="flex flex-col">
                <span>M:</span>

                <div className="mt-[10px] flex flex-col">
                  {links.map((item, index) => {
                    return (
                      <a href="">
                        <Link
                          to={item.toLowerCase()}
                          spy={true}
                          smooth={true}
                          duration={500}
                          offset={-70}
                        >
                          <span>{item}</span>
                        </Link>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="LINS w-full h-full border-2 border-yellow-400 flex">
            <div className="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
