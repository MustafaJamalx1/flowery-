import React from "react";
import Line from "./parts/Line";
import NavLink from "./parts/NavLink";
import HamBurgerMenu from "./parts/HamBurgerMenu";
const NavBar = (props) => {
  return (
    <>
      <nav className="flex justify-between">
        <h1 className="text-xl font-paytone">Flowery</h1>
        <div
          onClick={props.func}
          className="flex flex-col justify-between p-[.1rem]"
        >
          <HamBurgerMenu />
        </div>
      </nav>

      <div
        id="show-menu"
        className={`absolute w-full h-0 left-0 bg-[#EFE5DC] flex flex-col justify-center items-center gap-6 cursor-pointer overflow-hidden translate-y-7 menu-fade-in`}
      >
        <NavLink name="About us" />
        <Line />
        <NavLink name="Setup" />
        <Line />
        <NavLink name="Features" />
        <Line />
        <NavLink name="Subscription" />
        <Line />
      </div>
    </>
  );
};

export default NavBar;
