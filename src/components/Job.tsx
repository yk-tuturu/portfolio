import { forwardRef, useRef, useImperativeHandle} from "react";
import "../styles/career.css";
import FadeUp from "./animators/FadeUp";
import SlideLeft from "./animators/SlideLeft";

type JobProps = {
    employer: string;
    jobTitle: string;
    duration: string;
    desc: string[];
    imgURL: string;
}

type MeasurableBoxHandle = {
  getImageRect: () => DOMRect | null;
};

const Job = forwardRef<MeasurableBoxHandle, JobProps>((props, ref) => {
    const imgRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
    getImageRect: () => {
      if (!imgRef.current) return null;
      return imgRef.current.getBoundingClientRect();
    },
  }));

    return <>
        <div className="job-parent">
            <FadeUp>
                <img src={props.imgURL} alt={props.employer} className="job-image" ref={imgRef}></img>
            </FadeUp>
            <SlideLeft>
                <div className="job-desc">
                    <div className="job-header">
                        <p className="font-24 bold margin-0">{props.employer}</p>
                        <p className="font-20 light margin-0">{props.duration}</p>
                    </div>
                    
                    <p className="font-20 light margin-0">{props.jobTitle}</p>
                    <ul className="font-16 light margin-0 mt-2">
                        {
                            // no one likes regex but we'll live with it for now
                            props.desc.map((text)=> {
                                const parts = text.split(/(\[b\].*?\[\/b\])/g);
                                const smth = parts.map((part, i) => {
                                    if (part.startsWith("[b]") && part.endsWith("[/b]")) {
                                        return (
                                            <b key={i} className="bold">
                                            {part.slice(3, -4)}
                                            </b>
                                        );
                                    }
                                    return part;
                                })
                                return <li>{smth}</li>
                            })
                        }
                    </ul>
                </div>
            </SlideLeft>    
        </div>
    </>
})

export default Job;