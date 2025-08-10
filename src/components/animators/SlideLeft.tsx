import React, {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type SlideLeftProps = {
    children?: React.ReactNode;
    delay?: number;
    threshold?: number;
    invert?: boolean;
}

const SlideLeft: React.FC<SlideLeftProps> = ({children, delay = 0, threshold=0.7, invert=false}) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { amount: threshold}); 

    useEffect(() => {
        if (isInView) {
        controls.start("visible"); // play enter animation
        } else {
        controls.start("hidden"); // play leave animation
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: delay, ease: "easeIn" } },
                hidden: { opacity: 0, x: invert ? -50 : 50, transition: { duration: 0.5, delay: delay, ease: "easeIn" } },
            }}
            initial="hidden"
            animate={controls}
            style={{zIndex: "3"}}
            >
            {children}
        </motion.div>
    )
}

export default SlideLeft;