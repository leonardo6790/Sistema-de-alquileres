import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; 
import Logo from "../../assets/Logo_SGA.png";
import "./nav_bar.styles.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Catalogo">Catálogo</Link></li>
        <li><Link to="/Accesorios">Accesorios</Link></li>
        <li><Link to="/PreguntasFrec">Preguntas Frecuentes</Link></li>
      </ul>
      <div className="navbar-login">
        <Link to="/login">
          <FaUser className="login-icon" />
          <span>Ingresar</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
