import "./Nav.css";
import icon from "../assets/Calendar 2.png";

const Nav = () => {
  return (
    <nav className="navigation">
      <a href="/">
        <img src={icon} className="icon" alt="Calendar" />
      </a>
    </nav>
  );
};

export default Nav;
