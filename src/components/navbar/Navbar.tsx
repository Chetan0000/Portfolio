import React, { useState } from "react";
import DropdownMenuDemo from "./DropdownMenuDemo";

interface navbarLinks {
  lins: String[];
}

const Navbar: React.FC = () => {
  const [links, setLinks] = useState<String[]>([
    "Home",
    "About",
    "Resume",
    "Skills",
    "Projects",
    "Contact",
  ]);
  return (
    <>
      <div className="fixed z-[999] w-[100%] text-center flex justify-between px-2 lg:px-20 md:px-16 sm:px-2 text-white pt-[10px] ">
        {/* ---- logo ---------- */}

        <div
          id="logo"
          className="text-[16px] lg:text-[2vw] md:text-[2vw] sm:text-[16px] primary_font_900"
        >
          <span>Chetan</span>
        </div>
        {/* --------- Links ----------*/}
        <div id="links" className="primary_font_200">
          <div className="hidden sm:hidden md:block lg:block ">
            <div className="flex gap-[30px]">
              {links.map((item, index) => {
                return (
                  <div key={index}>
                    <a
                      className="group hover:text-yellow-500
                 transition-all duration-200 ease-in-out"
                      href={`#${item}`}
                    >
                      <span
                        className="
                        text-lg
                        h-[20px]
                inline-block
                relative
                cursor-pointer
                transition-all
                duration-200
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-[1px]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-yellow-500
                before:via-yellow-500
                before:to-yellow-500
                hover:before:w-full
                hover:before:opacity-100"
                      >
                        {item}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---- drop down menu ------ */}
          <div className="vsm:block sm:block md:hidden lg:hidden">
            <DropdownMenuDemo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
