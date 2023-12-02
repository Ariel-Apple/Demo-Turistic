import React, { useState, useEffect, useCallback } from "react";
import "./HostessPosts.scss";
import Avatar from "@mui/material/Avatar";
import { Layout, Menu, Button } from "antd";
import Start from "./Start/Start";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";
import Mywebsite from "./Mywebsite/Mywebsite";
import { CameraOutlined } from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { updatePersonal } from "../../redux/action";
import FooterMobile from "./FooterMobile/FooterMobile";
import { PhotoCamera } from "@mui/icons-material";
import { alpha, Box, IconButton, styled } from "@mui/material";
import ButtonMaterial from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const { Header, Sider, Content } = Layout;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  const [start, setStart] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [update, setUpdate] = useState({
    avatar: "",
  });
  const [myWebSite, setMyWebSite] = useState(false);
  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [token]);

  const handleSubmit = async (e) => {
    console.log("Formulario enviado", update);
    const formData = new FormData();
    formData.append("avatar", update.avatar);

    try {
      await dispatch(updatePersonal(datapersonal.id, formData));
      console.log("Datos actualizados exitosamente");
      // Opcionalmente, actualiza la interfaz de usuario para reflejar la actualización exitosa
    } catch (error) {
      console.error("Error:", error);
      // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
    }
  };

  const handleImageChange = useCallback(
    (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        getBase64(file, (imageUrl) => {
          setImagePreview(imageUrl);
          setUpdate((prevUpdate) => ({
            ...prevUpdate,
            avatar: file,
          }));
        });
      }
    },
    [setUpdate, setImagePreview]
  );

  const handleStart = (e) => {
    setMyWebSite(false);
    setStart(true);
  };

  const handleMyWebSite = (e) => {
    setStart(false);
    setMyWebSite(true);
  };

  const handleCancel = (e) => {
    setImagePreview(null);
    setUpdate({
      ...update,
      avatar: null,
    });
  };

  const UploadButton = styled(Box)(({ theme }) => ({
    marginTop: -40,
    marginLeft: 50,
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme.palette.background.paper,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary[400]
        : alpha(theme.palette.background.paper, 0.9),
  }));
  return (
    <div className="container-hostess">
      <Layout className="hostess-content">
        <FooterMobile />

        <div className="container-sider">
          <Sider
            /*      trigger={null}
           collapsible
           collapsed={collapsed} */
            id="menu-left"
            /*  width={360} */
          >
            <form
              className="mx-auto mt-16 max-w-xl sm:mt-20 gap-input"
              onSubmit={handleSubmit}
            >
              <div className="avatar-anfitrion">
                <div>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      background: datapersonal.avatar
                        ? `url(${imagePreview || datapersonal.avatar})`
                        : datapersonal.backgroundColor,
                      backgroundSize: "cover",
                    }}
                  >
                    {datapersonal.avatar ? (
                      <span></span>
                    ) : (
                      <div>
                        {datapersonal.name &&
                          datapersonal.name[0].toUpperCase()}
                      </div>
                    )}
                  </Avatar>

                  <UploadButton>
                    <label htmlFor="upload-btn">
                      <input
                        accept="image/*"
                        id="upload-btn"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <IconButton component="span">
                        <PhotoCamera sx={{ fontSize: 26, color: "#000" }} />
                      </IconButton>
                    </label>
                  </UploadButton>
                  {/* Conditionally render Save and Cancel Buttons */}
                  {imagePreview && (
                    <div>
                      <ButtonMaterial
                        variant="contained"
                        color="secondary"
                        type="submit"
                        sx={{ width: 70 }}
                      >
                        Guardar
                      </ButtonMaterial>
                      <ButtonMaterial
                        type="button"
                        variant="outlined"
                        color="error"
                        onClick={handleCancel}
                        sx={{ width: 70 }}
                      >
                        Cancelar
                      </ButtonMaterial>
                    </div>
                  )}
                </div>
                <div>
                  <p>
                    {datapersonal.name} {datapersonal.lastName}
                  </p>
                  <p>{datapersonal.email}</p>
                  <Button id="close-sesion">Cerrar sesión</Button>
                </div>
              </div>
            </form>

            <ul className="menu-anfitrion">
              <Link to="/anfitrion/inicio">
                <li className="items-anfitrion">Inicio</li>
              </Link>
              <Link to="/anfitrion/mi sitio">
                <li className="items-anfitrion">Mi sitio</li>
              </Link>
              <Link to="/anfitrion/reservaciones">
                <li className="items-anfitrion">Reservaciones</li>
              </Link>

              <Link to="/anfitrion/historial de reservas">
                <li className="items-anfitrion">Historial de reservas</li>
              </Link>
              <Link to="/anfitrion/reclamos">
                <li className="items-anfitrion">Reclamos</li>
              </Link>

              <Link to="/anfitrion/reclamos">
                <li className="items-anfitrion">Comentarios</li>
              </Link>
            </ul>
          </Sider>
        </div>
        <div className="container-description-menu">
          <Layout
            style={{
              background: "#fff",
            }}
            className="container-description-menu-2"
          >
            {/* <Header
            style={{
              padding: 0,
              background: "#fff",
            }}
          ></Header> */}
            <Content
              key="1"
              style={{
                /* padding: 24,
                minHeight: 280, */
                background: "#fff",
              }}
            >
              <Outlet />{" "}
            </Content>
          </Layout>
        </div>
      </Layout>
    </div>
  );
};
export default App;
