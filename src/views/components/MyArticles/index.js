import React, { useState } from "react";
import "./css/style.scss";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import MyArticlesSvg from "../../assets/svgs/myarticlessvg";

function MyArticles() {
  const { scrollY } = useScroll();
  const [hiddenArticles, setHiddenArticles] = useState(true);

  const myArticlesVariants = {
    hidden: {
      x: "200%",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (scrollValue) => {
    if (scrollValue > 160) {
      setHiddenArticles(false);
    } else {
      setHiddenArticles(true);
    }
  });

  return (
    <motion.div
      className="my_articles"
      variants={myArticlesVariants}
      animate={hiddenArticles ? "hidden" : "visible"}
    >
      <a
        href="https://main--mg-my-articles.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <MyArticlesSvg />
      </a>
    </motion.div>
  );
}

export default MyArticles;
