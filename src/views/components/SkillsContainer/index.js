import React, { useRef } from "react";
import "./css/style.scss";
import bootstrap from "../../assets/svgs/bootstrap.svg";
import tailwind from "../../assets/svgs/tailwind.svg";
import css3 from "../../assets/svgs/css3.svg";
import figma from "../../assets/svgs/figma.svg";
import firebase from "../../assets/svgs/firebase.svg";
import html5 from "../../assets/svgs/html5.svg";
import js from "../../assets/svgs/js.svg";
import react from "../../assets/svgs/react.svg";
import redux from "../../assets/svgs/redux.svg";
import sass from "../../assets/svgs/sass.svg";
import ts from "../../assets/svgs/ts.svg";
import vue from "../../assets/svgs/vue.svg";
import framermotion from "../../assets/svgs/framermotion.svg";

import SkillBox from "../SkillBox";
import { motion, useScroll, useTransform } from "framer-motion";

function SkillsContainer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const paddingChange = useTransform(scrollYProgress, [0, 1], [0, 40]);
  return (
    <motion.div
      className="skills_container"
      ref={ref}
      style={{ padding: paddingChange }}
    >
      <SkillBox svg={bootstrap} class={"bootstrap"} rotate={-3.58} />
      <SkillBox svg={css3} class={"css3"} rotate={10.68} />
      <SkillBox svg={figma} class={"figma"} rotate={-10.49} />
      <SkillBox svg={firebase} class={"firebase"} rotate={13.05} />
      <SkillBox svg={html5} class={"html5"} rotate={-4.12} />
      <SkillBox svg={js} class={"js"} rotate={-25} />
      <SkillBox svg={react} class={"react"} rotate={25.68} />
      <SkillBox svg={redux} class={"redux"} rotate={-25} />
      <SkillBox svg={sass} class={"sass"} rotate={-23.92} />
      <SkillBox svg={ts} class={"ts"} rotate={14.64} />
      <SkillBox svg={vue} class={"vue"} rotate={17.42} />
      <SkillBox svg={framermotion} class={"framermotion"} rotate={-25} />
      <SkillBox svg={tailwind} class={"tailwind"} rotate={-20.58} />
    </motion.div>
  );
}

export default SkillsContainer;
