import React from 'react'
import Project from './Project'
import "./project.css"
import krishi from "../../assets/krishiseva.png"
import netflix from "../../assets/netflix.png"
import covid from "../../assets/covid.png"

const Projectparent = () => {
    return (
        <div>
           
            <h1 className="" style={{display: 'grid',placeItems:"center",marginTop:"20px"}}> Projects</h1>
           
            <br/>
           <Project name="project__parent" img={krishi} head="krishi seva "  body="I have used React to build krishi seva website"/> <br/> <br/>
           <Project name="project__changes" img={netflix} head="Netflix Landing Page"body="I tried cloning netflix landing page"/> <br/> <br/>
           <Project name="project__parent" img={covid} head="Covid tracker"body="I have built covid tracker using disease.sh api "/>
        </div>
    )
}

export default Projectparent
