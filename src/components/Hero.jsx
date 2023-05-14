import React from "react";
import ReactDom from "react-dom/client";
import "../index.css";

import HeroGroup from "../assets/hero/heroGroup.png";

function HeroSection() {
  return (
    // Hero section
    <section className="flex flex-col justify-center px-10 sm:px-16 gap-10 lg:px-16 py-10">
      {/* Hero Images */}
      <img
        src={HeroGroup}
        alt="AirBnb Logo"
        className="m-auto lg:w-2/3 object-cover"
      />
      {/* Hero Action */}
      <div className="font-poppins">
        {/* Hero Title */}
        <h1 className="text-4xl font-semibold">Online Experiences</h1>
        {/* Hero Parargraph */}
        <p className="text-base text-[#222222]">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
