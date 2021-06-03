import React from 'react'
import priya from "../../assets/priya.png"
import "./about.css"
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
       
        <div className="about__parent">
            
                <img className="about__profile"src={priya} alt=""/>
            
            <div className="about__text">
               <Bounce> <h1>About Me</h1></Bounce> 
                <p className="about__para"> I keep interest in learning new technologies.</p>
                
            </div>
        </div>
      
    )
}

export default About