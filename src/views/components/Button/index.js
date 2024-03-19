import React from "react";
import "./css/style.scss";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    backgroundColor: "#faf9f6",
    transition: {
      duration: 0.2,
    },
  },
};

function Button(props) {
  return (
    <motion.button className="btn" variants={buttonVariants} whileHover="hover">
      <a href={props.link} target="_blank">
        <div className="btn_text">{props.text}</div>
      </a>
    </motion.button>
  );
}

export default Button;
