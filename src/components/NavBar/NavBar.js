import { Link } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <div >
      <nav className="navContainer">
        <Link to="/">
          <div className="homeButton">
            <i className="fas fa-home"></i>
          </div>
        </Link>
        <h1 className="title">Avispa - Lab</h1>
        <div className="dropdown">
          <button className="dropbtn"><i className="fas fa-bars"></i></button>
          <div className="dropdown-content">
            <Link id='navLink' to="/utilitys">Utilidades</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
