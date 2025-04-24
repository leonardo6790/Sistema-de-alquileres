import React from "react";
import CardDress from "../../components/CardDress/CardDress";
import Navbar from "../../components/nav-bar/nav_bar.component";
import "../Catalogo/Catalogo.css";
import Search from "../../components/Search/Search";
import FooterComponent from "../../components/footer/footer.component";
const Catalogo = () => {
    return(
    <>
    <Navbar />
    <Search />
    <div className="Contenedoruno" >
    <div className="Contenedordos" >
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />    
        <CardDress />
        <CardDress />
        <CardDress />
    </div>
    <div>
    <h2 className="xde">Filtrar</h2>
    <h3>Talla             +</h3>
    <h3>Color             +</h3>
    <h3>Smokings y trajes +</h3>
    </div>
    </div>
    <FooterComponent></FooterComponent>
    </>
    )
}
export default Catalogo;