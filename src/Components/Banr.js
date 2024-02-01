import React, { useEffect, useState } from "react";
import Carouselimg1 from "../Assets/Images/1w.png";
import Carouselimg2 from "../Assets/Images/2w.png";
import Carouselimg3 from "../Assets/Images/3w.png";
import Carouselimg4 from "../Assets/Images/4w.png";
import Carouselimg5 from "../Assets/Images/5w.png";
import "./banrcarousel.css";
import { motion } from "framer-motion";

export default function Banr(props) {
  const theme = props.theme;
  const [scrollY, setScrollY] = useState(0);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(handleNext, 3000); // Set the interval duration (e.g., 3000ms = 3 seconds)
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoPlay]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  const images = [
    Carouselimg1,
    Carouselimg2,
    Carouselimg3,
    Carouselimg4,
    Carouselimg5,
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const animationVariants = {
    inView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      x: -50,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };



  return (
    <div className={`relative ${theme ? "bg-blacked" : "bg-blacked"}`}>
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-auto h-full"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt=""
        />
      </div>

      <section className="relative py-2 sm:py-6 lg:py-4 lg:pb-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            // style={{backgroundColor:'yellow'}}
            className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8"
          >
            <div>
              <div
                className={`text-center lg:text-left ${
                  theme ? "text-white" : "text-black"
                } `}
              >
                <h1 className="font-rale md:text-4xl text-2xl font-bold md:text-center text-left leading-tight sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Empowering Success in Your Digital Reign
                </h1>

                <motion.div
                  initial="outOfView"
                  animate={scrollY > 2 ? "inView" : "outOfView"}
                  variants={animationVariants}
                >
                  <p className="mt-2 text-lg md:text-center text-left text-gray-400 sm:mt-8 font-inter">
                    Welcome to Kapreign, your premier destination for tailored
                    web and mobile solutions in Kerala. As a dedicated web and
                    mobile app development company, we are committed to
                    delivering excellence in digital solutions. From responsive
                    web design to innovative mobile app development, we blend
                    expertise and innovation to drive your online success.
                    Partner with Kapreign for your journey towards
                    digital excellence.
                  </p>
                </motion.div>

                <div className="relative flex flex-col sm:flex-row sm:space-x-4 mt-8 sm:mt-10 justify-center">
                  <a
                    href="/contactUs"
                    className="flex items-center w-full px-10  py-3 mb-3 text-lg text-white bg-blue rounded-md sm:mb-0 hover:bg-kapblue sm:w-auto"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div
            // style={{backgroundColor:'red'}}
            >
              <div className="">
                <div className="flex items-center flex-col justify-center  h-72 md:h-screen">
                  {images.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={image}
                      className="rounded-[12px]"
                      initial="center"
                      animate={positions[positionIndexes[index]]}
                      variants={imageVariants}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: isMobile ? "40%" : "15%",
                        position: "absolute",
                      }}
                    />
                  ))}
                  {/* <div className="flex flex-row gap-3">
                    <button
                      className="text-white mt-[400px]  rounded-md py-2 px-4"
                      style={{backgroundColor:'red'}}
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
