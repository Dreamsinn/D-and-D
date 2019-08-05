import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import DropDown from "../sharedComponents/dropdown";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftPart">
        <Link to="/" className="navbarLeftItem">
          <img width={"30px"} height={"30px"} src={logo} alt="logo" />
        </Link>
        <div className="navbarLeftItem">Descargar</div>
        <DropDown className="navbarLeftItem">
          {open => {
            /*&& ==> if    ? : if else*/
            return open ? <div>How to </div> : <div>How NOT to </div>;
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
