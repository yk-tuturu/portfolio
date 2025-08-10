import React, {useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type FadeUpProps = {
    children?: React.ReactNode;
}

const FadeUp: React.FC<FadeUpProps> = ({children}) => {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { amount: 0.5 }); 

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
                visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
                hidden: { opacity: 0, y: 50, transition: { delay: 0.3 } },
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