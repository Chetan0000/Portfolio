import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Button = () => {
  return (
    <a
      href="https://docs.google.com/document/d/14B_-HCfsxdt-brUigZkGhsJY854t6Kgp6umpKwIlGlk/edit?usp=sharing"
      target="_blank"
    >
      <div className="text-[16px] lg:text-[20px] md:text-[18px] ml-[30px] flex gap-4">
        <div className="px-4 border-[1px] border-zinc-400 rounded-[20px]">
          Download resume
        </div>
        <div className="flex text-[16px] justify-center items-center border-[1px] border-zinc-400 rounded-full w-[30px]">
          <span className="rotate-45">
            <FaArrowUpLong />
          </span>
        </div>
      </div>
    </a>
  );
};

export default Button;
