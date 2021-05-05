import React from 'react'
import {useState} from 'react';
import "./work.css"




const Work = () => {
    
   
    const[show1,setShow1]=useState(true);
    const[show2,setShow2]=useState(false);
    const[show3,setShow3]=useState(false);
   
   
    const change1 =()=>{
        setShow1(true)
        setShow2(false)
        setShow3(false)
    }
    

    const change2 =()=>{
        setShow1(false)
        setShow2(true)
        setShow3(false)
    }

    const change3 =()=>{
        setShow1(false)
        setShow2(false)
        setShow3(true)
        
    }
    return (
        <div className="work__parent">

            <h1> Experience</h1>
            <br/>
         <div className="work__child">
          
           <button className="work__button" onClick={change1}><h6 className>Innoovatum.com</h6></button>
           
           <button className="work__button" onClick={change2}><h6>Bijapur offers</h6></button>
         
           <button className="work__button" onClick={change3}><h6>Real time client projects</h6></button>
         
         
           </div>
           <div className="work__para_parent">
           {show1?<div className="work__para_parent"><p className="work__para">Innoovatum.com is a software company having a search engine built for the engineering students.I worked there as an associate engineer for about 1 year.</p> <a className="link" href="https://innoovatum.com/">Innoovatum</a></div>:null}
           {show2?<div className="work__para_parent"><p className="work__para">Bijapur Offers is my start up. It is bascially an app having buisness offers been displayed and I work as an Operational Head</p><a className="link" href="https://www.bijapuroffers.com/">Bijapur Offers</a></div>:null}
           
           {show3?<div className="work__para_parent"> <p className="work__para"> I have developed few real time projects for different businesses such as for Raymond Franchise and Sunshine production which organises events.</p><a className="link" href="http://raymondsbijapur.in/" target="_blank">Raymond</a> </div>:null}
           </div>
          </div>

            
             
    )
}

export default Work
