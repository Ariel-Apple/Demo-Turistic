import { data } from "../Hostess/Comentarios/Data";
// src/components/Carousel.js
import React, { useState } from "react";
//import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./Carrusel.module.scss";
import { Link } from "react-router-dom";
import Modal from "./ModalDetalleComentario";

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

//const cardData = [...]; // Coloca tus datos de tarjetas aquí

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [modalPosition, setModalPosition] = useState("100%");
  const [transition, setTransition] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
    setModalPosition("0");
    setTransition("transform 0.5s ease");
  };

  const closeModal = () => {
    setModalPosition("100%");
    setTransition("transform 0.5s ease");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 500);
  };

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
            <div
              className={styles.contentComment}
              key={index}
              id="comentarios"
              onClick={() => openModal(item.paragraph)}
            >
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
      {isModalOpen && (
        <Modal
          content={modalContent}
          onClose={closeModal}
          position={modalPosition}
          transition={transition}
        />
      )}
      <div className={styles.buttonContainer}>
        <Link to="/all-comments">
          <button className={styles.button}>Ver todos los comentarios</button>
        </Link>
      </div>
    </>
  );
};

export default Carousel;
