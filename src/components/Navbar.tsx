import React from "react";
import "../styles/navbar.css";

type NavbarProps = {
    activeIndex: number;
    scrollIntoView: (index: number)=>void;
}

const Navbar: React.FC<NavbarProps> = ({activeIndex, scrollIntoView}) => {
    const tabs = ["Home", "Experience", "Skills", "Projects", "Contact"];

    const handleClick = (index: number) => {
        scrollIntoView(index);
    }
    return <>
        <div className="navbar font-20">
            {
                tabs.map((tab, index) => (
                    <div className={index===activeIndex ? "navbar-item active" : "navbar-item"} onClick={()=>handleClick(index)}>
                        {tab}
                    </div>
                ))
            }
        </div>
    </>
}

export default Navbar;