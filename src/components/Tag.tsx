import React, {useState} from "react";
import "../styles/Hero.css";

type TagProps = {
    name: string
}

const Tag: React.FC<TagProps> = ({name}) => {
    return <>
        <div className="tag">
            <p className="margin-0">{name}</p>
        </div>
    </>
}

export default Tag;