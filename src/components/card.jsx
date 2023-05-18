import React from "react";
import "../index.css";

import StarIcon from "../assets/icons/Star-icon.png";
import Data from "./CardData.jsx";

function Cards(props) {

let tag
if(props.stock === 0){
  tag = "SOLD OUT"
} else if(props.location === "Online"){
  tag = "ONLINE"
}

  return (
    <div>
      <figure className="relative">
        {tag && (
          <div className="absolute left-2 top-2 rounded-md bg-white px-2 py-0.5">
            {tag}
          </div>
        )}
        <img
          src={props.coverImg}
          alt="Card image"
          className="inline-block h-52 w-44 md:h-72 md:w-56"
        />
        <figcaption className="flex items-center gap-1 pt-2 text-lg">
          <img src={StarIcon} alt="Start Icon" className="w-5" />
          <span className="font-semibold">{props.stats.rating}</span>
          <span className="text-[#918E9B]">
            ({props.stats.reviewCount}).{props.country}
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
  const DataList = Data.map((entries) => {
    return (
      <Cards
      key={entries.id}
       {...entries}
      />
    );
  });
  return (
    <section className="overflow-x-scroll">
      <div className=" flex min-w-max justify-center gap-4 px-10 py-10 sm:px-16 md:gap-10 lg:px-16">
        {DataList}
      </div>
    </section>
  );
}
export default CardSection;
