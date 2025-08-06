import React, {useState, useEffect, useRef} from "react";
import "../navbar.css"

function Navbar() {
    return <>
        <div className="navbar font-16">
            <div className="navbar-item active">Home</div>
            <div className="navbar-item">Project</div>
            <div className="navbar-item">Contact</div>
        </div>
    </>
}

export default Navbar;