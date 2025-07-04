import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";
import "../Ingresos/IngresosStyle.css";
import Search from "../../components/Search/Search"
import FooterComponent from "../../components/footer/footer.component";
import ComponentCliente from "../../components/Clientes/ComponentCliente";
import PopupDemo from "../../components/popup/popup";
import Calendario from "../../components/Calendario/Calendario"
import TablaIngresos from "../../components/Ingresos-Clientes/TablaIngresos";
const Ingresos = () =>{
    return(
        <>
        <SellerNavbar></SellerNavbar> 
        <div className="body2"> 
        <div className="container-ingresos">
            <div className="container-password">
                <div className="Calendar">
                <div className="calendario-mini-chico">
                    <div className="calendario-header">
                        <button>{'<'}</button>
                        <span>Jul 2025</span>
                        <button>{'>'}</button>
                    </div>
                    <table className="calendario-tabla">
                        <thead>
                        <tr>
                            <th>DO</th><th>LU</th><th>MA</th><th>MI</th><th>JU</th><th>VI</th><th>SA</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
                        </tr>
                        <tr>
                            <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
                        </tr>
                        <tr>
                            <td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td>
                        </tr>
                        <tr>
                            <td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td>
                        </tr>
                        <tr>
                            <td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        <TablaIngresos></TablaIngresos>
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
                <ComponentCliente/>
                
            </div>
        </div>
        </div> 
        <FooterComponent/>
        <PopupDemo></PopupDemo>
        <></>
        </>
    )
}

export default Ingresos