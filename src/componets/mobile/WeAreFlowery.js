import React from "react";

const WeAreFlowery = () => {
  return (
    <section className="flex flex-col gap-4 mt-4 xl:gap-10  xl:flex-row-reverse xl:items-end ">
      <img
        className=" rounded-[.6rem] border-4 border-[#D0B8AC] xl:border-8 xl:rounded-[1.2rem] xl:max-h-[60vh]"
        src="images/we-are-img.jpg "
        alt=""
      />
      <div className="flex flex-col gap-1 xl:gap-6 xl:mb-5">
        <h2 className="pl-3 font-semibold text-xl mt-3 xl:text-5xl xl:font-bold ">
          We are Flowery
        </h2>
        <p className="pl-3 text-base font-medium mb-5 xl:text-[1.4rem] xl:font-semibold  xl:text-left xl:leading-10 xl:pl-7">
          A service to help you with getting your significant partner flowers on
          special event's that you can compelely customize with your specific
          Date, Time and personal message.
          <br /> With flowery you don't have to worry about any thing.
        </p>
      </div>
    </section>
  );
};

export default WeAreFlowery;
