import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import signupBg from "../images/login-bg.jpg"; 
import logo from "../images/logo.png";// ✅ background image

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let formErrors = {};
    const { email, password, confirmPassword } = formData;

    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid.";
    }

    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form data submitted:", formData);
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${signupBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Navbar Section */}
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Container>
          <Navbar.Brand
            style={{
              fontWeight: "bold",
              color: "#6e40ec",
              fontSize: "1.5rem",
            }}
          >
            <img
              src={logo}
              alt="Destination Discoveries"
              style={{ height: "80px", marginRight: "140px" }}
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              style={{ color: "#1714dfff", fontWeight: "800" }}
              onClick={() => navigate("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1429ebff", fontWeight: "800" }}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Nav.Link>
             <Button
              variant="danger"
              style={{
                marginLeft: "10px",
                borderRadius: "8px",
                padding: "5px 15px",
                backgroundColor: "#4f19e2ff",
                border: "none",
              }}
              onClick={() => navigate("/login")}
            >
              login
            </Button>
            <Button
              variant="danger"
              style={{
                marginLeft: "10px",
                borderRadius: "8px",
                padding: "5px 15px",
                backgroundColor: "#4f19e2ff",
                border: "none",
              }}
              onClick={() => navigate("/")}
            >
              Sign Out
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* ✅ Signup Section */}
      <div
        style={{
          height: "calc(100vh - 90px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isSubmitted && Object.keys(errors).length === 0 ? (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            ✅ Success! Account created.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              width: "350px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#333",
                fontWeight: "700",
              }}
            >
              Sign Up
            </h2>

            <div style={{ marginBottom: "15px" }}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              {errors.email && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              {errors.confirmPassword && (
                <p style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#6e40ec",
                color: "white",
                fontSize: "1rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
