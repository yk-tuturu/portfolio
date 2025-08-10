import "../styles/Contact.css"
import { sprites } from "../Logos";
import {forwardRef} from "react"

const Contact = forwardRef<HTMLDivElement, {}>((props, ref) => {
    return <div className="contact-parent" ref={ref}>
        <p className="font-36 margin-0 bold">Contact</p>
        <p className="font-20 margin-0 light">Hit me up and bring your ideas to life!</p>
        <div className="contact-logo-container">
            <a href="https://www.linkedin.com/in/wk-koh/" target="_blank" rel="noopener noreferrer"><img src={sprites.linkedinWhite} alt="linkedin"></img></a>
            <a href="https://github.com/yk-tuturu" target="_blank" rel="noopener noreferrer"><img src={sprites.githubWhite} alt="github"></img></a>
            <a href="mailto:waikei.koh@u.nus.edu" target="_blank" rel="noopener noreferrer"><img src={sprites.email} alt="email"></img></a>
        </div>
    
    </div>
})

export default Contact;