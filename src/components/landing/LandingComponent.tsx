import React, { useState } from "react";
import Button from "../Button/Button";

type flipperType = number;
const LandingComponent: React.FC = () => {
  const [flipper, setFlipper] = useState<flipperType>(0);
  return (
    <div className="w-[100vw] h-[100vh] pt-2 bg-zinc-800 border-2 border-red-700 text-zinc-200">
      <div className="textarea">
        <div className="text-[18vw] lg:text-[10vw] md:text-[12vw] sm:text-[15vw] uppercase mt-52 px-5 lg:px-20 md:px-16 sm:px-5 leading-none  secondary_font">
          <div className="text-[14px] lg:text-[20px] md:text-[20px] mb-[2vw] primary_font_600">
            Hello
          </div>
          <div className="masker flex tracking-normal lg:tracking-tighter md:tracking-tighter sm:tracking-normal">
            <div className="pr-[0.5vw]">
              <h1>I </h1>
            </div>
            {flipper === 1 && (
              <div className=" flex justify-center items-center  border-[2px] border-zinc-400 bg-black mt-[1vw] w-[15vw] h-[11vw] lg:h-[6.5vw] md:h-[8vw] ">
                <div className="Image    "></div>
              </div>
            )}

            <div className="px-[1vw]">
              <h1> am </h1>
            </div>
            <div className="">
              <h1>Chetan</h1>
            </div>
          </div>

          {["a Software Developer,", "Web Developer"].map((item, idx) => {
            return (
              <div
                className="masker text-[7vw] lg:text-[4vw] md:text-[5vw] sm:text-[7vw] "
                key={idx}
              >
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>
        {/* <Button /> */}
      </div>
    </div>
  );
};

export default LandingComponent;
