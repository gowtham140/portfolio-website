import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: "50px", textAlign: "center", background: "#f0f2f5", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={1} style={{ fontWeight: "bold", color: "#1890ff" }}>
            Welcome to My Portfolio 🚀
          </Title>
          <Paragraph style={{ fontSize: "18px", color: "#555" }}>
            Hi, I'm <b>Gowtham</b>, a passionate web developer skilled in React.js, JavaScript, and modern web technologies.
            Explore my work and feel free to reach out!
          </Paragraph>
          <Link to="/projects">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              View My Projects
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Skills Section */}
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "50px" }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: "center" }}>
            <Title level={3}>⚛️ React.js</Title>
            <Paragraph>Building interactive UIs with modern React concepts.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: "center" }}>
            <Title level={3}>💻 JavaScript</Title>
            <Paragraph>Developing dynamic and scalable web applications.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable style={{ textAlign: "center" }}>
            <Title level={3}>🎨 UI/UX</Title>
            <Paragraph>Crafting beautiful and user-friendly designs.</Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Contact Button */}
      <Row justify="center" style={{ marginTop: "40px" }}>
        <Link to="/contact">
          <Button type="default" size="large">Contact Me</Button>
        </Link>
      </Row>
    </div>
  );
};

export default Home;
