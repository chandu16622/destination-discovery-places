import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


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

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
            background:
            "url('https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar Section */}
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
            Destination Discoveries
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Button
              variant="danger"
              style={{
                marginLeft: "10px",
                borderRadius: "8px",
                padding: "5px 15px",
                backgroundColor: "#4f19e2ff",
                border: "none",
              }}
              onClick={() => navigate("/contact")}
            >
              Contact
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

      {/* Signup Section */}
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
              background: "rgba(255, 255, 255, 0.95)",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              textAlign: "center",
              width: "400px",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              ✅
            </div>
            <h2
              style={{
                color: "#28a745",
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Registration Successful!
            </h2>
            <p
              style={{
                color: "#666",
                fontSize: "1rem",
                marginBottom: "25px",
              }}
            >
              Your account has been created successfully.
            </p>
            <Button
              onClick={handleSignIn}
              style={{
                width: "100%",
                padding: "12px",
              
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5a32c7";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6e40ec";
                e.target.style.transform = "scale(1)";
              }}
            >
              Sign In
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              padding: "40px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              width: "400px",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "30px",
                color: "#333",
                fontWeight: "700",
              }}
            >
              Create Account
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6e40ec")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd")}
              />
              {errors.email && (
                <p style={{ color: "#dc3545", fontSize: "0.9rem", marginTop: "5px" }}>
                  {errors.email}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6e40ec")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd")}
              />
              {errors.password && (
                <p style={{ color: "#dc3545", fontSize: "0.9rem", marginTop: "5px" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#555",
                  fontWeight: "500",
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6e40ec")}
                onBlur={(e) => (e.target.style.borderColor = "#ddd")}
              />
              {errors.confirmPassword && (
                <p style={{ color: "#dc3545", fontSize: "0.9rem", marginTop: "5px" }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#6e40ec",
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5a32c7";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#6e40ec";
                e.target.style.transform = "scale(1)";
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