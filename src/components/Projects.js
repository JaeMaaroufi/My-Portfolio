import React from "react";
import Music from "../assets/Music.png";
import Bytes from "../assets/Burger.png";
import Poke from "../assets/PokeMystique.png";
import toDo from "../assets/todo.png";
import emlMovieProject from "../assets/EML Movie Project.png";

const Projects = () => {
  return (
    <div
      id="projects-page"
      className="bg-zinc-900 h-full flex flex-col gap-5 justify-center pt-11 pb-10 lg:pt-20 lg:gap-16 overflow-x-hidden overflow-y-hidden"
    >
      <h1
        className="font-mukta-regular self-center text-white font-bold tracking-widest pb-5 text-xl lg:text-4xl"
        data-aos="zoom-out"
      >
        Projects I've worked on
      </h1>
      <div className="flex flex-col items-center gap-5 lg:justify-center lg:flex-row lg:gap-20">
        <div
          className="w-[95%] lg:w-[38%] transition duration-300 transform hover:scale-110"
          data-aos="fade-down-right"
        >
          <a
            href="https://al-maaroufi-musical-workshop.netlify.app/"
            target="blank"
          >
            <img
              src={Music}
              className="rounded-md"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
        <div
          className="w-[95%] lg:w-[38%] transition duration-300 transform hover:scale-110"
          data-aos="fade-down-left"
        >
          <a href="https://pokemystique.netlify.app/" target="blank">
            <img
              src={Poke}
              className="rounded-md"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center lg:flex-row lg:justify-center lg:lg:gap-20">
        <div
          className="w-[95%] lg:w-[38%] transition duration-300 transform hover:scale-110"
          data-aos="fade-up-right"
        >
          <a href="https://delicious-bytes.netlify.app/" target="blank">
            <img
              src={Bytes}
              className="rounded-md"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
        <div
          className="w-[95%] lg:w-[38%] transition duration-300 transform hover:scale-110"
          data-aos="fade-up-left"
        >
          <a
            href="https://todo-list-for-your-groceries.netlify.app/"
            target="blank"
          >
            <img
              src={toDo}
              className="rounded-lg"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
      </div>
      <div
        className="w-[95%] lg:w-[38%] transition duration-300 transform hover:scale-110 self-center pb-5"
        data-aos="fade-up"
      >
        <a href="https://eml-movies.netlify.app/" target="blank">
          <img
            src={emlMovieProject}
            className="rounded-md"
            alt="EML Movie Page"
          />
        </a>
      </div>
      <div className="bg-zinc-900 h-16 content-center">
        <h1 className="text-center text-zinc-200 text-2xl">
          And many more to come!
        </h1>
      </div>
    </div>
  );
};

export default Projects;
