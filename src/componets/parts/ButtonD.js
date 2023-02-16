import React from "react";

const ButtonD = (props) => {
  let title;
  let icon;
  if (props.number === 1) {
    title = "Our plans";
    icon = "images/arrow2.svg";
  }
  if (props.number === 2) {
    title = "Contact us";
    icon = "images/link.svg";
  }
  return (
    <button className="bg-[#732B2B]  w-max px-10 py-5 text-[#EFE5DC] rounded-[.5rem] font-bold  text-2xl flex gap-4 items-center ">
      {title}
      {icon && (
        <img className={props.number === 2 ? "h-4" : "h-5"} src={icon} alt="" />
      )}
    </button>
  );
};

export default ButtonD;
