import React from "react";

const steps = (props) => {
  return (
    <div
      className={`${
        props.number === "2" || props.number === "4"
          ? " flex flex-row-reverse text-right"
          : "flex text-left"
      }  px-6 items-center justify-between -my-[20px] z-10`}
    >
      <h3 className="pl-3 text-2xl font-medium xl:text-5xl">{props.title}</h3>
      <div className="bg-[#BAD9B5] min-w-[4rem] h-16 rounded-full flex justify-center items-center text-2xl font-merr xl:min-w-[10rem] xl:h-[10rem] xl:text-6xl">
        {props.number}
      </div>
    </div>
  );
};

export default steps;
