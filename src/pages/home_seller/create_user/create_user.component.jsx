import React, { useState } from "react";
import "./create_user.styles.css";
import SellerNavbar from "../../../components/navbar_seller/navbar_seller.component";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    documento: "",
    direccion: "",
    barrio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SellerNavbar />
      <div className="create-user-container">
        <div className="form-box">
          <h2 className="form-title">Crear Cliente</h2>
          <form className="form-grid">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="form-group">
                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            ))}
          </form>
          <div className="form-buttons">
            <button className="cancel-button">Cancelar</button>
            <button className="save-button">Guardar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
