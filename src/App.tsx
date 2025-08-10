import { useState, useEffect, useRef } from 'react'
import type { RefObject } from 'react';
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import Background from './components/Background';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const [topmostIndex, setTopmostIndex] = useState(0);
  
  function enableContent() {
    setShowContent(true);
    contentRef?.current?.classList.remove("hide");
    contentRef?.current?.classList.add("show");
  }

    useEffect(() => {
      const contentEl = contentRef.current;
      if (!contentEl) return;

      function handleAnimationEnd() {
        // Remove the Typewriter after animation finishes
        setShowTypewriter(false);
      }

      contentEl.addEventListener("animationend", handleAnimationEnd);
      contentEl.addEventListener("transitionend", handleAnimationEnd); // for CSS transitions

      return () => {
        contentEl.removeEventListener("animationend", handleAnimationEnd);
        contentEl.removeEventListener("transitionend", handleAnimationEnd);
      };
    }, []);

// ok. ok. fuck chatgpt. rewrite the detection logic tmr.   
useEffect(() => {
  if (!showContent) return;

  const onScroll = () => {
    if (!refs.current) return;

    const visibleElements = refs.current
      .map((el, i) => {
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        // Check if element is at least partially visible vertically
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          return { index: i, top: rect.top };
        }
        return null;
      })
      .filter((v): v is { index: number; top: number } => v !== null);

    if (visibleElements.length === 0) {
      setTopmostIndex(0);
      return;
    }

    // Find the element closest to the top (smallest positive top)
    const closest = visibleElements.reduce((prev, curr) =>
      curr.top < prev.top ? curr : prev
    );

    setTopmostIndex(closest.index);
  };

  // Run once initially in case already scrolled
  onScroll();

  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, [showContent]);
  

  return (
    <>
      <Background/>

        <div className="main">
        <div className="animated hide" ref={contentRef}>
          {
            showContent && <>
              <Navbar activeIndex={topmostIndex}></Navbar>
              <div className="content">
              <Hero ref={(el) => { refs.current[0] = el;}}></Hero>
              <Experience ref={(el) => { refs.current[1] = el;}}></Experience>

              <TechStack ref={(el) => { refs.current[2] = el;}}></TechStack>
              <Projects ref={(el) => { refs.current[3] = el;}}></Projects>
              <Contact ref={(el) => { refs.current[4] = el;}}></Contact>
              </div>
              
            </>
          }
          

          
      </div>
      </div>

      
      
      
      {showTypewriter && <Typewriter showContent={enableContent} />}
    </>
  )
}

export default App
