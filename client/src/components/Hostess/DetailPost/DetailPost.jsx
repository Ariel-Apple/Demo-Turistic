import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import { Card } from "antd";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useParams, Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import "../Mywebsite/Mywebsite.css";
import { useSelector, useDispatch } from "react-redux";
import {
  dataPersonal,
  DetailsPostTuristic,
  updatePersonal,
} from "../../../redux/action";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Space } from "antd";
import { DeletePost } from "../../../redux/action";
import ButtonBootstrap from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UpdatePhoto from "../UpdatePhoto/UpdatePhoto";
import ModalBootstrap from "react-bootstrap/Modal";
import EditIcon from "@mui/icons-material/Edit";
import ButtonMaterial from "@mui/material/Button";

import { updatepost } from "../../../redux/action";

const { confirm } = Modal;

export default function DetailPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const detailpost = useSelector((state) => state.detailpost);
  const token = useSelector((state) => state.token);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const [showTittle, setShowTittle] = useState(false);
  const [showContinent, setShowContinent] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showPolitic, setShowPolitic] = useState(false);
  const [detail, setDetail] = useState({
     title: "",
     continent: "",
     country: "",
     status: "",
     price: "",
     summary: "",
     description: "",
     people: "",






     });
  const handleCloseTitle = () => {
    setShowTittle(false);
    setShowContinent(false);
    setShowStatus(false);
    setShowPrice(false);
    setShowSummary(false);
    setShowDescription(false);
    setShowPeople(false);
    setShowList(false);
    setShowPolitic(false);
  };
  const handleShowTitle = () => setShowTittle(true);

  const handleShowContinent = () => setShowContinent(true);
  const handleShowStatus = () => setShowStatus(true);
  const handleShowPrice = () => setShowPrice(true);
  const handleShowSummary = () => setShowSummary(true);
  const handleShowDescription = () => setShowDescription(true);
  const handleShowPeople = () => setShowPeople(true);
  const handleShowList = () => setShowList(true);
  const handleShowPolitic = () => setShowPolitic(true);

  const handleDelete = () => {
    dispatch(DeletePost(postId));
    navigate("/anfitrion/mi sitio");
  };
  const showDeleteConfirm = () => {
    confirm({
      title: "Seguro que quieres eliminar tu publicación?",
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    dispatch(dataPersonal(token));
    dispatch(DetailsPostTuristic(postId));
  }, [dispatch, token]);

  const handleSubmit = () => {
    dispatch(updatepost(postId, detail));
  };

  const handleTitle = (e) => {
    setDetail({
      ...detail,
      title: e.target.value,
    });
  };
  return (
    <div>
      <div className="container-updatePublic">
        <div className="card-update">
          <div
            style={{
              width: 800,
              borderWidth: "0 3px 3px 0", // Ajusta el grosor según tus preferencias
              borderColor: "gray", // Cambia el color si es necesario
              borderStyle: "solid", // Establece el estilo del borde
              marginLeft: "-5em",
              padding: "15px",
            }}
          >
            <div className="card-image">
              <div className="title-subtitle">
                <div className="update-title">
                  <h1 className="title">{detailpost.title}</h1>
                  <div onClick={handleShowTitle}>
                    <EditIcon />
                  </div>

                  <ModalBootstrap show={showTittle} onHide={handleCloseTitle}>
                   <form action=""  onSubmit={handleSubmit}>

                    <ModalBootstrap.Header closeButton>
                      <ModalBootstrap.Title></ModalBootstrap.Title>
                    </ModalBootstrap.Header>
                    <ModalBootstrap.Body>
                    <Form
                        className="modal-titleupdate"
                        
                      >
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Titulo</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            value={detail.title}
                            onChange={handleTitle}
                          />
                        </Form.Group>
                    </Form>
                    </ModalBootstrap.Body>

                    <ModalBootstrap.Footer>
                      <ButtonBootstrap
                        variant="secondary"
                        onClick={handleCloseTitle}
                      >
                        Cancelar
                      </ButtonBootstrap>
                      <ButtonBootstrap type="submit" variant="primary">
                        Guardar cambio
                      </ButtonBootstrap>
                    </ModalBootstrap.Footer>
                    </form>

                  </ModalBootstrap>
                </div>
                <div className="update-title">
                  <span className="sub-title">
                    {detailpost.continent}, {detailpost.country}.
                  </span>

                  <Button
                    variant="primary"
                    className="btn-black"
                    onClick={handleShowContinent}
                  >
                    Editar
                  </Button>

                  <ModalBootstrap
                    show={showContinent}
                    onHide={handleCloseTitle}
                  >
                   <form action=""  onSubmit={handleSubmit}>

                    <ModalBootstrap.Header closeButton>
                      <ModalBootstrap.Title></ModalBootstrap.Title>
                    </ModalBootstrap.Header>
                    <ModalBootstrap.Body>
                      <Form className="modal-titleupdate">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Continente</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            value={detail.continent}
                            onChange={ (e) => setDetail({...detail, continent: e.target.value})}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Pais</Form.Label>

                          <Form.Control
                            type="text"
                            autoFocus
                            value={detail.country}
                            onChange={ (e) => setDetail({...detail, country: e.target.value})}
                          />
                        </Form.Group>
                      </Form>
                    </ModalBootstrap.Body>
                    <ModalBootstrap.Footer>
                      <ButtonBootstrap
                        variant="secondary"
                        onClick={handleCloseTitle}
                      >
                        Cancelar
                      </ButtonBootstrap>
                      <ButtonBootstrap type="submit" variant="primary">
                        Guardar cambio
                      </ButtonBootstrap>
                    </ModalBootstrap.Footer>
                   </form>

                  </ModalBootstrap>
                </div>
                <div className="update-title">
                  <span className="sub-title">Estado: {detailpost.status}</span>

                  <Button
                    variant="primary"
                    className="btn-black"
                    onClick={handleShowStatus}
                  >
                    Editar
                  </Button>

                  <ModalBootstrap show={showStatus} onHide={handleCloseTitle}>
                    <form  onSubmit={handleSubmit}>

                    <ModalBootstrap.Header closeButton>
                      <ModalBootstrap.Title></ModalBootstrap.Title>
                    </ModalBootstrap.Header>
                    <ModalBootstrap.Body>
                      <Form className="modal-titleupdate">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Estado</Form.Label>
                          <Form.Control
                            type="text"
                            autoFocus
                            value={detail.status}
                            onChange={ (e) => setDetail({...detail, status: e.target.value})}
                          />
                        </Form.Group>
                      </Form>
                    </ModalBootstrap.Body>
                    <ModalBootstrap.Footer>
                      <ButtonBootstrap
                        variant="secondary"
                        onClick={handleCloseTitle}
                      >
                        Cancelar
                      </ButtonBootstrap>
                      <ButtonBootstrap type="submit" variant="primary">
                        Guardar cambio
                      </ButtonBootstrap>
                    </ModalBootstrap.Footer>
                    </form>

                  </ModalBootstrap>
                </div>
              </div>
              <div className="update-title">
                <Carousel interval={null} className="swiper-anfitrion">
                  {detailpost.imageFile &&
                    detailpost.imageFile.map((imageSrc, imageIndex) => (
                      <Carousel.Item key={imageIndex}>
                        <div>
                          <img
                            src={imageSrc}
                            alt={imageSrc}
                            className="img-update"
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                </Carousel>

                {values.map((v, idx) => (
                  <Button
                    variant="primary"
                    key={idx}
                    className="me-2 mb-2 editar-hostess"
                    onClick={() => handleShow(v)}
                  >
                    <EditIcon />
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </Button>
                ))}
                <ModalBootstrap
                  show={show}
                  fullscreen={fullscreen}
                  onHide={() => setShow(false)}
                >
                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <UpdatePhoto />
                  </ModalBootstrap.Body>
                </ModalBootstrap>
              </div>

              <div className="btn-icons">
                <div>
                  <Space wrap>
                    <Button
                      onClick={showDeleteConfirm}
                      type="dashed"
                      className="btn-delete"
                    >
                      <CloseIcon id="icons-reload" />
                    </Button>
                  </Space>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: 800,
              borderWidth: "0 3px 3px 0", // Ajusta el grosor según tus preferencias
              borderColor: "gray", // Cambia el color si es necesario
              borderStyle: "solid", // Establece el estilo del borde
              marginLeft: "-5em",
            }}
          >
            <div className="container-direction">
              <div className="card-direction">
                <span className="direction">Dirección</span>
                <Card className="card-detailpost">
                  <p>
                    San Juan Chamelco a Santa Cruz, San Juan Chamelco, Alta
                    Verapaz, Guatemala.
                  </p>
                </Card>
              </div>
              <div className="update-title">
                <div className="card-direction">
                  <span className="direction">Precio fijado:</span>
                  <Card style={{ width: 200, fontSize: 20, fontWeight: 600 }}>
                    <p> ${detailpost.price}</p>
                  </Card>
                </div>
                <ButtonMaterial
                  onClick={handleShowPrice}
                  sx={{
                    color: "#8B008B",
                    borderRadius: "50%",
                    padding: "15px",
                  }}
                >
                  <EditIcon sx={{ color: "#8B008B" }} />
                </ButtonMaterial>
                <ModalBootstrap show={showPrice} onHide={handleCloseTitle}>
                <form  onSubmit={handleSubmit}>


                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          value={detail.price}
                          onChange={(e) => setDetail({...detail, price: e.target.value})}
                        />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap type="submit" variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </form>

                </ModalBootstrap>
              </div>

              <div className="publication-btn">
                <a href={"/rooms/" + postId} target="_blank">
                  <Button>
                    <span id="go-btn">Ir a publicación</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 800,
            borderWidth: "0 3px 3px 0", // Ajusta el grosor según tus preferencias

            borderColor: "gray", // Cambia el color si es necesario
            borderStyle: "solid", // Establece el estilo del borde
          }}
        >
          <div className="accordion-bg">
            <Accordion className="accordion-container" defaultActiveKey="0">
              <div className="update-title">
                <Accordion.Item className="accordion " eventKey="0">
                  <div>
                    <Accordion.Header>Resumen del Lugar</Accordion.Header>
                    <Accordion.Body>
                      {detailpost.summary}
                      <div className="icons-edit">
                        <ButtonMaterial
                          onClick={handleShowSummary}
                          sx={{
                            color: "#8B008B",
                            borderRadius: "50%",
                            padding: "15px",
                          }}
                        >
                          <EditIcon />
                        </ButtonMaterial>
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>

                <ModalBootstrap show={showSummary} onHide={handleCloseTitle}>
                <form onSubmit={handleSubmit}>

                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Resumen del Lugar</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          value={detail.summary}
                          onChange={(e) => setDetail({...detail, summary: e.target.value})}

                        />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap type="submit" variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </form>

                </ModalBootstrap>
              </div>

              <div className="update-title">
                <Accordion.Item className="accordion" eventKey="1">
                  <div>
                    <Accordion.Header>Descripción</Accordion.Header>
                    <Accordion.Body>
                      {detailpost.description}
                      <div className="icons-edit">
                        <ButtonMaterial
                          onClick={handleShowDescription}
                          sx={{
                            color: "#8B008B",
                            borderRadius: "50%",
                            padding: "15px",
                          }}
                        >
                          <EditIcon />
                        </ButtonMaterial>
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>

                <ModalBootstrap
                  show={showDescription}
                  onHide={handleCloseTitle}
                >
                  <form action="" onSubmit={handleSubmit}>

                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          value={detail.description}
                          onChange={(e) => setDetail({...detail, description: e.target.value})}

                        />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap type= 'submit' variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                  </form>

                </ModalBootstrap>
              </div>
              <div className="update-title">
                <Accordion.Item className="accordion" eventKey="2">
                  <div>
                    <Accordion.Header>Capacidad de personas</Accordion.Header>
                    <Accordion.Body>
                      {detailpost.people}
                      <div className="icons-edit">
                        <ButtonMaterial
                          onClick={handleShowPeople}
                          sx={{
                            color: "#8B008B",
                            borderRadius: "50%",
                            padding: "15px",
                          }}
                        >
                          <EditIcon />
                        </ButtonMaterial>
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>

                <ModalBootstrap show={showPeople} onHide={handleCloseTitle}>
                  <form action="" onSubmit={handleSubmit}>

                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Capacidad de personas</Form.Label>
                        <Form.Control
                          type="text"
                          autoFocus
                          value={detail.people}
                          onChange={(e) => setDetail({...detail, people: e.target.value})}

                        />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap type= 'submit' variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                  </form>

                </ModalBootstrap>
              </div>
              <div className="update-title">
                <Accordion.Item className="accordion" eventKey="3">
                  <div>
                    <Accordion.Header>Cuenta con:</Accordion.Header>
                    <Accordion.Body>
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
                      <div className="icons-edit">
                        <ButtonMaterial
                          onClick={handleShowList}
                          sx={{
                            color: "#8B008B",
                            borderRadius: "50%",
                            padding: "15px",
                          }}
                        >
                          <EditIcon />
                        </ButtonMaterial>
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>

                <ModalBootstrap show={showList} onHide={handleCloseTitle}>
                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Cuenta con:</Form.Label>
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
                        <Form.Control type="text" autoFocus value="" />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                      className="butonCancelar"
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap className="butonADD">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
              </div>
              <div className="update-title">
                <Accordion.Item className="accordion" eventKey="4">
                  <div>
                    <Accordion.Header>Políticas del lugar</Accordion.Header>
                    <Accordion.Body>
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
                      <div className="icons-edit">
                        <ButtonMaterial
                          onClick={handleShowPolitic}
                          sx={{
                            color: "#8B008B",
                            borderRadius: "50%",
                            padding: "15px",
                          }}
                        >
                          <EditIcon />
                        </ButtonMaterial>
                      </div>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>

                <ModalBootstrap show={showPolitic} onHide={handleCloseTitle}>
                  <ModalBootstrap.Header className="header-modal" closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Políticas del lugar</Form.Label>
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
                        <Form.Control type="text" autoFocus value="" />
                      </Form.Group>
                    </Form>
                  </ModalBootstrap.Body>
                  <ModalBootstrap.Footer>
                    <ButtonBootstrap
                      variant="secondary"
                      onClick={handleCloseTitle}
                      className="butonCancelar"
                    >
                      Cancelar
                    </ButtonBootstrap>
                    <ButtonBootstrap className="butonADD">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
              </div>

              <Card style={{ width: 300, fontSize: 15, fontWeight: 700 }}>
                <p>Fecha y horario del sitio:</p>
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
                  <SplideSlide
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1em",
                    }}
                  >
                    <Card className="card-calendar">
                      <p>lun</p>
                      <p>10</p>
                      <p>oct</p>
                    </Card>
                    <Card className="card-calendar">
                      <p>mar</p>
                      <p>10</p>
                      <p>oct</p>
                    </Card>
                    <Card className="card-calendar">
                      <p>mié</p>
                      <p>10</p>
                      <p>oct</p>
                    </Card>
                  </SplideSlide>
                </Splide>
                <Card className="card-calendar1">
                  <p>Ver todas las fechas</p>
                </Card>
              </div>
              <div>
                <input type="num" />
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
