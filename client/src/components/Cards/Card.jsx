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
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
      setIsLoading(false);
    }, 2000);
  }, [dispatch, storedBackgroundColor, token]);

  useEffect(() => {
    let totalImagesToLoad = 0;
    allPost.forEach((data) => {
      data.Posts.forEach((info) => {
        totalImagesToLoad += info.imageFile.length;
      });
    });

    let loadedImages = 0;

    function handleImageLoad() {
      loadedImages++;
      if (loadedImages === totalImagesToLoad) {
        setImagesLoaded(true);
      }
    }

    if (totalImagesToLoad > 0) {
      allPost.forEach((data) => {
        data.Posts.forEach((info) => {
          info.imageFile.forEach((imageSrc) => {
            const img = new Image();
            img.src = imageSrc;
            img.onload = handleImageLoad;
          });
        });
      });
    } else {
      setImagesLoaded(true);
    }
  }, [allPost]);

  const totalLength = allPost ? allPost.reduce((sum, post) => sum + post.Posts.length, 0) : 0;

  console.log(totalLength);

  return (
    <>
      <div className="card-container">
        {isLoading ? (
          <Grid className="loading-skeleton">
            {Array.from(new Array(totalLength)).map((item, index) => (
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
          imagesLoaded  && (
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
                                {info.title.split(' ').length > 2 ? (
                                  <h3 className="card-title">
                                    {info.title.split(' ').slice(0, 2).join(' ')}...
                                  </h3>
                                ) : (
                                  <h3 className="card-title">{info.title}</h3>
                                )}
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
          )
        )}
      </div>
    </>
  );
}

export default Card;
