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
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora iure officia soluta quibusdam corporis. Rerum consequuntur ratione soluta, eligendi facere quos aut odit debitis tempora dolorum deserunt enim nam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora iure officia soluta quibusdam corporis. Rerum consequuntur ratione soluta, eligendi facere quos aut odit debitis tempora dolorum deserunt enim nam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora iure officia soluta quibusdam corporis. Rerum consequuntur ratione soluta, eligendi facere quos aut odit debitis tempora dolorum deserunt enim nam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora iure officia soluta quibusdam corporis. Rerum consequuntur ratione soluta, eligendi facere quos aut odit debitis tempora dolorum deserunt enim nam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora iure officia soluta quibusdam corporis. Rerum consequuntur ratione soluta, eligendi facere quos aut odit debitis tempora dolorum deserunt enim nam.</p>
          </div>
          <div className='Cont_Izquierdo'>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus dolore iusto vitae quibusdam suscipit velit dicta animi et sapiente natus earum sunt architecto perspiciatis doloremque libero? Quod, minus quam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus dolore iusto vitae quibusdam suscipit velit dicta animi et sapiente natus earum sunt architecto perspiciatis doloremque libero? Quod, minus quam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus dolore iusto vitae quibusdam suscipit velit dicta animi et sapiente natus earum sunt architecto perspiciatis doloremque libero? Quod, minus quam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus dolore iusto vitae quibusdam suscipit velit dicta animi et sapiente natus earum sunt architecto perspiciatis doloremque libero? Quod, minus quam.</p>
            <p>-  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, doloribus dolore iusto vitae quibusdam suscipit velit dicta animi et sapiente natus earum sunt architecto perspiciatis doloremque libero? Quod, minus quam.</p>
          </div>

        </div>
      <FooterComponent/>
    </>
    
  );
};

export default Contact;
