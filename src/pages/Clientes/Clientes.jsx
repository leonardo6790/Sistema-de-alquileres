import FooterComponent from "../../components/footer/footer.component";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component"
import "../Clientes/Clientes.css"
import PopupDemo from "../../components/popup/popup";
const datosClientes = Array(12).fill({
    nombre: "Alfonso López Michelsen",
    documento: "1014086845",
    telefono: "321 557 2207",
    correo: "Donalfonso_13@gmail.com",
  });
const Clientes = () => {
return(
    <>
    <SellerNavbar />
    <div className="clientes-container">
      <div className="acciones-busqueda">
        <div className="acciones">
          <button className="btn-acciones">Acciones ▸</button>
          <div className="submenu">
            <button>Eliminar cliente</button>
            <button>Editar cliente</button>
          </div>
        </div>

        <div className="buscador">
          <label>Buscar cliente por N° de documento o nombre</label>
          <input type="text" placeholder="Buscador" />
          <button className="btn-buscar">Buscar</button>
        </div>
      </div>
      <div className="tabla-scroll">
        <table className="tabla-clientes">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Teléfono</th>
              <th>Correo electrónico</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datosClientes.map((cliente, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{cliente.nombre}</td>
                <td>{cliente.documento}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td><a href="#">Ver más...</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <PopupDemo></PopupDemo>
    <FooterComponent></FooterComponent>
    </>
)
}
export default Clientes;