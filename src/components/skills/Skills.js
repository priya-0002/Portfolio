import React from 'react'
import skill from "../../assets/skill.png"
import "./skills.css"

const Skills = () => {
    return (
         
        <div className="skill__parent">
            
                
            
            <div className="skill__text">
                <h1>Skill Level</h1>
           
            </div>

            <img className="skill__image"src={skill} alt=""/>
        </div>
    )
}

export default Skills
