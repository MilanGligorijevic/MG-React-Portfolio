import React, { useState } from "react";
import "./css/style.scss";
import { easeIn, easeInOut, motion } from "framer-motion";

function SkillBox(props) {
  const skillVariants = {
    initial: {
      rotate: props.rotate,
    },
    hover: {
      scale: 1.25,
      zIndex: 100,
      backgroundColor: "#222222",
      transition: {
        ease: easeIn,
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    hover: {
      opacity: [1, 0.4, 0.2, 0],
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 0.8,
      scale: 1.05,
      transition: {
        delay: 0.1,
        duration: 0.3,
        type: "tween",
        ease: "easeIn",
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
      <motion.p className="skill_box_text" variants={textVariants}>
        {props.description}
      </motion.p>
      <motion.img
        src={props.svg}
        className="skills_logo"
        alt="skill"
        variants={iconVariants}
      ></motion.img>
    </motion.div>
  );
}

export default SkillBox;
