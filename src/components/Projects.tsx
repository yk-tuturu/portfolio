import React, {useState, useEffect} from "react";
import "../styles/projects.css";
import Project from "./Project";

type Project = {
  title: string;
  desc: string;
  imageURL: string;
  alt: string;
  tags: string[];
};

type Category = "Web" | "Mobile" | "Games"

type ProjectCategories = Record<Category, Project[]>
function Projects() {
    const tabNames: Category[] = ['Web', 'Mobile', 'Games'];
    const [activeTab, setActiveTab] = useState<Category>('Web');

    const projects: ProjectCategories = {
        Web: [
            {
                title: "Source Academy Minigame System",
                desc: "Designed a programming-based minigame system that integrates with existing game structure seamlessly",
                imageURL: "https://i.imgur.com/Mn68L7Q.png",
                alt: "A picture of a maze puzzle in Source Academy",
                tags: ["React", "TypeScript", "Elixir"]
            }, 
            {
                title: "QuicKart",
                desc: "A minimart system made during Hack4Good 2025",
                imageURL: "https://i.imgur.com/FV66war.png",
                alt: "A picture of a minimart interface",
                tags: ["React", "JavaScript", "NodeJS", "MongoDB"]
            }, 
            {
                title: "Project Desmos",
                desc: "A programme to render any image in the graphing calculator Desmos, by converting image edges to Bezier curves",
                imageURL: "https://i.imgur.com/2EfrPpD.png",
                alt: "A picture rendered in the graphing calculator Desmos",
                tags: ["Flask", "Python", "Desmos API"]
            }, 
            {
                title: "This Website",
                desc: "Yes. The website you are looking at right now.",
                imageURL: "https://i.imgur.com/Mn68L7Q.png",
                alt: "A picture of my portfolio website",
                tags: ["React", "TypeScript"]
            }

        ],
        Mobile: [
            {
                title: "Study Cat",
                desc: "A gamified productivity app where you raise and buy accessories for your cute pet by dedicating time to studying.",
                imageURL: "https://i.imgur.com/FV66war.png",
                alt: "A picture of an app with a cute cat",
                tags: ["React Native", "Express", "MongoDB"]
            }
        ],
        Games: [
            {
                title: "REEL",
                desc: "Discover strange fish on a distant alien planet in REEL, a 2D idle game made by a team of four.",
                imageURL: "https://i.imgur.com/8RhUdBp.jpeg",
                alt: "A picture of the REEL game logo",
                tags: ["Unity", "FMOD"]
            }, 
            {
                title: "SharkBeat Cafe",
                desc: "An underwater cafe simulation game. Make lattes to the beat of the music!",
                imageURL: "https://i.imgur.com/9QuOlWv.png",
                alt: "A picture of a shark barista",
                tags: ["Unity"]
            }, 
            {
                title: "Heat Atypical",
                desc: "Emotionally impactful visual novel set after the end of the world. Archive dialogues in a tape recorder to influence the ending you get.",
                imageURL: "https://i.imgur.com/0YA9YZZ.jpeg",
                alt: "A picture of a red sky with a black hole",
                tags: ["Unity"]
            }
        ]
    }

    return <div className="mt-5 project-container">
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
                        <Project
                            key={index}
                            title={project.title}
                            desc={project.desc}
                            imageURL={project.imageURL}
                            alt={project.alt}
                            tags={project.tags}
                            reverse={index % 2 === 1}
                        />
                    )
                })
            }
        </div>
    </div>
}

export default Projects;