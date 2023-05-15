import React from "react";
import "../index.css";

import StarIcon from "../assets/icons/Star-icon.png";

function Cards(props) {
  return (
    <div>
      <figure>
        <img
          src={props.img}
          alt="Card image"
          className="inline-block h-52 w-44 md:h-72 md:w-56"
        />
        <figcaption className="flex items-center gap-1 pt-2 text-lg">
          <img src={StarIcon} alt="Start Icon" className="w-5" />
          <span className="font-semibold">{props.rating}</span>
          <span className="text-[#918E9B]">
            ({props.reviewCount}).{props.country}
          </span>
        </figcaption>
      </figure>
      <p className="w-44 md:w-auto">{props.title}</p>
      <h4>
        <span
          className="font-bold
          "
        >
          From {props.price}
        </span>
        / person
      </h4>
    </div>
  );


  
}

function CardSection() {
  return (
    <section className="overflow-x-scroll">
      <div className=" flex min-w-max justify-center gap-4 px-10 py-10 sm:px-16 md:gap-10 lg:px-16">
        <Cards
          img="./image/card1.png"
          rating={`5.0`}
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Cards
          img="./image/card2.png"
          rating={`5.0`}
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
        <Cards
          img="./image/card3.png"
          rating={`5.0`}
          reviewCount={6}
          country="Nigeria"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />{" "}
      </div>
    </section>
  );
}
export default CardSection;
