import React from "react";

const LandingComponent: React.FC = () => {
  return (
    <div className="w-full h-full bg-zinc-800 pt-2 ">
      <div className="textarea">
        <div className="text-[6.5vw] uppercase mt-52 px-1 lg:px-20 md:px-16 sm:px-1 leading-none secondary_font">
          <div className="text-[14px] lg:text-[20px] md:text-[20px] mb-[20px] primary_font_600">
            Hello
          </div>
          <div className="masker flex">
            <div className="pr-[5px]">
              <h1>I </h1>
            </div>
            <div className="Image bg-black">
              <h1>Image</h1>
            </div>

            <div className="px-[5px]">
              <h1>am </h1>
            </div>
            <div className="pl-[5px]">
              <h1>Chetan</h1>
            </div>
          </div>

          {["a Software Developer,", "Web Developer"].map((item, idx) => {
            return (
              <div className="masker" key={idx}>
                <h1>{item}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
