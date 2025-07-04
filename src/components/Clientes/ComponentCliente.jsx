import React from "react";
import "../Clientes/Component-Clientes.css";

const ComponentCliente = () => {
  return (
    <>
      <div className="tabla-contenedor">
        <table className="tabla-ordenes">
          <thead>
            <tr>
              <th>N° de orden</th>
              <th>Cliente</th>
              <th>Fecha de emisión</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td># 35485</td>
              <td>Alfonso López Michelsen</td>
              <td>24 / 10 / 2024</td>
              <td><span className="menu-icon">⋮</span></td>
            </tr>
            <tr>
              <td># 35485</td>
              <td>Alfonso López Michelsen</td>
              <td>24 / 10 / 2024</td>
              <td><span className="menu-icon">⋮</span></td>
            </tr>
            <tr>
              <td># 35485</td>
              <td>Alfonso López Michelsen</td>
              <td>24 / 10 / 2024</td>
              <td><span className="menu-icon">⋮</span></td>
            </tr>
            <tr>
              <td># 35485</td>
              <td>Alfonso López Michelsen</td>
              <td>24 / 10 / 2024</td>
              <td><span className="menu-icon">⋮</span></td>
            </tr>
            <tr>
              <td># 35485</td>
              <td>Alfonso López Michelsen</td>
              <td>24 / 10 / 2024</td>
              <td><span className="menu-icon">⋮</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default ComponentCliente;