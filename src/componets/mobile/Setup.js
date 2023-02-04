import React from "react";
import Steps from "../parts/Steps";
import Slope from "../parts/Slope";
const Setup = () => {
  return (
    <section className="py-6 flex flex-col justify-center">
      <h2 className="text-center font-semibold text-2xl mb-24">
        How to start with Flowery
      </h2>
      <Steps title="Fill the required information" number="1" />
      <Slope />
      <Steps
        title="Choose your special event's and add your custom one's"
        number="2"
      />
      <Slope reverse={true} />

      <Steps
        title="Select and set your preferred method of payment."
        number="3"
      />
      <Slope />
      <Steps
        title="Congrats. No more unnecessary sleeping on the couch for you"
        number="4"
      />
    </section>
  );
};

export default Setup;
