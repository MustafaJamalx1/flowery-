import React from "react";
import PlanListItem from "./PlanListItem";
import SubButton from "./SubButton";
const Plan1 = () => {
  return (
    <div
      className="bg-[url('./../public/images/first-plan-bg.jpg')] w-[85%] bg-cover
    rounded-[.4rem] text-[#341313] px-6 py-12 flex flex-col gap-4 min-h-[60vh] "
    >
      <h4 className="text-3xl font-bold ">Essential</h4>
      <p className="mr-10 font-bold ">With this plan you get flowers on</p>

      <PlanListItem title="Valentines" />
      <PlanListItem title="Christmas" />
      <PlanListItem title="Partner's birthday" />
      <p className="mt-10 -mr-3 text-2xl font-extrabold text-right">
        Only for $99/<span className="text-base font-medium ">Year</span>
      </p>
      <SubButton />
    </div>
  );
};

export default Plan1;
