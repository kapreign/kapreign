import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import image from "../Assets/Images/aboutuscarousel.jpg";
import image2 from "../Assets/Images/team carousel.jpg";
import "../Components/Carousel.css";

const images = [image, image2];
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Carousel = ({ Heading, titlestyle, subHead }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Autoplay settings
  const autoplayInterval = 5000; // Change slide every 5 seconds

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     paginate(1); // Go to the next slide
  //   }, autoplayInterval);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [page]);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            position: "absolute",
            // maxWidth: "100vw",
            maxHeight: "500px",
            width: "100%",
            backgroundColor: "black",
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      {/* <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div> */}

      <div
        style={{
          position: "absolute",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <section className="relative py-12 sm:py-16 lg:py-14 lg:pb-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center ">
              <div>
                <div
                  className={`text-center  `}
                  style={{ width: `${titlestyle}%`, textAlign: "left" }}
                >
                  <h1 className="font-rale md:text-3xl text-1xl  text-left leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj text-white">
                    {Heading}
                  </h1>

                 
                </div>
                {subHead && (
                    <h1 style={{ position: "absolute" , bottom:0,fontSize:'16px', color:'white'}}>{subHead}</h1>
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carousel;
