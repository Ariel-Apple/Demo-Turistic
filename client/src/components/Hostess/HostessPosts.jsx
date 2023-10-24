import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./HostessPosts.scss";
import Avatar from "@mui/material/Avatar";
import { Layout, Menu, Button } from "antd";
import Start from "./Start/Start";
import { useSelector, useDispatch } from "react-redux";
import { dataPersonal } from "../../redux/action";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const datapersonal = useSelector((state) => state.datapersonal);
  const token = useSelector((state) => state.token);
  console.log(datapersonal);
  useEffect(() => {
    dispatch(dataPersonal(token));
  }, [token]);

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
            <Button id="close-sesion" >
      Cerrar sesión
    </Button>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          className="menu-anfitrion"
          items={[
            {
              key: "1",
              className: "items-anfitrion",
              label: "Inicio",
            },
            {
              key: "2",
              className: "items-anfitrion",
              label: "Mi sitio",
            },
            {
              key: "3",
              className: "items-anfitrion",
              label: "Reservaciones",
            },
            {
              key: "4",
              className: "items-anfitrion",
              label: "Datos de facturación",
            },
            {
              key: "5",
              className: "items-anfitrion",
              label: "Historial de reservas",
              href: "#5",
            },
            {
              key: "6",
              className: "items-anfitrion",
              label: "Reclamos",
            },
            {
              key: "7",
              className: "items-anfitrion",
              label: "Comentarios",
            },
            {
              key: "8",
              className: "items-anfitrion",
              label: "Historial de reservas",
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
        <Content
          id="5"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "#fff",
            marginTop: "-10em",
          }}
        >
          <Start />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
