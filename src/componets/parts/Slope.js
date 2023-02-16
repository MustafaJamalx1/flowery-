import React from "react";

const Slope = (props) => {
  return (
    <img
      src={props.reverse ? "images/slope.svg" : "images/slope-reverse.svg"}
      alt=""
      className="px-[3.2rem] xl:px-[6.4rem]"
    />
  );
};

export default Slope;
