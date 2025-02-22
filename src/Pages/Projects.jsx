import React from "react";
import { Card, Col, Row, Button, Typography } from "antd";
import { CodeOutlined, EyeOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const projects = [
  {
    id: 1,
    title: "PLIMSO (Work Project)",
    description: "A task assignment web application used in a manufacturing company.",
    // link: "https://yourcompanylink.com/plimso", // Replace with actual link if available
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
  return (
    <div style={{ padding: "50px", background: "#f9f9f9", minHeight: "100vh" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#1890ff" }}>My Projects</Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            Here are some of my personal and professional projects.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "30px" }}>
        {projects.map((project) => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.id}>
            <Card
              hoverable
              title={project.title}
              bordered={true}
              // actions={[
              //   <Button type="link" href={project.link} target="_blank" icon={<EyeOutlined />}>
              //     View More
              //   </Button>,
              // ]}
            >
              <Paragraph>{project.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
