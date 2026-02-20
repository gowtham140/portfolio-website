import React, { useState, useEffect } from "react";
import {
  MenuOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Menu, Drawer, Button, Avatar, Tooltip, Space, Divider, Modal } from "antd";
import gowthamImage from '../Images/profile.jpeg';
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 768);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [selectedKey, setSelectedKey] = useState('1');
  const location = useLocation();
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const openPreview = () => setIsPreviewVisible(true);
  const closePreview = () => setIsPreviewVisible(false);

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

  // Update selected menu item based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setSelectedKey('1');
    else if (path.startsWith('/about')) setSelectedKey('2');
    else if (path.startsWith('/projects')) setSelectedKey('3');
    else if (path.startsWith('/contact')) setSelectedKey('4');
  }, [location.pathname]);

  // Toggle Drawer (Mobile Menu)
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const toggleCollapse = () => setCollapsed(!collapsed);

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
      {/* Mobile Menu Button (Fixed at Top Left) */}
      {isMobile && (
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
          style={{ position: "fixed", top: 20, left: 20, zIndex: 1000, backgroundColor: "#1890ff", padding: "8px 12px", borderRadius: 8 }}
        />
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div style={{ width: collapsed ? 80 : 220, transition: "width 0.3s ease", marginTop: 40, padding: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 12, padding: '8px 6px' }}>
            <Avatar size={collapsed ? 40 : 56} src={gowthamImage} style={{ cursor: 'pointer' }} onClick={openPreview} />
            {!collapsed && <div style={{ lineHeight: 1 }}>
              <div style={{ fontWeight: 700 }}>Gowtham</div>
              <div style={{ fontSize: 12, color: '#666' }}>React · Spring Boot</div>
            </div>}
            <div style={{ marginLeft: 'auto' }}>
              <Button type="text" onClick={toggleCollapse} icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} />
            </div>
          </div>

          <Divider style={{ margin: '8px 0' }} />

          <Menu mode="inline" theme="light" inlineCollapsed={collapsed} selectedKeys={[selectedKey]} items={items} />

          <div style={{ position: 'absolute', bottom: 20, width: collapsed ? 80 : 220, padding: 12 }}>
            <Space direction="horizontal" size={12} style={{ justifyContent: collapsed ? 'center' : 'flex-start', width: '100%' }}>
              <Tooltip title="LinkedIn"><a href="https://www.linkedin.com/in/gowtham-r-88205723a" target="_blank" rel="noreferrer"><LinkedinOutlined style={{ fontSize: 18, color: '#1890ff' }} /></a></Tooltip>
              <Tooltip title="GitHub"><a href="https://github.com/gowtham140" target="_blank" rel="noreferrer"><GithubOutlined style={{ fontSize: 18 }} /></a></Tooltip>
              <Tooltip title="Instagram"><a href="https://www.instagram.com/_.gowtham._14_?igsh=OXJodHg3cDlybmth" target="_blank" rel="noreferrer"><InstagramOutlined style={{ fontSize: 18, color: '#E4405F' }} /></a></Tooltip>
            </Space>
          </div>
        </div>
      )}

      {/* Drawer for Mobile */}
      <Drawer title="Menu" placement="left" closable={true} onClose={toggleDrawer} open={drawerVisible} bodyStyle={{ padding: 0 }}>
        <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar size={56} src={gowthamImage} style={{ cursor: 'pointer' }} onClick={openPreview} />
          <div>
            <div style={{ fontWeight: 700 }}>Gowtham</div>
            <div style={{ fontSize: 12, color: '#666' }}>React · Spring Boot</div>
          </div>
        </div>
        <Divider style={{ margin: 0 }} />
        <Menu mode="inline" theme="light" items={items} onClick={closeDrawer} selectedKeys={[selectedKey]} />
        <div style={{ padding: 16 }}>
          <Space size="middle">
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer"><LinkedinOutlined style={{ fontSize: 22, color: '#1890ff' }} /></a>
            <a href="https://github.com/gowtham" target="_blank" rel="noreferrer"><GithubOutlined style={{ fontSize: 22 }} /></a>
            <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noreferrer"><InstagramOutlined style={{ fontSize: 22, color: '#E4405F' }} /></a>
          </Space>
        </div>
      </Drawer>
      {/* Profile image preview modal */}
      <Modal visible={isPreviewVisible} footer={null} onCancel={closePreview} centered>
        <img src={gowthamImage} alt="Gowtham" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }} />
      </Modal>
    </div>
  );
};

export default Navigation;
