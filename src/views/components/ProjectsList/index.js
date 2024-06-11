import React from "react";
import "./css/style.scss";
import { motion } from "framer-motion";

function ProjectsList() {
  const sliderTextVariants = {
    initialRight: {
      x: "10%",
    },
    animateRight: {
      x: "10%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
    initialLeft: {
      x: "-10%",
    },
    animateLeft: {
      x: "-10%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
    hover: {
      x: "-30%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 9,
      },
    },
  };

  return (
    <div className="projects_list">
      <a
        href="https://hungry-reservations.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          HUNGRY
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED WEB APPLICATION FOR MAKING RESERVATIONS IN LOCAL GREEK
            RESTAURANT. I EXPANDED APP TO MORE EXAMPLE RESTAURANTS FOR POTENTIAL
            COMMERCIAL USE IN THE FUTURE. APP IS MADE IN REACT AS A FRONTEND AND
            FIREBASE AS A BACKEND
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://main--popcorn-movies-shows.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          POPCORN TV&M
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY DEVELOPED WEB APPLICATION FOR BROWSING AND TRACKING MOVIES AND
            TV SHOWS. APP IS MADE IN REACT AS A FRONTEND FRAMEWORK AND FIREBASE
            AS A BACKEND TOOL. DATA IS PROVIDED BY TVDB API
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://main--illustrious-dusk-821b80.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialRight"
          animate="animateLeft"
          whileHover="hover"
        >
          A-Z WEBSHOP
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY DEVELOPED FRONTEND SIDE OF FUNCTIONAL WEBSHOP USING FREE
            PUBLIC API. WEBSHOP IS FOCUSED ON E-COMMERCE BY SELLING PRODUCTS
            FROM A TO Z. PROJECT IS DONE BY USING TYPESCRIPT IN REACT WITH
            FUNCTIONAL COMPONENTS
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://chatting-made-easy.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          CHAT APP
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            FULLY FUNCTIONAL SIMPLE CHATTING APPLICATION MADE IN VUE AS A
            FRONTEND FRAMEWORK AND FIREBASE AS A BACKEND TOOL FOR GOOGLE
            AUTHENTICATION LOGIN
          </motion.div>
        </motion.div>
      </a>
      <a
        href="https://www.jtmplast.rs/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialRight"
          animate="animateLeft"
          whileHover="hover"
        >
          JTM PLAST
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED A WEBSITE FOR A COMPANY THAT SELLS AND DISTRIBUTES
            WRAPPING MATERIAL. DEVELOPMENT WAS DONE IN VANILLA JAVASCRIPT HTML
            CSS AND BOOTSTRAP
          </motion.div>
        </motion.div>
      </a>
      {/* <a
        href="https://clinquant-cuchufli-8dff01.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="projects_list_link"
      >
        <motion.div
          className="projects_list_item"
          initial="initialLeft"
          animate="animateRight"
          whileHover="hover"
        >
          PORTFOLIO
          <motion.div
            className="projects_list_sliding_text"
            variants={sliderTextVariants}
          >
            DEVELOPED A SIMPLE FIRST PORTFOLIO FOR POSTING MY PROJECTS AND
            ACHIEVEMENTS. DEVELOPMENT WAS DONE IN REACT HTML JAVASCRIPT AND CSS.
            IT SHOWCASES MY PROGRESS ON A FRONTEND JOURNEY SO FAR
          </motion.div>
        </motion.div>
      </a> */}
    </div>
  );
}

export default ProjectsList;
