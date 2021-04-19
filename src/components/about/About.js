import React from 'react'
import priya from "../../assets/priya.png"
import "./about.css"

const About = () => {
    return (
        <div className="about">
        <div className="about__parent">
            
                <img className="about__profile"src={priya} alt=""/>
            
            <div className="about__text">
                <h1>About Me</h1>
                <p className="about__para"> I keep interest in learning new technologies.</p>
            </div>
        </div>
        </div>
    )
}

export default About