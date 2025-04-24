import React, { useState, useRef, useEffect } from "react";
import SellerNavbar from "../../../components/navbar_seller/navbar_seller.component";
import usersData from "./user_data/user_data.page";
import "./search_client.style.css"

export default function UserTable() {
  const [visibleUsers, setVisibleUsers] = useState(usersData.slice(0, 12));
  const containerRef = useRef(null);

  const loadMoreUsers = () => {
    const nextUsers = usersData.slice(visibleUsers.length, visibleUsers.length + 6);
    setVisibleUsers((prev) => [...prev, ...nextUsers]);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadMoreUsers();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [visibleUsers]);

  return (
    <>

      <SellerNavbar></SellerNavbar>
      <div className="search_page_container">
      <div className="search_page_header">
        <div className="search_page_header_left">
          <h2 className="search_page_title">Clientes</h2>
          <select className="search_page_dropdown">
            <option>Todos</option>
            <option>Activos</option>
            <option>Inactivos</option>
            <option>Prospectos</option>
          </select>
        </div>
        <div className="search_page_header_right">
          <h2 className="search_page_title">Buscar cliente</h2>
          <div className="search_page_search">
            <input type="text" placeholder="Escribe un nombre..." />
            <button>Buscar</button>
          </div>
        </div>
      </div>

      <div className="search_page_table_container" ref={containerRef}>
        <table className="search_page_table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Teléfono</th>
              <th>Correo Electrónico</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {visibleUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.nombre}</td>
                <td>{user.documento}</td>
                <td>{user.telefono}</td>
                <td>{user.correo}</td>
                <td><span className="search_page_link">Ver más...</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="search_page_create_button">Crear</button>
    </div>
    </>

  );
}
