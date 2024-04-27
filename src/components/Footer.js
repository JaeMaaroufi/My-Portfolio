import React from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import { RxGithubLogo, RxVercelLogo } from "react-icons/rx";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxInstagramLogo } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";

const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-900 flex flex-col gap-8 py-10">
        <a href="main-page">
          <div className="text-zinc-200 flex flex-col gap-1 items-center font-bold tracking-widest transition-all duration-300 transform hover:scale-110 cursor-pointer">
            <RiArrowUpDoubleFill />
            BACK TO TOP
          </div>
        </a>
        <div className="text-white flex justify-center gap-5">
          <a href="https://github.com/JaeMaaroufi" target="blank">
            <RxGithubLogo className="size-8 transition-all duration-300 transform hover:scale-110 cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/jafar-al-fatlawi-b667842b8"
            target="blank"
          >
            <RxLinkedinLogo className="size-8 transition-all duration-300 transform hover:scale-110 cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/jae.m04?igsh=MW5tZnk0d3A2Yndjdw=="
            target="blank"
          >
            <RxInstagramLogo className="size-8 transition-all duration-300 transform hover:scale-110 cursor-pointer" />
          </a>
          <a href="mailto:kuyyb882@gmail.com">
            <RxEnvelopeClosed
              className="size-8 transition-all duration-300 transform hover:scale-110 cursor-pointer"
              target="blank"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-zinc-400">
            @2024 Jafar Abdulsada. All rights reserved.
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
