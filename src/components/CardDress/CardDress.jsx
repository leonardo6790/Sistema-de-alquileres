import React from "react";
import image from "../../assets/942e5f3fc4bbd58391d6a42865a7477a.jpg";
import "../CardDress/CardDress.css";

const CardDress = () => {
  return (
    <div className="card-dress">
      <img className="card-image" src={image} alt="Vestido elegante" />
      <div className="card-details">
        <h4 className="card-title">Nombre Del Vestido</h4>
        <div className="card-info">
          <p><strong>Precio:</strong> $120.000</p>
          <p><strong>Color:</strong> Negro</p>
          <p><strong>Talla:</strong> M</p>
        </div>
      </div>
    </div>
  );
};

export default CardDress;
