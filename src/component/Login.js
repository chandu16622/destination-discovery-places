import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Navbar, Nav } from "react-bootstrap";
import loginBg from "../images/login-bg.jpg";
import "../App.css";
import logo from "../images/logo.png";
import login from "../images/login.png";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);

  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#0307f8ff" : "black",
    fontWeight: hoveredLink === linkName ? "bold" : "500",
    transition: "all 0.3s ease",
    textShadow: hoveredLink === linkName ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/home");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ Navbar Section */}
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "90px",
          flexShrink: 0,
        }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="fw-bold"
            style={{
              fontSize: "1.8rem",
              color: "#2b2b2b",
            }}
          >
            <img src={logo} alt="Destination Discoveries" className="logo"
              style={{ height: "70px", marginRight: "90px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                href="/"
                style={{
                  ...getNavLinkStyle("home"),
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="/contact"
                style={{
                  ...getNavLinkStyle("contact"),
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
                onMouseEnter={() => setHoveredLink("contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact
              </Nav.Link>

              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                }}
                className="ms-3"
                onClick={() => navigate("/")}
              >
                Log out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Login Card Section (fills remaining space) */}
      <div
        style={{
          flexGrow: 1,
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // <-- FIX: Aligns content to the top
          paddingTop: "50px", // <-- Added padding for space below navbar
        }}
      >
        <Card
          className="p-4 shadow-lg"
          style={{
            width: "22rem",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "15px",
          }}
        >
          <img
            src={login}
            alt="login"
            className="w-10 h-10"
          />
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#6e40ecff",
                border: "none",
                fontSize: "1.1rem",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );

}
export default LoginPage;