import React from "react";
import NavLink from "../parts/NavLink";
const NavBarD = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-4xl font-paytone">Flowery</h1>

      <div className="flex gap-5 items-center">
        <NavLink name="About" />
        <NavLink name="Process" />
        <NavLink name="Features" />
        <div className="bg-[#BAD9B5] px-2 py-3 rounded-md">
          <NavLink name="Work With Us" />
        </div>
      </div>
    </nav>
  );
};

export default NavBarD;
