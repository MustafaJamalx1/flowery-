import React from "react";
import PlanListItem from "./PlanListItem";
import SubButton from "./SubButton";
const Plan2 = () => {
  return (
    <div
      className="bg-[url('./../public/images/goodhusband-flower-bg.jpg')] w-[87%] bg-cover
rounded-[.4rem] text-[#341313]  pt-14 flex flex-col gap-4 min-h-[70vh] "
    >
      <h4 className="text-3xl font-bold text-center mt-4 ">"Caring Husband"</h4>
      <div className="ml-10 flex flex-col gap-4 pl-3">
        <p
          className="mr-10 font-bold mb-3 -mt-3
        "
        >
          With this plan you get flowers on
        </p>

        <PlanListItem title="2 Days of your own choosing" />
        <PlanListItem title="First Date" />
        <PlanListItem title="Valentines" />
        <PlanListItem title="Christmas" />
        <PlanListItem title="Partner's birthday" />
      </div>
      <p className="mt-4 text-2xl font-extrabold text-right mr-14">
        Only for $99/<span className="text-base font-medium ">Year</span>
      </p>
      <div className="ml-auto mr-12 -mt-2">
        <SubButton />
      </div>
    </div>
  );
};

export default Plan2;
