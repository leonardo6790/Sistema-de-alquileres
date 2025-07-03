import SellerNavbar from "../../components/navbar_seller/navbar_seller.component"
import CardDress from "../../components/CardDress/CardDress";
import "../Inventario/Inventario.css";
import Search from "../../components/Search/Search";
const Inventario = () => {
    return(
    <>
    <SellerNavbar />
    <div>
    <Search></Search>
    <div className="cajainventario">
        <div className="divisor">
        <h4 className="ordenarU">ordenar y filtrar</h4>
        <button className="botoninventario"></button>
        </div>
    </div>
    </div>
    <div className="tituloinventario"> <h2>Articulos / accesorios</h2> </div>
    <div className="cartas">
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />
        <CardDress />
        
    </div>
    <div>
        <button className="botonuevo">NUEVO</button>
    </div>

    </>
)
}

export default Inventario;