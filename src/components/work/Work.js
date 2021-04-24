import React from 'react'
import {useState} from 'react';
import "./work.css"
import Carousel from 'react-gallery-carousel';
const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`
  }));



const Work = () => {
    
    const[show1,setShow1]=useState(false);
    const[show2,setShow2]=useState(false);
    const[show3,setShow3]=useState(false);
   
   
    const change1 =()=>{
        setShow1(!show1)
        setShow2(show2)
        setShow3(show3)
    }
    

    const change2 =()=>{
        setShow1(show1)
        setShow2(!show2)
        setShow3(show3)
    }

    const change3 =()=>{
        setShow1(show1)
        setShow2(show2)
        setShow3(!show3)
    }
    return (
        <div>
         
          <div >
           <button className="work__button" onClick={change1}>cnnnnnnnnnn</button>
           <button className="work__button" onClick={change2}>nnnnnnnnnn</button>
           <button className="work__button" onClick={change3}>nnnnnnnnnn</button>
           </div>

        <div>
           {show1?<p className="work__para">nnnnnnnnn</p>:null}
           {show2?<p className="work__para">bbbbbbbbbbb</p>:null}
           {show3?<p className="work__para">nnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmnnnn</p>:null}
           </div>
            
             </div>
    )
}

export default Work
