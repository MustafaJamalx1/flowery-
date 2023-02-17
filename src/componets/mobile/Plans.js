import React from "react";
import Plan1 from "../parts/Plan1";
import Plan2 from "../parts/Plan2";
import Plan3 from "../parts/Plan3";
const Plans = () => {
  return (
    <section className="">
      <p
        className="pl-10
         text-xs tracking-[.3rem] font-bold "
      >
        SUBSCRIPTIONS
      </p>
      <h2 className="pl-3 mb-10 text-3xl font-bold">Here's our plans</h2>
      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
        <Plan1 />
        <Plan2 />
        <Plan3 />
      </div>
    </section>
  );
};

export default Plans;
