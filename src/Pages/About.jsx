import React from "react";
import { Typography, Row, Col, Card, Progress, Avatar } from "antd";
import gowthamImage from '../Images/gowtham.jpg';

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: "50px", background: "#ffffff", minHeight: "100vh" }}>
      {/* Header Section */}
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          {/* Avatar */}
          <Avatar size={100} src={gowthamImage} />
          <Title level={2} style={{ marginTop: "10px", fontWeight: "bold", color: "#1890ff" }}>
            About Me
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            Hi, I'm <b>Gowtham</b>, a passionate <b>React.js Developer</b> with experience in building modern web applications.
            I love creating user-friendly, efficient, and scalable web solutions.
          </Paragraph>
        </Col>
      </Row>

      {/* Experience & Skills */}
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Title level={4}>💼 Experience</Title>
            <Paragraph>
               <b>9+ months</b> in Web Development  
              - Expertise in <b>React.js, JavaScript, and Ant Design</b>  
              - Backend experience with <b>Spring Boot & MySQL</b>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card hoverable>
            <Title level={4}>🛠 Skills</Title>
            <Paragraph>
               <b>Frontend:</b> React.js, JavaScript, HTML, CSS  
              - <b>Backend:</b> Spring Boot, MySQL  
              - <b>Tools:</b> Git, VS Code, Ant Design  
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Skill Progress Bars */}
      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>React.js</Title>
          <Progress percent={85} />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>JavaScript</Title>
          <Progress percent={90} />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>Spring Boot</Title>
          <Progress percent={75} />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>jQuery</Title>
          <Progress percent={80} />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={5}>MySQL</Title>
          <Progress percent={90} />
        </Col>
      </Row>
    </div>
  );
};

export default About;
