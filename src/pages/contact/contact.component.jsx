import React from 'react';
import './contact.styles.css';
import Navbar from '../../components/nav-bar/nav_bar.component'

const Contact = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="contacto-container">
            <h2>Contacto - SGA</h2>
            <p>En SGA estamos para ayudarte. Puedes comunicarte con nosotros a través de los siguientes medios:</p>
        
        <div className="info-contacto">
            <p><strong>Teléfono:</strong> +57 320 456 7890</p>
            <p><strong>Dirección:</strong> Calle 123 #45-67, Bogotá, Colombia</p>
            <p><strong>Email:</strong> contacto@sga.com.co</p>
        </div>
        </div>

    </>
    
  );
};

export default Contact;
