import React, { useState } from "react";
import "./css/style.scss";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton";
import { HashLink } from "react-router-hash-link";
import { AnimatePresence, motion } from "framer-motion";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
    console.log(menuOpen);
  }

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <div className="navbar_mobile">
        <Link to="/">
          {/* <img className="logo_icon" src={logo} alt="logo" /> */}
          {/* logo M */}
          <svg
            width="32"
            height="29"
            viewBox="0 0 49 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.6558 42.6306V44.4913C47.5048 44.4913 48.2461 43.9166 48.4577 43.0944C48.6693 42.2722 48.2976 41.4111 47.5541 41.0012L46.6558 42.6306ZM2 40.77C0.972387 40.77 0.139342 41.603 0.139342 42.6306C0.139342 43.6583 0.972387 44.4913 2 44.4913V40.77ZM2 0.765837C0.972387 0.765837 0.139342 1.59888 0.139342 2.6265C0.139342 3.65411 0.972387 4.48715 2 4.48715V0.765837ZM46.6558 2.6265L47.5541 4.25595C48.2976 3.84608 48.6693 2.9849 48.4577 2.16271C48.2461 1.34052 47.5048 0.765837 46.6558 0.765837V2.6265ZM10.373 22.6286L9.47467 20.9991C8.881 21.3264 8.5123 21.9507 8.5123 22.6286C8.5123 23.3065 8.881 23.9307 9.47467 24.258L10.373 22.6286ZM46.6558 40.77H2V44.4913H46.6558V40.77ZM2 4.48715H24.3279V0.765837H2V4.48715ZM24.3279 4.48715H46.6558V0.765837H24.3279V4.48715ZM45.7575 0.99704L9.47467 20.9991L11.2713 24.258L47.5541 4.25595L45.7575 0.99704ZM9.47467 24.258L45.7575 44.2601L47.5541 41.0012L11.2713 20.9991L9.47467 24.258Z"
              fill="url(#paint0_linear_8_19)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_19"
                x1="24.3279"
                y1="2.6265"
                x2="24.3279"
                y2="42.6306"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC800" />
                <stop offset="0.830781" stop-color="#FFDB58" />
              </linearGradient>
            </defs>
          </svg>
          {/* logo arrow */}
          <svg
            width="33"
            height="30"
            viewBox="0 0 50 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.888 15.206C42.3234 16.1368 43.4309 16.5385 44.3618 16.1031C45.2926 15.6677 45.6942 14.5602 45.2588 13.6294L41.888 15.206ZM32.5234 3.76385L31.7971 5.4769L32.5234 3.76385ZM17.1831 3.22898L16.5779 1.4695L17.1831 3.22898ZM5.41789 13.0873L7.04429 13.9911L7.04429 13.9911L5.41789 13.0873ZM3.25979 28.2844L1.44606 28.6997L3.25979 28.2844ZM11.8153 41.0285L10.7442 42.5499L10.7442 42.5499L11.8153 41.0285ZM40.2772 37.6292L38.8779 36.4028L38.8779 36.4028L40.2772 37.6292ZM45.5908 23.2287L29.0714 36.9661L49.2281 44.4036L45.5908 23.2287ZM45.2588 13.6294C42.8221 8.41985 38.5446 4.29571 33.2497 2.05079L31.7971 5.4769C36.2463 7.36324 39.8406 10.8286 41.888 15.206L45.2588 13.6294ZM33.2497 2.05079C27.9547 -0.194134 22.0164 -0.401178 16.5779 1.4695L17.7884 4.98846C22.3581 3.41659 27.3479 3.59056 31.7971 5.4769L33.2497 2.05079ZM16.5779 1.4695C11.1394 3.34019 6.58509 7.15638 3.79148 12.1835L7.04429 13.9911C9.39167 9.76697 13.2186 6.56034 17.7884 4.98846L16.5779 1.4695ZM3.79148 12.1835C0.997873 17.2107 0.162468 23.0935 1.44606 28.6997L5.07351 27.8691C3.99495 23.1585 4.69691 18.2153 7.04429 13.9911L3.79148 12.1835ZM1.44606 28.6997C2.72966 34.3058 6.04153 39.2391 10.7442 42.5499L12.8865 39.507C8.93494 36.7251 6.15208 32.5798 5.07351 27.8691L1.44606 28.6997ZM10.7442 42.5499C15.4469 45.8607 21.208 47.3151 26.9186 46.633L26.4773 42.938C21.6789 43.5111 16.838 42.289 12.8865 39.507L10.7442 42.5499ZM26.9186 46.633C32.6293 45.951 37.8858 43.1807 41.6765 38.8555L38.8779 36.4028C35.6927 40.0371 31.2758 42.3649 26.4773 42.938L26.9186 46.633Z"
              fill="url(#paint0_linear_8_17)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8_17"
                x1="15.0734"
                y1="4.08236"
                x2="33.2381"
                y2="42.9177"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FFC800" />
                <stop offset="0.830781" stop-color="#FFDB58" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <div onClick={toggleMenu}>
          <MenuButton toggleMenu={menuOpen} />
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar_menu_mobile"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HashLink
              className="navbar_menu_mobile_link"
              to="#projects"
              smooth
              onClick={() => setMenuOpen((prevState) => !prevState)}
            >
              Projects
            </HashLink>
            <HashLink
              className="navbar_menu_mobile_link"
              to="#skills"
              smooth
              onClick={() => setMenuOpen((prevState) => !prevState)}
            >
              Skills
            </HashLink>
            <HashLink
              className="navbar_menu_mobile_link"
              to="#about"
              smooth
              onClick={() => setMenuOpen((prevState) => !prevState)}
            >
              About
            </HashLink>
            <HashLink
              className="navbar_menu_mobile_link"
              to="#contact"
              smooth
              onClick={() => setMenuOpen((prevState) => !prevState)}
            >
              Contact
            </HashLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavbarMobile;
