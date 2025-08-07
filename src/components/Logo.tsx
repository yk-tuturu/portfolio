import React, {useState, useRef} from "react";
import "../styles/TechStack.css";

type LogoProps = {
    name: string;
    source: any 
}

const Logo: React.FC<LogoProps> = ({name, source}) => {
    const [hovered, setHovered] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    function onMouseEnter() {
        setHovered(true);
    }

    function onMouseExit() {
        setHovered(false);
    }

    return <>
        <div className="logo-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit}>
            <img 
                src={source} 
                className={hovered ? "tech-logo-img hover" : "tech-logo-img"}
                ref={imgRef}
                />
            {
                hovered ? <p className={hovered ? "caption font-16 hover" : "caption font-16"}>{name}</p> : <></>
            }
           
        </div>
        
    </>
}

export default Logo;