import styles from "./Comentarios.module.scss";
import image from "../../../assets/images/image-perfil-comentarios.png";

const data = [
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servicio 10 de 10. A demás",
  },
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "incognito",
    paragraph:
      "Cuenta con muy buenos espacios, lamentablemente la atención al cliente es muy mala.",
  },
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servici o 10 de 10.",
  },
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he es tado. Me encantó la comida, sin duda, un servicio 10 de 10.",
  },
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "corazon",
    paragraph:
      "El lugar es de lo mejor; es uno de los mejores sitios en los que he estado. Me encantó la comida, sin duda, un servicio 10 de 10.",
  },
  {
    image: image,
    title: "Andrea Cifuentes",
    emoji: "cara",
    paragraph:
      "Tiene buenas atracci ones y también muchas cosas que mejorar c omo las áreas de comida.",
  },
];
export default function Comentarios() {
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
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
              <span>
                {item.emoji === "corazon" ? (
                  <i class="ri-heart-fill" style={{ color: "#652c90" }}></i>
                ) : item.emoji === "incognito" ? (
                  <i
                    class="ri-error-warning-fill"
                    style={{ color: "#7e00e5" }}
                  ></i>
                ) : (
                  <i
                    class="ri-emotion-normal-fill"
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
