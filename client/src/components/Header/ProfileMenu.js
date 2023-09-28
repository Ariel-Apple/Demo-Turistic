import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
import {  Modal } from 'antd';
import RegisterForm from "../RegisterForm/RegisterForm";

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function BasicMenu() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const datapersonal = useSelector(state => state.datapersonal);
  const [openPublic, setOpenPublic] = React.useState(false);
  const [openLogout, setOpenLogout] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalOpenRegister, setIsModalOpenRegister] = React.useState(false);
  const [isModalOpenPublic, setIsModalOpenPublic] = React.useState(false);
  const [loadingAvatar, setLoadingAvatar] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState();

  console.log(datapersonal);

  const handleChangeAvatar = (info) => {
    if (info.file.status === 'uploading') {
      setLoadingAvatar(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoadingAvatar(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      
      {loadingAvatar ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
      </div>
    </div>
  );

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

  const showModalPublic = () => {
    setAnchorEl(null);
    setIsModalOpenPublic(true)
  };

  const modalCancel = () => {
    setAnchorEl(null);
    setIsModalOpenPublic(false)
  }
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
            <Link to={'/anfitrion/'+ datapersonal.id}>


            <MenuItem className="menu-items" onClick={handleClose}>
              Modo anfitrión
            </MenuItem>
            </Link>

              <MenuItem onClick={showModalPublic} className="menu-items">
                Publicar
              </MenuItem>
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
      <div>
      <Dialog
        open={isModalOpenPublic}
        onClose={handleClosePublic}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <>
  
  <Upload
    name="avatar"
    listType="picture-circle"
    className="avatar-uploader"
    showUploadList={false}
    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
    beforeUpload={beforeUpload}
    onChange={handleChangeAvatar}
    
    
  >
    {imageUrl ? (
      <img
        src={imageUrl}
        alt="avatar"
        
        style={{
          width: '100%',
        }}
      />
    ) : (
      uploadButton
    )}
  </Upload>
</>

          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            aca va los input de validacion
          </DialogContentText>
        </DialogContent>
        <DialogActions className="btn-modal" >
        <Button onClick={modalCancel} autoFocus>
            Cancelar
          </Button>
 <Link to="/public">
          <Button>Publicar</Button>
 </Link>
       
        </DialogActions>

      </Dialog>
      </div>
    </div>
  );
}
/* onClick={handleLogout} */