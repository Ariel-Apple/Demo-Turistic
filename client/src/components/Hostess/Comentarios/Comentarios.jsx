import styles from "./Comentarios.module.scss";
import image from "../../../assets/images/image-perfil-comentarios.png";
import React, { useState } from "react";

const data = [
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servicio 10 de 10. A demás",
  },
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "incognito",
    paragraph:
      "Cuenta con muy buenos espacios, lamentablemente la atención al cliente es muy mala.",
  },
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servici o 10 de 10.",
  },
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he es tado. Me encantó la comida, sin duda, un servicio 10 de 10.",
  },
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servicio 10 de 10.",
  },
  {
    image: image,
    name: "Andrea Cifuentes",
    emoji: "cara",
    paragraph:
      "Tiene buenas atracci ones y también muchas cosas que mejorar c omo las áreas de comida.",
  },
];
export default function Comentarios({ onDelete }) {
  const [showOptions, setShowOptions] = useState(
    Array(data.length).fill(false)
  );

  const handleButtonClick = (index) => {
    // Toggle the state for the clicked card
    const updatedShowOptions = [...showOptions];
    updatedShowOptions[index] = !updatedShowOptions[index];
    setShowOptions(updatedShowOptions);
  };

  const handleDeleteClick = (index) => {
    // Handle delete logic here
    // onDelete();
    // After deleting, hide the options for the clicked card
    const updatedShowOptions = [...showOptions];
    updatedShowOptions[index] = false;
    setShowOptions(updatedShowOptions);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {data.map((item, index) => (
          <div
            className={styles.contentCard}
            key={index}
            style={
              item.emoji === "corazon"
                ? { borderColor: "#9363b7" }
                : item.emoji === "incognito"
                ? { borderColor: "#ff9b9b" }
                : { borderColor: "#b797cf" }
            }
          >
            <div className={styles.cardInfo}>
              <button
                className={styles["options-button"]}
                onClick={() => handleButtonClick(index)}
              >
                <i className="ri-more-2-fill"></i>
              </button>
              {showOptions[index] && (
                <div className={styles["options-dropdown"]}>
                  <div className={styles["option"]}>
                    Silenciar usuario <i className="ri-volume-mute-line"></i>
                  </div>
                  <div
                    className={styles["option"]}
                    onClick={() => handleDeleteClick(index)}
                  >
                    Eliminar comentario <i className="ri-delete-bin-6-line"></i>
                  </div>
                </div>
              )}
              <img src={item.image} alt={`Profile picture of ${item.name}`} />
              <h2>{item.name}</h2>
              <p>{item.paragraph}</p>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
