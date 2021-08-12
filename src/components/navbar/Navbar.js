import {useState} from "react"
import ham from "../../assets/ham.png"
import x from "../../assets/x.png"
import "./navbar.css"


const Navbar = () => {

    const [open, setOpen] = useState(true)

    const change =()=>{
        setOpen(!open)
    }
    return (
        <div className="navbar">
    
        <div className ="navbar__menu" onClick={change}>
        { open?<img className="navbar__image" src={ham} /> :<img className="navbar__image" src={x} />}
        </div>
        <div className={open?"navbar__list__none":"navbar__list"}>
            <ul className="navbar__list__names">
                <li><a href="">Home</a> </li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#skill">skills</a></li>
                <li><a href="#project">Projects</a></li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar