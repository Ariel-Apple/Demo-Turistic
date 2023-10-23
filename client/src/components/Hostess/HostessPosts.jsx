import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./HostessPosts.scss";
import { Layout, Menu, Button, theme } from "antd";
import Start from "./Start/Start";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          left: 0,
          bottom: 0,
          background: "#f0f0f0", // Cambia este color al gris que desees
        }}
      >
        <div className="demo-logo-vertical" />
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
              label: "Mi sitio"
            },
            {
              key: "3",
              className: "items-anfitrion",
              label: "Reservaciones",
            },
            {
              key: "4",
              className: "items-anfitrion",
              label: "Datos de factorización",
            },
            {
              key: "5",
              className: "items-anfitrion",
              label: "Historial de reservas",
              href: "#5"
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
          }}
        >
         
 <Start/>

        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
