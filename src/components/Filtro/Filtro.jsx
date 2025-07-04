import React, { useState } from "react";
import "./Filtro_styles.css";

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState({
    talla: false,
    color: false,
    ocasion: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="filter-sidebar">
      <h3 className="filter-title">Filtrar</h3>

      {/* Sección Talla */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("talla")}>
          <span className="filter-label">Talla</span>
          <span className="toggle-icon">{openSections.talla ? "-" : "+"}</span>
        </div>
        {openSections.talla && (
          <div className="filter-options">
            <label><input type="checkbox" /> S</label>
            <label><input type="checkbox" /> M</label>
            <label><input type="checkbox" /> L</label>
          </div>
        )}
      </div>

      {/* Sección Color */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("color")}>
          <span className="filter-label">Color</span>
          <span className="toggle-icon">{openSections.color ? "-" : "+"}</span>
        </div>
        {openSections.color && (
          <div className="filter-options">
            <label><input type="checkbox" /> Negro</label>
            <label><input type="checkbox" /> Rojo</label>
            <label><input type="checkbox" /> Azul</label>
          </div>
        )}
      </div>

      {/* Sección Ocasión */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("ocasion")}>
          <span className="filter-label">Ocasión</span>
          <span className="toggle-icon">{openSections.ocasion ? "-" : "+"}</span>
        </div>
        {openSections.ocasion && (
          <div className="filter-options">
            <label><input type="checkbox" /> Formal</label>
            <label><input type="checkbox" /> Casual</label>
            <label><input type="checkbox" /> Fiesta</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
