import styles from "./CommentsDetails.module.scss";
import { data } from "../Hostess/Comentarios/Data";

export default function CommentsDetails() {
  return (
    <div className={styles.container} id="comentarios" >
      <div className={styles.commentsContainer}>
        {data.map((item, index) => (
          <div className={styles.contentComment} key={index}>
            <div>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
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
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
