import React, {useState, useEffect} from "react";
import "../styles/projects.css";
import Tag from "./Tag";

function Projects() {
    const tabNames = ['Web', 'Mobile', 'Games'];
    const [activeTab, setActiveTab] = useState<string>('Web');

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
            <img src="https://i.imgur.com/bJ5PrKf.png" alt="A picture of a maze in Source Academy" className="project-image"></img>
            <div className="project-desc">
                <p className="font-28 bold margin-0">Project Name</p>
                <p className="font-16 light margin-0 mt-2">This is the short project description text that tells you what you need to know, a couple of buzzwords, etc etc. Just random words like that. </p>
                <p className="margin-0 mt-2"><a>Read more &gt;&gt;</a></p>
                <div className="project-tag-container">
                    <Tag name="React" size="16px"></Tag>
                </div>
                
            </div>
        </div>
    </div>
}

export default Projects;