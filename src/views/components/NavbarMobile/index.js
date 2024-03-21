import React, { useState } from "react";
import './css/style.scss'

function NavbarMobile(){
    return (
      <div className="navbar_menu">
        <div className="navbar_close_btn"></div>
        <ul className="navbar_list">
            <li className="navbar_item">Projects</li>
            <li className="navbar_item">Skills</li>
            <li className="navbar_item">About</li>
            <li className="navbar_item">Contact</li>
        </ul>
      </div>  
    );
}

export default NavbarMobile;