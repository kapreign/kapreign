import { useState } from "react";
import riod from "../Assets/Images/riod.png";
import plug from "../Assets/Images/plug.png";
import nexcure from "../Assets/Images/nexcure.png";
import student from "../Assets/Images/student.png";
import vista from "../Assets/Images/vista.png";
import bull from "../Assets/Images/bull.png";
import voyage from "../Assets/Images/voyage.png";
import React from "react";
import Popup from "./Popup";

export default function Projects(props) {
  const [popup, popupStats] = useState(false);
  const theme = props.theme;
  const projects = [
    {
      img: riod,
      name: "kapreign",
    },
    {
      img: plug,
      name: "kapreign",
    },
    {
      img: voyage,
      name: "kapreign",
    },
    {
      img: nexcure,
      name: "kapreign",
    },
    {
      img: student,
      name: "kapreign",
    },
    {
      img: vista,
      name: "kapreign",
    },
    {
      name: "kapreign",
      img: bull,
    },
    {
      name: "See More",
    },
  ];
  const handleClick = (e) => {
    e.preventDefault();
    popupStats(!popup);
  };
  return (
    <section className={`pt-7 pb-14 relative ${theme ? "bg-blaack" : "bg-white"}`}>
      <div className="container px-2 md:px-8 mx-auto sm:px-12 lg:px-20 flex items-center flex-col">
        <h1 className="text-m font-bold tracking-wide text-center text-kap uppercase mb-7">
          our happy clients
        </h1>
        <div className="flex flex-col items-center justify-center grid md:grid-cols-4 grid-cols-2 md:grid-cols-4 md:gap-4">
          {projects.map((images) => (
            <div
              key={images.name}
              className="flex items-center justify-center flex items-center w-full w-44 h-32 mb-3 text-lg bg-lightBlue rounded-md hover:bg-kap m-[2px]"
            >
              {images.img ? (
                <img
                  src={images.img}
                  alt="Disney Plus"
                  className="block object-contain h-12"
                />
              ) : (
                <a href="#" onClick={(e) => handleClick(e)}>
                  {images.name}
                </a>
              )}
            </div>
          ))}
        </div>
        {popup && <Popup />}
      </div>
    </section>
  );
}
