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
      <SkillBox
        svg={bootstrap}
        class={"bootstrap"}
        rotate={-3.58}
        description={"Bootstrap had my heart but Tailwind took over."}
      />
      <SkillBox
        svg={css3}
        class={"css3"}
        rotate={10.68}
        description={
          "I focus on pixel perfect solutions for better user experience and it would simply not be possible without CSS."
        }
      />
      <SkillBox
        svg={figma}
        class={"figma"}
        rotate={-10.49}
        description={
          "Figma helps me sharpen my eye for details by making pixel perfect wireframes and designs."
        }
      />
      <SkillBox
        svg={firebase}
        class={"firebase"}
        rotate={13.05}
        description={
          "My focus is mostly on Frontend and Firebase helps me handle Backend related stuff with ease whenever needed."
        }
      />
      <SkillBox
        svg={html5}
        class={"html5"}
        rotate={-4.12}
        description={
          "HTML is the core of web development. I structure content to be universally accessible."
        }
      />
      <SkillBox
        svg={js}
        class={"js"}
        rotate={-25}
        description={
          "I make my ideas work by using JavaScript, ensuring optimal performance."
        }
      />
      <SkillBox
        svg={react}
        class={"react"}
        rotate={25.68}
        description={
          "React is my framework of choice. It enables me to craft scalable projects with ease."
        }
      />
      <SkillBox
        svg={redux}
        class={"redux"}
        rotate={-25}
        description={
          "In case of large projects I use Redux for clean and centralized state menagement. In case of simpler projects, Context API and Reducers do just fine."
        }
      />
      <SkillBox
        svg={sass}
        class={"sass"}
        rotate={-23.92}
        description={
          "SASS makes dealing with CSS a lot simpler and cleaner and comes in handy for precise structuring and reusability."
        }
      />
      <SkillBox
        svg={ts}
        class={"ts"}
        rotate={14.64}
        description={
          "Some projects require high precision and code maintainability which is why I opt for TypeScript."
        }
      />
      <SkillBox
        svg={vue}
        class={"vue"}
        rotate={17.42}
        description={
          "Vue is my second framework of choice due to it's simplicity and excellent performance on smaller projects."
        }
      />
      <SkillBox
        svg={framermotion}
        class={"framermotion"}
        rotate={-25}
        description={
          "I use FramerMotion for all my animations. The idea is to bring pages to life."
        }
      />
      <SkillBox
        svg={tailwind}
        class={"tailwind"}
        rotate={-20.58}
        description={
          "Sometimes I prioritize speed and code-file simplicity which is exactly when Tailwind comes in handy."
        }
      />
    </motion.div>
  );
}

export default SkillsContainer;
