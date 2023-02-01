import React from "react";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 mt-[5rem] place  ">
      <img
        className="h-[16.1rem] border-4 rounded-[.6rem] border-[#D0B8AC] justify-self-end -mr"
        src="images/gallery-1.jpg"
        alt=""
      />
      <img
        className="h-[14.8rem] border-4 rounded-[.6rem] border-[#D0B8AC] mt-[5.6rem] justify-self-center mr-0"
        src="images/gallery-2.jpg"
        alt=""
      />
      <img
        className="h-[16.2rem] border-4 rounded-[.6rem] border-[#D0B8AC] -mt-[3.1rem] ml-[4.8rem] col-span-full "
        src="images/gallery-3.jpg"
        alt=""
      />
    </div>
  );
};

export default Gallery;
