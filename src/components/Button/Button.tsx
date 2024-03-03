import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const Button = () => {
  return (
    <div className="w-[400px] text-[20px] ml-[30px] flex gap-4">
      <div className="px-4 border-[1px] border-zinc-400 rounded-[20px]">
        Start Project
      </div>
      <div className="flex text-[16px] justify-center items-center border-[1px] border-zinc-400 rounded-full w-[30px]">
        <span className="rotate-45">
          <FaArrowUpLong />
        </span>
      </div>
    </div>
  );
};

export default Button;
