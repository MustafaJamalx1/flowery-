import React from "react";

const Feature = (props) => {
  const img = `images/${props.img}.svg`;
  // const imgPadding = `p-${props.padding}`;
  return (
    <div className="pl-3 flex flex-col items-center justify-center gap-4">
      <div
        className={`w-16 h-16 bg-[#D0B8AC] rounded-full ${props.padding} overflow-hidden`}
      >
        <img src={img} alt="" />
      </div>
      <h4 className="text-left text-xl font-semibold">{props.title}</h4>
      <p className="pl-3 font-medium">{props.p}</p>
    </div>
  );
};

export default Feature;
