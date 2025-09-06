import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://mern-portfolio-backend-yjka.onrender.com/api/mail/contact",
        formData
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending mail:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ scrollMarginTop: "80px", paddingTop: "40px" }}
    >
      <Container>
        <h2 className="section-title">Contact Me</h2>

        {status === "success" && (
          <Alert variant="success">Message sent successfully!</Alert>
        )}
        {status === "error" && (
          <Alert variant="danger">Failed to send message. Try again.</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
