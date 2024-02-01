import React, { useState, useEffect } from "react";
import Energy from "../../Assets/Images/Energy.svg";
import Futurestep from "../../Assets/Images/Retail2 1.svg";
import Solution from "../../Assets/Images/education.svg";
import "./Service.css";
import { useLocation } from "react-router-dom";
import MultiLayerParallax from "../../Components/MultilayerParallax/multilayerParalax";
import TopBanner from "../../Components/Topbanner/TopBanner";
import ServiceCard from "./ServiceCard";
import ServiceImg from "../../Assets/Images/service.svg";

export default function Services({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
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
  const Data = location?.state;
  console.log(scrollY, "scrollY");

  const content = [
    "Welcome to Kapreign, a company that combines innovation, with industry expertise.",
    "We are an IT Software Development firm that specializes in providing state of the art solutions tailored to the requirements of the Energy,",
    " Education and Retail sectors. Our unwavering dedication to advancements and deep understanding of these industries enables us to achieve transformative results for businesses.",
  ];

  return (
    <div>
      <div>
        <TopBanner
          Heading={"Services"}
          subHead={Data?.DetailedContent?.CaseStudy?.Client}
          titlestyle="100"
          BgImage={ServiceImg}
          SideHead={false}
        />
      </div>
      <div style={{ backgroundColor: "black" }}>
        <div style={{ color: "white", textAlign: "left" }}>
          <ServiceCard />

          <div>
            {/* <ScrollText content={sampleText} /> */}
            {/* <TextColorAnimation content={sampleText}/> */}
            <h2 className="Caseheadinglarge p-10"></h2>
          </div>

          <div>
            {/* <img className="md:w-full w-4/5" src={globe} alt="challenge" /> */}
            <div style={{ textAlign: "center" }}>
              <MultiLayerParallax Heading="KAPREIGN" />
            </div>
          </div>
          <div className="p-4">
            <div className="w-full flext text-center serviceHead text-2xl mt-5 mb-g">
              We are Expert In
            </div>

            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10">
              <div>
                <h1 className="serviceHead text-2xl"> Energy Solutions</h1>
                <div className="serviceSubHead">
                  Leverage our software development skills to optimize your
                  energy operations. We offer efficient technologies that cover
                  a range of needs from smart grid management to renewable
                  energy solutions. By partnering with us your organization can
                  move towards a future.
                </div>
              </div>
              <div>
                <div style={{ textAlign: "center" }}>
                  <img className="CardImage" src={Energy} alt="" />
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
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "left",
                    flexDirection: "column",
                  }}
                >
                  <h2 className="serviceHead text-2xl">Education Expertise</h2>
                  <p className="serviceSubHead">
                    In the realm of education we are committed to
                    revolutionizing the learning experience. Our software
                    solutions cater specifically to the evolving needs of
                    institutions by integrating e learning platforms and
                    providing innovative tools for educators and students alike.
                    Additionally our Learning Management System (LMS) solutions
                    enhance educational delivery methods making online education
                    more engaging, accessible and efficient.
                  </p>
                </div>
              </div>
            </div>

            {!isMobile ? (
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  marginTop: "80px",
                }}
              >
                <img
                  className="CardImage"
                  style={{ opacity: "0.3" }}
                  src={Futurestep}
                  alt=""
                />
                <div
                  style={{ position: "absolute", alignSelf: "center" }}
                  class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10 ml-4"
                >
                  <div>
                    <h2 className="serviceHead text-2xl">Retail Reinvention</h2>
                    <p className="serviceSubHead">
                      In the paced world of retail our software development
                      prowess takes stage. Elevate your operations with our
                      solutions such, as e commerce platforms and inventory
                      management systems. These cutting edge tools enhance
                      customer experiences while driving business growth.
                    </p>
                    <p className="serviceSubHead ">
                      Here, at Kapreign our achievements are shaped by the
                      success stories we build with our clients. Take a look at
                      our portfolio. See for yourself how our expertise has
                      revolutionized businesses in the Energy, Education and
                      Retail industries. Come join us on this journey, towards
                      excellence. Becoming leaders in the field.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 mt-10">
                  <div>
                    <img
                      className="CardImage"
                      src={Futurestep}
                      alt="Futurestep img"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "left",
                      flexDirection: "column",
                    }}
                  >
                    <h2 className="serviceHead text-2xl">Retail Reinvention</h2>
                    <p className="serviceSubHead">
                      In the paced world of retail our software development
                      prowess takes stage. Elevate your operations with our
                      solutions such, as e commerce platforms and inventory
                      management systems. These cutting edge tools enhance
                      customer experiences while driving business growth.
                    </p>
                    <p className="serviceSubHead ">
                      Here, at Kapreign our achievements are shaped by the
                      success stories we build with our clients. Take a look at
                      our portfolio. See for yourself how our expertise has
                      revolutionized businesses in the Energy, Education and
                      Retail industries. Come join us on this journey, towards
                      excellence. Becoming leaders in the field.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
