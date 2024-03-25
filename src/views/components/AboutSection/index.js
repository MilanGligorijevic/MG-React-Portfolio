import React, { useEffect, useRef } from "react";
import "./css/style.scss";
import Button from "../Button";
import { motion, useInView } from "framer-motion";
import AnimateWord from "../AnimateWord";
import codeImage from "../../assets/img/codesnipper.PNG";
import { useMediaQuery } from "react-responsive";
import { mobileScreen } from "../../utils/screenSizes";

function AboutSection() {
  //media queries
  const isMobile = useMediaQuery({
    query: `(max-width: ${mobileScreen}px)`,
  });

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", inView);
  }, [inView]);

  const cvBoxFrontVariants = {
    initial: {
      rotate: -16.13,
    },
    hover: {
      rotate: -20,
      x: -10,
    },
  };

  const cvBoxBackVariants = {
    initial: {
      rotate: 6.17,
    },
    hover: {
      rotate: 10,
      x: 10,
    },
  };
  return (
    <div className="about_section" id="about">
      <div className="text_box">
        <div className="text_title">Hello!</div>

        <div className="text_body">
          My name is{" "}
          <span className="milan" ref={ref}>
            {inView ? <AnimateWord word="Milan" /> : <></>}
          </span>{" "}
          <br />
          I'm aspiring web developer based in Belgrade, Serbia. <br /> I strive
          for simple yet functional design in all aspects of my work.
        </div>
        {isMobile || (
          <div className="svg_about_arrow">
            <svg
              width="385"
              height="467"
              viewBox="0 0 385 467"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.90486 1.27591C0.817432 1.32846 -0.021508 2.25259 0.0310358 3.34002C0.0835797 4.42745 1.00771 5.26639 2.09514 5.21384L1.90486 1.27591ZM384.447 452.767C385.186 451.968 385.138 450.721 384.339 449.982L371.319 437.931C370.52 437.191 369.272 437.239 368.533 438.038C367.793 438.837 367.842 440.085 368.641 440.824L380.214 451.536L369.502 463.11C368.763 463.909 368.811 465.156 369.61 465.895C370.409 466.635 371.656 466.587 372.396 465.788L384.447 452.767ZM2.09514 5.21384C77.7506 1.55822 132.31 6.13035 170.916 16.8046C209.499 27.4724 231.961 44.178 243.76 64.6769C255.579 85.2099 256.918 109.924 252.442 137.064C247.965 164.207 237.719 193.511 226.654 223.06C215.616 252.537 203.754 282.279 196.211 310.049C188.673 337.799 185.344 363.92 191.635 386.138C197.971 408.519 213.973 426.632 244.343 438.468C274.609 450.263 319.223 455.867 383.076 453.398L382.924 449.458C319.277 451.92 275.298 446.3 245.774 434.795C216.355 423.329 201.373 406.064 195.428 385.064C189.437 363.903 192.53 338.641 200.016 311.082C207.496 283.543 219.259 254.051 230.346 224.442C241.406 194.906 251.785 165.273 256.332 137.705C260.879 110.134 259.64 84.3624 247.177 62.7102C234.695 41.0238 211.173 23.8449 171.967 13.0046C132.783 2.17073 77.7494 -2.38884 1.90486 1.27591L2.09514 5.21384Z"
                fill="black"
              />
              <path
                d="M1.90486 1.27591C0.817432 1.32846 -0.021508 2.25259 0.0310358 3.34002C0.0835797 4.42745 1.00771 5.26639 2.09514 5.21384L1.90486 1.27591ZM384.447 452.767C385.186 451.968 385.138 450.721 384.339 449.982L371.319 437.931C370.52 437.191 369.272 437.239 368.533 438.038C367.793 438.837 367.842 440.085 368.641 440.824L380.214 451.536L369.502 463.11C368.763 463.909 368.811 465.156 369.61 465.895C370.409 466.635 371.656 466.587 372.396 465.788L384.447 452.767ZM2.09514 5.21384C77.7506 1.55822 132.31 6.13035 170.916 16.8046C209.499 27.4724 231.961 44.178 243.76 64.6769C255.579 85.2099 256.918 109.924 252.442 137.064C247.965 164.207 237.719 193.511 226.654 223.06C215.616 252.537 203.754 282.279 196.211 310.049C188.673 337.799 185.344 363.92 191.635 386.138C197.971 408.519 213.973 426.632 244.343 438.468C274.609 450.263 319.223 455.867 383.076 453.398L382.924 449.458C319.277 451.92 275.298 446.3 245.774 434.795C216.355 423.329 201.373 406.064 195.428 385.064C189.437 363.903 192.53 338.641 200.016 311.082C207.496 283.543 219.259 254.051 230.346 224.442C241.406 194.906 251.785 165.273 256.332 137.705C260.879 110.134 259.64 84.3624 247.177 62.7102C234.695 41.0238 211.173 23.8449 171.967 13.0046C132.783 2.17073 77.7494 -2.38884 1.90486 1.27591L2.09514 5.21384Z"
                fill="url(#paint0_linear_11_82)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11_82"
                  x1="14.3443"
                  y1="257.813"
                  x2="14.3443"
                  y2="623.458"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC800" />
                  <stop offset="0.800781" stop-color="#FFDB58" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        )}
      </div>
      <div className="cv_resume_box">
        <div className="cv_box">
          <motion.div
            className="cv_box-back"
            variants={cvBoxBackVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.25 }}
          >
            <img className="code_image" src={codeImage} alt="code_photo" />
          </motion.div>
          <motion.div
            className="cv_box-front"
            variants={cvBoxFrontVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.25 }}
          >
            <div className="my_cv_title">MY CV</div>
            {/* cv text svg */}
            {isMobile || (
              <svg
                className="cv_svg"
                width="234"
                height="205"
                viewBox="0 0 234 205"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V29.1904H233.523V0H0ZM0 58.3809V87.5713H175.143V58.3809H0ZM0 116.762V145.952H233.523V116.762H0ZM0 175.143V204.333H175.143V175.143H0Z"
                  fill="#ffffff"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_148_17"
                    x1="116.762"
                    y1="0"
                    x2="116.762"
                    y2="204.333"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D27685" />
                    <stop offset="1" stop-color="#9E4784" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </motion.div>
        </div>
        <Button
          text={"Resume"}
          link={
            "https://drive.google.com/file/d/1szClTm9jvEEeQPit-WVaO9KvPG_brbl0/view?usp=sharing"
          }
        />
      </div>
    </div>
  );
}

export default AboutSection;
