import React from 'react'
import twitter from '../../assets/twitter.png'
import gmail from '../../assets/gmail.png'
import git from '../../assets/git.png'
import linkedin from '../../assets/linkedin.png'
import "./contact.css"


const Contact = () => {
    return (
        <div id ="contact" className="contact">
           <h1 className="contact__header">Contact </h1>
            
          <button className="button"><span>Say Hello</span></button>
             <div className="contact__center"> 
            <div className="contact__icons"   >

           <a href=""> <img className="t"src={twitter} alt="twitter logo"/></a>
              <a href="https://github.com/priya-0002/"> <img className="g" src={git} alt="github logo"/></a>
               <a href="https://www.linkedin.com/in/priya-d-41879a1a4/"> <img className="l"src={linkedin} alt="linked logo"/></a>
               

               </div>
               </div> 
        </div>
    )
}

export default Contact
