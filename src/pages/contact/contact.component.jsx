import React from 'react';
import './contact.styles.css';
import Navbar from '../../components/nav-bar/nav_bar.component'
import FooterComponent from '../../components/footer/footer.component';

const Contact = () => {
  return (
    <>
        <Navbar></Navbar>
        <h1>Preguntas Frecuentes</h1>
        <div className="Cont_Prin">
          
          <div className='Cont_Derecho'>
            <div className='Preguntas'>
              <p><strong>¿cuales son sus horarios de atencion?</strong></p>
              <p>Lunes -  Viernes: 11am - 7:30pm <br /> Sabados: 12:00am - 7:30pm <br />Domingos y Festivos: Cerrados <br/>Porfavor llega mínimo 40 minutos antes de la hora de cierre.</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Puedo cambiar de vestido?</strong></p>
              <p>Aceptamos cambio de vestido siempre y cuando <br /> sea para la misma fecha. <br /> Debes de venir a hacer el cambio en nuestro establecimiento <br /> mínimo con un día de anticipación.</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Cuál es su política de cancelación?</strong></p>
              <p>Si, puedes cancelar tu cita con tres dias de anticipación. <br /> Si no cancelas tu cita con tres dias de anticipación, <br /> perderás el depósito que hayas realizado.</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Puedo mandar a hacer mi vestido?</strong></p>
              <p>Nosotros no confeccionamos vestidos, <br /> todos nuestros vestidos son importados y <br />no hacemos a la medida</p>
            </div>
          </div>

          <div className='Cont_Izquierdo'>
            <div className='Preguntas'>
              <p><strong>¿Cómo puedo devolver los vestidos?</strong></p>
              <p>El vestido se debe de devolver en nuestro <br /> local. Puedes hacerlo tu u otra persona de <br />confianza a quien le podamos regresar tu <br /> deposito.</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Puedo reservar un vestido sin pagar?</strong></p>
              <p>No, para reservar un vestido debes realizar un abono. <br /> El abono se descontará del total del alquiler del vestido.</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Tienen servicio de domicilio?</strong></p>
              <p>No manejamos servicio a domicilio, puedes recoger <br /> tu vestido y entregarlo personalmente o un <br /> tercero en nuestro Showroom</p>
            </div>
            <div className='Preguntas'>
              <p><strong>¿Ustedes arreglan el vestido?</strong></p>
              <p>Nosotros ajustamos el vestido a tu altura y <br /> podemos entallarlo siempre y cuando esto <br /> no afecte la integridad del vestido. Hay <br />algunas telas que se dañan muy fácilmente. </p>
            </div>
          </div>

        </div>
      <FooterComponent/>
    </>
    
  );
};

export default Contact;
