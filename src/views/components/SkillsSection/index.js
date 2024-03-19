import React, { useRef } from "react";
import "./css/style.scss";
import SkillsContainer from "../SkillsContainer";
import { motion, useScroll, useTransform } from "framer-motion";

function SkillsSection() {
  return (
    <motion.div className="skills_section" id="skills">
      <SkillsContainer />
    </motion.div>
  );
}

export default SkillsSection;
