import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import "./css/style.scss";

const letterVariants = {
  // initial: { opacity: 0 },
  animate: { opacity: [0, 1] },
};

function AnimateWord(props) {
  return (
    <motion.span
      initial="initial"
      animate="animate"
      transition={{
        delay: 0.15,
        staggerChildren: 0.15,
        ease: "easeInOut",
      }}
    >
      {[...props.word].map((letter, index) => {
        return (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

export default AnimateWord;
