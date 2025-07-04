import React from "react";
import "./popup.css"; // aquí puedes poner estilos personalizados

const Popup = ({ mostrar, onCerrar, children }) => {
  if (!mostrar) return null; // Si no debe mostrarse, no retorna nada

  return (
    <div className="popup-fondo">
      <div className="popup">
        {children}
        <button onClick={onCerrar}>Cerrar</button>
      </div>
    </div>
  );
};

export default Popup;

