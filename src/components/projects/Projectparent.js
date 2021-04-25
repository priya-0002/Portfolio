import React from 'react'
import Project from './Project'
import "./project.css"

const Projectparent = () => {
    return (
        <div>
           <Project name="project__parent" />
           <Project name="project__changes"/>
           <Project name="project__parent" />
        </div>
    )
}

export default Projectparent
