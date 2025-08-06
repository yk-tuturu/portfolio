import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import Background from './components/Background';
import pfp from "./assets/pfpPlaceholder.jpg";


function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  
  function showContent() {
    contentRef?.current?.classList.remove("hide");
    contentRef?.current?.classList.add("show");
  }
  

  return (
    <>
    <Background/>
   
    <div className='main'>
      
      <div className="content animated" ref={contentRef}>
          <Navbar></Navbar>
          <div className="hero">
            <div>
              <p className="font-64">Hi, I'm</p>
              <p className="font-128 waikei"><b>Wai Kei</b></p>
            </div>
            
            <img src={pfp} alt="A picture of me!"></img>
          </div>
      </div>
      {/* <Typewriter showContent={showContent}></Typewriter> */}
    </div>
    </>
  )
}

export default App
