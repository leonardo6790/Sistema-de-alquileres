import React from "react";
import image from "../../assets/942e5f3fc4bbd58391d6a42865a7477a.jpg";
import "../CardDress/CardDress.css"
const CardDress = () =>{
    return(
        <div class = "Box">
        <img className="imagen" src={image} alt="" />
        <div className="unlorem">
            <h4 className="xd">Nom vestido</h4>
            <div className="parrafos">
            <p>
            Precio:   
            </p>
            <p>Color:</p>
            <p>Talla:</p>
            </div>
        </div>
       </div>
    )
}
export default CardDress;