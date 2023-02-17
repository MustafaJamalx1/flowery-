import React from "react";
import NavBarD from "./NavBarD";
import LineD from "../parts/LineD";
import HeroD from "./HeroD";
import WeAreFlowery from "../mobile/WeAreFlowery";
import Setup from "../mobile/Setup";
import Features from "../mobile/Features";
import Gallery from "../mobile/Gallery";
import Plans from "../mobile/Plans";
const Desktop = () => {
  return (
    <div className="px-11 py-6 hidden lg:block xl:flex xl:flex-col xl:gap-12 xl:">
      <NavBarD />
      <HeroD />
      <LineD />
      <WeAreFlowery />
      <LineD />
      <Setup />
      <LineD />
      <Features />
      <LineD />
      <Gallery />
      <LineD />
      <div className="w-full bg-[#732B2B] text-[#FFFFFF] py-6 plan-section-color -mt-[3rem]     ">
        <Plans />
      </div>
    </div>
  );
};

export default Desktop;
