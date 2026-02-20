import React, { useState } from "react";
import { Card, Col, Row, Button, Typography, Modal } from "antd";
import { CodeOutlined, EyeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const projectsData = [
  {
    id: 1,
    title: "PLIMSO (Work Project)",
    description: "A task assignment web application used in a manufacturing company.",
    details: {
      overview: "PLIMSO is a web-based task assignment and change management application developed for a manufacturing company to streamline internal workflows, approvals, and audit tracking.",
      features: [
        "Task creation and assignment system",
        "Role-based access control",
        "Pre-Approval & Post-Approval workflow",
        "Digital signature management",
        "Change Management module (PLIMSO ChangeM)",
        "Audit trail and activity logs",
        "Email notification system",
        "Document attachment and tracking"
      ],
      technologies: {
        frontend: "React.js, JavaScript, jQuery, Bootstrap",
        backend: "Spring Boot (Java)",
        database: "MySQL",
        versionControl: "Git",
        deployment: "Linux Server (Ubuntu)"
      },
      role: "Designed and developed full-stack modules, Implemented approval workflows and signature handling, Built dynamic UI components, Developed and optimized MySQL stored procedures, Integrated email notifications, Managed deployment and version control",
      impact: "PLIMSO improved internal task tracking, reduced manual paperwork, and increased process transparency within the organization."
    }
  },
  {
    id: 2,
    title: "To-Do List",
    description: "A simple to-do list application with React for task management.",
    link: "https://github.com/gowtham/todo-list",
  },
  {
    id: 3,
    title: "Weather Application",
    description: "A weather forecasting app using React and OpenWeather API.",
    link: "https://github.com/gowtham/weather-app",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: "A full-fledged e-commerce platform with React, Node.js, and MongoDB.",
    link: "https://github.com/gowtham/ecommerce-project",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Ant Design.",
    link: "https://github.com/gowtham/portfolio",
  },
  {
    id: 6,
    title: "Billing Software",
    description: "A simple billing system for a local shop using React.",
    link: "https://github.com/gowtham/billing-software",
  },
  {
    id: 7,
    title: "Blogging Platform",
    description: "A blogging platform with authentication and rich text editor.",
    link: "https://github.com/gowtham/blogging-platform",
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedProject(null);
  };

  return (
    <div style={{ padding: "50px", background: "#f9f9f9", minHeight: "100vh" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#1890ff" }}>My Projects</Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            Here are some of my personal and professional projects. Click any project to see more details.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {projectsData.map((project) => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.id}>
            <Card
              hoverable
              title={project.title}
              bordered={true}
              onClick={() => handleProjectClick(project)}
              style={{ cursor: "pointer", height: "100%" }}
            >
              <Paragraph>{project.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedProject?.title}
        visible={isModalVisible}
        onCancel={handleModalClose}
        width={800}
        footer={[
          <Button key="close" type="primary" onClick={handleModalClose}>
            Close
          </Button>
        ]}
      >
        {selectedProject?.details ? (
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            <Title level={4}>📋 Project Overview</Title>
            <Paragraph>{selectedProject.details.overview}</Paragraph>

            <Title level={4}>✨ Key Features</Title>
            <ul>
              {selectedProject.details.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <Title level={4}>🛠 Technologies Used</Title>
            <Paragraph>
              <b>Frontend:</b> {selectedProject.details.technologies.frontend}<br />
              <b>Backend:</b> {selectedProject.details.technologies.backend}<br />
              <b>Database:</b> {selectedProject.details.technologies.database}<br />
              <b>Version Control:</b> {selectedProject.details.technologies.versionControl}<br />
              <b>Deployment:</b> {selectedProject.details.technologies.deployment}
            </Paragraph>

            <Title level={4}>👨‍💼 My Role</Title>
            <Paragraph>{selectedProject.details.role}</Paragraph>

            <Title level={4}>🎯 Impact</Title>
            <Paragraph>{selectedProject.details.impact}</Paragraph>
          </div>
        ) : (
          <Paragraph>{selectedProject?.description}</Paragraph>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
