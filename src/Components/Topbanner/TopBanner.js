import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../Assets/Images/aboutuscarousel.jpg";
import image2 from "../../Assets/Images/team carousel.jpg";
import "../Carousel.css";

const TopBanner = ({ Heading, titlestyle, subHead, BgImage }) => {

  // const imagePath = require(`../../${BgImage}`);
  // console.log(BgImage,"BgImage",imagePath)
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BgImage ? BgImage : image})`,
          backgroundSize: "cover",
          // opacity:'0.9'
        }}
        className="h-96"
      >
        <div
          // className={`text-center  `}
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            position: "relative",
            width: `${titlestyle}%`,
            // textAlign: "center",
            justifyContent: "center",
            padding:'20px'
          }}
        >
          <h1 className="sm:text-3xl text-3xl md:text-5xl text-white">
            {Heading}
          </h1>
          {subHead && (
            <h1
              style={{
                position: "absolute",
                bottom: 20,
                fontSize: "16px",
                color: "white",
                
              }}
            >
              {subHead}
            </h1>
          )}
        </div>

        {/* <section className="relative py-12 sm:py-16 lg:py-14 lg:pb-12">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center ">
              <div>
                <div
                //   className={`text-center  `}
                //   style={{ width: `${titlestyle}%`, textAlign: "left" }}
                >
                  <h1 className="sm:text-3xl text-white">
                    {Heading}
                  </h1>
                </div>
                {subHead && (
                  <h1
                    style={{
                      position: "absolute",
                      bottom: 20,
                      fontSize: "16px",
                      color: "white",
                    }}
                  >
                    {subHead}
                  </h1>
                )}
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default TopBanner;
