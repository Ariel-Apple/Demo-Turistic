// src/components/Modal.js
import React from "react";
import ReactDOM from "react-dom";
import styles from "./ModalDetalleComentario.module.scss";

const ModalDetalleComentario = ({ content, onClose, position, transition}) => {
  return ReactDOM.createPortal(
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      style={{ transition, transform: `translateY(${position})` }}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <p>{content}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.body
  );
};

export default ModalDetalleComentario;
