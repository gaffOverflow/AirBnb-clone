import React from "react"
import ReactDom from "react-dom/client"
import "../index.css"

import CardImg from "../assets/cards/card1.png"
import StarIcon from "../assets/icons/Star-icon.png"

function Cards(){
  return (
    <section className="flex flex-col justify-center gap-10 px-10 py-10 sm:px-16 lg:px-16">
      <div>
        <figure>
          <img src={CardImg} alt="Card image" className="inline-block" />
          <figcaption className="flex items-center gap-1 pt-2">
            <img src={StarIcon} alt="Start Icon" />
            <span>5.0</span> <span>(6).USA</span>
          </figcaption>
        </figure>
        <p>Life lessons with Katie Zaferes</p>
        <h4>From $136 / person</h4>
      </div>
    </section>
  );
}

export default Cards