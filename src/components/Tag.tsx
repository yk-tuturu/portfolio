import React, {useState} from "react";
import "../styles/Hero.css";

type TagProps = {
    name: string
    size?: string
}

const Tag: React.FC<TagProps> = ({name, size = "20px"}) => {
    return <>
        <div className="tag">
            <p className="margin-0" style={{
                fontSize: size
            }}>{name}</p>
        </div>
    </>
}

export default Tag;