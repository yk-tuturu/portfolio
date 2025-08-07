import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import Background from './components/Background';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';



function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  
  function showContent() {
    contentRef?.current?.classList.remove("hide");
    contentRef?.current?.classList.add("show");
  }
  

  return (
    <>
      <div className="main">
        <div className="content animated" ref={contentRef}>
          <Navbar></Navbar>
          <Hero></Hero>
          <TechStack></TechStack>
          <Projects></Projects>
      </div>
      </div>
      
      <Background/>
      {/* <Typewriter showContent={showContent}></Typewriter> */}
    </>
  )
}

export default App
