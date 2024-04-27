import React from "react";
import htmlLogo from "../assets/html5-logo.png";
import cssLogo from "../assets/css3-logo.png";
import javascriptLogo from "../assets/javascript-logo.png";
import reactLogo from "../assets/react-logo.png";
import gitLogo from "../assets/Git-logo.png";
import figmaLogo from "../assets/Figma-logo.png";
const Skills = () => {
  return (
    <div
      id="skills-page"
      className="bg-zinc-200 flex flex-col items-center justify-center z-50 relative h-full overflow-x-hidden lg:pb-20"
    >
      <h1
        className="text-zinc-900 font-mukta-regular font-bold tracking-widest border-x-4 border-x-zinc-900 text-xl my-16 mb-20 px-12 py-3 lg:text-2xl lg:px-16 lg:py-4"
        data-aos="fade-down"
      >
        SKILLS
      </h1>

      <div className="flex flex-wrap justify-around w-full">
        <div className="flex flex-col gap-10">
          <h1
            className="text-zinc-900 self-center font-mukta-regular border-x-2 border-x-zinc-900  tracking-widest text-2xl my-10 px-8 py-1 lg:my-8 lg:text-xl"
            data-aos="zoom-out"
          >
            USING:
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-center lg:gap-10">
            <div>
              <img
                src={htmlLogo}
                alt="HTML Logo"
                className="w-32 lg:w-28"
                data-aos="fade-right"
              />
            </div>
            <div>
              <img
                src={cssLogo}
                alt="CSS Logo"
                className="w-32 lg:w-28"
                data-aos="fade-left"
              />
            </div>
            <div>
              <img
                src={javascriptLogo}
                alt="Javascript Logo"
                className="w-32 lg:w-28"
                data-aos="fade-right"
              />
            </div>
            <div>
              <img
                src={figmaLogo}
                alt="Figma Logo"
                className="w-28 lg:w-24 lg:pt-3"
                data-aos="fade-left"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 pb-10 lg:gap-10">
            <div>
              <img
                src={reactLogo}
                alt="React Logo"
                className="w-32 lg:w-28 "
                data-aos="fade-right"
              />
            </div>
            <div>
              <img
                src={gitLogo}
                alt="Git Logo"
                className="w-32 lg:w-28"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
