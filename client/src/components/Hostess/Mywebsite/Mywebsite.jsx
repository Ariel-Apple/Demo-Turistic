import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";

import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../../redux/action";
import "./Mywebsite.css";
import CloseIcon from "@mui/icons-material/Close";
import CachedIcon from "@mui/icons-material/Cached";
import { Card } from "antd";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


function Mywebsite() {
  const dispatch = useDispatch();
  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  const [updatePublic, setUpdatePublic] = useState(false);

  const handleUpdatePublic = () => {
    setUpdatePublic(!updatePublic); // Cambia el estado a su valor opuesto
  };

  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [dispatch, token]);

  return (
    <>
      <div
        className="card-container"
        onClick={handleUpdatePublic}
        style={{ display: updatePublic ? "none" : "block" }}
      >
        <div className="cards-flex">
          {datapersonal.Posts.map((data, i) => (
            <div className="card-box" key={i}>
              <div className="carousel-container">
                <Carousel interval={null} className="swiper-container">
                  {data.imageFile.map((imageSrc, imageIndex) => (
                    <Carousel.Item key={imageIndex}>
                      <div className="image-container">
                        <img
                          srcSet={imageSrc}
                          alt={imageSrc}
                          className="card-img"
                        />
                      </div>
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

      {updatePublic && (
        <div className="container-updatePublic">
          <div className="card-update">
            <div className="card-image">
              <div className="title-subtitle">
                <span className="title">Las Ilusiones</span>
                <span className="sub-title">América, Guatemala.</span>
                <span className="sub-title">Estado: Privado</span>
              </div>
              <div>
                <img
                  srcSet={require("../../../assets/images/tuat.png")}
                  alt="Not found"
                  className="img-update"
                />
              </div>
              <div className="btn-icons">
                <div>
                  <CachedIcon id="icons-reload" />
                </div>
                <div>
                  <CloseIcon id="icons-reload" />
                </div>
              </div>
            </div>

            <div className="container-direction">
              <div className="card-direction">
                <span className="direction">Dirección</span>
                <Card style={{ width: 500, fontSize: 20, fontWeight: 600 }}>
                  <p>
                    San Juan Chamelco a Santa Cruz, San Juan Chamelco, Alta
                    Verapaz, Guatemala.
                  </p>
                </Card>
              </div>

              <div className="card-direction">
                <span className="direction">Precio fijado:</span>
                <Card style={{ width: 200, fontSize: 20, fontWeight: 600 }}>
                  <p> $25.00</p>
                </Card>
              </div>

              <div className="publication-btn">
                <Button>
                  <span id="go-btn">

                  Ir a publicación
                  </span>
                  </Button>
              </div>
            </div>
          </div>
          <div className="accordion-bg">
            <Accordion className="accordion-container" defaultActiveKey="0">
              <Accordion.Item className="accordion" eventKey="0">
                <Accordion.Header>Resumen del Lugar</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Descripción</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Capacidad de personas</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Cuenta con:</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Políticas del lugar</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            <Card style={{ width: 300, fontSize: 15, fontWeight: 700 }}>
                  <p>
                  Fecha y horario del sitio:

                  </p>
                </Card>
            <div className="slide-container">
            <Splide
        options={{
          type: "slide", // Tipo de transición (slide)
          perPage: 1, // Número de elementos a mostrar en un slide
          perMove: 1, // Número de elementos a mover en cada transición
          pagination: false,
        }}
        >
        <SplideSlide style={{ display: 'flex', justifyContent:'center', gap: '1em' }}>
        <Card className="card-calendar">
                  <p>
                asdasd

                  </p>
                </Card>
                <Card className="card-calendar">
                  <p>
                asdasd

                  </p>
                </Card>
                <Card className="card-calendar">
                  <p>
                asdasd

                  </p>
                </Card>
        </SplideSlide>

      </Splide>

            </div>
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default Mywebsite;
