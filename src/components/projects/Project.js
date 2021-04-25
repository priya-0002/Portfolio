import React from 'react'
import priya from "../../assets/priya.png"


const Project = (props) => {
    const{name}=props;
    return (
        <div>
              <div className={name}>
            
            <img className="project__profile"src={priya} alt=""/>
        
        <div className="project__text">
            <h1>Projects</h1>
            <p className="project__para"> I keep interest in learning new technologies.</p>
        </div>
    </div>
  
        </div>
    )
}

export default Project
