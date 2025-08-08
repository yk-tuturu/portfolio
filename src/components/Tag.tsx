import React, {useState} from "react";
import "../styles/Hero.css";

type TagProps = {
    name: string
    size?: string
    type?: string
}

const Tag: React.FC<TagProps> = ({name, size = "20px", type="big"}) => {
    return <>
        <div className={type==="small" ? "small-tag" : "tag"}>
            <p className="margin-0" style={{
                fontSize: size
            }}>{name}</p>
        </div>
    </>
}

export default Tag;