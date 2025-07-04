import React from "react";
import "./TablaIngresos.css";

const datos = Array(15).fill({
  fecha: "08 - 10 - 2024",
  ingreso: "$ 1'845.000",
});

const TablaIngresos = () => {
  return (
    <div className="contenedor-tabla-ingresos">
      <table className="tabla-ingresos">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Ingresos por día</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr key={index}>
              <td>{fila.fecha}</td>
              <td>{fila.ingreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaIngresos;