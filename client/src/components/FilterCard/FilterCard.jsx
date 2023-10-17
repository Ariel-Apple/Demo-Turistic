import lagos from "../../assets/icons-filter/lagos.png";
import montañas from "../../assets/icons-filter/montañas.png";
import areas_verdes from "../../assets/icons-filter/areas-verdes.png";
import parques_acuaticos from "../../assets/icons-filter/parques-acuaticos.jpg";
import playas from "../../assets/icons-filter/playas.png";
import Parques_arqueologicos from "../../assets/icons-filter/parques-arqueologicos.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import React, { useEffect } from "react";

import "./FilterCard.scss";

export default function FilterCard() {
  return (
     <div className="all-filter">
                <h2>Buscar por</h2>
    <div className="filter-container">
      <Splide
        options={{
          type: "slide", // Tipo de transición (slide)
          perPage: 1, // Número de elementos a mostrar en un slide
          perMove: 1, // Número de elementos a mover en cada transición
          pagination: false,
        }}
        className="slide"
        >
        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-lagos">
            <div className="bg-lagos">

            <h2 id="lagos">Lagos</h2>
            </div>
          </button>
          <button variant="contained" className="filter-montañas no-spacing">
          <div className="bg-montañas">

            <h2 id="montañas">Montañas</h2>
          </div>
          </button>
        </SplideSlide>
        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-verdes no-spacing">
          <div className="bg-verdes">


            <h2 id="verdes">Areas verdes</h2>
          </div>
          </button>
          <button variant="contained" className="filter-acuaticos">
          <div className="bg-acuaticos">

            <h2 id="acuaticos">Parques acuaticos</h2>
          </div>
          </button>
        </SplideSlide>
    

        <SplideSlide className="slide-card">
          <button variant="contained" className="filter-playas">
          <div className="bg-playas">

            <h2 id="playas">Playas</h2>
          </div>
          </button>
          <button variant="contained" className="filter-arqueologicos">
          <div className="bg-arqueologicos">

            <h2 id="arqueologicos">Parques arqueologicos</h2>
          </div>
          </button>
        </SplideSlide>
  
      </Splide>
    </div>
          </div>
  );
}
