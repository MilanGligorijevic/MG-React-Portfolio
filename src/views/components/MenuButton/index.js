import React from "react";
import "./css/style.scss";
import {motion} from 'framer-motion';

function MenuButton() {
	const lineVariants = {
		initial: {
			rotateZ: 0,
		},
		hover: {
			rotateZ: 50,
		}
	}
  // menu dropdown button for mobile view
  return (
	<div className="menu_button">
	  <motion.svg
		width="45"
		height="4"
		viewBox="0 0 45 4"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"    
		variants={lineVariants}
    	initial="initial"
    	whileHover="hover"   
	>
		<path
		  d="M2 2H43"
		  stroke="url(#paint0_linear_86_271)"
		  stroke-width="3"
		  stroke-linecap="round"
		/>
		<defs>
		  <linearGradient
			id="paint0_linear_86_271"
			x1="22.5"
			y1="2"
			x2="22.5"
			y2="3"
			gradientUnits="userSpaceOnUse"
		  >
			<stop stop-color="#FFC800" />
			<stop offset="0.800781" stop-color="#FFDB58" />
		  </linearGradient>
		</defs>
	  </motion.svg>
	  <svg
		width="45"
		height="4"
		viewBox="0 0 45 4"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	  >
		<path
		  d="M2 2H43"
		  stroke="url(#paint0_linear_86_271)"
		  stroke-width="3"
		  stroke-linecap="round"
		/>
		<defs>
		  <linearGradient
			id="paint0_linear_86_271"
			x1="22.5"
			y1="2"
			x2="22.5"
			y2="3"
			gradientUnits="userSpaceOnUse"
		  >
			<stop stop-color="#FFC800" />
			<stop offset="0.800781" stop-color="#FFDB58" />
		  </linearGradient>
		</defs>
	  </svg>
	  <svg
		width="45"
		height="4"
		viewBox="0 0 45 4"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	  >
		<path
		  d="M2 2H43"
		  stroke="url(#paint0_linear_86_271)"
		  stroke-width="3"
		  stroke-linecap="round"
		/>
		<defs>
		  <linearGradient
			id="paint0_linear_86_271"
			x1="22.5"
			y1="2"
			x2="22.5"
			y2="3"
			gradientUnits="userSpaceOnUse"
		  >
			<stop stop-color="#FFC800" />
			<stop offset="0.800781" stop-color="#FFDB58" />
		  </linearGradient>
		</defs>
	  </svg>
	</div>
  );
}

export default MenuButton;
