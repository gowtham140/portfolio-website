import React, { useState, useEffect } from "react";
import {
  MenuOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobile(mobileView);
      setCollapsed(mobileView);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle Drawer (Mobile Menu)
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Close Drawer when clicking a menu item
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Menu Items
  const items = [
    { key: "1", icon: <PieChartOutlined />, label: <Link to="/" onClick={closeDrawer}>Home</Link> },
    { key: "2", icon: <DesktopOutlined />, label: <Link to="/about" onClick={closeDrawer}>About</Link> },
    { key: "3", icon: <ContainerOutlined />, label: <Link to="/projects" onClick={closeDrawer}>Projects</Link> },
    { key: "4", icon: <MailOutlined />, label: <Link to="/contact" onClick={closeDrawer}>Contact</Link> },
  ];

  return (
    <div>
      {/* Mobile Menu Button (Fixed at Top Right) */}
      {isMobile && (
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
          style={{ position: "fixed", top: 20, left: 20, zIndex: 1000,backgroundColor:"#8597af",padding:"8px 17px" }}
        />
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div style={{ width: collapsed ? 80 : 256, transition: "width 0.3s ease" , marginTop:"10%"}}>
          <Menu mode="inline" theme="light" inlineCollapsed={collapsed} items={items} />
        </div>
      )}

      {!isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={toggleDrawer}
          open={drawerVisible}
                 >
          <Menu mode="inline" theme="light" items={items} />
        </Drawer>
      )}

      {isMobile && (
        <Drawer
          title="Menu"
          placement="left"
          closable={true}
          onClose={toggleDrawer}
          open={drawerVisible}
          style={{ width: collapsed ? 230 : 30, transition: "width 0.3s ease" }}
        >
          <Menu mode="inline" theme="light" items={items} />
        </Drawer>
      )}

    </div >
  );
};

export default Navigation;
