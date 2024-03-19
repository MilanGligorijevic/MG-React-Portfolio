import React, { useEffect, useRef, useState } from "react";
import "./css/style.scss";

import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Navigation from "../../components/Navigation";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";
import ContactSection from "../../components/ContactSection";
import AboutSection from "../../components/AboutSection";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

function Home() {
  const sliderTextVariants = {
    initial: {
      x: "-50%",
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 25,
      },
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", inView);
  }, [inView]);

  return (
    <div className="main_page">
      <Navbar />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <div className="skills_about_contact_container">
        <motion.div
          className="sliding_skillset_text"
          variants={sliderTextVariants}
          initial="initial"
          animate="animate"
        >
          SKILLSET SKILLSET SKILLSET SKILLSET SKILLSET SKILLSET SKILLSET
          SKILLSET SKILLSET SKILLSET
        </motion.div>
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Home;
