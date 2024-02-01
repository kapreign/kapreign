import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { motion } from "framer-motion";
import "./Landing.css";
import Cards from "../Components/Cards";
import CardVideo from "../Assets/video/Mobileapp.mp4";
import WebVideo from "../Assets/video/WebTemp.mp4";
import MarketingVideo from "../Assets/video/Dmarket.mp4";
import Bpo from "../Assets/video/bpo.mp4";

export default function Landing(props) {
  const theme = props.theme;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textAnimation = {
    opacity: 0,
    y: 100,
  };

  const animationVariants = {
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const animationCardVariants = {
    inView: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      y: 0,
      x: -25,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const animationCard2Variants = {
    inView: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      y: -25,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const animationCard3Variants = {
    inView: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      y: -25,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const animationCard4Variants = {
    inView: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    outOfView: {
      opacity: 0,
      y: 25,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      className={`h-auto w-full" ${theme ? "bg-dimBlack" : "bg-dimBlack"}`}
      // className={`h-auto w-full" ${theme ? "bg-blaack" : "bg-white"}`}
      // style={{
      //   background:
      //     "linear-gradient(359deg, rgba(0, 0, 0, 0.93) 68.2%, rgb(25 25 25) 78.9%)",
      // }}
    >
      <div className=" flex flex-col ">
        {/* <div className="m-3  p-6">
          <span className="font-rale font-black md:text-5xl text-2xl text-kap text-left">
            Collaborate
          </span>
          <span
            className={`font-rale font-black md:text-5xl text-2xl  text-left" ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {" "}
            for your digital experience
          </span> */}

        <motion.div
          initial="outOfView"
          animate={scrollY > 200 ? "inView" : "outOfView"}
          variants={animationVariants}
          // style={{
          //   position: "fixed",
          //   top: 0,
          //   left: 0,
          //   width: "100%",
          //   height: "100%",
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          {" "}
          <div className="m-3  p-6">
            <span className="font-rale font-black md:text-5xl text-2xl  text-white text-left">
            Collaborate with us for your
            </span>
            <span
              className={`font-rale font-black md:text-5xl text-2xl text-kap  text-left" ${
                theme ? "text-white" : "text-black"
              }`}
            >
              {" "}
               Digital Experience
            </span>
          </div>
          <motion.h1 style={textAnimation}>Hello, world!</motion.h1>
        </motion.div>
        {/* </div> */}

        <div className=" md:flex md:wrap md:justify-around ">
          <Cards
            title="Web"
            subtitle="Application"
            technologies="Web applications, E-Commerce, CMS, B2B, ERP/CRM"
            cardNo={1}
            cardIcon={
              <FontAwesomeIcon icon={brands("angular")} bounce color="white" />
            }
            scrollY={scrollY}
            animationCardVariants={animationCardVariants}
            CardVideo={WebVideo}
          />

          <Cards
            title="Mobile"
            subtitle="Application"
            technologies="Android & IOS Applications, E-Commerce, Native Applications"
            cardNo={2}
            cardIcon={
              <FontAwesomeIcon
                icon={brands("app-store-ios")}
                bounce
                color="white"
              />
            }
            scrollY={scrollY}
            animationCardVariants={animationCard2Variants}
            CardVideo={CardVideo}
          />
          <Cards
            title="Digital"
            subtitle="Marketing"
            technologies="Web Analytics, SEO, Email Marketing & Social Media Marketing"
            cardNo={3}
            cardIcon={
              <FontAwesomeIcon
                icon={solid("money-bill-trend-up")}
                bounce
                color="white"
              />
            }
            scrollY={scrollY}
            animationCardVariants={animationCard3Variants}
            CardVideo={MarketingVideo}
          />
          {/* <Cards
            title="Business Process "
            subtitle="Outsourcing"
            technologies="IT Consulting, Data Analytics, Marketing Solutions"
            cardNo={4}
            cardIcon={
              <FontAwesomeIcon icon={solid("headset")} bounce color="white" />
            }
            scrollY={scrollY}
            animationCardVariants={animationCard4Variants}
            CardVideo={Bpo}
          /> */}
        </div>
      </div>
    </div>
  );
}
<a
  href="#_"
  class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
>
  <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
  <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
  <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
  <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
    Button Text
  </span>
</a>;
