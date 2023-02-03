import "./Nav.css"
import icon from "../assets/Calendar.png"

const Nav = () => {
    return (
        <nav>
            <a href="/"><img src={icon} className="icon" alt="Calendar"/></a>
        </nav>
    )
}

export default Nav