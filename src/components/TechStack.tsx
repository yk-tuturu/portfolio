import {forwardRef} from "react";
import "../styles/TechStack.css"
import { sprites } from "../Logos";
import Logo from "./Logo";
import FadeUp from "./animators/FadeUp";
import SlideLeft from "./animators/SlideLeft";

type Logo = {
    name: string;
    source: string
}

type Category = "frontend" | "backend" | "other";

type LogoCategories = Record<Category, Logo[]>

const TechStack = forwardRef<HTMLDivElement, {}>((_, ref) => {
    const logos: LogoCategories = {
        frontend: [
            {
                name: "React",
                source: sprites.react
            },
            { name: "HTML5", source: sprites.html},
            { name: "CSS", source: sprites.css},
            { name: "JavaScript", source: sprites.jsLogo},
            { name: "TypeScript", source: sprites.tsLogo},
            { name: "Bootstrap", source: sprites.bootstrap},
            { name: "Figma", source: sprites.figma},
            { name: "Flask", source: sprites.flask},
            { name: "Python", source: sprites.python}
        ],
        backend: [
            {
                name: "NodeJS",
                source: sprites.node
            }, 
            { name: "Express", source: sprites.express},
            { name: "MySQL", source: sprites.mysql},
            { name: "MongoDB", source: sprites.mongodb}
        ],
        other: [
            {
                name: "Git",
                source: sprites.git
            },
            { name: "GitHub", source: sprites.githubWhite},
            { name: "Unity", source: sprites.unity},
            { name: "FMOD", source: sprites.fmod}
        ]
    }
    return (
        <div className="techstack-container" ref={ref}>
            <FadeUp>
                <p className="font-48 bold">My Tech Stack</p>
            </FadeUp>
            
            <FadeUp delay={0.2}>
                <p className="font-32 bold subtitle margin-0">Frontend</p>
            </FadeUp>
            
            <div className="tech-container">
                {
                    logos.frontend.map((logo, index) => (
                        <SlideLeft key={logo.name} delay={0.05 * index}>
                            <Logo name={logo.name} source={logo.source}></Logo>
                        </SlideLeft>
                    ))
                }
            </div>

            <FadeUp delay={0.2}>
                <p className="font-32 bold subtitle margin-0">Backend</p>
            </FadeUp>
            
            <div className="tech-container">
                {
                    logos.backend.map((logo, index) => (
                        <SlideLeft key={logo.name} delay={0.05 * index}>
                            <Logo name={logo.name} source={logo.source}></Logo>
                        </SlideLeft>
                    ))
                }
            </div>
            <FadeUp delay={0.2}>
                <p className="font-32 bold subtitle margin-0">Others</p>
            </FadeUp>
            
            <div className="tech-container">
                {
                    logos.other.map((logo, index) => (
                        <SlideLeft key={logo.name} delay={0.05 * index}>
                            <Logo name={logo.name} source={logo.source}></Logo>
                        </SlideLeft>
                    ))
                }
            </div>
        </div>
    )
})

export default TechStack;