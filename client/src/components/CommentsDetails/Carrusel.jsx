import { data } from "../Hostess/Comentarios/Data";
// src/components/Carousel.js
import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./Carrusel.module.scss";

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//const cardData = [...]; // Coloca tus datos de tarjetas aquí

const Carousel = () => {
  return (
    <>
      <Swiper
        //navigation
        spaceBetween={8}
        slidesPerView={1.15}
        centeredSlides
        loop
        className={styles.swiperContainer}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.contentComment} key={index} id="comentarios">
              <span>
                {item.emoji === "corazon" ? (
                  <i className="ri-heart-fill" style={{ color: "#652c90" }}></i>
                ) : item.emoji === "incognito" ? (
                  <i
                    className="ri-error-warning-fill"
                    style={{ color: "#7e00e5" }}
                  ></i>
                ) : (
                  <i
                    className="ri-emotion-normal-fill"
                    style={{ color: "#9463ec" }}
                  ></i>
                )}
              </span>
              <div>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
              <p>{item.paragraph}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Ver todo</button>
      </div>
    </>
  );
};

export default Carousel;
