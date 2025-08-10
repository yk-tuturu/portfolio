import React, {useState, useEffect, useRef} from "react";
import "../styles/navbar.css";

type NavbarProps = {
    activeIndex: number;
}

const Navbar: React.FC<NavbarProps> = ({activeIndex}) => {
    const tabs = ["Home", "Experience", "Skills", "Projects", "Contact"];
    return <>
        <div className="navbar font-20">
            {
                tabs.map((tab, index) => (
                    <div className={index===activeIndex ? "navbar-item active" : "navbar-item"}>{tab}</div>
                ))
            }
        </div>
    </>
}

export default Navbar;