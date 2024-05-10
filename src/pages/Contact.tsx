import Section from "../components/sectioni";
import emailpic from '../assets/email.png';
import linked from '../assets/linkedin.png';
export function Contact(){
    return (
        <Section>
          <div id="Contact">
          <p style={{textAlign:"center",fontSize:"15px" }}>Get In Touch</p>
            <h1 style={{textAlign:"center",fontSize:"30px"}}>Contact Me</h1>
            
            <div className="contact-info-container">
          <img
            src={emailpic}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">vinaychakravarthi10110@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linked}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/vinaychakravarthi10110">LinkedIn</a></p>
        </div>
        </div>
            </Section>
    )
}