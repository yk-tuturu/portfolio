import React, { useRef, useEffect, useState } from "react";

type ScrollAnimateProps = {
    children: React.ReactNode;
    animationClass: string;
}

const ScrollAnimate: React.FC<ScrollAnimateProps> = ({ children, animationClass }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${isVisible ? animationClass : "hidden"}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimate;