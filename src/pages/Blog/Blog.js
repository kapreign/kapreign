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
import "./styles.css";
import AnimatedCard from "../../Components/AnimatedCard";
import { useLocation } from "react-router-dom";
import MultiLayerParallax from "../../Components/MultilayerParallax/multilayerParalax";

export default function Blog({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  const Data = ["React", "Node JS", "Express JS"];

  return (
    <div style={{ backgroundColor: "red" }}>
      <div>
        <Carousel
          Heading={location?.state?.heading}
          subHead={Data?.DetailedContent?.CaseStudy?.Client}
          titlestyle="50"
        />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <AboutCard
          photo={vision}
          cardPosition="left"
          heading={Data?.DetailedContent?.CaseStudy?.Title}
          content={Data?.DetailedContent?.Overview}
          animationCardVariants={animationCardVariants}
          scrollY={scrollY}
          limit={250}
        />
        <div style={{ color: "white", textAlign: "left", padding: "50px" }}>
          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4">
            <div>
              <div className="Caseheading">Our strength</div>
              <div>
                {Data.map((data) => (
                  <button
                    type="button"
                    class="text-white-700 hover:text-white border-2 border-white-800 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-white-500 dark:text-white-500 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-white-800"
                  >
                    {data}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10">
            <div>
              <h1 className="Caseheadinglarge"> Why Node JS?</h1>
              <div className="alignpmargin">
                Software Development methodologies Used? What is Project
                Management? Agile Project Management?
              </div>
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
                <h2 className="Caseheadinglarge">
                  Digital Transformation: How Software Development is
                  Revolutionizing Businesses
                </h2>
                <p className="alignpmargin Casesubheading">
                  In today's rapidly evolving world, businesses are constantly
                  seeking ways to stay ahead of the curve and remain
                  competitive. The key to achieving this lies in embracing
                  digital transformation, a process that is revolutionizing
                  industries across the globe. At the heart of this
                  transformation is software development, providing businesses
                  with the tools they need to unlock innovation, streamline
                  operations, and drive growth. In this blog post, we will
                  explore the role of software development in digital
                  transformation and how it is changing the way businesses
                  operate.
                </p>
              </div>
            </div>
          </div>

          <h2 className="Caseheadinglarge" style={{ textAlign: "center" }}>
            What is Digital Transformation?
          </h2>

          <p  className="alignpmargin Casesubheading">
            Digital transformation refers to the integration of digital
            technologies into all areas of a business, fundamentally changing
            how it operates and delivers value to customers. It involves
            leveraging technologies such as cloud computing, data analytics,
            artificial intelligence, and the Internet of Things (IoT) to
            transform business processes, enhance customer experiences, and
            create new revenue streams.
          </p>

          <div style={{ position: "relative", display: "flex" }}>
            <img className="CardImage" src={Futurestep} alt="" />
            <div
              style={{ position: "absolute", alignSelf: "center" }}
              class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10 ml-10"
            >
              <div>
                <h2
                  className="Caseheadinglarge"
                  style={{ textAlign: "center" }}
                >
                  Future Steps
                </h2>
                <p className="alignpmargin ">
                  {" "}
                  {Data?.DetailedContent?.FutureSteps}
                </p>
              </div>
            </div>
          </div>

          <h2 className="Caseheadinglarge">conclusion</h2>
          <p className="alignpmargin"> {Data?.DetailedContent?.Conclusion}</p>
        </div>
      </div>
    </div>
  );
}
