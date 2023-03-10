import React from "react";
import Feature from "../parts/Feature";
const Features = () => {
  return (
    <section className="flex flex-col justify-center gap-16 mt-6 mb-20 ">
      <div className="xl:text-center">
        <p
          className="pl-10
        pb-5 text-sm tracking-[1rem] font-extrabold xl:text-2xl xl:tracking-[.6rem]  "
        >
          FEATURES
        </p>
        <h3 className="pl-3 text-3xl font-bold -mt-3 xl:text-5xl">
          What's special about us
        </h3>
      </div>
      <div className="flex flex-col gap-16 xl:flex-row">
        <Feature
          padding="p-1"
          img="flower-icon"
          title="Our exquisite flower collection"
          p="Flowers that are hand picked by people who dedicated their life to get you the flowers that you deserve."
        />
        <Feature
          padding="p-3"
          img="notification-icon"
          title="Informative notification system"
          p="with our notification system you`ll get personal email`s on the day of the event containing all the information you need with a picture of the flower`s you are giving."
        />
        <Feature
          padding="p-2"
          img="delivery-icon"
          title="Fast and reliable delivery"
          p="once you setup Flowery no need to every worry about the delivery time and efficiency. We got "
        />
      </div>
    </section>
  );
};

export default Features;
