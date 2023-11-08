import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import {useParams, Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal, DetailsPostTuristic, DeletePost } from "../../../redux/action";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ExclamationCircleFilled } from '@ant-design/icons';
import BeatLoader from "react-loading";



function Mywebsite() {
  const dispatch = useDispatch();
  const { idTuristic } = useParams();
  const datapersonal = useSelector((state) => state.datapersonal);

  const token = useSelector((state) => state.token);
  const [isLoading, setIsLoading] = useState(true);


 

  useEffect(() => {
    dispatch(dataPersonal(token));
    dispatch(DetailsPostTuristic(idTuristic));

  }, [dispatch, token]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado a "false" después de cierto tiempo
    }, 2000);
  }, []);



  return (
    <>
        {isLoading ? (
        <div className="loading-container">
          <BeatLoader color="#8B008B" size="80" />
        </div>
      ) : (

      <div
        className="card-container-post"
        style={{ display:  "block" }}
      >
        <div className="cards-flex">
          {datapersonal && datapersonal.Posts && datapersonal.Posts.map((data, i) => (
            <div className="card-box" key={i}>
              <div className="carousel-container">
                <Carousel interval={null} className="swiper-container">
                  {data.imageFile.map((imageSrc, imageIndex) => (
                    <Carousel.Item key={imageIndex}>
                          <Link to={`/anfitrion/mi sitio/${data.id}`}>


                      <div className="image-container">
                        <img
                          srcSet={imageSrc}
                          alt={imageSrc}
                          className="card-img"
                        />
                      </div>
                          </ Link>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>

              <div className="desc-hover">
                <div className="shadow-card">
                  <div className="card-info-flex">
                    <h3 className="card-title">{data.title}</h3>
                    <div>
                      <Avatar
                        sx={{
                          width: 25,
                          height: 25,
                          background: datapersonal.avatar
                            ? `url(${datapersonal.avatar})`
                            : datapersonal.backgroundColor,
                          backgroundSize: "cover",
                          marginRight: "10px",
                          marginTop: "5px",
                        }}
                      >
                        {datapersonal.avatar ? (
                          <div></div>
                        ) : (
                          <div>
                            {datapersonal.name &&
                              datapersonal.name[0].toUpperCase()}
                          </div>
                        )}
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
                        {data.updatedAt.slice(0, 10)}
                      </span>{" "}
                    </p>
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

                  {data.summary.split(" ").length > 15 ? (
                    <p className="summary-card">
                      {data.summary.split(" ").slice(0, 15).join(" ")}
                      ...
                    </p>
                  ) : (
                    <p className="summary-card">{data.summary}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

)}
      
    </>
  );
}

export default Mywebsite;
