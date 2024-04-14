import React from "react";
import MainWelcome from "./components/MainWelcome";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <MainWelcome />
        </FullpageSection>
        <FullpageSection>
          <AboutMe />
        </FullpageSection>
        <FullpageSection>
          <Skills />
        </FullpageSection>
        <FullpageSection>
          <Projects />
        </FullpageSection>
        <FullpageSection>
          <Contact />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
