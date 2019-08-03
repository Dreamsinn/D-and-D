import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import DropDown from "../sharedComponents/dropdown";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftPart">
        <Link to="/" className="navbarLeftItem">
          Home
        </Link>
        <div className="navbarLeftItem">Descargar</div>
        <DropDown className="navbarLeftItem">
          {open => {
            return open  <div>How to </div> : <div>How NOT to </div>;
          }}
        </DropDown>
      </div>
      <Link to="/login" className="rightPart">
        Iniciar sessió
      </Link>
    </nav>
  );
};

export default Navbar;
