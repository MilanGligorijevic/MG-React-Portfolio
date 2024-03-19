import React, { useState } from "react";
import "./css/style.scss";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import scrollWithOffset from "../../utils/functions";

const navigationVariants = {
  hidden: {
    y: "700%",
  },
  visible: {
    y: -140,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const buttonHover = {
  backgroundColor: "#222222",
  height: 48,
  borderRadius: 30,
  color: "#ffffff",
};

function Navigation() {
  const { scrollY } = useScroll();
  const [hidenNavigation, setHidenNavigation] = useState(true);

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue > 160) {
      setHidenNavigation(false);
    } else {
      setHidenNavigation(true);
    }
  });

  return (
    <motion.div
      className="main_navigation"
      variants={navigationVariants}
      animate={hidenNavigation ? "hidden" : "visible"}
    >
      <motion.button className="link_btn" whileHover={buttonHover}>
        <Link
          className="link"
          to="#projects"
          smooth
          scroll={(el) => scrollWithOffset(el)}
        >
          Projects
        </Link>
      </motion.button>
      <motion.button className="link_btn" whileHover={buttonHover}>
        <Link
          className="link"
          to="#skills"
          smooth
          scroll={(el) => scrollWithOffset(el)}
        >
          Skills
        </Link>
      </motion.button>
      <motion.button className="link_btn" whileHover={buttonHover}>
        <Link
          className="link"
          to="#about"
          smooth
          scroll={(el) => scrollWithOffset(el)}
        >
          About
        </Link>
      </motion.button>
      <motion.button className="link_btn" whileHover={buttonHover}>
        <Link className="link" to="#contact" smooth>
          Contact
        </Link>
      </motion.button>
    </motion.div>
  );
}

export default Navigation;
