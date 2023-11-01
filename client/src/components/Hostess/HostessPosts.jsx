import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./HostessPosts.scss";
import Avatar from "@mui/material/Avatar";
import { Layout, Menu, Button } from "antd";
import Start from "./Start/Start";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";
import Mywebsite from "./Mywebsite/Mywebsite";

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
        <Menu
          className="menu-anfitrion"
          items={[
            {
              className: "items-anfitrion",
              label: "Inicio",
              value: start,
              onClick: handleStart,
            },
            {
              className: "items-anfitrion",
              label: "Mi sitio",
              value: myWebSite,
              onClick: handleMyWebSite,
            },
            {
              className: "items-anfitrion",
              label: "Reservaciones",
            },
        
            {
              className: "items-anfitrion",
              label: "Historial de reservas",
              href: "#5",
            },
            {
              className: "items-anfitrion",
              label: "Reclamos",
            },
            {
              className: "items-anfitrion",
              label: "Comentarios",
            },
        
          ]}
        />
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
        {start && (
          <Content
            key="1"
            style={{
              padding: 24,
              minHeight: 280,
              background: "#fff",
              marginTop: "-5em",
            }}
          >
            <Start />
          </Content>
        )}

        {myWebSite && (
          <Content
            key="2"
            style={{
              background: "#d5d5d5",
            }}
          >
            <Mywebsite />
          </Content>
        )}
      </Layout>
    </Layout>
  );
};
export default App;
