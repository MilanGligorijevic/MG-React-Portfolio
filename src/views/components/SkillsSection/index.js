import React from "react";
import "./css/style.scss";
import SkillsContainer from "../SkillsContainer";
import SkillsContainerMobile from "../SkillsContainerMobile";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { mobileScreen } from "../../utils/screenSizes";

function SkillsSection() {
  //media queries
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileScreen}px)`,
  });

  return (
    <motion.div className="skills_section" id="skills">
      {isMobile ? <SkillsContainerMobile /> : <SkillsContainer />}
    </motion.div>
  );
}

export default SkillsSection;
