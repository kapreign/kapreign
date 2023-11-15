import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

export default function Card({
  emoji,
  hueA,
  hueB,
  heading,
  content,
  path,
  DetailedContent,
}) {
  //   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
  const background = ` linear-gradient(255deg, rgb(0 126 255), rgb(2 37 72))`;
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "green",
      }}
      onClick={() =>
        navigate(path, {
          state: { heading: heading, DetailedContent: DetailedContent },
        })
      }
    >
      <div style={{ width: "50%" }}>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="splash" style={{ background }} />
          <motion.div className="card-animated" variants={cardVariants}>
            {/* {emoji} */}
            <div>
              <img src={emoji} alt="emoji" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="CardHeading">{heading}</div>
        <div className="CardDetails">{content}</div>
      </div>
    </div>
  );
}

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  //   ["🍋", 60, 90],
  //   ["🍐", 80, 120],
  //   ["🍏", 100, 140],
  //   ["🫐", 205, 245],
  //   ["🍆", 260, 290],
  //   ["🍇", 290, 320],
];

// export default function AnimatedCard() {
//   return food.map(([emoji, hueA, hueB]) => (
//     <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
//   ));
// }
