import React from "react";

const Gallery = () => {
  return (
    <section className="grid grid-cols-2 my-[7rem] place    ">
      <img
        className="h-[16.1rem] border-4 rounded-[.6rem] border-[#D0B8AC] justify-self-end xl:h-[40rem] xl:rounded-[1rem] xl:border-[7px]"
        src="images/gallery-1.jpg"
        alt=""
      />
      <img
        className="h-[14.8rem] border-4 rounded-[.6rem] border-[#D0B8AC] mt-[5.6rem] justify-self-center xl:h-[38rem] xl:justify-self-start xl:ml-6 xl:rounded-[1rem] xl:border-[7px]"
        src="images/gallery-2.jpg"
        alt=""
      />
      <img
        className="h-[16.2rem] border-4 rounded-[.6rem] border-[#D0B8AC] -mt-[3.1rem] ml-[4.8rem] col-span-full  xl:h-[42rem] xl:ml-[30rem] xl:rounded-[1rem] xl:border-[7px]"
        src="images/gallery-3.jpg"
        alt=""
      />
    </section>
  );
};

export default Gallery;
