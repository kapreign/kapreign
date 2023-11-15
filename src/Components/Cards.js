import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedText";
// import ReactPlayer from "react-player";
// import CardVideo from "../Assets/video/Mobileapp.mp4";
import ReactPlayer from 'react-player'

export default function Cards({
  title,
  subtitle,
  technologies,
  cardNo,
  cardIcon,
  scrollY,
  animationCardVariants,
  CardVideo,
}) {
  const videoRef = useRef(null);
  const [replay, setReplay] = useState(true);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  // useEffect(() => {
  //   const video = videoRef.current;
   
  //   if (scrollY == 200) {
  //     console.log(scrollY,"scrollY")
  //     video.play();
  //   }
  // }, [scrollY]);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      console.log("played")
      video.play();
    }
  };

  // const handleMouseLeave = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.pause();
  //   }
  // };

  // Placeholder text data, as if from API
  const placeholderText = [
    {
      type: "heading1",
      text: title,
      className: "card__title text-black font-bold text-xl m-2",
    },
    {
      type: "heading1",
      text: subtitle,
      className: "card__title text-black font-bold text-xl m-2",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      initial="outOfView"
      animate={scrollY > 200 ? "inView" : "outOfView"}
      variants={animationCardVariants}
      className={`card z-10 md:w-96`}
    >
      {/* <div className={`card card-${cardNo} z-10 md:w-96`}> */}
      {/* <div className="card__icon">{cardIcon}</div>
      <h2 className="card__title text-black font-bold text-xl">{title}</h2>
      <div className="overflow-auto flex m-2">{technologies}</div>
      <p className="card__apply text-gray text-sm">
        <a className="card__link text-sm" href="https://wa.me/9497656243">
          Contact us<i className="fas fa-arrow-right"></i>
        </a>
      </p> */}
      <div
       onMouseEnter={handleMouseEnter} 
      //  onMouseLeave={handleMouseLeave}
      >
        <video ref={videoRef} autoplay loop id={`video-${cardNo}`} muted>
          <source src={CardVideo} type="video/mp4"></source>
        </video>
        {/* <div  style={{maxWidth:'100px'}}>
          <ReactPlayer style={{width:'200px'}} url={CardVideo} controls={false} loop={true} />
        </div> */}
        <div>
          {/* <h2 className="card__title text-black font-bold text-xl">{title}</h2> */}
          <div className="m-2">
            <motion.div
              className="App"
              initial="hidden"
              animate={scrollY > 200 ? "visible" : "hidden"}
              variants={container}
            >
              <div>
                {placeholderText.map((item, index) => {
                  return <AnimatedCharacters {...item} key={index} />;
                })}
              </div>
            </motion.div>
          </div>
          <div className="overflow-auto flex m-2">{technologies}</div>
          <p className="card__apply text-gray text-sm">
            <a className="card__link text-sm" href="https://wa.me/9497656243">
              Contact us<i className="fas fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
