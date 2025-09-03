import React from "react";
import OrdenesCards from "../../components/Ordenes/OrdenesCards";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";
import "./OrdenesStyle.css"
import Calendario from "../../components/Calendario/Calendario";
import FooterComponent from "../../components/footer/footer.component";

const Ordenes = () => {

    return (
        <>
        <SellerNavbar/>
        <div className="ContenedorPrincipal">
            
            <div className="ContenedorDerecha">
                <div className="Titulo">
                    <h1>A recibir</h1>
                </div>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
                <OrdenesCards/>
            </div>

            <div className="ContenedorIzquierda">
                <div className="calendario-orden">
                <p className="hachetre">Buscar por N° de órden</p>
                <div className="inputs">
                <input type="text" placeholder="   Ingrese el N°" className="InputBuscar"/>
                <button className="BotonBuscador" >Ingresar</button>
                </div>
                <h3 className="hachetre" >Seleccione una fecha para ver sus órdenes</h3>
                <Calendario/>
                </div>
            </div >
        </div>
        <FooterComponent/>
        </>
    )
}

export default Ordenes