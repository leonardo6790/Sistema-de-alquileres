import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "../../components/nav-bar/nav_bar.component";
import "./sign-in.styles.css";
import { useRol } from "../../Estados/Rol";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate("/HomeSeller"); 
  };
    const { setRol } = useRol();


      useEffect(() => {
        setRol("");
      }, []);
    
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

              <button
                type="submit"
                className="login-button"
                onClick={() => {
                  if (email === "admin@admin.co") setRol("admin");
                }}
              >
                Ingresar
        </button>
          </form>

          <div className="login-footer">
            <Link to="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</Link>
            <p>No tienes cuenta? <Link to="/register" className="register-link">Regístrate</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
