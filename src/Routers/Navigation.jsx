import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  const items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      icon: <DesktopOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: "4",
      icon: <MailOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  return (
    <div style={{ width: collapsed ? 80 : 256, transition: "width 0.3s ease" }}>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <button onClick={toggleCollapsed} style={{ border: "none", background: "none", cursor: "pointer" }}>
          {collapsed ? <MenuUnfoldOutlined style={{ fontSize: "20px" }} /> : <MenuFoldOutlined style={{ fontSize: "20px" }} />}
        </button>
      </div>
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Navigation;
