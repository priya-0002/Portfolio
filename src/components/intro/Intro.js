import React from 'react'
import pc from '../../assets/pc.png'
import "./intro.css"
import Typical from 'react-typical'


const intro = () => {
    return (
        <div>
              
              <div className="intro__text"> 
              <Typical 
        steps={['Hello I am Priya', 1000, 'I am a Web Developer!', 500]}
        loop={Infinity}
        wrapper="h1"
      />
          </div>
          
            <div > <img className="intro__image"src={pc} alt=""/> </div>
       
           
        </div>
    )
}

export default intro