import {forwardRef} from "react";
import pfp from "../assets/japanPhoto.jpeg";
import "../styles/Hero.css";
import Tag from "./Tag";

const Hero = forwardRef<HTMLDivElement, {}>((_, ref) => {
    return (
        <div className="hero" ref={ref}>
        <div className='hero-left'>
            <p className="font-64 margin-0">Hi, I'm</p>
            <p className="font-128 waikei"><b>Wai Kei</b></p>
            <p className="font-24 light subtitle">2nd year CS student @ <b className="bold">NUS</b> | Full-Stack Web Developer | Hobbyist Game Maker</p>
            <div className="tagList">
                <Tag name="React"></Tag>
                <Tag name="NodeJS"></Tag>
                <Tag name="Unity"></Tag>
            </div>
        </div>
        
        <img src={pfp} alt="A picture of me!" className="pfp"></img>
        </div>
    )
})

export default Hero;