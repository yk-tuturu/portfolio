import {useState, useEffect, useRef, forwardRef} from "react";
import { sprites } from "../Logos";
import "../styles/career.css"
import Job from "./Job";

type JobInfo = {
    employer: string;
    jobTitle: string;
    duration: string;
    desc: string[];
    imgURL: string;
}

type MeasurableBoxHandle = {
  getImageRect: () => DOMRect | null;
};

const Experience = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const jobs: JobInfo[] = [
        {
            employer: "School Of Computing, NUS",
            jobTitle: "Teaching Assistant",
            duration: "Aug 2025 - Present",
            desc: ["Running weekly tutorial sessions for CS1101S Programming Methodology", "Preparing revision materials and assisting students through consult sessions"],
            imgURL: sprites.nusLogo
        }, 
        {
            employer: "Source Academy",
            jobTitle: "Frontend Engineer",
            duration: "Jan 2025 - Jun 2025",
            desc: ["Designed a [b]programming-based minigame system[/b] for Source Academy, enhancing the learning experience for [b]hundreds[/b] of CS1101S students"],
            imgURL: sprites.source
        },
        {
            employer: "TRE 3D Print Academy",
            jobTitle: "STEM Educator",
            duration: "Dec 2023 - Jun 2024",
            desc: ["Educated over 30 primary school children on 3D printing, 3D modelling, and basic [b]Arduino[/b] programming"],
            imgURL: sprites.treicon
        }
    ]

    const [lineScale, setLineScale] = useState<number>(0.1);
    const [maxHeight, setMaxHeight] = useState<number>(300);
    const [scrollTick, setScrollTick] = useState<boolean>(false);

    const imgRef = useRef<MeasurableBoxHandle>(null);
    const parentRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (parentRef.current) {
            setMaxHeight(parentRef.current.offsetHeight)
        } 
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (!lineRef.current || scrollTick) return;

            window.requestAnimationFrame(()=> {
                if (!lineRef.current) return;

                const centerY = window.innerHeight * 0.8;
                const startY = lineRef.current.getBoundingClientRect().top;

                const newLineHeight = Math.min(maxHeight, Math.max(50, centerY - startY))
                setLineScale(newLineHeight / maxHeight);
                setScrollTick(false);
            })

            setScrollTick(true);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [maxHeight, scrollTick]);


    

    return <>
        
        <div className="career-parent" ref={ref}>
            
            <p className="font-48 bold margin-0">Work Experience</p>
            <div className="timeline-parent" ref={parentRef}>
                <div className="line" ref={lineRef} style={{
                    top: "0px",
                    left: "72px",
                    height: maxHeight + 'px',
                    transform: `scaleY(${lineScale})`,
                    transformOrigin: "top",
                }}></div>
                {
                    jobs.map((job, index)=> (
                        
                            <Job
                                key={index}
                                employer={job.employer}
                                jobTitle={job.jobTitle}
                                duration={job.duration}
                                desc={job.desc}
                                imgURL={job.imgURL}
                                ref={index===0 ? imgRef : null}
                            />
                        
                    ))
                }
                
            </div>
        </div>
    </>
})

export default Experience;