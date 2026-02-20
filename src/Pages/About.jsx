import React, { useState } from "react";
import { Typography, Row, Col, Card, Avatar, Modal } from "antd";
import gowthamImage from '../Images/gowtham.webp';

const { Title, Paragraph } = Typography;

const About = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const openPreview = () => setIsPreviewVisible(true);
  const closePreview = () => setIsPreviewVisible(false);
  // Calculate experience duration in years and months since August 2024
  const calculateExperienceDuration = () => {
    const joinDate = new Date(2024, 7, 1); // August 2024
    const currentDate = new Date();
    let months = (currentDate.getFullYear() - joinDate.getFullYear()) * 12;
    months += currentDate.getMonth() - joinDate.getMonth();
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let duration = '';
    if (years > 0) {
      duration += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (remainingMonths > 0) {
      if (duration) duration += ' ';
      duration += `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return duration || '0 months';
  };

  return (
    <div style={{ padding: "50px 80px", background: "#ffffff", minHeight: "100vh" }}>
      {/* Header Section */}
      <Row justify="center" style={{ marginBottom: "50px" }}>
        <Col xs={24} sm={20} md={18} style={{ textAlign: "center" }}>
          {/* Avatar (click to preview) */}
          <Avatar
            size={120}
            src={gowthamImage}
            style={{ cursor: "pointer" }}
            onClick={openPreview}
          />
          <Title level={2} style={{ marginTop: "20px", fontWeight: "bold", color: "#1890ff", fontSize: "36px" }}>
            About Me
          </Title>
          <Paragraph style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto" }}>
            Hi, I'm <b>Gowtham</b>, a passionate <b>Full-Stack Developer</b> with expertise in building modern, scalable, and user-friendly web applications. With hands-on experience in React.js, Spring Boot, and cloud technologies, I craft efficient solutions that make a real impact.
          </Paragraph>
        </Col>
      </Row>

      {/* Main Sections - 3 Columns */}
      <Row gutter={[24, 24]} justify="start" style={{ marginBottom: "50px" }}>
        {/* Experience Card */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>💼 Experience</Title>
            <Paragraph>
              <b>{calculateExperienceDuration()}</b> of professional development experience
            </Paragraph>
            <Paragraph style={{ color: "#666" }}>
              • Full-stack web application development<br/>
              • Building scalable backend systems<br/>
              • Enterprise software solutions<br/>
              • Agile & team collaboration
            </Paragraph>
          </Card>
        </Col>

        {/* Frontend Stack */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>⚛️ Frontend Stack</Title>
            <Paragraph style={{ color: "#666" }}>
              • <b>React.js</b> - Modern UI development<br/>
              • <b>JavaScript/ES6+</b> - Core language<br/>
              • <b>HTML5 & CSS3</b> - Web standards<br/>
              • <b>Ant Design</b> - UI components<br/>
              • <b>Responsive Design</b> - Mobile-first
            </Paragraph>
          </Card>
        </Col>

        {/* Backend Stack */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>🔧 Backend Stack</Title>
            <Paragraph style={{ color: "#666" }}>
              • <b>Spring Boot</b> - Enterprise apps<br/>
              • <b>MySQL</b> - Database design<br/>
              • <b>RESTful APIs</b> - API development<br/>
              • <b>Stored Procedures</b> - DB optimization<br/>
              • <b>Java</b> - Core technology
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Additional Skills - 3 Columns */}
      <Row gutter={[24, 24]} justify="start" style={{ marginBottom: "50px" }}>
        {/* Tools & Technologies */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>🛠 Tools & Technologies</Title>
            <Paragraph style={{ color: "#666" }}>
              • <b>Git/GitHub</b> - Version control<br/>
              • <b>VS Code</b> - Code editor<br/>
              • <b>jQuery</b> - DOM manipulation<br/>
              • <b>Postman</b> - API testing<br/>
              • <b>Maven/Gradle</b> - Build tools
            </Paragraph>
          </Card>
        </Col>

        {/* DevOps & Deployment */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>🚀 DevOps & Deployment</Title>
            <Paragraph style={{ color: "#666" }}>
              • <b>Docker</b> - Containerization<br/>
              • <b>Server Deployment</b> - Linux/Ubuntu<br/>
              • <b>CI/CD Pipelines</b> - Automation<br/>
              • <b>Cloud Basics</b> - Deployment strategies<br/>
              • <b>Performance Optimization</b> - Production ready
            </Paragraph>
          </Card>
        </Col>

        {/* Soft Skills */}
        <Col xs={24} sm={12} md={8}>
          <Card hoverable style={{ height: "100%" }}>
            <Title level={4}>🎯 Soft Skills</Title>
            <Paragraph style={{ color: "#666" }}>
              • <b>Problem Solving</b> - Analytical thinking<br/>
              • <b>Team Collaboration</b> - Cross-functional<br/>
              • <b>Communication</b> - Clear documentation<br/>
              • <b>Attention to Detail</b> - Quality focused<br/>
              • <b>Quick Learning</b> - Adaptable to new tech
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Key Strengths */}
      <Row justify="center" style={{ marginBottom: "30px" }}>
        <Col xs={24} sm={22} md={20} lg={18}>
          <Card hoverable style={{ background: "#f0f5ff", borderColor: "#1890ff" }}>
            <Title level={4}>⭐ Key Strengths</Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Paragraph>
                  <b>Full-Stack Capability</b><br/>
                  <span style={{ color: "#666" }}>Seamless development across frontend and backend with proven expertise in both areas</span>
                </Paragraph>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Paragraph>
                  <b>Scalable Solutions</b><br/>
                  <span style={{ color: "#666" }}>Design and implement systems that grow with business needs</span>
                </Paragraph>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Paragraph>
                  <b>Production Ready</b><br/>
                  <span style={{ color: "#666" }}>Experience deploying and maintaining applications in production environments</span>
                </Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* Image preview modal */}
      <Modal visible={isPreviewVisible} footer={null} onCancel={closePreview} centered>
        <img src={gowthamImage} alt="Gowtham" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }} />
      </Modal>
    </div>
  );
};

export default About;
