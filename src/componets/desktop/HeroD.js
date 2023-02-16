import React from "react";
import SubHero from "../mobile/SubHero";
import ButtonD from "../parts/ButtonD";
const HeroD = () => {
  return (
    <section className="ml-3 flex justify-between  ">
      <div className="flex flex-col gap-10  justify-end">
        <h1 className="xl:text-5xl font-extrabold xl:leading-[3.6rem] ">
          Get your flower game to the next level with us
        </h1>
        <SubHero />
        <div className="flex gap-5 xl:ml-9">
          <ButtonD number={1} />
          <ButtonD number={2} />
        </div>
      </div>
      <img
        className="max-h-[80vh] desktop-hero-img  border-[5px] border-[#D0B8AC]  rounded"
        src="./images/gallery-1.jpg"
        alt="hero-img"
      />
    </section>
  );
};

export default HeroD;
