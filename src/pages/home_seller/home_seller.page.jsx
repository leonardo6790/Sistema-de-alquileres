import React, { useState } from "react";
import "./home_seller.styles.css";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";
import alquilerImage from "../../assets/image_seller.png";
import { useNavigate } from "react-router-dom";

const HomeSeller = () => {
  const [documento, setDocumento] = useState("");
  const navigate = useNavigate();

  const handleVerification = () => {
    if (documento === "1013098670") {
      navigate("/HomeSeller/CreateBill");
    } else {
      navigate("/HomeSeller/CreateUser");
    }
  };

  return (
    <>
      <SellerNavbar />
      <div className="verification-container">
        <h1 className="verification-title">Generar Nuevo Alquiler</h1>

        <div className="verification-content">
          <div className="verification-left">
            <p className="verification-text">Introduzca el documento</p>
            <input
              type="text"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              placeholder="Ingrese el documento"
              className="verification-input"
            />
            <button onClick={handleVerification} className="verification-button">
              Consultar
            </button>
          </div>

          <div className="verification-right">
            <img src={alquilerImage} alt="Alquiler" className="verification-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSeller;
