import React from "react";

const PlanListItem = (props) => {
  return (
    <div className="flex gap-3">
      <img className="h-7" src="images/flower-list-icon.png" alt="" />
      <p className="text-xl font-bold">{props.title}</p>
    </div>
  );
};

export default PlanListItem;
