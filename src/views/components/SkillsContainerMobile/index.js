import React, { useRef } from "react";
import "./css/style.scss";
import bootstrap from "../../assets/svgs/bootstrap.svg";
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

function SkillsContainerMobile() {
  return (
    <>
      <div className="skills_title_mobile">Skillset</div>
      <div className="skills_container_mobile">
        <SkillBox svg={bootstrap} class={"bootstrap"} rotate={-3.58} />
        <SkillBox svg={css3} class={"css3"} rotate={8.68} />
        <SkillBox svg={figma} class={"figma"} rotate={-5.49} />
        <SkillBox svg={firebase} class={"firebase"} rotate={10.05} />
        <SkillBox svg={html5} class={"html5"} rotate={-4.12} />
        <SkillBox svg={js} class={"js"} rotate={-15} />
        <SkillBox svg={react} class={"react"} rotate={12.68} />
        <SkillBox svg={redux} class={"redux"} rotate={-12} />
        <SkillBox svg={sass} class={"sass"} rotate={-15.92} />
        <SkillBox svg={ts} class={"ts"} rotate={10.64} />
        <SkillBox svg={vue} class={"vue"} rotate={10.42} />
        <SkillBox svg={framermotion} class={"framermotion"} rotate={-8} />
      </div>
    </>
  );
}

export default SkillsContainerMobile;
