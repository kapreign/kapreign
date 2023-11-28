import React, { useState, useEffect } from "react";
import { loadFull } from "tsparticles";
import Carousel from "../../Components/Carousel";
import AboutCard from "../../Components/AboutCard/AboutCard";
import vision from "../../Assets/Images/vision.svg";
import challenge from "../../Assets/Images/challenge.jpg";
import globe from "../../Assets/Images/globe.jpg";

import Challenges from "../../Assets/Images/Challenge (2).jpg";
import Futurestep from "../../Assets/Images/futurestep.jpg";
import Solution from "../../Assets/Images/solution.jpg";
import "./CaseStudyDetails.css";
import AnimatedCard from "../../Components/AnimatedCard";
import { useLocation } from "react-router-dom";
import MultiLayerParallax from "../../Components/MultilayerParallax/multilayerParalax";
import TopBanner from "../../Components/Topbanner/TopBanner";

export default function CaseStudyDetailed({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const location = useLocation();



  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  const themeChanger = () => {
    setTheme(!theme);
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
  const Data = location?.state;

  const servicesText =
    Data?.DetailedContent?.CaseStudy?.ServicesProvided?.join(", ");

  const TechnologiesUsed =
    Data?.DetailedContent?.CaseStudy?.TechnologiesUsed?.join(",");

  return (
    <div>
      <div>
        <TopBanner
          Heading={location?.state?.heading}
          subHead={Data?.DetailedContent?.CaseStudy?.Client}
          titlestyle="60"
        />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
            <div>
              <div className="outline outline-offset-2 outline-blue-500 rounded-lg p-5">
                <div className="Caseheading">Technologies used</div>
                <div className="mt-5">
                  {Data?.DetailedContent?.CaseStudy?.TechnologiesUsed.map(
                    (data) => (
                      <button
                        type="button"
                        class="text-white-700 hover:text-white border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800"
                      >
                        {data}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="outline outline-offset-2 outline-gray-500 rounded-lg p-5">
                <div className="Caseheading">Service provided </div>
                <div className="mt-5">
                  {Data?.DetailedContent?.CaseStudy?.ServicesProvided.map(
                    (data) => (
                      <button
                        type="button"
                        class="text-white-700 hover:text-white border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800"
                      >
                        {data}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
            <div>
              <h2 className="Caseheadinglarge">
                {Data?.DetailedContent?.CaseStudy?.Client}
              </h2>
              <h2 className="CasesPara">{Data?.DetailedContent?.Overview}</h2>
            </div>
            {/* <p className="alignpmargin">{Data?.DetailedContent?.Solution}</p> */}
            <div></div>
          </div>

          {/* <div>
            <div style={{ textAlign: "center" }}>
              <MultiLayerParallax Heading="KAPREIGN" />
            </div>
          </div> */}

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10">
            <div>
              <h1 className="Caseheadinglarge"> Challenges</h1>
              <ul className="">
                {Data?.DetailedContent?.Challenges.map((data) => (
                  <div className="CasesPara">{data}</div>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <img className="CardImage" src={Challenges} alt="" />
              </div>
            </div>
          </div>

          <div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10">
              <div>
                <img className="CardImage" src={Solution} alt="" />
              </div>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h2 className="Caseheadinglarge">Solution</h2>
                <p className="  CasesPara">{Data?.DetailedContent?.Solution}</p>
              </div>
            </div>
          </div>

          <h2 className="Caseheadinglarge" style={{ textAlign: "center" }}>
            Key Features
          </h2>

          {/* <ul className="alignpmargin"> */}
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10 mb-10">
            {Data?.DetailedContent?.KeyFeatures.map((data) => (
              <div className="CasesPara">{data}</div>
              // <li>{data}</li>
            ))}
          </div>
          {/* </ul> */}

          <div style={{ position: "relative", display: "flex" }}>
            <img className="CardImage" src={Futurestep} alt="" />
            <div
              style={{ position: "absolute", alignSelf: "center" }}
              class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10 "
            >
              <div>
                <h2
                  className="Caseheadinglarge"
                  // style={{ textAlign: "center" }}
                >
                  Future Steps
                </h2>
                <p className=" CasesPara">
                  {" "}
                  {Data?.DetailedContent?.FutureSteps}
                </p>
              </div>
            </div>
          </div>

          <h2 className="Caseheadinglarge">Conclusion</h2>
          <p className=" CasesPara"> {Data?.DetailedContent?.Conclusion}</p>
        </div>
      </div>
    </div>
  );
}
