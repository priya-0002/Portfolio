import React from 'react'
import {useState} from 'react';
import "./work.css"


const Work = (props) => {
    const{title,description}=props;
    const[show,setShow]=useState(false);
   

    
    return (
        <div className="work__subheading">
         
          <div >
           <button className="work__button" onClick={()=>setShow(!show)}>{title}</button>
           </div>

        <div>
           {show?<p className="work__para">{description}</p>:null}
           </div>
            
             </div>
    )
}

export default Work
