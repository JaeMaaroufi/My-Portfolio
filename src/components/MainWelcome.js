import React, { useRef, useEffect } from "react";
import logo from "../assets/portfolio-logo.png";
import myImage from "../assets/Me-cropped.png";
import LinkedinBw from "../assets/linkedin-transparent.png";
import githubBw from "../assets/github-black-logo.jpg";
const MainWelcome = () => {
  return (
    <div className="bg-[url('/src/assets/bg-for-landing-page.png')] h-screen bg-cover bg-center">
      <nav className="pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 relative">
              <img
                src={logo}
                alt="Logo"
                className="w-1/3 px-1 py-1 rounded-md font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer"
              />
            </div>
            <div>
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="font-mukta-regular font text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  About Me
                </div>

                <div className="font-mukta-regular  text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  Skills
                </div>
                <div className="font-mukta-regular  text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  Projects
                </div>
                <div className="font-mukta-regular  bg-white hover:bg-gray-300 text-black px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  Contact Me
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex justify-end w-full h-[80vh]">
        <div className="absolute left-14 top-1 w-[30%] z-10">
          <img src={myImage} alt="Personal" className="w-full" />
        </div>
        <div className=" w-1/3 h-full mr-24 mt-56">
          <h2
            id="first-header"
            className="font-mukta-regular text-white text-3xl mb-14 transition duration-300 hover:text-[#56ffff] transform hover:scale-110 hover:cursor-context-menu"
          >
            Hi, I am,
          </h2>
          <h1 className="font-mukta-regular text-white text-7xl mb-2 transition duration-300 hover:text-[#FFFFE0] transform hover:scale-110 hover:cursor-context-menu">
            Jafar Abdulsada
          </h1>
          <h3 className="font-mukta-regular text-gray-400 text-4xl transition duration-300 hover:text-[#7FFFD4] transform hover:scale-110 hover:cursor-context-menu">
            Junior Developer
          </h3>
          <div className="flex justify-start gap-5 mt-16">
            <div>
              <a
                href="https://www.linkedin.com/in/jafar-al-fatlawi-b667842b8"
                target="blank"
              >
                <img
                  src={LinkedinBw}
                  alt="My Linkedin profile"
                  className="w-12 transition duration-300 hover:scale-110 cursor-pointer"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/JaeMaaroufi" target="blank">
                <img
                  src={githubBw}
                  alt="My Github profile"
                  className="w-12 transition duration-300 hover:scale-110 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWelcome;
