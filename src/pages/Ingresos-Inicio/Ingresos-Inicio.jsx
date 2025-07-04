import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";
import "../Ingresos/IngresosStyle.css";
import Search from "../../components/Search/Search"
import FooterComponent from "../../components/footer/footer.component";
import ComponentCliente from "../../components/Clientes/ComponentCliente";
import PopupDemo from "../../components/popup/popup";
import Calendario from "../../components/Calendario/Calendario"
import TablaIngresos from "../../components/Ingresos-Clientes/TablaIngresos";
import Candado from "../../assets/Candado.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const IngresosInicio = () =>{
    return(
        <>
        <SellerNavbar></SellerNavbar> 
        <div className="body2"> 
        <div className="container-ingresos">
            <div className="container-password">
            <h1>Para ingresar a este panel porfavor</h1>
            <h2>Ingrese la contraseña</h2>
            <div>
                <input type="text" placeholder="xxxx xxx x xx"className="inp-password"/>
               <Link to="/Admin/Ingresos"> <button className="btn-password">Ingresar</button>
               </Link>
            </div>
            </div>
            <div className="container-factos">
                <div className="factos">
                    <h1>FACTURAS</h1>
                </div>
                <div className="no-fact">
                    <h2>buscar por N° de orden o cliente</h2>
                    <input type="text" placeholder="xxxx xxx x xx"className="inp-password"/>
                    <input type="button"  name="boton-Pasword" className="btn-password"/>
                </div>
                <img src={Candado} alt="" width={250} />
            </div>
        </div>
        </div> 
        <FooterComponent/>
        <></>
        </>
    )
}

export default IngresosInicio