import React from "react";

const NavLink = (props) => {
  return (
    <a className="text-2xl font-medium" href="www.google.com">
      {props.name}
    </a>
  );
};

export default NavLink;
