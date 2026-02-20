import React, { useState } from "react";
import { Typography, Button, Row, Col, Card, Avatar, Statistic, Space, Modal } from "antd";
import { ArrowRightOutlined, CodeOutlined, AimOutlined, CloudServerOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import gowthamImage from '../Images/gowtham.webp';

const { Title, Paragraph } = Typography;

const Home = () => {
  const calculateExperienceDisplay = () => {
    // uses same logic as About page to compute years as decimal
    const joinDate = new Date(2024, 7, 1);
    const now = new Date();
    let months = (now.getFullYear() - joinDate.getFullYear()) * 12 + (now.getMonth() - joinDate.getMonth());
    const years = (months / 12).toFixed(1);
    return years;
  };
   const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const openPreview = () => setIsPreviewVisible(true);
    const closePreview = () => setIsPreviewVisible(false);
  return (
    <div style={{ padding: "40px", minHeight: "100vh", background: "linear-gradient(135deg,#f5f8ff 0%, #ffffff 60%)" }}>
      {/* Hero Section */}
      <Row gutter={[24, 24]} align="middle" justify="center">
        <Col xs={24} md={14} lg={12} style={{ textAlign: 'left' }}>
          <Title level={1} style={{ marginBottom: 8, color: '#102a43', fontWeight: 800 }}>
            Hi, I'm Gowtham — Full-Stack Developer
          </Title>
          <Paragraph style={{ fontSize: 18, color: '#334e68', maxWidth: 680 }}>
            I build modern web applications using React.js and Spring Boot. I focus on creating performant, accessible, and maintainable software.
            Currently working on scalable enterprise solutions and improving developer experience.
          </Paragraph>

          <Space size="middle" style={{ marginTop: 16 }}>
            <Link to="/projects"><Button type="primary" size="large" icon={<ArrowRightOutlined />}>View Projects</Button></Link>
            <Link to="/contact"><Button size="large">Contact Me</Button></Link>
          </Space>

          {/* Statistics */}
          <Row gutter={[16, 16]} style={{ marginTop: 28 }}>
            <Col xs={8} sm={6}>
              <Card bordered={false} style={{ background: '#fff' }}>
                <Statistic title="Projects" value={8} />
              </Card>
            </Col>
            <Col xs={8} sm={6}>
              <Card bordered={false} style={{ background: '#fff' }}>
                <Statistic title="Experience" value={calculateExperienceDisplay()} suffix="yrs" />
              </Card>
            </Col>
            {/* <Col xs={8} sm={6}>
              <Card bordered={false} style={{ background: '#fff' }}>
                <Statistic title="Clients" value={3} />
              </Card>
            </Col> */}
          </Row>
        </Col>

        <Col xs={24} md={8} lg={6} style={{ textAlign: 'center' }}>
          <Avatar
            size={160}
            src={gowthamImage}
            role="button"
            tabIndex={0}
            onClick={openPreview}
            onKeyDown={(e) => { if (e.key === 'Enter') openPreview(); }}
            style={{ boxShadow: '0 8px 24px rgba(16,42,67,0.12)', cursor: 'pointer' }}
            alt="Gowtham"
          />
        </Col>
      </Row>

      {/* Skill Tiles */}
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: 40 }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <CodeOutlined style={{ fontSize: 32, color: '#1890ff' }} />
            <Title level={4} style={{ marginTop: 8 }}>Frontend</Title>
            <Paragraph style={{ color: '#556' }}>React.js, JavaScript, HTML, CSS</Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <CloudServerOutlined style={{ fontSize: 32, color: '#1890ff' }} />
            <Title level={4} style={{ marginTop: 8 }}>Backend</Title>
            <Paragraph style={{ color: '#556' }}>Spring Boot, MySQL, REST APIs</Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: 'center' }}>
            <AimOutlined style={{ fontSize: 32, color: '#1890ff' }} />
            <Title level={4} style={{ marginTop: 8 }}>DevOps</Title>
            <Paragraph style={{ color: '#556' }}>Docker, Server Deployment, CI/CD</Paragraph>
          </Card>
        </Col>
      </Row>
      <Modal visible={isPreviewVisible} footer={null} onCancel={closePreview} centered>
        <img src={gowthamImage} alt="Gowtham" style={{ width: '100%', maxWidth: 480, display: 'block', margin: '0 auto' }} />
      </Modal>
    </div>
  );
};

export default Home;
