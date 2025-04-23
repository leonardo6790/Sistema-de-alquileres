import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/Logo_SGA.png";
import "./navbar_seller.styles.css";

const SellerNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="seller-navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><Link to="/nuevo-alquiler" className="nav-link">Nuevo Alquiler</Link></li>
          <li><Link to="/inventario" className="nav-link">Inventario</Link></li>
          <li><Link to="/ordenes" className="nav-link">Órdenes</Link></li>
          <li><Link to="/clientes" className="nav-link">Clientes</Link></li>
          <li><Link to="/informe-ventas" className="nav-link">Informe de Ventas</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="user-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaUser className="icon" />
        </div>
        <div className={`user-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/mi-cuenta" className="menu-link">Mi Cuenta</Link>
          <Link to="/" className="menu-link">Cerrar Sesión</Link>
          <p className="user-name">Vendedor</p>
        </div>
      </div>
    </nav>
  );
};

export default SellerNavbar;
