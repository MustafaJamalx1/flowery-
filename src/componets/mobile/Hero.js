import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-3">
      <img
        className=" rounded-[.6rem] border-4 border-[#D0B8AC]"
        src="images/hero-mobile-img.jpg"
        alt=""
      />
      <h1 className="pl-3 font-extrabold text-[1.5rem]">
        Get your flower game to the next level with us
      </h1>
    </div>
  );
};

export default Hero;
