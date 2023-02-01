import React from "react";

const WeAreFlowery = () => {
  return (
    <section className="flex flex-col gap-3">
      <img
        className=" rounded-[.6rem] border-4 border-[#D0B8AC]"
        src="images/we-are-img.jpg"
        alt=""
      />
      <h2 className="pl-3 font-semibold text-xl">We are Flowery</h2>
      <p className="pl-3 text-base font-medium mb-5">
        A service to help you with getting your significant partner flowers on
        special event's that you can compelely customize with your specific
        Date, Time and personal message. With flowery you don't have to worry
        about any thing.
      </p>
    </section>
  );
};

export default WeAreFlowery;
