import React, { useState } from "react";
import styles from "./ModalComponent.module.scss";

const ModalComponent = ({ onClose, isModalOpen }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [comment, setComment] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  console.log(isModalOpen)

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setIsButtonDisabled(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Aquí puedes manejar la lógica para enviar el comentario
    // Puedes acceder a selectedIcon y comment para obtener la información necesaria
    // ...

    // Cierra el modal
    onClose();
  };

  return (
    <div className={`${styles.modalOverlay} ${isModalOpen ? styles.visible : styles.oculto}`}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Cancelar
        </button>
        <button className={styles.closeButtonMobile} onClick={onClose}>
          <i class="ri-close-fill"></i>
        </button>
        <div className={styles.boxOne}>
          <h3 className={styles.title}>¿Te ha gustado el sitio?</h3>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <h4>Si</h4>
              <span
                className={`${selectedIcon === "thumbsUp" && styles.selected}`}
                onClick={() => handleIconClick("thumbsUp")}
              >
                <i className="ri-thumb-up-line"></i>
              </span>
            </div>
            <div className={styles.icon}>
              <h4>No</h4>
              <span
                className={`${
                  selectedIcon === "thumbsDown" && styles.selected
                }`}
                onClick={() => handleIconClick("thumbsDown")}
              >
                <i className="ri-thumb-down-line"></i>
              </span>
            </div>
            <div className={styles.icon}>
              <h4>Tal vez</h4>
              <span
                className={` ${
                  selectedIcon === "seriousFace" && styles.selected
                }`}
                onClick={() => handleIconClick("seriousFace")}
              >
                <i className="ri-emotion-normal-line"></i>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <h3 className={styles.title}>
            ¿Qué opinas de este sitio?, hazlo saber en la sección de comentarios
          </h3>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
          />
          <button onClick={handleCommentSubmit} disabled={isButtonDisabled}>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
