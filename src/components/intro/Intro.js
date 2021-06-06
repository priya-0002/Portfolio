import React from 'react'
import pc from '../../assets/pc.png'
import "./intro.css"
import Typical from 'react-typical'
import Zoom from 'react-reveal/Zoom';



const intro = () => {
    return (
        <div className="intro">
              
              <div className="intro__text"> 
              <Typical 
        steps={['Hello I am Priya', 1000, 'I am a Web Developer!', 500]}
        loop={Infinity}
        wrapper="p"
      />
          </div>
          
           <Zoom><img className="intro__image"src={pc} alt=""/> </Zoom>  
       
           
        </div>
    )
}

export default intro