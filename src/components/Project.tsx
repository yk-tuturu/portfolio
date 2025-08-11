import React from "react";
import Tag from "./Tag";
import "../styles/projects.css"
import { sprites } from "../Logos";

type ProjectProps = {
    title: string;
    desc: string;
    imageURL: string;
    alt: string;
    tags: string[];
    reverse: boolean;
    githubLink: string;
    externalLink: string;
}


const Project: React.FC<ProjectProps> = ({title, desc, imageURL, alt, tags, reverse, githubLink, externalLink}) => {
    return <div className="project-pair">
        {
            !reverse ? 
            <div style={{position: "relative", display: "inline-block"}}>
                <img src={imageURL} 
                alt={alt}
                className="project-image"/>
                
                    <div className="link-parent">
                        {externalLink !== "" && 
                            <a href={externalLink} target="_blank" rel="noopener noreferrer">
                            <div className="link-button">
                                <img src={sprites.link}></img>
                            </div>
                            </a>
                        }
                        
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <div className="link-button github">
                            <img src={sprites.githubWhite}></img>
                        </div>
                        </a>
                        
                    </div>
                

            </div>
            
            : <></>
        }
        
        <div className="project-desc">
            <p className="font-28 bold margin-0" style={{lineHeight: "1.3"}}>{title}</p>
            <p className="font-16 light margin-0 mt-2">{desc}</p>
            {/* <p className="margin-0 mt-2"><a>Read more &gt;&gt;</a></p> */}
            <div className="project-tag-container">
                {
                    tags.map((tag)=> (
                        <Tag key={tag} name={tag} size="16px" type="small"></Tag>
                    ))
                }
            </div>
            
        </div>
        {
            reverse ? 
            <div style={{position: "relative", display: "inline-block"}}>
                <img src={imageURL} 
                alt={alt}
                className="project-image"/>
                
                    <div className="link-parent">
                        {externalLink !== "" && 
                            <a href={externalLink} target="_blank" rel="noopener noreferrer">
                            <div className="link-button">
                                <img src={sprites.link}></img>
                            </div>
                            </a>
                        }
                        
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <div className="link-button github">
                            <img src={sprites.githubWhite}></img>
                        </div>
                        </a>
                        
                    </div>
                

            </div>
            : <></>
        }
    </div>
}

export default Project;