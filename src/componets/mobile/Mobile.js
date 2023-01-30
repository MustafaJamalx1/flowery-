import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Line from "./parts/Line";
import SubHero from "./SubHero";
import WeAreFlowery from "./WeAreFlowery";
import Setup from "./Setup";
const Mobile = () => {
  const [showMenu, setShowMenu] = React.useState(0);
  function handleClick() {
    console.log("2");
    setShowMenu(!showMenu);
    addMenu();
  }
  function addMenu() {
    const menu = document.querySelector("#show-menu");
    if (!showMenu) {
      menu.classList.replace("h-0", "h-[24rem]");
      menu.childNodes.forEach((child) =>
        child.classList.replace("opacity-0", "opacity-1")
      );
      // menu.classList.add("transition-all");
    } else {
      menu.classList.replace("h-[24rem]", "h-0");
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
    </div>
  );
};

export default Mobile;
