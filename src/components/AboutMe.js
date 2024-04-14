import React, { useRef } from "react";
import designService from "../assets/pencil and ruler image.png";
import developmentService from "../assets/screwdriver and a rench.png";
import maintainenceService from "../assets/laptopgear.png";
const AboutMe = () => {
  return (
    <div className="bg-zinc-200 flex flex-col items-center justify-center z-50 relative h-screen">
      <h1 className="font-mukta-regular tracking-widest border-x-4 border-x-gray-900 text-2xl font-bold my-12 px-20 py-6">
        ABOUT ME
      </h1>
      <p className="text-lg font-mukta-regular font-light mb-4 text-justify px-96">
        Jafar Eyad, a junior coder, and an eager learner, passionate about
        technology and innovation. I Embraces challenges, and continuously
        expanding coding skills. A music composer at heart, finds joy in
        creating melodies. Curious and dedicated, approaches opportunities with
        enthusiasm and a commitment to continuous growth.
      </p>
      <h1 className="font-mukta-regular tracking-widest border-x-2 border-x-gray-900 text-sm my-20 px-8 py-1">
        EXPLORE
      </h1>
      <div className="flex flex-col justify-center mb-16">
        <div className="flex justify-center gap-10 mb-14">
          <div className="w-1/3 relative mx-4">
            <h1 className="text-2xl font-bold tracking-wider mb-2">DESIGN</h1>
            <p className="text-sm text-justify">
              I design sleek and user-friendly webpages that capture your
              brand's essence and engage your audience effectively.
            </p>
            <div className="absolute bottom-7 -left-9 mb-2 ml-4 opacity-30">
              <img
                src={designService}
                className="w-14"
                alt="I design webpages"
              />
            </div>
          </div>
          <div className="w-1/3 relative mx-4">
            <h1 className="text-2xl font-bold tracking-wider mb-2">
              DEVELOPMENT
            </h1>
            <p className="text-sm text-justify">
              I turn concepts into interactive websites, blending coding skills
              with creativity for seamless user experiences.
            </p>
            <div className="absolute bottom-7 -left-10 mb-2 ml-4 opacity-30">
              <img
                src={developmentService}
                className="w-14"
                alt="I Develop pages"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 relative mx-4 self-center ">
          <h1 className="text-2xl font-bold tracking-wider mb-2">
            MAINTENANCE
          </h1>
          <p className="text-sm text-justify">
            I provide hassle-free website maintenance, ensuring your online
            presence remains polished and secure.
          </p>
          <div className="absolute bottom-4 -left-12 mb-2 ml-4 opacity-30">
            <img
              src={maintainenceService}
              className="w-20"
              alt="I maintain pages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
