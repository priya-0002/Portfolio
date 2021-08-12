import React from 'react'
import Project from './Project'
import "./project.css"
import css from "../../assets/css.png"
import netflix from "../../assets/netflix.png"
import blog from "../../assets/blog.png"

const Projectparent = () => {
    return (
        <div>
           
            <h1 className="" style={{display: 'grid',placeItems:"center",marginTop:"20px"}}> Projects</h1>
           
            <br/>
           <Project name="project__parent" img={css} head="Landing Page "  body="I have used advance css to style my front page"/> <br/> <br/>
           <Project name="project__changes" img={netflix} head="Netflix Landing Page"body="I tried cloning netflix landing page"/> <br/> <br/>
           <Project name="project__parent" img={blog} head="Blog Application"body="I have built an crud application using react js"/>
        </div>
    )
}

export default Projectparent
