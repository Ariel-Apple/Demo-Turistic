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
import { dataPersonal, DetailsPostTuristic, updatePersonal } from "../../../redux/action";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal, Space } from "antd";
import { DeletePost } from "../../../redux/action";
import ButtonBootstrap from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalBootstrap from "react-bootstrap/Modal";
const { confirm } = Modal;

export default function DetailPost() {
  const dispatch = useDispatch();
  const { idTuristic } = useParams();
  const navigate = useNavigate();
  const detailpost = useSelector((state) => state.detailpost);
  const token = useSelector((state) => state.token);

  const [showTittle, setShowTittle] = useState(false);
  const [showContinent, setShowContinent] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showPolitic, setShowPolitic] = useState(false);
  const [detail, setDetail] = useState({ title: "" });







  const handleCloseTitle = () => {
    setShowTittle(false)
    setShowContinent(false)
    setShowStatus(false)
    setShowPrice(false)
    setShowSummary(false)
    setShowDescription(false)
    setShowPeople(false)
    setShowList(false)
    setShowPolitic(false)







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
    dispatch(DeletePost(idTuristic));
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
    dispatch(DetailsPostTuristic(idTuristic));
  }, [dispatch, token]);

  const handleChange = async ({ fileList: newFileList }) => {

    // Si es necesario, extrae el título del formulario
    const newTitle = document.getElementById("exampleForm.ControlInput1").value;

    // Realiza la actualización de datos personales con la nueva imagen y título
    const updatedUserData = await dispatch(updatePersonal(idTuristic, { title: newTitle }));

    // Actualiza el estado local con el título del post
    setDetail({ title: updatedUserData.title });
  };

  return (
    <div>
      <div className="container-updatePublic">
        <div className="card-update">
          <div className="card-image">
            <div className="title-subtitle">
              <div className="update-title">
                <h1 className="title">{detailpost.title}</h1>
                <Button variant="primary" >
                  Editar
                </Button>
                <ModalBootstrap show={showTittle} onHide={handleCloseTitle}>
                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
  <Form className="modal-titleupdate" >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Titulo</Form.Label>
      <Form.Control
        type="text"
        autoFocus
        onChange={(e) => setDetail({ title: e.target.value })}
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
                    <ButtonBootstrap onSubmit={(e) => { e.preventDefault(); handleChange(e); }}variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
              </div>
              <div className="update-title">
                <span className="sub-title">
                  {detailpost.continent}, {detailpost.country}.
                </span>
                <Button variant="primary" onClick={handleShowContinent}>
                  Editar
                </Button>

                <ModalBootstrap show={showContinent} onHide={handleCloseTitle}>
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
                          value={detailpost.continent}
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
                          value={detailpost.country}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
              </div>
   <div className="update-title">

              <span className="sub-title">Estado: {detailpost.status}</span>
  
              <Button variant="primary" onClick={handleShowStatus}>
                  Editar
                </Button>
                <ModalBootstrap show={showStatus} onHide={handleCloseTitle}>
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
                          value={detailpost.status}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
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
              <Link to="/anfitrion/historial de reservas/fotos">
              <Button variant="primary">
                  Editar
                </Button>
              </Link>
            </div>

            <div className="btn-icons">
              <div>
                <CachedIcon id="icons-reload" />
              </div>
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
   <div className="update-title">
         
            <div className="card-direction">
              <span className="direction">Precio fijado:</span>
              <Card style={{ width: 200, fontSize: 20, fontWeight: 600 }}>
                <p> ${detailpost.price}</p>
              </Card>
            </div>
            <Button variant="primary" onClick={handleShowPrice}>
                  Editar
                </Button>
                <ModalBootstrap show={showPrice} onHide={handleCloseTitle}>
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
                          value={`$ ${detailpost.price}`}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
            </div>


            <div className="publication-btn">
              <a href={"/rooms/" + idTuristic} target="_blank">

              <Button>
                <span id="go-btn">Ir a publicación</span>
              </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="accordion-bg">
          <Accordion className="accordion-container" defaultActiveKey="0">

          <div className="update-title">
            <Accordion.Item className="accordion " eventKey="0">
              <div>

              <Accordion.Header>Resumen del Lugar</Accordion.Header>
              <Accordion.Body>{detailpost.summary}</Accordion.Body>
              </div>
            </Accordion.Item>
            <Button variant="primary" onClick={handleShowSummary}>
                  Editar
                </Button>
                <ModalBootstrap show={showSummary} onHide={handleCloseTitle}>
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
                          value={detailpost.summary}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
        </div>
        <div className="update-title">

            <Accordion.Item className="accordion" eventKey="1">
            <div>

              <Accordion.Header>Descripción</Accordion.Header>
              <Accordion.Body>{detailpost.description}</Accordion.Body>
        </div>

            </Accordion.Item>
            <Button variant="primary" onClick={handleShowDescription}>
                  Editar
                </Button>
                <ModalBootstrap show={showDescription} onHide={handleCloseTitle}>
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
                          value={detailpost.description}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
        </div>
        <div className="update-title">

            <Accordion.Item className="accordion" eventKey="2">
        <div>

              <Accordion.Header>Capacidad de personas</Accordion.Header>
              <Accordion.Body>{detailpost.people}</Accordion.Body>
        </div>

            </Accordion.Item>
            <Button variant="primary" onClick={handleShowPeople}>
                  Editar
                </Button>
                <ModalBootstrap show={showPeople} onHide={handleCloseTitle}>
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
                          value={detailpost.people}
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
        </div>
        <div className="update-title">

            <Accordion.Item className="accordion" eventKey="3">
        <div >

              <Accordion.Header>Cuenta con:</Accordion.Header>
              <Accordion.Body>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {detailpost.listDetails &&
                    detailpost.listDetails.map((list) => (
                      <li className="text-gray-400">
                        <span className="text-gray-600">{list}</span>
                      </li>
                    ))}
                </ul>
              </Accordion.Body>
        </div>

            </Accordion.Item>
            <Button variant="primary" onClick={handleShowList}>
                  Editar
                </Button>
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
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {detailpost.listDetails &&
                    detailpost.listDetails.map((list) => (
                      <li className="text-gray-400">
                        <span className="text-gray-600">{list}</span>
                      </li>
                    ))}
                </ul>
                        <Form.Control
                          type="text"
                          autoFocus
                          value=""
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
                    <ButtonBootstrap variant="primary">
                      Guardar cambio
                    </ButtonBootstrap>
                  </ModalBootstrap.Footer>
                </ModalBootstrap>
        </div>
        <div className="update-title">

            <Accordion.Item className="accordion" eventKey="4">
        <div >

              <Accordion.Header>Políticas del lugar</Accordion.Header>
              <Accordion.Body>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {detailpost.infoImportant &&
                    detailpost.infoImportant.map((list) => (
                      <li className="text-gray-400">
                        <span className="text-gray-600">{list}</span>
                      </li>
                    ))}
                </ul>
              </Accordion.Body>
        </div>

            </Accordion.Item>
            <Button variant="primary" onClick={handleShowPolitic}>
                  Editar
                </Button>
                <ModalBootstrap show={showPolitic} onHide={handleCloseTitle}>
                  <ModalBootstrap.Header closeButton>
                    <ModalBootstrap.Title></ModalBootstrap.Title>
                  </ModalBootstrap.Header>
                  <ModalBootstrap.Body>
                    <Form className="modal-titleupdate">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Políticas del lugar</Form.Label>
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {detailpost.infoImportant &&
                    detailpost.infoImportant.map((list) => (
                      <li className="text-gray-400">
                        <span className="text-gray-600">{list}</span>
                      </li>
                    ))}
                </ul>
                        <Form.Control
                          type="text"
                          autoFocus
                          value=""
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
                    <ButtonBootstrap variant="primary">
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
              <Card className="card-calendar">
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
  );
}
