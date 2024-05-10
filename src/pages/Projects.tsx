import Section from "../components/sectioni";
import '../App.css';
import p1 from '../assets/Screenshot 2024-05-10 101947.png';
import p2 from '../assets/Screenshot 2024-05-10 101918.png';
import p3 from '../assets/Screenshot 2024-05-10 101537.png';
export function Projects(){
    return (
      <div id="Projects">
  <Section>
  <h1 style={{textAlign:'center', fontSize:"30px"}}>Projects</h1>
   <div className="projects-box">

  <div className="project-container">
                      <div className="project-image">
                              <img src={p1} alt='p1' />
                             
                      </div>
                      <div  className="project-info">
                        <h3>Weather App</h3>
                      <p> A React.js weather app displaying current conditions and 7-day forecast for multiple cities, powered by OpenWeatherAPI. Integrated real-time data fetching for parameters like Humidity, Pressure, Wind speed, Temperature, and Visibility.</p>
      <div className="btn-container">
           <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                   window.location.href="https://github.com/vinay10110/Weather-Application"
              }}
            >
             <p style={{margin:"0px",textAlign:"center"}}> Github</p> 
            </button>
            
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
        window.location.href="https://weatherapp-latest.onrender.com"
              }}
            >
              Live Demo
            </button>
            </div>
                      </div>

  </div>
  <div className="project-container reverse-container">
                       <div  className="project-info">
                       <h3>blog App</h3>
                      <p> A full-stack blog app with MongoDB, React.js, Express, and Node.js, featuring CRUD operations for users to manage articles, alongside JWT for profile data protection.</p>
      <div className="btn-container">
           <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                   window.location.href="https://github.com/vinay10110/Weather-Application"
              }}
            >
              Github
            </button>
            
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
        window.location.href="https://weatherapp-latest.onrender.com"
              }}
            >
              Live Demo
            </button>
            </div>
                      </div>
                       <div className="project-image">
                       <img src={p3} alt='p2' />
                       
                        </div>
  </div>
  <div className="project-container"> 
                        <div className="project-image">
                        <img src={p2} alt='p3' />
                       
                         </div>
                         <div className="project-info">
                         <h3>finace App</h3>
                        <p> Crafted a finance app with TypeScript frontend, Express.js backend, and MongoDB for data management. Leveraged Recharts for intuitive data visualization and integrated linear regression machine learning for predictive insights, empowering users with informed decision-making.</p>
 <div className="btn-container">
           <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
                   window.location.href="https://github.com/vinay10110/Weather-Application"
              }}
            >
              Github
            </button>
            
            <button
              className="btn btn-color-2 project-btn"
              onClick={()=>{
        window.location.href="https://weatherapp-latest.onrender.com"
              }}
            >
              Live Demo
            </button>
            </div>
                        </div>
  </div>
  </div>
  </Section>
  </div>
    )
}