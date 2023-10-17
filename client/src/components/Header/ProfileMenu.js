import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./header.scss";
import "./../../Loading.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useNavigate, } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from 'react-redux'
import Box from "@mui/material/Box";
import { dataPersonal, logoutUser } from "../../redux/action";
import Button from 'react-bootstrap/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import LoginForms from "../LoginForms/LoginForms";
import { Modal } from 'antd';
import BootstrapModal from "react-bootstrap/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import MenuItem from "@mui/material/MenuItem";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function BasicMenu() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const datapersonal = useSelector(state => state.datapersonal);
  const posts = useSelector(state => state.posts);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0])
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[2])
  const [openPublic, setOpenPublic] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = React.useState(false);

  const values = [true];
  const [fullscreen, setFullscreen] = React.useState(true);
  const [modalPublic, setModalPublic] = React.useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setAnchorEl(null);
    setModalPublic(true)
  }




  const showModalRegister = () => {
    setAnchorEl(null);
    setIsModalOpen(false);
    setIsModalOpenRegister(true);

  };

  const handleOkRegister = () => {
    setIsModalOpenRegister(false);
  };

  const handleCancelRegister = () => {
    setIsModalOpenRegister(false);
  };

  const showModal = () => {
    setAnchorEl(null);
    setIsModalOpenRegister(false);
    setIsModalOpen(true);
    setOpenPublic(false)
  };


  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Cambiar el estado de isLoading a "false" después de cierto tiempo
    }, 2000);
  }, []);

  const handleClickOpenLogout = () => {
    setAnchorEl(null);
    setOpenLogout(true);
    setIsModalOpen(false);


  };

  const handleCloseLogout = () => {
    setAnchorEl(null);
    setOpenLogout(false);


  };

  const handleClickOpenPublic = () => {
    setAnchorEl(null);

    setOpenPublic(true);
  };

  const handleClosePublic = () => {
    setAnchorEl(null);
    setOpenPublic(false);
  };


  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };
  React.useEffect(() => {
    dispatch(dataPersonal(token))
  }, [dispatch, token]);

  const handleLogout = () => {
    // Realizar el cierre de sesión en Redux
    dispatch(logoutUser());

    setOpenLogout(false);
    localStorage.removeItem('token');

    // Limpiar token en Local Storage
    navigate('/')
    // Redirigir al usuario a la página de inicio de sesión
  };



  const List = () => (
    <div className="modal-anfitrion-container">
      <div className="text-join-initial">
        <div>

          <img src={require('../../assets/images/image-modal.png')} alt="not found" />
        </div>
        <div className="text-initial">
          <p>
            <h1>"Estamos comprometidos en dar</h1>
          </p>
          <p>
            <h1>a conocer tu sitio para que forme </h1>
          </p>
          <p>
            <h1>parte de los sitios más  </h1>
          </p>
          <p>
            <h1> emocionantes, importantes e </h1>
          </p>
          <p>
            <h1> históricos de todo el mundo y que  </h1>
          </p>
          <p>
            <h1>estén disponibles en un mismo </h1>
          </p>
          <p>
            <h1>
              <span id="lugar-modal">lugar</span>
              ." </h1>
          </p>
        </div>

      </div>

      <>
        <div className="image-modal1">

          <img src={require('../../assets/images/image-modal1.png')} alt="not found" />
        </div>
        <div className="text-join-family">

          <h1>
            Al unirte a {" "}
            <span className="color-title">Place enc</span>
            , obtendrás acceso a una audiencia diversa de viajeros y entusiastas del turismo que están buscando nuevas experiencias y destinos.
          </h1>
          <h2>
            Regístrate como propietario o administrador de un sitio turístico.
          </h2>
          <h2>
            Una vez que hayas creado tu perfil, podrás cargar fotos,
          </h2>
          <h2>
            descripciones, horarios de operación y cualquier otra información
          </h2>
          <h2>
            relevante sobre tu sitio.
          </h2>
          <h1> <HelpOutlineIcon id="icons-question" /> {" "}
            ¡Únete a {" "}
            <span className="color-title">Place enc</span> {" "}
            y haz que tu sitio turístico forme parte del portafolio mundial de lugares turísticos!
          </h1>
        </div>
      </>

    </div>
  )

  return (
    <div className="account-menu">
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="menu">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}

            >


              {isLoading ? (
                <div>
                  <Grid>
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          width: 32, height: 32, borderRadius: '50%'
                        }}
                      />


                    </Box>
                  </Grid>
                </div>
              ) : (
                <div>



                  {token ? (

                    <Avatar sx={{ width: 32, height: 32, backgroundColor: datapersonal.backgroundColor }} >{datapersonal.name && datapersonal.name[0].toUpperCase()}</Avatar>
                  ) : (
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  )}
                </div>)}

            </IconButton>
          </Tooltip>
        </Box>
      </div>
      {!token ? (
        <div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                minWidth: "200px",
                borderRadius: "1rem",
                boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
              },
            }}
          >



            <MenuItem className="menu-items" onClick={showModal} >
              Iniciar sesión
            </MenuItem>


            <MenuItem onClick={showModalRegister} className="menu-items">
              Registrate
            </MenuItem>


            <MenuItem onClick={handleClickOpenPublic} className="menu-items">
              Publicar
            </MenuItem>

            <div
              style={{
                height: "1px",
                backgroundColor: "var(--grey)",
                width: "100%",
              }}
            />
          </Menu>
          <Modal
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null} // Esto quita los botones "Ok" y "Cancel"
          >
            <LoginForms />
          </Modal>
          <Modal
            visible={isModalOpenRegister}
            onOk={handleOkRegister}
            onCancel={handleCancelRegister}
            footer={null} // Esto quita los botones "Ok" y "Cancel"
          >
            <RegisterForm />
          </Modal>
        </div>



      )
        : (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              ".MuiPaper-root": {
                minWidth: "200px",
                borderRadius: "1rem",
                boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)",
              },
            }}
          >



            <div
              style={{
                height: "1px",
                backgroundColor: "var(--grey)",
                width: "100%",
              }}
            />
            <Link to='/account-settings'>
              <MenuItem className="menu-items" onClick={handleClose}>
                Cuenta
              </MenuItem>
            </Link>
            <MenuItem className="menu-items" onClick={handleClose}>
              Informacion Personal
            </MenuItem>
            <Link to={'/anfitrion/' + datapersonal.id}>


              <MenuItem className="menu-items" onClick={handleClose}>
                Modo anfitrión
              </MenuItem>
            </Link>

            <div>
              {values.map((v, idx) => (

                <MenuItem onClick={() => handleShow(v)} className="menu-items" >
                  Unase placee enc como anfitrion
                </MenuItem>
              ))}

            </div>



            <>

              <Button variant="transparent" onClick={handleClickOpenLogout}>
                <MenuItem >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Cerrar sesión
                </MenuItem>
              </Button>

            </>
          </Menu>)}

      <Dialog
        open={openLogout}
        onClose={handleClosePublic}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Está seguro de que desea cerrar la sesión? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Antes de continuar, nos gustaría confirmar: ¿Está seguro de que desea cerrar la sesión? Este paso finalizará su sesión actual. Agradecemos su uso de nuestros servicios y esperamos volver a verle pronto.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="btn-modal" >


          <Button onClick={handleLogout}>Cerrar sesión</Button>
          <Button onClick={handleCloseLogout} autoFocus>
            Cancelar
          </Button>
        </DialogActions>

      </Dialog>
      <div>
        <Dialog
          open={openPublic}
          onClose={handleClosePublic}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"¿Tiene interés en generar una publicación en este momento?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Para dar inicio a la creación de una publicación, le invitamos cordialmente a acceder a su cuenta. En caso de no contar con un registro previo en nuestra plataforma, le recomendamos encarecidamente llevar a cabo el proceso de registro. Agradecemos de antemano su colaboración y comprensión.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="btn-modal" >


            <Button onClick={showModal}>Iniciar sesión</Button>
            <Button onClick={handleClosePublic} >
              Cancelar
            </Button>
          </DialogActions>

        </Dialog>
      </div>
      <BootstrapModal
        show={modalPublic}
        fullscreen={fullscreen}
        onHide={() => setModalPublic(false)}
      >
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title >
          <Link to = '/'>

            <img src={require('../../assets/logo/Nudo.png')} alt="Not found" className="logo-modal-join" />
            </Link>

          </BootstrapModal.Title>
          <div className="container-button-modal">
            <Link to='/preregister'>
              <Button >
                <span>+</span> Unirse como anfitrion
              </Button>
            </Link>
          </div>
        </BootstrapModal.Header>
        <BootstrapModal.Body>{List()}</BootstrapModal.Body>
      </BootstrapModal>
    </div>
  );
}