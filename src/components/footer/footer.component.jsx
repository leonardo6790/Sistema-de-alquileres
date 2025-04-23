import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import Logo from "../../assets/Logo_SGA.png";
import "./footer.styles.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <a href="#">Términos y Condiciones</a>
        <a href="#">Política de Privacidad</a>
        <div className="footer-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      <div className="footer-column">
        <img src={Logo} alt="Logo" className="footer-logo" />
        <p>correoejemplo@gmail.com</p>
        <p>Calle 4F #45-27</p>
      </div>

      <div className="footer-column">
        <h4>Horarios</h4>
        <p>Lunes a Viernes: 8am - 6pm</p>
        <p>Sábados: 9am - 1pm</p>
        <p>Domingos: Cerrado</p>
      </div>
    </footer>
  );
};

export default FooterComponent;