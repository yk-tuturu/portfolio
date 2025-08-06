import React, {useState, useEffect, useRef} from "react";
import "../typewriter.css";

type TypewriterProps = {
    showContent: ()=>void;
}

const Typewriter: React.FC<TypewriterProps> = ({showContent}) => {
    const [phase, setPhase] = useState<"intro" | "print" | "bracket" | "quotation" | "hello" | "semicolon" | "continue" | "end" >("intro");
    const [displayedText, setDisplayedText] = useState("");
    const [cursorText, setCursorText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [endText, setEndText] = useState("");

    const continueTextRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const introTime = 1300;
    const typingSpeed = 80;
    const command = "print";
    const phrase = "hello world!";

    let counter = 0;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (phase === "intro") {
            timeout = setTimeout(() => {
                setPhase("print");
                console.log("waiting end")
            }, introTime);
        } else if (phase === "print" && displayedText.length < command.length) {
            timeout = setTimeout(() => {
                setDisplayedText(command.slice(0, displayedText.length + 1));
            }, typingSpeed);
        } else if (phase === "print" && displayedText.length >= command.length) {
            setPhase("bracket");
        } else if (phase === "bracket") {
            timeout = setTimeout(() => {
                setDisplayedText(displayedText + "(");
                setCursorText(")");
                setShowCursor(false);
                setPhase("quotation");
            }, typingSpeed + 100);
        } else if (phase === "quotation" && cursorText !== '"') {
            timeout = setTimeout(() => {
                setDisplayedText(displayedText + '"');
                setCursorText('"');
                setShowCursor(false);
                setEndText(")");
            }, typingSpeed + 100);
        } else if (phase === "quotation" && cursorText === '"') {
            timeout = setTimeout(() => {
                setPhase("hello");
            }, typingSpeed + 500);
        }
        else if (phase === "hello" && displayedText.length < 19) {
            timeout = setTimeout(() => {
                setDisplayedText('print("' + phrase.slice(0, displayedText.length - 6));
            }, typingSpeed);
        } else if (phase === "hello" && displayedText.length >= 19) {
            setPhase("semicolon");
        } else if (phase === "semicolon" && !showCursor) {
            timeout = setTimeout(() => {
                setDisplayedText(displayedText + cursorText);
                setCursorText(endText.length > 0 ? endText[0] : "");
                setEndText(endText.length > 1 ? endText[1] : "");
                if (endText.length == 0) {
                    setShowCursor(true);
                }
            }, typingSpeed + 200);
        } else if (phase === "semicolon" && showCursor) {
            timeout = setTimeout(() => {
                setDisplayedText(displayedText + ";");
                setPhase("continue");
                continueTextRef?.current?.classList.add("show")
            }, typingSpeed + 200);
        } else if (phase === "end") {
            timeout = setTimeout(()=>{
                showContent();
            }, 500);
        }
 
        return () => clearTimeout(timeout);
    }, [phase, displayedText, command, cursorText, counter, phrase, continueTextRef])

    function handleClick() {
        console.log(phase);
        if (phase === "continue"){
            containerRef?.current?.classList.add("hide");
            setPhase("end");
        }
    }

    return <>
        <div className="typewriter-container" onClick={handleClick} ref={containerRef}>
            <div>
                <span>&gt; {displayedText}<span className="with-background">{cursorText}</span></span> 
                {showCursor ? <span className="cursor">█</span> : <></>}
                <span>{endText}</span>
            </div>
            <p className="toContinue" ref={continueTextRef}>Click anywhere to continue</p>
            
            
        </div>
        
    </>
}

export default Typewriter;