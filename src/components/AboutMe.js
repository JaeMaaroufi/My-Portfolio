import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import designService from "../assets/pencil and ruler image.png";
import developmentService from "../assets/screwdriver and a rench.png";
import maintainenceService from "../assets/laptopgear.png";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      id="about-page"
      className="bg-zinc-200 flex flex-col items-center justify-center z-50 relative h-full overflow-x-hidden"
    >
      <h1
        className="text-zinc-900 font-mukta-regular font-bold tracking-widest border-x-4 border-x-zinc-900 text-xl my-12 px-12 py-3 lg:px-20 lg:my-28 lg:py-6 lg:text-2xl"
        data-aos="fade-down"
      >
        ABOUT ME
      </h1>
      <p
        className="font-mukta-regular font-light text-justify text-sm px-8 lg:text-lg lg:mb-4  lg:px-96"
        data-aos="fade-down"
      >
        My name is Jafar Eyad. I'm a junior developer with a passion for
        technology and innovation. I am an eager learner, always seeking to
        expand my coding skills and embrace new challenges. Curiosity and
        dedication drive me to approach opportunities with enthusiasm, and I am
        committed to continuous growth. Outside of coding, I am fluent in
        English and Arabic. I am currently a student at the University of
        Al-Kafeel in the city of Najaf, Iraq, pursuing a Bachelor's degree in
        Medical Radiology and Imaging Technology.
      </p>
      <h1
        className="font-mukta-regular tracking-widest my-16 border-x-2 border-x-zinc-900 text-sm lg:my-20 px-8 py-1"
        data-aos="zoom-out"
      >
        EXPLORE
      </h1>
      <div className="flex flex-col gap-14 lg:justify-center lg:gap-0 lg:mb-16">
        <div className="flex flex-col gap-14 lg:justify-center lg:flex-row lg:gap-10 lg:mb-14">
          <div className="relative lg:w-1/3 lg:mx-4" data-aos="fade-left">
            <h1 className="text-xl pl-9 font-bold tracking-wider mb-2 lg:pl-0">
              DESIGN
            </h1>
            <p className="text-sm text-justify px-10 lg:px-0">
              I design sleek and user-friendly webpages that capture your
              brand's essence and engage your audience effectively.
            </p>
            <div className="absolute opacity-20 -top-2 left-5 lg:-top-3 lg:-left-6">
              <img
                src={designService}
                className="w-10 lg:w-14"
                alt="I design webpages"
              />
            </div>
          </div>
          <div className="relative lg:w-1/3 lg:mx-4" data-aos="fade-right">
            <h1 className="text-xl pl-9 font-bold tracking-wider mb-2 lg:text-2xl">
              DEVELOPMENT
            </h1>
            <p className="text-sm text-justify px-10 lg:px-0">
              I turn concepts into interactive websites, blending coding skills
              with creativity for seamless user experiences.
            </p>
            <div className="absolute opacity-20 -top-2 left-5 lg:-top-3 lg:left-3 lg:opacity-30">
              <img
                src={developmentService}
                className="w-10 lg:w-14"
                alt="I Develop pages"
              />
            </div>
          </div>
        </div>
        <div
          className=" relative lg:w-1/3 lg:mx-4 lg:self-center"
          data-aos="fade-left"
        >
          <h1 className="text-xl pl-9 font-bold tracking-wider mb-2 lg:text-2xl">
            MAINTENANCE
          </h1>
          <p className="text-sm text-justify px-10 lg:px-0">
            I provide a hassle-free maintenance, ensuring your online presence
            remains polished and secure.
          </p>
          <div className="absolute opacity-20 -top-4 left-4 lg:-top-7 lg:-left-0 lg:opacity-30">
            <img
              src={maintainenceService}
              className="w-14 lg:w-20"
              alt="I maintain pages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
