import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./HostessPosts.scss";
import Avatar from "@mui/material/Avatar";
import { Layout, Menu, Button } from "antd";
import Start from "./Start/Start";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";
import Mywebsite from "./Mywebsite/Mywebsite";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  const [start, setStart] = useState(true);
  const [myWebSite, setMyWebSite] = useState(false);

  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [token]);

  const handleStart = (e) => {
    setMyWebSite(false);
    setStart(true);
  };

  const handleMyWebSite = (e) => {
    setStart(false);
    setMyWebSite(true);
  };

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        id="menu-left"
        width={400}
      >
        <div className="avatar-anfitrion">
          <div>
            <Avatar
              sx={{
                width: 100,
                height: 100,

                background: datapersonal.avatar
                  ? `url(${datapersonal.avatar})`
                  : datapersonal.backgroundColor,

                backgroundSize: "cover",
              }}
            >
              {datapersonal.avatar ? (
                <div></div>
              ) : (
                <div>
                  {datapersonal.name && datapersonal.name[0].toUpperCase()}
                </div>
              )}
            </Avatar>
          </div>
          <div>
            <p>
              {datapersonal.name} {datapersonal.lastName}
            </p>
            <p>{datapersonal.email}</p>
            <Button id="close-sesion">Cerrar sesión</Button>
          </div>
        </div>
        <div>
          <ul className="menu-anfitrion">
            <Link to="/anfitrion/inicio">
              <li className="items-anfitrion" key="Inicio">Inicio</li>
            </Link>
            <Link to="/anfitrion/mywebsite">
              <li className="items-anfitrion">Mi sitio</li>
            </Link>

            <li className="items-anfitrion">Reservaciones</li>

            <li className="items-anfitrion">Historial de reservas</li>
            <li className="items-anfitrion">Reclamos</li>
            <li className="items-anfitrion">Comentarios</li>
          </ul>
        </div>
      </Sider>
      <Layout
        style={{
          background: "#fff",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
            key="1"
            style={{
              padding: 24,
              minHeight: 280,
              background: "#fff",
              marginTop: "-5em",
            }}
          >
          <Outlet /> {/* Agrega el componente Outlet para mostrar rutas secundarias */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
