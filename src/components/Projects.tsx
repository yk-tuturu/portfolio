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
                imageURL: "https://i.imgur.com/bJ5PrKf.png",
                alt: "A picture of a maze puzzle in Source Academy",
                tags: ["React", "TypeScript", "Elixir"]
            }

        ],
        Mobile: [],
        Games: []
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