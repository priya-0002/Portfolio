import React from 'react'
import {useState} from 'react';


const Work = (props) => {
    const{title,description}=props;
    const[show,setShow]=useState(false);

    
    return (
        <div className="work__subheading">
         
           {show?<p>{description}</p>:null}
           <button onClick={()=>setShow(!show)}>nnnnnn</button>
            
             </div>
    )
}

export default Work
