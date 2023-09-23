import React, { useState, useEffect } from "react";
import "./Cards.scss";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { AllPostTuristic, dataPersonal } from "../../redux/action";
import { list2 } from "../../assets/cards-list";

function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const allPost = useSelector((state) => state.allPost);
  const token = useSelector((state) => state.token);
  console.log(allPost);

  console.log(allPost);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const storedBackgroundColor = localStorage.getItem("avatarBackgroundColor");
  const [avatarBackgroundColor, setAvatarBackgroundColor] = React.useState(
    storedBackgroundColor || getRandomColor()
  );

  useEffect(() => {
    dispatch(AllPostTuristic());
    dispatch(dataPersonal(token));
    if (!storedBackgroundColor) {
      const newColor = getRandomColor();
      setAvatarBackgroundColor(newColor);
      localStorage.setItem("avatarBackgroundColor", newColor);
    }
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, [dispatch, storedBackgroundColor, token]);

  return (
    <>
      {allPost.length > 0 ? (
        <div className="card-container">
          {isLoading ? (
            <Grid className="loading-skeleton">
              {Array.from(new Array(allPost.length)).map((item, index) => (
                <Box key={index}>
                  <Skeleton variant="rectangular" id="skeleton" />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton width="50%" />
                    <Skeleton width="30%" />
                  </Box>
                </Box>
              ))}
            </Grid>
          ) : (
            <div className="cards-flex">
              {allPost.map((data, i) =>
                data.Posts.map((info, index) => (
                  <div className="card-box" key={index}>
                    <Carousel interval={null} className="swiper-container">
                      {info.imageFile.map((imageSrc, imageIndex) => (
                        <Carousel.Item key={imageIndex}>
                          <Link to={"/rooms/" + info.id} className="text-link">
                            <img
                              src={imageSrc}
                              alt={imageSrc}
                              className="card-img"
                            />
                          </Link>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <div className="desc-hover">
                      <Link to={"/rooms/" + info.id} className="text-link">
                        {info.status === "Público" ? (
                          <div className="shadow-card">
                            <div className="card-info-flex">
                              <Link
                                to={"/rooms/" + info.id}
                                className="text-link"
                              >
                                <h3 className="card-title">{info.title}</h3>
                              </Link>
                              <div>
                                <Avatar
                                  sx={{
                                    width: 32,
                                    height: 32,
                                    marginRight: "10px",
                                  }}
                                >
                                  {data.name && data.name[0].toUpperCase()}
                                </Avatar>
                              </div>
                            </div>

                            <p>
                              <p
                                style={{
                                  margin: "0.2rem",
                                  fontSize: "1rem",
                                  color: "var(--black)",
                                }}
                                className="price-none"
                              >
                                <span
                                  style={{
                                    fontWeight: "600",
                                    marginLeft: "10px",
                                  }}
                                >
                                  Gratis
                                </span>{" "}
                                {/*     <span style={{ fontWeight: "600" }}>$50</span>{" "} */}
                                {/* {info.stay} */}
                              </p>
                            </p>
                            <p className="summary-card">{info.summary}</p>
                          </div>
                        ) : (
                          <div className="shadow-card">
                            <div className="card-info-flex">
                              <Link
                                to={"/rooms/" + info.id}
                                className="text-link"
                              >
                                <h3 className="card-title">{info.title}</h3>
                              </Link>
                              <div>
                                <Avatar
                                  sx={{
                                    width: 32,
                                    height: 32,
                                    marginRight: "10px",
                                  }}
                                >
                                  {data.name && data.name[0].toUpperCase()}
                                </Avatar>
                              </div>
                            </div>

                            <p>
                              <p
                                style={{
                                  margin: "0.2rem",
                                  fontSize: "1rem",
                                  color: "var(--black)",
                                }}
                                className="price-none"
                              >
                                <span
                                  style={{
                                    fontWeight: "600",
                                    marginLeft: "10px",
                                  }}
                                >
                                  ${info.price}
                                </span>{" "}
                                {/*     <span style={{ fontWeight: "600" }}>$50</span>{" "} */}
                                {/* {info.stay} */}
                                por persona
                              </p>
                            </p>
                            <p className="summary-card">{info.summary}</p>
                          </div>
                        )}
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ) : (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Aún no hay publicaciones.
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sé el primero en publicar, regístrate y publica la primera
              publicación.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 register-button"
              >
                Registrate
              </a>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Card;
