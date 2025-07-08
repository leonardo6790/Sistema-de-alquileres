import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar" className="inp-search"/>
      <button className="botton-search">Buscar</button>
    </div>
  );
};

export default Search;
