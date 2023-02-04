import React from "react";
import Plan1 from "../parts/Plan1";

const Plans = () => {
  return (
    <section className="">
      <p
        className="pl-10
        pb-5 text-sm tracking-[.7rem] font-semibold text-center"
      >
        SUBSCRIPTIONS
      </p>
      <h2 className="pl-3 mt-10 text-2xl font-semibold">Here's our plans</h2>
      <div className="flex flex-col items-center justify-center">
        <Plan1 />
      </div>
    </section>
  );
};

export default Plans;
