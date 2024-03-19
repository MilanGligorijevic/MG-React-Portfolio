import React from "react";
import "./css/style.scss";
import { easeIn, easeInOut, motion } from "framer-motion";

function SkillBox(props) {
  const skillVariants = {
    initial: {
      rotate: props.rotate,
    },
    hover: {
      scale: 1.2,
      zIndex: 100,
      transition: {
        ease: easeIn,
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      className={`skill_box ${props.class}`}
      variants={skillVariants}
      initial="initial"
      whileHover="hover"
    >
      <img src={props.svg} alt="skill"></img>
    </motion.div>
  );
}

export default SkillBox;
