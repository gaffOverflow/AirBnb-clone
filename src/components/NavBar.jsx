import React from "react";
import ReactDom from "react-dom/client";
import "../index.css"

import AirBnblogo from "../assets/icons/AirBnbLogo.png"

function NavBar(){
  return(
    <nav className="py-6 px-8 shadow-md">
      <img src={AirBnblogo} alt="AirBnb Logo" />
    </nav>
  )
}

export default NavBar
