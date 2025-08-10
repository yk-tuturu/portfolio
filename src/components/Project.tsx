import React, {useState} from "react";
import Tag from "./Tag";

type ProjectProps = {
    title: string;
    desc: string;
    imageURL: string;
    alt: string;
    tags: string[];
    reverse: boolean;
}


const Project: React.FC<ProjectProps> = ({title, desc, imageURL, alt, tags, reverse}) => {
    return <div className="project-pair">
        {
            !reverse ? 
            <img src={imageURL} 
                alt={alt}
                className="project-image"/>
            : <></>
        }
        
        <div className="project-desc">
            <p className="font-28 bold margin-0" style={{lineHeight: "1.3"}}>{title}</p>
            <p className="font-16 light margin-0 mt-2">{desc}</p>
            <p className="margin-0 mt-2"><a>Read more &gt;&gt;</a></p>
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
            <img src={imageURL} 
                alt={alt}
                className="project-image"/>
            : <></>
        }
    </div>
}

export default Project;