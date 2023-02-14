import React from "react";
import PlanListItem from "./PlanListItem";
import SubButton from "./SubButton";
const Plan3 = () => {
  return (
    <div
      className="bg-[url('./../public/images/sugar-plan-bg.jpg')] w-[88%] bg-cover
rounded-[.4rem] text-[#341313] py-14 flex flex-col gap-4 min-h-[73vh] "
    >
      <h4 className="text-3xl font-bold text-center mt-4 ">"Sugar Daddy"</h4>
      <div className="flex flex-col gap-4 pl-10 pr-2">
        <p
          className="mr-10 font-bold mb-3 -mt-3 text-center
        "
        >
          With this plan you get flowers on
        </p>

        <PlanListItem title="Weekly flowers with a romantic messages written by our experts." />
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

export default Plan3;
