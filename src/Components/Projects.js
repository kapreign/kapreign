import { useState, useEffect, useRef } from "react";
import riod from "../Assets/Images/riod.svg";
import plug from "../Assets/Images/de.svg";
import nexcure from "../Assets/Images/nxcure.svg";
import student from "../Assets/Images/student.png";
import vista from "../Assets/Images/vista.svg";
import bull from "../Assets/Images/bls.svg";
import voyage from "../Assets/Images/lvw2.svg";
import React from "react";
import Popup from "./Popup";
import alive from "../Assets/Images/alive.svg";
import science from "../Assets/Images/sx.svg";
import quro from "../Assets/Images/quro.svg";
import buildingBG from "../Assets/Images/buildingBG.jpg";
import futuretree from "../Assets/Images/futureblue.jpg";


import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import "./projects.css";

export default function Projects(props) {
  const [popup, popupStats] = useState(false);
  const theme = props.theme;
  const projects = [
    {
      img: plug,
      name: "kapreign",
    },
    {
      name: "alive",
      img: alive,
    },
    {
      img: voyage,
      name: "kapreign",
    },
    {
      img: science,
      name: "scienceXpoleres",
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
      img: riod,
      name: "riod",
    },

    {
      img: quro,
      name: "quro",
    },
    {
      name: "See More",
    },
  ];
  const handleClick = (e) => {
    e.preventDefault();
    popupStats(!popup);
  };

  const Column = ({ images, y }) => {
    return (
      <motion.div className="column" style={{ y }}>
        {images.map((src, i) => {
          return (
            <div key={i} className="imageContainer">
              <img src={src} alt="imadge" fill />
            </div>
          );
        })}
      </motion.div>
    );
  };

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const images = [
    plug,
    alive,
    voyage,
    riod,
    science,
    vista,
    nexcure,
    voyage,
    bull,
    quro,
    nexcure,
    voyage,
  ];
  return (
    <section
      className={`pt-7 pb-14 relative ${theme ? "bg-blacked" : "bg-white"}`}
      // style={{
      //   background:
      //     "linear-gradient(359deg, rgba(0, 0, 0, 0.93) 68.2%, rgb(25 25 25) 78.9%)",
      // }}
    >
      <div className="container px-1 md:px-1 mx-auto sm:px-1 lg:px-1 flex items-center flex-col">
        <h1 className="text-m font-bold tracking-wide text-center text-kap uppercase mb-7">
          our happy clients
        </h1>
        <div   
        // style={{ backgroundImage: `url(${futuretree})` }}
        >
         
          <div
            ref={gallery}
            className="gallery"
            // style={{position:'absolute'}}
            style={{ backgroundImage: `url(${futuretree})`, backgroundSize:'cover' }}
          >
             {/* <div class="shade"></div> */}
           
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column images={[images[9], images[10], images[11]]} y={y4} />
          </div>
        </div>
        <div className="spacer"></div>

        {/* <div className=" items-center justify-center grid md:grid-cols-4 grid-cols-2 md:gap-4">
          {projects.map((images) => (
            <div
              key={images.name}
              className="flex items-center justify-center w-44 h-32 mb-3 text-lg rounded-md  m-[2px]"
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
        </div> */}
        {popup && <Popup />}
      </div>
    </section>
  );
}
