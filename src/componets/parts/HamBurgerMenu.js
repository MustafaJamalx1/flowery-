import React from "react";

const HamBurgerMenu = () => {
  return (
    <>
      <svg
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ham1"
          d="M1 1L33 1"
          stroke="#111122"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          className="ham3"
          d="M1 29L33 29"
          stroke="#111122"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>

      <svg
        width="34"
        className="absolute bottom-0 top-0 my-auto"
        height="2"
        viewBox="0 0 34 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="ham2"
          d="M0 1L33 1"
          stroke="#111122"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
};

export default HamBurgerMenu;
