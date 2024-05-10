import Section from "../components/sectioni";
import htmllogo from '../assets/Animation - 1715250468733.json';
import csslogo from  '../assets/Animation - 1715251430239.json';
import javascriptlogo from '../assets/Animation - 1715251476050.json';
import reactlogo from '../assets/Animation - 1715251503093.json';
import nodejslogo from '../assets/Animation - 1715251541230.json';
import sqllogo from '../assets/Animation - 1715251571714.json';
import mongologo from '../assets/Animation - 1715251595681.json';
import javalogo from '../assets/Animation - 1715251899550.json'
import Lottie from 'lottie-react';
export function About(){
    return (
        <div id='About'>
        <Section>
            
            <h1 style={{textAlign:"center",fontSize:"30px"}}>About Me</h1>
            <div className="about-info" style={{fontFamily:'Roboto'}}>

            
            <p>Welcome to my <b>portfolio!</b> I'm a passionate full-stack web developer with expertise in utilizing cutting-edge technologies like the <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b> to craft dynamic and immersive web experiences. With a strong foundation in both front-end and back-end development, I thrive on bringing ideas to life through elegant code and intuitive user interfaces.
My journey in the world of web development began with a curiosity to understand how digital landscapes are constructed and a drive to create solutions that seamlessly integrate form and function. 
Whether it's building robust APIs, designing responsive user interfaces, or optimizing performance for scalability, I approach every project with dedication and a commitment to excellence. 
In addition to technical proficiency, I prioritize clean code practices, adherence to best practices, and a user-centric approach to development. My goal is not just to deliver functional solutions, but to create experiences that resonate with users and drive tangible results for businesses.
Beyond the realm of coding, I'm a lifelong learner who thrives on exploring new technologies and methodologies. 
<b>Thank you for visiting my portfolio.</b> </p>
</div>
<h1 style={{textAlign:"center"}}>Technologies that i know</h1>
<div className="about-techologies">
   
    <div className="technologies" style={{width:"100px"}}>
    <Lottie animationData={htmllogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px"}}>
    <Lottie animationData={csslogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px",paddingTop:"13px"}}>
    <Lottie animationData={javascriptlogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px",paddingTop:"15px"}}>
    <Lottie animationData={nodejslogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"110px"}}>
    <Lottie animationData={sqllogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px"}}>
    <Lottie animationData={mongologo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px"}}>
    <Lottie animationData={reactlogo} ></Lottie>
    </div>
    <div className="technologies" style={{width:"100px"}}>
    <Lottie animationData={javalogo} ></Lottie>
    </div>
</div>

        </Section>
        </div>
    )
}