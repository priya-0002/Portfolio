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
        <div classname="navbar">
    
        <div classname ="navbar__menu" onClick={change}>
        { open?<img src={ham} /> :<img src={x} />}
        </div>
        <div className="navbar__list">
            <ul classname="navbar__list__names">
                <li> Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blogs</li>
                <li>Policy</li>
            </ul>
        </div>
        </div>
    )
}

export default Navbar

