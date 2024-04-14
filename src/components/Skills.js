import React from "react";
import htmlLogo from "../assets/html5-logo.png";
import cssLogo from "../assets/css3-logo.png";
import javascriptLogo from "../assets/javascript-logo.png";
import reactLogo from "../assets/react-logo.png";
import gitLogo from "../assets/Git-logo.png";
import figmaLogo from "../assets/Figma-logo.png";
import translateLogo from "../assets/translation-logo.png";
import arLang from "../assets/arabic-logo.png";
import enLang from "../assets/english-logo.png";
import musicLogo from "../assets/music-logo.png";
const Skills = () => {
  return (
    <div className="bg-zinc-200 flex flex-col items-center justify-center z-50 relative h-screen">
      <h1 className="font-mukta-regular tracking-widest border-x-4 border-x-gray-900 text-2xl font-bold  mb-4 px-16 py-4">
        SKILLS
      </h1>

      <div className="flex flex-wrap justify-around w-full">
        <div className="flex flex-col gap-10">
          <h1 className="font-mukta-regular tracking-widest text-lg font-bold my-8">
            USING:
          </h1>
          <div className="flex justify-center gap-10">
            <div>
              <img src={htmlLogo} alt="HTML Logo" className="w-28 " />
            </div>
            <div>
              <img src={cssLogo} alt="CSS Logo" className="w-28 " />
            </div>
            <div>
              <img
                src={javascriptLogo}
                alt="Javascript Logo"
                className="w-28 "
              />
            </div>
            <div>
              <img src={figmaLogo} alt="Figma Logo" className="w-24 pt-3 " />
            </div>
          </div>
          <div className="flex justify-center gap-10 ml-4">
            <div>
              <img src={reactLogo} alt="React Logo" className="w-28 " />
            </div>
            <div>
              <img src={gitLogo} alt="Git Logo" className=" w-28  " />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3 gap-11">
          <h1 className="font-mukta-regular tracking-widest text-lg font-bold my-8">
            OTHER SKILLS:
          </h1>
          <div className="flex flex-col justify-center gap-16">
            <div className="flex justify-center gap-16">
              <div>
                <img src={translateLogo} alt="HTML Logo" className="w-32 " />
              </div>
              <div className="">
                <div className="">
                  <img src={arLang} alt="CSS Logo" className="w-32 " />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div>
                <img src={enLang} alt="Javascript Logo" className="w-32 " />
              </div>
              <div>
                <img src={musicLogo} alt="Javascript Logo" className="w-32 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
