import React from 'react'



const Project = ({name,img,head,body}) => {
    
    return (
        <div>
            
              <div className={name}>
            
            <img className="project__profile"src={img} alt=""/>
            

        
        <div className="project__text">
            <h3>{head}</h3>
            <p className="project__para"> {body}</p>
        </div>
    </div>
  
        </div>
    )
}

export default Project
