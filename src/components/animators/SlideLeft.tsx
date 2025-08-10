import React, {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type SlideLeftProps = {
    children?: React.ReactNode;
}

const SlideLeft: React.FC<SlideLeftProps> = ({children}) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { amount: 0.7 }); 

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
                visible: { opacity: 1, x: 0, transition: { delay: 0.3 } },
                hidden: { opacity: 0, x: 50, transition: { delay: 0.3 } },
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