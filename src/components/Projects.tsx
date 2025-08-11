import {useState, forwardRef} from "react";
import "../styles/projects.css";
import Project from "./Project";
import FadeUp from "./animators/FadeUp";
import SlideLeft from "./animators/SlideLeft";

type Project = {
  title: string;
  desc: string;
  imageURL: string;
  alt: string;
  tags: string[];
  githubLink: string;
  externalLink: string;
};

type Category = "Web" | "Mobile" | "Games"

type ProjectCategories = Record<Category, Project[]>

const Projects = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const tabNames: Category[] = ['Web', 'Mobile', 'Games'];
    const [activeTab, setActiveTab] = useState<Category>('Web');

    const projects: ProjectCategories = {
        Web: [
            {
                title: "Source Academy Minigame System",
                desc: "Designed a programming-based minigame system that integrates with existing game structure seamlessly",
                imageURL: "https://i.imgur.com/Mn68L7Q.png",
                alt: "A picture of a maze puzzle in Source Academy",
                tags: ["React", "TypeScript", "Elixir"],
                githubLink: "https://github.com/source-academy/frontend",
                externalLink: "https://sourceacademy.org/playground"
            }, 
            {
                title: "QuicKart",
                desc: "A full-stack online minimart for users to exchange vouchers for grocery supplies, with a dedicated admin panel for store owners to track inventory and manage orders.",
                imageURL: "https://i.imgur.com/FV66war.png",
                alt: "A picture of a minimart interface",
                tags: ["React", "JavaScript", "NodeJS", "MongoDB"],
                githubLink: "https://github.com/Shujin05/QuicKart",
                externalLink: ""
            }, 
            {
                title: "Project Desmos",
                desc: "A program to render any image in the graphing calculator Desmos, by converting image edges to Bezier curves",
                imageURL: "https://i.imgur.com/2EfrPpD.png",
                alt: "A picture rendered in the graphing calculator Desmos",
                tags: ["Flask", "Python", "Desmos API"],
                githubLink: "https://github.com/yk-tuturu/project_desmos",
                externalLink: "https://youtu.be/B3ZMC8AW_zM"
            }, 
            {
                title: "This Website",
                desc: "Yes. The website you are looking at right now.",
                imageURL: "https://i.imgur.com/YJXlzMO.png",
                alt: "A picture of my portfolio website",
                tags: ["React", "TypeScript"],
                githubLink: "https://github.com/yk-tuturu/portfolio",
                externalLink: "https://yk-tuturu.github.io/portfolio/"
            }

        ],
        Mobile: [
            {
                title: "Pawgress",
                desc: "A full-stack productivity app to encourage users to stay focussed during study sessions, with the companion of a virtual pet cat",
                imageURL: "https://i.imgur.com/jew8ZHZ.png",
                alt: "A picture of an app with a cute cat",
                tags: ["React Native", "Express", "MongoDB"],
                githubLink: "https://github.com/yk-tuturu/study-app",
                externalLink: ""
            }
        ],
        Games: [
            {
                title: "REEL",
                desc: "Discover strange fish on a distant alien planet in REEL, a 2D idle game made by a team of four. Reached 17k plays on itch.io and over 100 positive reviews",
                imageURL: "https://i.imgur.com/8RhUdBp.jpeg",
                alt: "A picture of the REEL game logo",
                tags: ["Unity", "FMOD"],
                githubLink: "https://github.com/yk-tuturu/REEL",
                externalLink: "https://luhdurr.itch.io/reel"
            }, 
            {
                title: "SharkBeat Cafe",
                desc: "An underwater cafe simulation game. Make lattes to the beat of the music!",
                imageURL: "https://i.imgur.com/9QuOlWv.png",
                alt: "A picture of a shark barista",
                tags: ["Unity"],
                githubLink: "https://github.com/yk-tuturu/nus-gamecraft",
                externalLink: "https://tuturu-owo.itch.io/sharkbeatcafe"
            }, 
            {
                title: "Heat Atypical",
                desc: "Emotionally impactful visual novel set after the end of the world. Archive dialogues in a tape recorder to influence the ending you get.",
                imageURL: "https://i.imgur.com/0YA9YZZ.jpeg",
                alt: "A picture of a red sky with a black hole",
                tags: ["Unity"],
                githubLink: "https://github.com/yk-tuturu/heat-atypical",
                externalLink: "https://tuturu-owo.itch.io/heat-atypical"
            }
        ]
    }

    return <div className="mt-5 project-container" ref={ref}>
        <p className="font-48 bold margin-0 mt-5">My Projects</p>
        <div className="tabs font-24 mt-2">
            {tabNames.map((name) => (
                <div key={name} className={activeTab===name ? "tab active" : "tab"} onClick={()=>setActiveTab(name)}>
                {name}
                </div>
            ))}
        </div>
        <div className="project-grid">
            {
                projects[activeTab].map((project, index)=> {
                    return (
                        <SlideLeft invert={index % 2 === 0} threshold={0.3}>
                            <Project
                            key={index}
                            title={project.title}
                            desc={project.desc}
                            imageURL={project.imageURL}
                            alt={project.alt}
                            tags={project.tags}
                            reverse={index % 2 === 1}
                            githubLink={project.githubLink}
                            externalLink={project.externalLink}
                        />
                        </SlideLeft>
                        
                    )
                })
            }
        </div>
    </div>
})

export default Projects;