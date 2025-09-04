import React, { useState } from "react";
import "./CalendarioStyle.css";

const Calendario = () => {
  const [fecha, setFecha] = useState(new Date());

  const obtenerDiasDelMes = () => {
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const primerDia = new Date(año, mes, 1).getDay(); // 0 (domingo) a 6 (sábado)
    const totalDias = new Date(año, mes + 1, 0).getDate();

    const celdas = [];

    // Agrega espacios vacíos antes del primer día
    for (let i = 0; i < primerDia; i++) {
      celdas.push(<div key={`vacio-${i}`} className="celda vacia"></div>);
    }

    // Agrega los días del mes
    for (let dia = 1; dia <= totalDias; dia++) {
      celdas.push(
        <div key={dia} className="celda">
          {dia}
        </div>
      );
    }

    return celdas;
  };
  const cambiarMes = (direccion) => {
    const nuevoMes = new Date(fecha.getFullYear(), fecha.getMonth() + direccion, 1);
    setFecha(nuevoMes);
  };

  const nombresDias = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"];
  const nombreMes = fecha.toLocaleString("es-ES", { month: "long", year: "numeric" });

  return (
    <div className="calendario">
      <div className="navegacion">
        <button onClick={() => cambiarMes(-1)}>&lt;</button>
        <span>{nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1)}</span>
        <button onClick={() => cambiarMes(1)}>&gt;</button>
      </div>

      <div className="dias-semana">
        {nombresDias.map((dia) => (
          <div key={dia} className="celda dia">{dia}</div>
        ))}
      </div>

      <div className="grid">
        {obtenerDiasDelMes()}
      </div>
    </div>
  );
};

export default Calendario;
