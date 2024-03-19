import React, { useEffect, useRef, useState } from "react";
import "./css/style.scss";
import ProjectBox from "../ProjectBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import webshopImage from "../../assets/img/webshop.PNG";
import chatAppImage from "../../assets/img/chatappimage.PNG";
import oldPortfolioImage from "../../assets/img/oldportfolio.PNG";
import jtmPlastImage from "../../assets/img/jtmplastimage.PNG";
import { useInView, useScroll, useTransform } from "framer-motion";
import AnimateWord from "../AnimateWord";
import { motion } from "framer-motion";

function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 210]);

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
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
      >
        <SwiperSlide className="slide ">
          <ProjectBox
            name={"A-Z webshop"}
            image={webshopImage}
            link={"https://main--illustrious-dusk-821b80.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ProjectBox
            name={"ChatApp"}
            image={chatAppImage}
            link={"https://chatting-made-easy.netlify.app/"}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ProjectBox
            name={"JTM Plast"}
            image={jtmPlastImage}
            link={"https://www.jtmplast.rs/"}
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <ProjectBox
            name={"First Portfolio"}
            image={oldPortfolioImage}
            link={"https://clinquant-cuchufli-8dff01.netlify.app/"}
          />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}

export default ProjectsSection;
