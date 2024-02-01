import React, { useState, useEffect } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Banners from "../Components/Banners";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
// import Teams from "../Components/Teams";
import Landing from "../Layouts/Landing";
import Banr from "../Components/Banr";
import Navmob from "../Components/Navmob";
import options from "../Components/Particles";
import ContactUs from "../Components/ContactUs";
import styled from "styled-components";
import photo from "../Assets/Images/about.jpg";
import vision from "../Assets/Images/vision.svg";
import proven from "../Assets/Images/proven.svg";
import expertise from "../Assets/Images/expertise1.svg";
import Technological from "../Assets/Images/tech process.svg";
import ClientImg from "../Assets/Images/CLIENT.svg";

import whybg from "../Assets/Images/whybg.jpg";
import "./About.css";
import Carousel from "../Components/Carousel";
import AboutCard from "../Components/AboutCard/AboutCard";
import MultiLayerParallax from "../Components/MultilayerParallax/multilayerParalax";

export default function About() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
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

  const themeChanger = () => {
    setTheme(!theme);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  const menuOpen = () => {
    setMenu(!menu);
  };
  menu && console.log("ok");

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

  return (
    <div style={{ backgroundColor: "black" }}>
      {/* <div className="example-container">
        <Carousel Heading="Pioneering Digital Transformation" titlestyle="100" />
      </div> */}
      <MultiLayerParallax Heading="KAPREIGN" />
      <div className={`relative `}>
        <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
          <img
            className="w-auto h-full"
            src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
            alt=""
          />
        </div>
      </div>

      <div style={{ backgroundColor: "black" }} >
        <div className="aboutDetails mt-4">
          <div className="aboutText p-2">
            Kapreign, established in 2020 and headquartered in Angamaly, Kochi,
            Kerala, India, is a dynamic software development company on a
            mission to drive innovation in the realm of digital transformation.
            Comprising a dedicated team, we are committed to ushering in
            positive change and delivering impactful solutions.
          </div>
        </div>
        <div>
          <AboutCard
            photo={vision}
            cardPosition="left"
            heading="Our Vision"
            content="At Kapreign, we envision a world where technology catalyzes growth, efficiency, and
        seamless user experiences. Our passion for excellence fuels our pursuit of cutting-edge
        solutions that empower businesses and individuals alike."
            animationCardVariants={animationCardVariants}
            scrollY={scrollY}
            limit={200}
          />
          <AboutCard
            photo={proven}
            cardPosition="right"
            heading="Proven Track Record"
            content="Having successfully served over 10 clients in both the UAE and India, we take pride in our
        track record of delivering results that exceed expectations. Our commitment to client
        satisfaction is reflected in the lasting relationships we've built."
            animationCardVariants={animationCardVariants}
            scrollY={scrollY}
            limit={700}
          />

          <AboutCard
            photo={expertise}
            cardPosition="left"
            heading="Comprehensive Expertise"
            content="We specialize in UI design, front-end and back-end development, and data analysis. Our
        holistic approach enables us to handle end-to-end software development projects, ensuring
        a cohesive and streamlined process from conceptualization to deployment."
            animationCardVariants={animationCardVariants}
            scrollY={scrollY}
            limit={1400}
          />
          <AboutCard
            photo={Technological}
            cardPosition="right"
            heading="Technological Process"
            content="Embracing the latest in technology, we thrive on innovation. Our proficiency lies in
        leveraging Javascript, React, and Node JS to craft solutions that stand out in today&#39;s dynamic
        digital landscape."
            animationCardVariants={animationCardVariants}
            scrollY={scrollY}
            limit={1900}
          />

          <AboutCard
            photo={ClientImg}
            cardPosition="left"
            heading="Client-Centric Approach"
            content="At Kapreign, we understand that every project is unique. We tailor our solutions to meet the
        specific needs of our clients, ensuring a bespoke and personalized approach. Our
        commitment to open communication and collaboration makes us a reliable partner in your
        journey towards digital excellence."
            animationCardVariants={animationCardVariants}
            scrollY={scrollY}
            limit={2400}
          />

          <div>
            <div className="Card">
              <div className="CardContent">
                <div className="CardHeading">Why Choose Kapreign</div>
                <div className="CardleftDetails">
                  <ul class="list-outside list-disc ">
                    <li className="whykapText">
                      Proven expertise in UI design, front-end and back-end
                      development, and data analysis.
                    </li>
                    <li className="whykapText">
                      End-to-end software development services.
                    </li>
                    <li className="whykapText">
                      Extensive experience serving clients in the UAE and India.
                    </li>
                    <li className="whykapText">
                      Proficiency in cutting-edge technologies, including
                      Javascript, React, and Node JS.
                    </li>
                    <li className="whykapText">
                      Client-centric approach focused on understanding and
                      meeting unique project requirements.
                    </li>
                    <li className="whykapText">
                      Explore the possibilities with Kapreign as we pave the way
                      for transformative digital solutions. Join us in shaping
                      the future of technology.
                    </li>
                  </ul>
                </div>
              </div>
              <img className="whyCardImage" src={whybg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
