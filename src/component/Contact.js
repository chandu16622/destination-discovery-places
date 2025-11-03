import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from 'react-bootstrap';
import logo from "../images/logo.png";



function Contact() {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // adjust if navbar overlaps
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#1b03f8ff" : "black",
    fontWeight: hoveredLink === linkName ? "bold" : "500",
    transition: "all 0.3s ease",
    textShadow: hoveredLink === linkName ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
  });

  return (
    <>
      {/* Navbar */}
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "50px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        expand="lg"
        sticky="top"
      >
        <Container>
          {/* ✅ Logo */}
          <Navbar.Brand
            onClick={() => navigate("/")}
            className="fw-bold d-flex align-items-center"
            style={{
              fontSize: "1.8rem",
              color: "#2b2b2b",
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="Destination Discoveries" style={{ height: "80px", marginRight: "90px" }} />
          </Navbar.Brand>

          {/* ✅ Toggle for Mobile */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* ✅ Navigation Buttons (Work properly in collapse now) */}
            <Nav className="ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-2 gap-lg-3">
              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Button>

              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Contact Page Content */}

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "120px 0 50px", // 👈 added top padding to clear navbar
        }}
      >

        <Container>
          {/* Header */}
          <div className="text-center mb-8">
            <h6 className="display-4 fw-bold text-white mb-2">
              Get In Touch
            </h6>

          </div>

          <Row className="g-4 mb-5">
            {/* Contact Information Cards */}
            <Col md={6} lg={3}>
              <Card className="shadow-lg border-0 rounded-4 h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#e8f5e9"
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📍</span>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    Visit Us
                  </h5>
                  <p className="text-muted mb-0">
                    Destination Discoveries HQ<br />
                    Beach Road, Visakhapatnam<br />
                    Andhra Pradesh - 530002<br />
                    India
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow-lg border-0 rounded-4 h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fff3e0"
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📧</span>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    Email Us
                  </h5>
                  <p className="text-muted mb-2">
                    <strong>General:</strong><br />
                    info@destinationdiscoveries.in
                  </p>
                  <p className="text-muted mb-0">
                    <strong>Support:</strong><br />
                    support@destinationdiscoveries.in
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow-lg border-0 rounded-4 h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#e3f2fd"
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📞</span>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    Call Us
                  </h5>

                  <p className="text-muted mb-1">
                    <strong>Mobile:</strong><br />+91 6301055724
                  </p>
                  <p className="text-muted mb-0">
                    <strong>WhatsApp:</strong><br />+91 9553099956
                  </p>

                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow-lg border-0 rounded-4 h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#fce4ec"
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>⏰</span>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3" style={{ color: "#667eea" }}>
                    Business Hours
                  </h5>
                  <p className="text-muted mb-2">
                    <strong>Mon - Fri</strong><br />
                    9:00 AM - 7:00 PM
                  </p>
                  <p className="text-muted mb-2">
                    <strong>Saturday</strong><br />
                    10:00 AM - 5:00 PM
                  </p>
                  <p className="text-muted mb-0">
                    <strong>Sunday</strong><br />
                    <span style={{ color: "#d32f2f" }}>Closed</span>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Form and Social Media */}
          <Row className="g-4">
            {/* Contact Form */}
            <Col lg={7}>
              <Card className="shadow-lg border-0 rounded-4 p-4">
                <Card.Body>
                  <h3 className="fw-bold mb-4" style={{ color: "#667eea" }}>
                    Send Us a Message
                  </h3>

                  {submitted ? (
                    <div className="alert alert-success text-center p-4">
                      <h4>✓ Message Sent Successfully!</h4>
                      <p className="mb-0">We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                          className="rounded-3 py-3"
                        />
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              placeholder="your@email.com"
                              className="rounded-3 py-3"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className="rounded-3 py-3"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="rounded-3 py-3"
                        >
                          <option value="">Select a subject</option>
                          <option value="tour-booking">Tour Booking Inquiry</option>
                          <option value="travel-guide">Travel Guide Request</option>
                          <option value="custom-itinerary">Custom Itinerary</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your travel plans or questions..."
                          className="rounded-3 py-3"
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        className="w-100 py-3 rounded-3"
                        style={{
                          backgroundColor: "#667eea",
                          border: "none",
                          fontSize: "1.1rem",
                          fontWeight: "600"
                        }}
                      >
                        Send Message
                      </Button>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>

            {/* Social Media and Map */}
            <Col lg={5}>
              {/* Social Media */}
              <Card className="shadow-lg border-0 rounded-4 p-4 mb-4"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                }}
              >
                <Card.Body>
                  <h4 className="fw-bold mb-3 text-white text-center">
                    Connect With Us
                  </h4>
                  <p className="text-white mb-4 text-center">
                    Follow us for travel inspiration and exclusive offers!
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <Button
                      href="https://facebook.com"
                      target="_blank"
                      className="rounded-circle p-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#1877f2",
                        border: "none",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      📘
                    </Button>
                    <Button
                      href="https://instagram.com"
                      target="_blank"
                      className="rounded-circle p-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        border: "none",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      📷
                    </Button>
                    <Button
                      href="https://twitter.com"
                      target="_blank"
                      className="rounded-circle p-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "blue",
                        border: "none",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      🐦
                    </Button>
                    <Button
                      href="https://wa.me/919876543210"
                      target="_blank"
                      className="rounded-circle p-0"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "red",
                        border: "none",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      💬
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              {/* Map */}
              <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160392844!2d83.17998469453125!3d17.738635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </Card>

              {/* Emergency Contact */}
              <div className="mt-4 p-3 rounded-3" style={{ backgroundColor: "#fff3cd" }}>
                <p className="mb-0 text-center" style={{ color: "#856404" }}>
                  <strong>📞 24/7 Emergency:</strong><br />
                  +91 6301055724
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    </>
  );
}

export default Contact;