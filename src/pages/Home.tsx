import Section from "../components/sectioni";
import Lines from "../components/lines";
import {Link} from 'react-scroll';
import githu from '../assets/github.png';
import linked from '../assets/linkedin.png';
import resu from '../assets/Resume(NEW).pdf'
export function Home(){
return (
  <div id="Home">
    <Section >
        <div className="profile-head"  >
        <div className="profile-head-info">
            <p>Hello i'm</p>
            <h1><i>SAI VINAY CHAKRVARTHI</i></h1>
            <p>A full stack passionate developer</p>
            <div className="btn-container home-btn">
        <button
          className="btn btn-color-2"
          onClick={() => window.open(resu)}
        >
          Download CV <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
         <button className="btn btn-color-1" >
          <Link to='Contact' smooth={true} duration={500}>Contact Info<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></Link>
          
        </button>
       
      </div>
      <div id="socials-container">
        <img
          src={linked}
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => window.location.href='https://www.linkedin.com/in/vinaychakravarthi10110'}
        />
        <img
          src={githu}
          alt="My Github profile"
          className="icon"
          onClick={() => window.location.href='https://github.com/vinay10110'}
        />
      </div>
        </div>
        <div  className="profile-pic-head">
          <Lines></Lines>
        </div>

        </div>
       
    </Section>
    </div>
)
}
