import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Mountain from "../../Assets/Images/mount3.png";
import MountainBottom from "../../Assets/Images/mount2bottom.png";

export default function MultiLayerParallax({Heading}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 3], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid "
   
    >
      <motion.h1
        style={{ y: textY ,marginTop:'100px'}}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      >
        
        {Heading}
        {/* PARALLAX */}
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Mountain})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${MountainBottom})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
