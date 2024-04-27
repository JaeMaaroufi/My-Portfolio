import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from "../assets/portfolio-logo.png";
import myImage from "../assets/Me-cropped.png";
import LinkedinBw from "../assets/linkedin-transparent.png";
import githubBw from "../assets/github-black-logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const MainWelcome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      id="main-page"
      className="bg-gray-200 lg:bg-[url('/src/assets/bg-for-landing-page.png')] h-screen bg-cover bg-center"
    >
      <nav data-aos="fade-down" className="bg-black lg:pt-5 lg:bg-transparent">
        <div className=" lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 relative" data-aos="fade-down">
              <img
                src={logo}
                alt="Logo"
                className="w-1/3 px-1 py-1 rounded-md font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer"
              />
            </div>
            <RxHamburgerMenu
              className={`text-white size-8 lg:hidden mr-3 z-20 cursor-pointer ${
                !isMenuOpen ? "block" : "hidden"
              }`}
              onClick={toggleMenu}
            />
            <GrClose
              className={`text-white size-7 mr-3 lg:hidden z-20 cursor-pointer ${
                isMenuOpen ? "block" : "hidden"
              }`}
              onClick={toggleMenu}
            />

            <div className="hidden lg:block">
              <div className="ml-10 flex space-x-4">
                <a href="#about-page">
                  <div className="font-mukta-regular font text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    About Me
                  </div>
                </a>
                <a href="#skills-page">
                  <div className="font-mukta-regular  text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    Skills
                  </div>
                </a>
                <a href="#projects-page">
                  <div className="font-mukta-regular  text-white hover:text-gray-300 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    Projects
                  </div>
                </a>
                <a href="#contact-page">
                  <div className="font-mukta-regular  bg-white hover:bg-gray-300 text-zinc-900 px-4 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-110 cursor-pointer">
                    Contact Me
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex flex-col justify-end h-screen lg:flex lg:flex-row lg:justify-end lg:w-full lg:h-[80vh] lg:bg-transparent">
        <div
          className={`absolute top-0 inset-x-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="text-white h-16 w-full flex items-center justify-center border-b-[1px] hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-black cursor-pointer">
              <a href="#about-page">
                <div className="self-center">About Me</div>
              </a>
            </div>
            <div className="text-white h-16 w-full flex items-center justify-center border-b-[1px] hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-black cursor-pointer">
              <a href="#skills-page">
                <div className="self-center">Skills</div>
              </a>
            </div>
            <div className="text-white h-16 w-full flex items-center justify-center border-b-[1px] hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-black cursor-pointer">
              <a href="#projects-page">
                <div className="self-center">Projects</div>
              </a>
            </div>
            <div className="text-white h-16 w-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-black cursor-pointer">
              <a href="#contact-page">
                <div className="self-center">Contact Me</div>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute w-96 -left-16 top-16 lg:absolute lg:left-14 lg:top-1 lg:w-[30%] lg:z-10"
          data-aos="fade-right"
        >
          <img src={myImage} alt="Personal" className="w-full" />
        </div>
        <div className="z-10 h-1/3 bg-black -skew-y-[10deg] bg-opacity-85  lg:w-1/3 lg:h-full lg:mr-24 lg:mt-56 lg:transform-none lg:bg-transparent">
          <div className="skew-y-[10deg] flex justify-around mt-8 md:mt-11 lg:transform-none lg:block">
            <div data-aos="fade-left">
              <h2
                id="first-header"
                className="text-white text-lg font-mukta-regular lg:text-3xl lg:mb-14 lg:transition lg:text-white lg:duration-300 lg:hover:text-[#56ffff] lg:transform lg:hover:scale-110 lg:hover:cursor-context-menu"
              >
                Hi, I am,
              </h2>
              <h1 className="text-[#ffffd7] text-4xl mt-2 font-mukta-regular lg:text-7xl lg:mb-2 lg:text-white lg:transition lg:duration-300 lg:hover:text-[#FFFFE0] lg:transform lg:hover:scale-110 lg:hover:cursor-context-menu">
                Jafar Abdulsada
              </h1>
              <h3 className="text-[#7fffd4] text-2xl font-mukta-regular lg:text-4xl lg:transition lg:text-white lg:duration-300 lg:hover:text-[#7FFFD4] lg:transform lg:hover:scale-110 lg:hover:cursor-context-menu">
                Junior Developer
              </h3>
            </div>

            <div
              className="flex flex-col  gap-5 lg:flex lg:flex-row lg:justify-start lg:gap-5 lg:mt-16"
              data-aos="fade-up"
            >
              <div>
                <a
                  href="https://www.linkedin.com/in/jafar-al-fatlawi-b667842b8"
                  target="blank"
                >
                  <RxLinkedinLogo
                    alt="My Linkedin profile"
                    className="size-10 text-white transition duration-300 hover:scale-110 cursor-pointer lg:hidden"
                  />
                  <img
                    src={LinkedinBw}
                    alt="My Linkedin profile"
                    className="hidden w-12 transition duration-300 hover:scale-110 cursor-pointer lg:block"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/JaeMaaroufi" target="blank">
                  <RxGithubLogo
                    alt="My Github profile"
                    className="bg-black rounded-full size-10 text-white transition duration-300 hover:scale-110 cursor-pointer lg:hidden"
                  />
                  <img
                    src={githubBw}
                    alt="My Github profile"
                    className="hidden w-12 lg:block transition duration-300 hover:scale-110 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWelcome;
