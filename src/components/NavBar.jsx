import React from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

import AirBnblogo from "../assets/icons/AirBnbLogo.png";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 shadow-md">
      <img src={AirBnblogo} alt="AirBnb Logo" />

      <lord-icon
        src="https://cdn.lordicon.com/flvisirw.json"
        trigger="loop-on-hover"
        delay="20"
        colors="primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef"
        style={{ width: "10%", height: "" }}
      ></lord-icon>
    </nav>
  );
}

export default NavBar;
