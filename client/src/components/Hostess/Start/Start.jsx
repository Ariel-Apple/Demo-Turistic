import { useEffect, useState } from "react";
import "./Start.css";

export default function Start() {




    return(

        <>

            <div className="start-container">
            <div className="start-img">
                <img srcSet={require('../../../assets/images/mi-sitio.png')} alt="Not found" />
                <h2>Mi sitio</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/reservations.png')} alt="Not found" />
                <h2>Reservaciones</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/factoritations.jpg')} alt="Not found" />
                <h2>Datos de factorización</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/historial.jpg')} alt="Not found" />
                <h2>Historial de reservas</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/reclamos.jpg')} alt="Not found" />
                <h2>Reclamos</h2>
            </div>
            <div className="start-img">
                <img srcSet={require('../../../assets/images/comentarios.jpg')} alt="Not found" />
                <h2>Comentarios</h2>
            </div>

        </div>
        </>

    )
}