import React from "react";
import PlanListItem from "./PlanListItem";
import SubButton from "./SubButton";
const Plan1 = () => {
  // const options = {
  //   root: null,
  //   rootMargin: "100px",
  //   threshold: 0.25,
  // };
  // const observer = new IntersectionObserver(function (entries) {
  //   const ent = entries[0];

  //   console.log(ent.isIntersecting);
  //   if (ent.isIntersecting) {
  //     const div = document.querySelector(".div-test");
  //     div.classList.replace("opacity-0", "opacity-1");
  //     div.classList.add("-translate-y-[5rem]");
  //   }

  // }, options);
  // window.onload = function () {
  //   const target = document.querySelector(".div-test");
  //   console.log(target);
  //   observer.observe(target);
  // };
  return (
    <div
      className="bg-[url('./../public/images/essintial-flower-bg.jpg')] w-[85%] bg-cover
    rounded-[.4rem] text-[#341313] px-6 py-12 flex flex-col gap-4 min-h-[60vh] "
    >
      <h4 className="text-3xl font-extrabold ">Essential</h4>
      <p
        className="mr-10 font-[700]
    "
      >
        With this plan you get flowers on
      </p>

      <PlanListItem title="Valentines" />
      <PlanListItem title="Christmas" />
      <PlanListItem title="Partner's birthday" />
      <p className="mt-14 -mr-3 text-2xl font-bold text-right">
        Only for $99/<span className="text-base font-medium ">Year</span>
      </p>
      <SubButton />
    </div>
  );
};

export default Plan1;
