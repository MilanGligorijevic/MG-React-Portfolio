import React from "react";
import "./css/style.scss";
import Button from "../Button";
import { easeInOut, motion } from "framer-motion";

const projectBoxVariants = {
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.25,
      ease: easeInOut,
    },
  },
};

function ProjectBox(props) {
  return (
    <motion.div
      className="project_box"
      variants={projectBoxVariants}
      whileHover="hover"
    >
      <div className="project_preview">
        <img src={props.image} alt="project_name" className="project_image" />
      </div>
      <div className="project_info">
        <div className="project_name">{props.name}</div>
        <Button className="btn_visit" text="Visit" link={props.link} />
      </div>
    </motion.div>
  );
}

export default ProjectBox;
