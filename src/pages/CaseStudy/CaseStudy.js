import React, { useState, useEffect } from "react";
import { loadFull } from "tsparticles";
import Carousel from "../../Components/Carousel";
import AboutCard from "../../Components/AboutCard/AboutCard";
import DE from "../../Assets/Images/DE_CASE.svg";
import proven from "../../Assets/Images/proven.svg";
import expertise from "../../Assets/Images/expertise1.svg";
import KAPCASE from "../../Assets/Images/KPSTORE.svg";
import SX from "../../Assets/Images/kap-case.svg";
import EV from "../../Assets/Images/ev 1.svg";

import ClientImg from "../../Assets/Images/CLIENT.svg";
import "./CaseStudy.css";
import AnimatedCard from "../../Components/AnimatedCard";
import jsonData from "./content.json";
import TopBanner from "../../Components/Topbanner/TopBanner";
import CaseStudyImg from "../../Assets/Images/casestudy.svg"

export default function CaseStudy({ children }) {
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

  // console.log(scrollY, "scrollY");

  return (
    <div>
      <div
      //  className="example-container"
      >
        {/* <Carousel Heading="Case Study" titlestyle="100" /> */}
        <TopBanner Heading="Case Study" titlestyle="100"
         SideHead={false}
        BgImage={CaseStudyImg}/>
      </div>
      <div style={{ backgroundColor: "black" }}>
        {/* <AnimatedCard
          emoji={SX}
          hueA={340}
          hueB={10}
          heading="Transforming education digitally with an innovative LMS platform"
          content="In collaboration with a leading edtech company in UAE, kapreign embarked on a
          groundbreaking journey to revolutionize online education through the development of a
          state-of-the-art learning management system (lms) platform. The goal was to enhance the
          overall learning experience, streamline administrative processes, and provide a robust
          foundation for the future of digital education."
          path="/caseStudyView"
          DetailedContent={jsonData[0]}
        /> */}

        {/* <AnimatedCard
          emoji={vision}
          hueA={340}
          hueB={10}
          heading="Solar dashboard"
          content="Illuminating insights - solar dashboard development.
          Kapreign embarked on a visionary project to develop a solar dashboard, an advanced
          monitoring and analytics platform. The objective was to empower users with real-time
          insights into solar energy production, consumption, and environmental impact. Leveraging
          cutting-edge technologies such as node.js and react, the solar dashboard aimed to
          revolutionize how users interact with and optimize their solar energy systems.
          "
          path="/caseStudyView"
          DetailedContent={jsonData[1]}
        /> */}

        {/* <AnimatedCard
          emoji={vision}
          hueA={340}
          hueB={10}
          heading="EV charging app"
          content="Kapreign took on the challenge of developing a cutting-edge electric vehicle (ev) charging
          app. The goal was to create a user-friendly and feature-rich application that seamlessly
          connects electric vehicle users with charging stations. Leveraging react for the front end and
          node.js for the backend, the ev charging app aimed to redefine the charging experience for
          electric vehicle owners."
          path="/caseStudyView"
          DetailedContent={jsonData[2]}
        /> */}

        <AboutCard
          photo={SX}
          cardPosition="left"
          heading="Transforming education digitally with an innovative LMS platform"
          content="In collaboration with a leading edtech company in UAE, kapreign embarked on a
          groundbreaking journey to revolutionize online education through the development of a
          state-of-the-art learning management system (lms) platform. The goal was to enhance the
          overall learning experience, streamline administrative processes, and provide a robust
          foundation for the future of digital education."
          animationCardVariants={animationCardVariants}
          scrollY={scrollY}
          limit={200}
          path="/caseStudyView"
          DetailedContent={jsonData[0]}
          readButton={true}
        />
        <AboutCard
          photo={DE}
          cardPosition="left"
          heading="Solar Dashboard"
          content="Illuminating insights - solar dashboard development.
          Kapreign embarked on a visionary project to develop a solar dashboard, an advanced
monitoring and analytics platform. The objective was to empower users with real-time
insights into solar energy production, consumption, and environmental impact. Leveraging
cutting-edge technologies such as node.js and react, the solar dashboard aimed to
revolutionize how users interact with and optimize their solar energy systems.
          "
          animationCardVariants={animationCardVariants}
          scrollY={scrollY}
          limit={500}
          path="/caseStudyView"
          DetailedContent={jsonData[1]}
          readButton={true}
        />

        <AboutCard
          photo={EV}
          cardPosition="left"
          heading="EV Charging App"
          content="Kapreign took on the challenge of developing a cutting-edge electric vehicle (ev) charging
          app. The goal was to create a user-friendly and feature-rich application that seamlessly
          connects electric vehicle users with charging stations. Leveraging react for the front end and
          node.js for the backend, the ev charging app aimed to redefine the charging experience for
          electric vehicle owners."
          animationCardVariants={animationCardVariants}
          scrollY={scrollY}
          limit={700}
          path="/caseStudyView"
          DetailedContent={jsonData[2]}
          readButton={true}
        />

        <AboutCard
          photo={KAPCASE}
          cardPosition="left"
          heading="Kapstore"
          content="In the fast-paced world of retail, the need for efficient and reliable billing solutions is paramount. Kapstore, a cutting-edge billing software developed by Kapreign, emerges as a game-changer for supermarkets and kirana shops, addressing the complexities of day-to-day billing operations."
          animationCardVariants={animationCardVariants}
          scrollY={scrollY}
          limit={900}
          path="/caseStudyView"
          DetailedContent={jsonData[3]}
          readButton={true}
        />
      </div>
    </div>
  );
}
