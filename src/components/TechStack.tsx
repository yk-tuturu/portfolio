import React, {useState, useEffect} from "react";
import "../styles/TechStack.css"
import { sprites } from "../Logos";
import Logo from "./Logo";


function TechStack() {
    return <>
        <div className="techstack-container">
            <p className="font-48 bold">My Tech Stack</p>
            <p className="font-32 bold subtitle margin-0">Frontend</p>
            <div className="tech-container">
                <Logo name="React" source={sprites.react}></Logo>
                <Logo name="HTML5" source={sprites.html}></Logo>
                <Logo name="CSS" source={sprites.css}></Logo>
                <Logo name="JavaScript" source={sprites.jsLogo}></Logo>
                <Logo name="TypeScript" source={sprites.tsLogo}></Logo>
                <Logo name="Bootstrap" source={sprites.bootstrap}></Logo>
                <Logo name="Figma" source={sprites.figma}></Logo>
            </div>
            <p className="font-32 bold subtitle margin-0">Backend</p>
            <div className="tech-container">
                <Logo name="NodeJS" source={sprites.node}></Logo>
                <Logo name="Express" source={sprites.express}></Logo>
                <Logo name="MySQL" source={sprites.mysql}></Logo>
                <Logo name="MongoDB" source={sprites.mongodb}></Logo>
            </div>
            <p className="font-32 bold subtitle margin-0">Others</p>
            <div className="tech-container">
                <Logo name="Git" source={sprites.git}></Logo>
                <Logo name="GitHub" source={sprites.github}></Logo>
                <Logo name="Unity" source={sprites.unity}></Logo>
                <Logo name="FMOD" source={sprites.fmod}></Logo>
            </div>
        </div>
    </>
}

export default TechStack;