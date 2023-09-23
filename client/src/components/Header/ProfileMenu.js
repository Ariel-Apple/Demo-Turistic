import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./header.scss";
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
import {  Modal } from 'antd';
import RegisterForm from "../RegisterForm/RegisterForm";



export default function BasicMenu() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const datapersonal = useSelector(state => state.datapersonal);


  const [openPublic, setOpenPublic] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = React.useState(false);

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
    }, 1000);
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
  }, [token]);

  const handleLogout = () => {
    // Realizar el cierre de sesión en Redux
    dispatch(logoutUser());

    setOpenLogout(false);
    localStorage.removeItem('token');

    // Limpiar token en Local Storage
    navigate('/')
    // Redirigir al usuario a la página de inicio de sesión
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const storedBackgroundColor = localStorage.getItem('avatarBackgroundColor');
  const [avatarBackgroundColor, setAvatarBackgroundColor] = React.useState(
    storedBackgroundColor || getRandomColor()
  );

  React.useEffect(() => {
    if (!storedBackgroundColor) {
      const newColor = getRandomColor();
      setAvatarBackgroundColor(newColor);
      localStorage.setItem('avatarBackgroundColor', newColor);
    }
  }, [storedBackgroundColor]);
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
                    
                    <Avatar sx={{ width: 32, height: 32, backgroundColor: avatarBackgroundColor }} >{datapersonal.name && datapersonal.name[0].toUpperCase()}</Avatar>
                  ) : (
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  )}
                </div>)}

            </IconButton>
          </Tooltip>
        </Box>
      </div>
      {token === null ? (
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
            <Link to={'/anfitrion/'+ datapersonal.id}>


            <MenuItem className="menu-items" onClick={handleClose}>
              Modo anfitrión
            </MenuItem>
            </Link>
            <Link to='/public'>

              <MenuItem onClick={handleClose} className="menu-items">
                Publicar
              </MenuItem>
            </Link>
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

            <Link to="/auth/login">

              <Button>Iniciar sesión</Button>
            </Link>
            <Button onClick={handleClosePublic} >
              Cancelar
            </Button>
          </DialogActions>

        </Dialog>
      </div>
    </div>
  );
}
/* onClick={handleLogout} */