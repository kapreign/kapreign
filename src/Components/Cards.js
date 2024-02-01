import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedText";
// import ReactPlayer from "react-player";
// import CardVideo from "../Assets/video/Mobileapp.mp4";

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

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      console.log("played");
      video.play();
    }
  };

  return (
    <motion.div
      initial="outOfView"
      animate={scrollY > 200 ? "inView" : "outOfView"}
      variants={animationCardVariants}
      className={`card z-10 md:w-96`}
    >
      <div onMouseEnter={handleMouseEnter}>
        <video ref={videoRef} autoplay loop id={`video-${cardNo}`} muted>
          <source src={CardVideo} type="video/mp4"></source>
        </video>
        <div>
          <div className="m-2">
            <div className="card__title ">{title}</div>
            <div className="card__title ">{subtitle}</div>
          </div>
          <div className="m-2 card__Subtitle pb-2">{technologies}</div>
        </div>
      </div>
    </motion.div>
  );
}
