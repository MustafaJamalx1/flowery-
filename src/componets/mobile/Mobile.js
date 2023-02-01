import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Line from "./parts/Line";
import SubHero from "./SubHero";
import WeAreFlowery from "./WeAreFlowery";
import Setup from "./Setup";
import Features from "./Features";
import Gallery from "./Gallery";
const Mobile = () => {
  const [showMenu, setShowMenu] = React.useState(0);
  function handleClick() {
    setShowMenu(!showMenu);
    addMenu();
  }
  function addMenu() {
    const menu = document.querySelector("#show-menu");
    if (!showMenu) {
      menu.classList.replace("h-0", "h-[24rem]");
      menu.classList.replace("border-0", "border-4");
      menu.childNodes.forEach((child) =>
        child.classList.replace("opacity-0", "opacity-1")
      );
      document.querySelector(".ham2").classList.add("ham-animation2");
      document.querySelector(".ham3").classList.add("ham-animatoin3");
      document.querySelector(".ham1").classList.add("ham-animatoin1");
    } else {
      menu.classList.replace("h-[24rem]", "h-0");
      menu.classList.replace("border-4", "border-0");
      menu.childNodes.forEach((child) => child.classList.add("opacity-0"));
      document.querySelector(".ham2").classList.remove("ham-animation2");
      document.querySelector(".ham3").classList.remove("ham-animatoin3");
      document.querySelector(".ham1").classList.remove("ham-animatoin1");
      menu.childNodes.forEach((child) => child.classList.add("opacity-0"));
    }
    return "";
  }
  return (
    <div className=" flex flex-col gap-8 ">
      <NavBar func={handleClick} />
      <Hero />
      <Line />
      <SubHero />
      <Line />
      <WeAreFlowery />
      <Line />
      <Setup />
      <Line />
      <Features />
      <Line />
      <Gallery />
      <Line />
    </div>
  );
};

export default Mobile;
