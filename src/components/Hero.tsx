import React, {useState, useEffect} from "react";
import pfp from "../assets/pfpPlaceholder.jpg";
import "../styles/Hero.css";
import Tag from "./Tag";

function Hero() {
    return <>
        <div className="hero">
        <div className='hero-left'>
            <p className="font-64 margin-0">Hi, I'm</p>
            <p className="font-128 waikei"><b>Wai Kei</b></p>
            <p className="font-24 light subtitle">Second year CS student @ <b>NUS</b> | Frontend Developer | Hobbyist Game Maker</p>
            <div className="tagList">
                <Tag name="React"></Tag>
                <Tag name="NodeJS"></Tag>
                <Tag name="Unity"></Tag>
            </div>
        </div>
        
        <img src={pfp} alt="A picture of me!"></img>
        </div>
    </>
}

export default Hero;