import React, { useEffect, useRef } from "react";
import "./css/style.scss";
import ProjectBox from "../ProjectBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import popcornImage from "../../assets/img/popcornimage.PNG";
import webshopImage from "../../assets/img/webshop.PNG";
import chatAppImage from "../../assets/img/chatappimage.PNG";
import oldPortfolioImage from "../../assets/img/oldportfolio.PNG";
import jtmPlastImage from "../../assets/img/jtmplastimage.PNG";
import hungryApp from "../../assets/svgs/hungryApp.svg";
import popcornApp from "../../assets/svgs/popcorapp.svg";
import azWebShop from "../../assets/svgs/azwebshop.svg";
import chatApp from "../../assets/svgs/chatapp.svg";
import jtmPlast from "../../assets/svgs/jtmplast.svg";
import resumeLogo from "../../assets/svgs/resume.svg";
import { useInView, useScroll, useTransform } from "framer-motion";
import AnimateWord from "../AnimateWord";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import {
  mobileScreen,
  smallerTabletScreen,
  largeMobileScreen,
} from "../../utils/screenSizes";
import ProjectBoxMobile from "../ProjectBoxMobile";
import ProjectsList from "../ProjectsList";

function ProjectsSection() {
  //media queries
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileScreen}px)`,
  });
  const isSmallerTablet = useMediaQuery({
    query: `(max-width: ${smallerTabletScreen}px)`,
  });

  const isLargeMobile = useMediaQuery({
    query: `(max-width: ${largeMobileScreen}px)`,
  });

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0, 1], [0, 210]);
  if (isMobile) {
    y = 0;
  }

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", inView);
  }, [inView]);

  return (
    <motion.div
      className="projects_section"
      id="projects"
      ref={container}
      style={{ y: y }}
    >
      <div className="text_box" ref={ref}>
        <div className="text_title">
          Simple <br />{" "}
          <span className="beautiful">
            {inView ? <AnimateWord word="yet" /> : <></>}
          </span>{" "}
          beautiful
        </div>
        <div className="text_body">
          Handpicked collection of small but useful projects designed and
          developed by myself.
        </div>
      </div>
      {isMobile || isLargeMobile ? (
        <div>
          <ProjectBoxMobile
            name={"hungry"}
            image={hungryApp}
            link={"https://hungry-reservations.netlify.app/"}
          />
          <ProjectBoxMobile
            name={"Popcorn TV&M"}
            image={popcornApp}
            link={"https://main--popcorn-movies-shows.netlify.app/"}
          />
          <ProjectBoxMobile
            name={"A-Z webshop"}
            image={azWebShop}
            link={"https://main--illustrious-dusk-821b80.netlify.app/"}
          />
          <ProjectBoxMobile
            name={"ChatApp"}
            image={chatApp}
            link={"https://chatting-made-easy.netlify.app/"}
          />
          <ProjectBoxMobile
            name={"JTM Plast"}
            image={jtmPlast}
            link={"https://www.jtmplast.rs/"}
          />
        </div>
      ) : (
        <ProjectsList />
      )}
    </motion.div>
  );
}

export default ProjectsSection;
