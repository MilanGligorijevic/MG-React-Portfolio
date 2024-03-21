import React, { useEffect, useState } from "react";
import "./css/style.scss";
import { motion } from "framer-motion";
import AnimateWord from "../AnimateWord";
import NavbarMobile from "../NavbarMobile";
import MenuButton from "../MenuButton";

const sliderTextVariants = {
  initial: {
    x: "-22%",
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 25,
    },
  },
};

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMovement = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    console.log(window);
    window.addEventListener("mousemove", handleMovement);

    return () => {
      window.removeEventListener("mousemove", handleMovement);
    };
  }, []);

  const mouseVariants = {
    default: {
      x: mousePosition.x + 20,
      y: mousePosition.y + 10,
    },
  };

  return (
    <div className="hero_section">
      <motion.div
        className="cursor"
        variants={mouseVariants}
        animate="default"
      ></motion.div>
      {/* <NavbarMobile/> */}
      <MenuButton />
      <div className="hero_section-text">
        I'm Milan <br />
        <div className="svg_arrow">
          <svg
            width="585"
            height="124"
            viewBox="0 0 585 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M534.607 0.624368C533.571 0.289392 532.46 0.85759 532.125 1.89347C531.79 2.92936 532.358 4.04066 533.394 4.37563L534.607 0.624368ZM51.673 117.353C52.6963 116.981 53.2245 115.85 52.8529 114.827L46.7964 98.1515C46.4247 97.1282 45.2939 96.5999 44.2706 96.9716C43.2473 97.3433 42.719 98.4741 43.0907 99.4974L48.4743 114.32L33.6515 119.704C32.6282 120.075 32.1 121.206 32.4716 122.229C32.8433 123.253 33.9741 123.781 34.9974 123.409L51.673 117.353ZM533.394 4.37563C550.985 10.0642 563.279 14.934 571.009 19.0844C574.886 21.1659 577.494 23.0036 579.045 24.5879C580.622 26.199 580.804 27.2186 580.701 27.7848C580.588 28.4126 579.979 29.3711 578.01 30.5C576.099 31.5962 573.269 32.6394 569.502 33.6022C561.987 35.5228 551.198 37.0135 537.712 38.1596C483.76 42.7441 388.32 41.6939 292.652 41.9026C197.126 42.111 101.328 43.5738 47.0098 53.2464C33.4264 55.6652 22.2976 58.6195 14.3769 62.262C6.59488 65.8407 1.22643 70.4053 0.537227 76.4038C-0.148932 82.3758 3.94797 88.5897 11.8829 95.0872C19.9396 101.684 32.5197 109.043 50.1657 117.286L51.8344 113.714C34.2929 105.52 22.0598 98.3248 14.3807 92.0368C6.57982 85.6491 4.01825 80.6462 4.45398 76.8538C4.88666 73.0879 8.42046 69.3406 16.0241 65.8439C23.489 62.4111 34.2291 59.5268 47.701 57.1278C101.604 47.5291 197.009 46.0538 292.66 45.8451C388.169 45.6368 483.88 46.6907 538.046 42.0879C551.588 40.9371 562.639 39.4254 570.478 37.422C574.387 36.4228 577.612 35.2736 579.972 33.92C582.275 32.5992 584.153 30.8505 584.581 28.487C585.02 26.0617 583.797 23.8055 581.862 21.8296C579.901 19.8268 576.888 17.766 572.874 15.6109C564.823 11.2879 552.255 6.33129 534.607 0.624368L533.394 4.37563Z"
              fill="url(#paint0_linear_9_8)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9_8"
                x1="336.779"
                y1="-2.00002"
                x2="336.779"
                y2="303.939"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC800" />
                <stop offset="0.800781" stop-color="#FFDB58" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        Aspiring{" "}
        <motion.span className="web">
          <AnimateWord word={"web"} />
        </motion.span>{" "}
        developer <br /> from Belgrade
      </div>
      <motion.div
        className="sliding_text_container"
        variants={sliderTextVariants}
        initial="initial"
        animate="animate"
      >
        PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS
        PROJECTS
      </motion.div>
    </div>
  );
}

export default HeroSection;
