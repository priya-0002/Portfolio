import React from 'react'



const Project = (props) => {
    const{name,img,head,body}=props;
    return (
        <div>
              <div className={name}>
            
            <img className="project__profile"src={img} alt=""/>
            

        
        <div className="project__text">
            <h1>{head}</h1>
            <p className="project__para"> {body}</p>
        </div>
    </div>
  
        </div>
    )
}

export default Project
