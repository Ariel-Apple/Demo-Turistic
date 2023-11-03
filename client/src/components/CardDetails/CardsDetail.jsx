import * as React from "react";
import "./CardsDetail.scss";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import Header from "../Header";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Skeleton from "@mui/material/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsPostTuristic } from "../../redux/action";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import { Calendar, theme } from "antd";

//import 'semantic-ui-css/semantic.min.css';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker, Space } from "antd";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import { Image } from "antd";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

export default function CardDetails() {
  const { idTuristic } = useParams();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const detailpost = useSelector((state) => state.detailpost);
  const dispatch = useDispatch();
  const values = [true];
  const valuesMobile = [true];

  const [fullscreen, setFullscreen] = React.useState(true);
  const [fullscreenMobile, setFullscreenMobile] = React.useState(true);

  const [detailsModal, setDetailsModal] = React.useState(false);
  const [detailsCardReserve, setDetailsCardReserve] = React.useState(false);

  const [cardReserve, setCardReserve] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const splideRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setDetailsModal(true);
  }

  function handleShowMobile(breakpoint) {
    setFullscreenMobile(breakpoint);
    setDetailsCardReserve(true);
  }
  console.log(detailpost.Users && detailpost.Users[0].backgroundColor);

  React.useEffect(() => {
    dispatch(DetailsPostTuristic(idTuristic));
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 1000);
  }, [dispatch, idTuristic]);

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const OpenReserCard = () => {
    setCardReserve(true);
  };

  React.useEffect(() => {
    const splide = splideRef.current;

    let interval;

    if (splide) {
      splide.on("mounted", () => {
        interval = setInterval(() => {
          splide.go("+1");
        }, 3000); // Cambia de imagen cada 3 segundos (ajusta el intervalo según lo desees)
      });

      splide.on("destroy", () => {
        clearInterval(interval);
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, []);
  const list = () => (
    <div>
      <Box sx={{ display: "grids" }}>
        <List>
          <div className="container-image">
            {detailpost.imageFile.map((img, index) => (
              <Image.PreviewGroup key={index} items={[{ src: img }]}>
                <div>
                  <Image
                    src={img}
                    alt={`Imagen ${index + 1}`}
                    width="100%"
                    height="50vh"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Image.PreviewGroup>
            ))}
          </div>
        </List>
      </Box>
    </div>
  );

  return (
    <div className="detail-container">
      <Header />

      <div className="bg-white">
        <div className="pt-6">
          {/* Image gallery */}
          {isLoading ? (
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <Skeleton variant="rectangular" id="skeleton2" />
                </div>
              </div>

              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <Skeleton variant="rectangular" id="skeleton1" />
              </div>
            </div>
          ) : (
            <div>
              {values.map((v, idx) => (
                <div key={idx} className="me-2 mb-2 ">
                  <div className="title-continent">
                    <h1>{detailpost.title}</h1>
                    {/*    <h1 className="title">Lagos</h1> */}
                  </div>

                  <div
                    onClick={() => handleShow(v)}
                    className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 fixed-image img-contains"
                  >
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block ">
                      <img
                        srcset={detailpost.imageFile[0]}
                        /*   src={product.images[0].src} */
                        alt="Not found"
                        className="h-full w-full object-cover object-center hover-image-left"
                      />
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <img
                          srcset={detailpost.imageFile[1]}
                          alt="Not found"
                          className="h-full w-full object-cover object-center hover-image-center"
                        />
                      </div>
                      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                        <img
                          srcset={detailpost.imageFile[2]}
                          alt="Not found"
                          className="h-full w-full object-cover object-center hover-image-center"
                        />
                      </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg ">
                      <img
                        srcset={detailpost.imageFile[3]}
                        alt="Not found"
                        className="h-full w-full object-cover object-center hover-image-left"
                      />

                      <div>
                        <Fab size="small" id="icons-details" aria-label="add">
                          <AddIcon />
                          {detailpost.imageFile.length}
                        </Fab>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="ocult">
                {values.map((v, idx) => (
                  <div
                    className={
                      scrollPosition > 80
                        ? "carrusel-mobile aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg "
                        : "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg carrusel-relative"
                    }
                    onClick={() => handleShow(v)}
                  >
                    <Carousel controls={false} indicators={false}>
                      {detailpost.imageFile.map((img, index) => (
                        <Carousel.Item key={index}>
                          <div className="movile-carrusel">
                            <img
                              className={
                                scrollPosition > 80
                                  ? "carousel-image-relative"
                                  : "carousel-image"
                              }
                              src={img}
                              alt="not found"
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                ))}
              </div>

              <div className="none-laptop">
                {scrollPosition >= 350 && (
                  <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 carrusel-container">
                    <div className="carrusel-scroll slide-up">
                      <div className="splide-container">
                        <Splide
                          options={{
                            type: "slide",
                            perPage: 3,
                            perMove: 1,
                            pagination: true,
                            cover: true,
                          }}
                        >
                          {detailpost.imageFile.map((img, index) => (
                            <SplideSlide key={index}>
                              <div className="details-carrusel-fixed">
                                <img
                                  src={img}
                                  alt={`Imagen ${index + 1}`}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            </SplideSlide>
                          ))}
                        </Splide>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Modal
                show={detailsModal}
                fullscreen={fullscreen}
                onHide={() => setDetailsModal(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>{list()}</Modal.Body>
              </Modal>
            </div>
          )}

          {/* Product info */}
          <div
            className={
              scrollPosition > 80
                ? "text-info mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16  "
                : " mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 text-info-normal"
            }
          >
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="card-text">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl flex-name">
                  Anfitrión: {detailpost.Users && detailpost.Users[0].name}
                  <div className="avatar-container">
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,

                        background:
                          detailpost.Users && detailpost.Users[0]
                            ? detailpost.Users[0].avatar
                              ? `url(${detailpost.Users[0].avatar})`
                              : detailpost.Users[0].backgroundColor
                            : "",

                        backgroundSize: "cover",
                      }}
                    >
                      {detailpost.Users && detailpost.Users[0].avatar ? (
                        <div></div>
                      ) : (
                        <div>
                          {detailpost.Users &&
                            detailpost.Users[0].name[0].toUpperCase()}
                        </div>
                      )}
                    </Avatar>
                  </div>
                </h1>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Lugar para visitar.
                </h1>

                <div className="continent-country">
                  {detailpost.continent}, {detailpost.country}
                </div>
              </div>

              <div className="horizontal-line-with-o">
                <div className="line"></div> {/* Línea a la izquierda */}
              </div>
            </div>

            {/* Options */}

            {cardReserve && (
              <div
                className={
                  detailpost.status === "Privado" ? "card-reserve" : ""
                }
              >
                {detailpost.status === "Privado" && (
                  <div className="absolute top-0 right-0 p-2">
                    <div
                      style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#000",
                      }}
                      onClick={() => setCardReserve(false)}
                    >
                      x
                    </div>
                  </div>
                )}
                <div className="mt-4 lg:row-span-3 lg:mt-0 ">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">
                    {detailpost.price ? <span>${detailpost.price}</span> : null}
                    <div>
                      <div className="space-y-6">
                        <h3 className="text-base text-gray-900">
                          {detailpost.people ? (
                            <div>
                              <Diversity3RoundedIcon />
                              {detailpost.people} personas
                            </div>
                          ) : null}
                        </h3>
                      </div>
                      {detailpost.status === "Privado" ? (
                        <div style={wrapperStyle}>
                          <Space direction="vertical" size={12}>
                            <RangePicker
                              defaultValue={[
                                dayjs("2015/01/01", dateFormat),
                                dayjs("2015/01/01", dateFormat),
                              ]}
                              format={dateFormat}
                            />
                          </Space>
                        </div>
                      ) : null}
                    </div>
                  </p>

                  <form className="mt-10">
                    <button
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserve"
                    >
                      Reservar
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}

              <div className="space-y-1 card-text">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Breve resumen del lugar
                </h1>
                <p className="text-base text-gray-900">{detailpost.summary}</p>
              </div>
              {detailpost.status === "Privado" ? (
                <div>
                  <div className="horizontal-line-with-o">
                    <div className="line"></div> {/* Línea a la izquierda */}
                  </div>

                  <div className="mt-10 card-text-list">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      Dias de atención al cliente de {detailpost.daysAtentions}.
                    </h1>

                    <p className="text-sm text-gray-600">
                      de {detailpost.hoursAtetionsInitial}am a{" "}
                      {detailpost.hoursAtentionsFinally}pm
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="mt-10">
                <div>
                  <div className="horizontal-line-with-o">
                    <div className="line"></div> {/* Línea a la izquierda */}
                  </div>
                  <div className="card-text-list">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      El lugar cuenta con:
                    </h1>

                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {detailpost.listDetails &&
                        detailpost.listDetails.map((list) => (
                          <li className="text-gray-400">
                            <span className="text-gray-600">{list}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  {detailpost.status === "Privado" ||
                  detailpost.status === "Público" ? (
                    <div>
                      <div className="horizontal-line-with-o">
                        <div className="line"></div>{" "}
                        {/* Línea a la izquierda */}
                      </div>
                      <div className="card-text-list">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                          información importante
                        </h1>

                        <p className="text-sm text-gray-600">
                          <ul
                            role="list"
                            className="list-disc space-y-2 pl-4 text-sm"
                          >
                            {detailpost.infoImportant &&
                              detailpost.infoImportant.map((list) => (
                                <li className="text-gray-400">
                                  <span className="text-gray-600">{list}</span>
                                </li>
                              ))}
                          </ul>
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="horizontal-line-with-o">
                  <div className="line"></div> {/* Línea a la izquierda */}
                </div>
                <div className="mt-10 card-text">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Historia
                  </h1>

                  <p className="text-sm text-gray-600 ">
                    {detailpost.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {detailpost.status === "Privado" && (
        <div className="footer-details">
          <div className="btn-footer-container">
            <button
              onClick={OpenReserCard}
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 footer-btn"
            >
              Reservar
            </button>
          </div>
          <div className="btn-footer-laptop">
            {values.map(
              (v, idx) =>
                scrollPosition >= 350 && (
                  <button
                    onClick={() => handleShow(v)}
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 footer-btn-photo"
                  >
                    Ver fotos
                  </button>
                )
            )}
          </div>
        </div>
      )}

      <div>
        {detailpost.status === "Privado" && (
          <div className="footer-details-mobile">
            <div className="btn-footer-container">
              <button
                type="submit"
                className="footer-btn"
                onClick={() => handleShowMobile()}
              >
                Reservar
              </button>
            </div>

            <Modal
              show={detailsCardReserve}
              fullscreen={fullscreenMobile}
              onHide={() => setDetailsCardReserve(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  className={
                    detailpost.status === "Privado" ? "card-reserve-mobile" : ""
                  }
                >
                  <div className="mt-4 lg:row-span-3 lg:mt-0 ">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">
                      {detailpost.price ? (
                        <span>${detailpost.price}</span>
                      ) : null}
                      <div>
                        <div className="space-y-6">
                          <h3 className="text-base text-gray-900">
                            {detailpost.people ? (
                              <div>
                                <Diversity3RoundedIcon />
                                {detailpost.people} personas
                              </div>
                            ) : null}
                          </h3>
                        </div>

                        {detailpost.status === "Privado" ? (
                          <div style={wrapperStyle}>
                            <Space direction="vertical" size={12}>
                              <RangePicker
                                defaultValue={[
                                  dayjs("2015/01/01", dateFormat),
                                  dayjs("2015/01/01", dateFormat),
                                ]}
                                format={dateFormat}
                              />
                            </Space>
                          </div>
                        ) : null}
                      </div>
                    </p>
                    <form className="mt-10">
                      {detailpost.status === "Privado" ? (
                        <button
                          type="submit"
                          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 btn-reserve"
                        >
                          Reservar
                        </button>
                      ) : null}
                    </form>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}
