import React from "react";
import Music from "../assets/Music.png";
import Bytes from "../assets/Burger.png";
import Poke from "../assets/PokeMystique.png";
import toDo from "../assets/todo.png";

const Projects = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center gap-16">
      <div className="flex justify-center items-center gap-20">
        <div className="w-[38%] transition duration-300 transform hover:scale-110">
          <a
            href="https://al-maaroufi-musical-workshop.netlify.app/"
            target="blank"
          >
            <img
              src={Music}
              className="rounded-lg"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
        <div className="w-[38%] transition duration-300 transform hover:scale-110">
          <a href="https://pokemystique.netlify.app/" target="blank">
            <img
              src={Poke}
              className="rounded-lg"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20">
        <div className="w-[38%] transition duration-300 transform hover:scale-110">
          <a href="https://delicious-bytes.netlify.app/" target="blank">
            <img
              src={Bytes}
              className="rounded-lg"
              alt="Al-Maaroufi Musical workshop"
            />
          </a>
        </div>
        <div className="w-[38%] transition duration-300 transform hover:scale-110">
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
    </div>
  );
};

export default Projects;
