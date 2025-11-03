// 
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Row, Col, Card } from "react-bootstrap";
import visakhapatnam from "../images/visakhapatnam.jpg";
import araku from "../images/araku.jpg";
import tirupathi from "../images/tirupathi.jpg";
import srikakulam from "../images/srikakulam.jpg";
import vijayawada from "../images/vijayawada.jpg";
import godavari from "../images/godavari.jpg";
import vijayanagaram from "../images/vijayanagaram.jpg";
import kadapa from "../images/kadapa.jpg";
import logo from "../images/logo.png";
import { HashLink } from "react-router-hash-link";


function LandingPage() {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // ✅ Correct offset (adjust this if your navbar height changes)
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };


  const places = [
    { id: 1, name: "Visakhapatnam", img: visakhapatnam },
    { id: 2, name: "Tirupathi", img: tirupathi },
    { id: 3, name: "Srikakulam", img: srikakulam },
    { id: 4, name: "Araku", img: araku },
    { id: 5, name: "Vijayawada", img: vijayawada },
    { id: 6, name: "Godavari", img: godavari },
    { id: 7, name: "Vizianagaram", img: vijayanagaram },
    { id: 8, name: "Kadapa", img: kadapa },
  ];

  // Video data - you can use YouTube embed links or local video files
  const videos = [
    {
      id: 1,
      title: "Visakhapatnam Beach Tour",
      // YouTube embed URL format
      url: "https://www.youtube.com/embed/mdL9aRlQq1U",
      // OR use local video file
      // url: require("../videos/visakhapatnam.mp4"),
      description: "Explore the beautiful beaches of Vizag"
    },
    {
      id: 2,
      title: "Araku Valley Journey",
      url: "https://www.youtube.com/embed/XUOZUYMKa3s",
      description: "Experience the scenic beauty of Araku"
    },
    {
      id: 3,
      title: "Tirupathi Temple Visit",
      url: "https://www.youtube.com/embed/i9KoSHYp6cg",
      description: "Virtual tour of the sacred temple"
    },
    {
      id: 4,
      title: "Vijayawada City Life",
      url: "https://www.youtube.com/embed/sWaBIy3UAD4",
      description: "Discover the vibrant city culture"
    }
  ];

  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#0351f8ff" : "black",
    fontWeight: hoveredLink === linkName ? "bold" : "500",
    transition: "all 0.3s ease",
    textShadow: hoveredLink === linkName ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
  });

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        expand="lg"
        sticky="top"
      >
        <Container fluid>
          {/* ✅ Logo (Left) */}
          <Navbar.Brand
            href="#home"
            className="fw-bold d-flex align-items-center"
            style={{ fontSize: "1.8rem", color: "#2b2b2b" }}
          >
            <img src={logo} alt="Destination Discoveries" style={{ height: "90px" }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            {/* ✅ Center Links */}
            <Nav
              className="mx-auto d-flex align-items-center justify-content-center"
              style={{ gap: "55px" }}
            >
              <Nav.Link
                onClick={() => scrollToSection("home")}
                style={{ ...getNavLinkStyle("home"), fontSize: "1.2rem" }}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Home
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("about")}
                style={{ ...getNavLinkStyle("about"), fontSize: "1.2rem" }}
                onMouseEnter={() => setHoveredLink("about")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                About
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("places")}
                style={{ ...getNavLinkStyle("places"), fontSize: "1.2rem" }}
                onMouseEnter={() => setHoveredLink("places")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Places
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("videos")}
                style={{ ...getNavLinkStyle("videos"), fontSize: "1.2rem" }}
                onMouseEnter={() => setHoveredLink("videos")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Videos
              </Nav.Link>


              <Nav.Link
                onClick={() => {
                  navigate("/contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  ...getNavLinkStyle("contact"),
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHoveredLink("contact")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Contact
              </Nav.Link>

            </Nav>

            {/* ✅ Right Side Buttons */}
            {/* ✅ Right Side Buttons (always aligned right) */}
            <div className="d-flex align-items-center ms-auto mt-3 mt-lg-0">
              <Button
                style={{
                  backgroundColor: "#6e40ecff",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  marginRight: "10px",
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
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* Hero Section */}
      <section
        id="home"
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          background:
            "url('https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2017/07/Soothing-nature-backgrounds-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "white",
          position: "relative",
        }}
      >
        <Container style={{ position: "relative", zIndex: 2 }}>
          <h1 className="display-3 fw-bold mb-3" style={{ color: "white" }}>
            Discover Beautiful Destinations
          </h1>
          <p className="lead mb-6 fs-3" style={{ color: "white" }}>
            Explore the Andhra, relive your adventures, and find your next journey.
          </p>
          <Button
            style={{
              backgroundColor: "#7b43ffff",
              border: "none",
              fontSize: "1.2rem",
              padding: "10px 30px",
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-5"
        style={{ background: "linear-gradient(to right, white, #d2c3f3ff)" }}
      >
        <Container>
          <h2
            className="text-center fw-bold mb-4"
            style={{ color: "#001279ff" }}
          >
            About Us
          </h2>

          {/* Main Descriptive Paragraph */}
          <p
            className="text-center mx-auto fs-5 mb-4"
            style={{ color: "#004d40", maxWidth: '1500px' }} // Added maxWidth for better readability
          >
            <strong>Destination Discoveries</strong> is a travel-inspired platform designed for wanderers and explorers. Whether you're looking to revisit old memories or uncover hidden gems, we bring the world closer to you. Every journey tells a story—from the vibrant streets of cities to the quiet charm of hidden villages. Our mission is to help you discover places that aren't just destinations on a map, but memories waiting to happen.
          </p>

          {/* Section Title for the Discoveries */}
          <h4 className="text-center mb-3 fw-bold" style={{ color: "#004d40" }}>
            Explore Our Featured Discoveries:
          </h4>

          {/* Points in an Unordered List */}
          <ul className="mx-auto fs-5" style={{ color: "#004d40", listStyleType: 'none', paddingLeft: 0, maxWidth: '900px' }}>
            <li className="mb-2">
              **🏖️ Beaches & Coastal Spots**
              <br />
              Relax along golden shores, enjoy water adventures, and soak in breathtaking sunsets.
            </li>
            <li className="mb-2">
              **🏞️ Hill Stations & Nature Escapes**
              <br />
              Cool weather, waterfalls, trekking trails, and peaceful views to refresh your soul.
            </li>
            <li className="mb-2">
              **🕍 Heritage & Pilgrimage Sites**
              <br />
              Discover India's culture, temples, history, and age-old traditions that inspire millions.
            </li>
            <li className="mb-2">
              **🏙️ Smart Cities & Urban Lifestyle**
              <br />
              Experience shopping, nightlife, modern attractions, and entertainment for all ages.
            </li>
            <li className="mb-2">
              **🌄 Hidden Gems & Offbeat Places**
              <br />
              Less crowded, more adventure—perfect for explorers who love discovering something new!
            </li>
          </ul>

        </Container>
      </section>


      {/* Places Section */}
      <section
        id="places"
        className="py-5"
        style={{
          background: "linear-gradient(to bottom, white, #f5eeb0ff)",
        }}
      >
        <Container>
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#4c4090ff" }}
          >
            Beautiful places to Visit
          </h2>
          <Row>
            {places.map((place) => (
              <Col key={place.id} md={4} lg={3} className="mb-4 mx-auto">
                <Card
                  className="shadow-lg border-0 rounded-4 h-100"
                  onMouseEnter={() => setHoveredCard(place.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    transform:
                      hoveredCard === place.id ? "translateY(-10px)" : "none",
                    boxShadow:
                      hoveredCard === place.id
                        ? "0 8px 20px rgba(221, 186, 253, 0.5)"
                        : "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease-in-out",
                    border: hoveredCard === place.id ? "2px solid #7b43ff" : "none",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={place.img}
                      alt={place.name}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        transform:
                          hoveredCard === place.id ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title
                      style={{
                        color:
                          hoveredCard === place.id ? "#7b43ff" : "#00796b",
                        fontWeight: "600",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {place.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Videos Section */}
      <section
        id="videos"
        className="py-5"
        style={{
          background: "linear-gradient(to bottom, #f5eeb0ff, #fce4ec)",
        }}
      >
        <Container>
          <h2
            className="text-center fw-bold mb-5"
            style={{ color: "#5e33fcff" }}
          >
            Travel Videos
          </h2>
          <Row>
            {videos.map((video) => (
              <Col key={video.id} md={6} lg={6} className="mb-4">
                <Card className="shadow-lg border-0 rounded-4 h-100">
                  <Card.Body>
                    <Card.Title
                      className="text-center mb-3"
                      style={{ color: "#d943ffff", fontWeight: "600" }}
                    >
                      {video.title}
                    </Card.Title>

                    {/* For YouTube Videos */}
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "56.25%", // 16:9 aspect ratio
                        height: 0,
                        overflow: "hidden",
                        borderRadius: "10px",
                      }}
                    >
                      <iframe
                        src={video.url}
                        title={video.title}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>



                    <Card.Text
                      className="text-center mt-3"
                      style={{ color: "#004d40" }}
                    >
                      {video.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5"
        style={{ background: "linear-gradient(to bottom, white, #d2c3f3ff)" }}
      >
        <Container className="text-center">
          <h2 className="fw-bold mb-4" style={{ color: "#0c0079ff" }}>
            Contact Us
          </h2>
          <p className="fs-5" style={{ color: "#004d40" }}>
            📧 Email: contact@destinationdiscoveries.com <br />
            📞 Phone: 6301055724
          </p>
          <p style={{ color: "#292df7ff" }}>
            Follow us on social media for travel inspiration and updates!
          </p>
        </Container>
      </section>

      {/* Footer */}


    </>
  );
}

export default LandingPage;