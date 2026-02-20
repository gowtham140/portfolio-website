import { Form, Input, Button, Row, Col, Card, Typography, message } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage(); // ✅ Move this inside the component
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Sending message...',
    });

    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Thank you! I will contact you shortly.',
        duration: 2,
      });
    }, 1000);
  };

  const sendEmail = (values) => {
    emailjs
      .send(
        "service_9vv88xs", // Replace with your EmailJS Service ID
        "template_06fgdvc", // Replace with your EmailJS Template ID
        {
          from_name: values.name,      
          user_email: values.email,    
          message: values.message,     
          to_name: "Gowtham",          
        },
        "bvqXxBPwvPJBrdh7l" // Replace with your EmailJS Public Key
      )
      .then((response) => {
        openMessage(); // ✅ Show AntD message
        form.resetFields(); // Reset the form after success
      })
      .catch((error) => {
        messageApi.error("Failed to send message. Please try again."); // ✅ Show error message
      });
  };

  return (
    <div style={{ padding: "50px", background: "#f9f9f9", minHeight: "100vh" }}>
      {contextHolder} {/* ✅ Ensure message UI works properly */}
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#1890ff" }}>Contact Me</Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            Feel free to reach out via the form below or through my contact details.
          </Paragraph>
        </Col>
      </Row>

      <Row justify="center" gutter={[16, 16]} style={{ marginTop: "30px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            onClick={() => window.location.href = 'mailto:gowthamramesh1406@gmail.com'}
            style={{ cursor: 'pointer' }}
          >
            <MailOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
            <Title level={5}>Email</Title>
            <Paragraph>gowthamramesh1406@gmail.com</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            onClick={() => window.location.href = 'tel:+919976985349'}
            style={{ cursor: 'pointer' }}
          >
            <PhoneOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
            <Title level={5}>Phone</Title>
            <Paragraph>+91 9976985349</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card 
            hoverable 
            onClick={() => window.open('https://maps.google.com/?q=Chennai,India', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <EnvironmentOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
            <Title level={5}>Location</Title>
            <Paragraph>Chennai, India</Paragraph>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "40px" }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card>
            <Form
              form={form}
              layout="vertical"
              onFinish={sendEmail} // Use onFinish to send email
            >
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <Input.TextArea rows={4} placeholder="Write your message..." />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
