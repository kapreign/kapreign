import React from "react";
import "./Cards.css";

export default function Cards({ title, technologies, cardNo, cardIcon }) {
  return (
    <div className={`card card-${cardNo} z-10 md:w-52 w-full`}>
      <div className="card__icon">{cardIcon}</div>
      <h2 className="card__title text-black font-bold text-xl">{title}</h2>
      <div className="overflow-auto">
      </div>
      <p className="card__apply text-gray text-sm">
        <a className="card__link text-sm" href="#">
          Contact us<i className="fas fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}
