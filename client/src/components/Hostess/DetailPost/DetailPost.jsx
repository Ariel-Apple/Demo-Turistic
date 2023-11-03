import React,{useEffect} from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Editable, EditablePreview, EditableInput, useEditableControls } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"; 
import { IconButton, Flex, ButtonGroup } from "@chakra-ui/react";
import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import CachedIcon from "@mui/icons-material/Cached";
import CloseIcon from "@mui/icons-material/Close";
import { Card } from "antd";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Avatar from "@mui/material/Avatar";
import {useParams, Link} from 'react-router-dom'
import Accordion from "react-bootstrap/Accordion";
import '../Mywebsite/Mywebsite.css';
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal, DetailsPostTuristic } from "../../../redux/action";



export default function DetailPost() {
  const dispatch = useDispatch();
  const { idTuristic } = useParams();
  const detailpost = useSelector((state) => state.detailpost);
  console.log(detailpost);

  const datapersonal = useSelector((state) => state.datapersonal);

  const token = useSelector((state) => state.token);
    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
          <ButtonGroup justifyContent='center' size='sm'>
            <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
          </ButtonGroup>
        ) : (
          <Flex justifyContent='center'>
            <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
          </Flex>
        )
      }

      useEffect(() => {
        dispatch(dataPersonal(token));
        dispatch(DetailsPostTuristic(idTuristic));
    
      }, [dispatch, token]);


    return (
        <div>
              <div className="container-updatePublic">
          <div className="card-update">
            <div className="card-image">
              <div className="title-subtitle">
{/*               <Editable
      textAlign='center'
      defaultValue='Rasengan'
      fontSize='2xl'
      isPreviewFocusable={false}
      className="title"
    >
           <EditablePreview />
      <Input as={EditableInput} />
      <EditableControls />
    </Editable> */}
    <h1 className="title">{detailpost.title}</h1>

                <span className="sub-title">{detailpost.continent}, {detailpost.country}.</span>
                <span className="sub-title">Estado: {detailpost.status}</span>
              </div>
              <div>
                    <Carousel interval={null} className="swiper-anfitrion">
                      {detailpost.imageFile && detailpost.imageFile.map((imageSrc, imageIndex) => (
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
                  <p> ${detailpost.price}</p>
                </Card>
              </div>

              <div className="publication-btn">
                <Button>
                  <span id="go-btn">Ir a publicación</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="accordion-bg">
            <Accordion className="accordion-container" defaultActiveKey="0">
              <Accordion.Item className="accordion" eventKey="0">
                <Accordion.Header>Resumen del Lugar</Accordion.Header>
                <Accordion.Body>
               {detailpost.summary}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion" eventKey="1">
                <Accordion.Header>Descripción</Accordion.Header>
                <Accordion.Body>
                {detailpost.description}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion" eventKey="2">
                <Accordion.Header>Capacidad de personas</Accordion.Header>
                <Accordion.Body>
                {detailpost.people}

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion" eventKey="3">
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

                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="accordion" eventKey="4">
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
                </Accordion.Body>
              </Accordion.Item>
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
    )
}