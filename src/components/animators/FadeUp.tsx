import React, {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type FadeUpProps = {
    children?: React.ReactNode;
    threshold?: number;
    delay?: number;
}

const FadeUp: React.FC<FadeUpProps> = ({children, threshold=0.7, delay=0}) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { amount: threshold }); 

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
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay, ease: "easeIn" } },
                hidden: { opacity: 0, y: 30, transition: { duration: 0.5, delay: delay, ease: "easeIn" } },
            }}
            initial="hidden"
            animate={controls}
            style={{zIndex: "3"}}
            >
            {children}
        </motion.div>
    )
}

export default FadeUp;