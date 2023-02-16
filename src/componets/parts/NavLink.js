import React from "react";

const NavLink = (props) => {
  return (
    <a
      className="text-2xl font-medium xl:text-2xl xl:font-bold"
      href="www.google.com"
    >
      {props.name}
    </a>
  );
};

export default NavLink;
