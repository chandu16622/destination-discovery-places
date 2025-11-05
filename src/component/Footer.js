import React from 'react';

 function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: "linear-gradient(to bottom,  #b1d3eeff,white)" }}>
      {/* Main Footer Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
          
          {/* About Column */}
          <div>
            <div style={{ 
              width: "60px", 
              height: "60px", 
              backgroundColor: "#7b43ff", 
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              fontSize: "24px"
            }}>
              🗺️
            </div>
            <h5 style={{ fontWeight: "bold", marginBottom: "25px", fontSize: "1.3rem" }}>
              Destination Discoveries
            </h5>
            <p style={{ color: "#1619eeff", lineHeight: "1.6", fontSize: "0.95rem" }}>
              Your ultimate guide to exploring the beautiful destinations of Andhra Pradesh. 
              Discover hidden gems, plan your trips, and create unforgettable memories.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "1.2rem" }}>
              Quick Links
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                style={{ 
                  color: "#2b2829ff", 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#6f99d8ff";
                  e.target.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#000000ff";
                  e.target.style.paddingLeft = "0";
                }}
              >
                → Home
              </a>
              <a 
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                style={{ 
                  color: "#000000ff", 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#5310eeff";
                  e.target.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#0b0c0cff";
                  e.target.style.paddingLeft = "0";
                }}
              >
                → About Us
              </a>
              <a 
                href="#places"
                style={{ 
                  color: "#000000ff", 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#7b43ff";
                  e.target.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#000000ff";
                  e.target.style.paddingLeft = "0";
                }}
              >
                → Places
              </a>
              <a 
                href="#videos"
                style={{ 
                  color: "#000000ff", 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#7b43ff";
                  e.target.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#000000ff";
                  e.target.style.paddingLeft = "0";
                }}
              >
                → Videos
              </a>
              <a 
                href="#contact"
                style={{ 
                  color: "#000000ff", 
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#7b43ff";
                  e.target.style.paddingLeft = "10px";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#000000ff";
                  e.target.style.paddingLeft = "0";
                }}
              >
                → Contact
              </a>
            </div>
          </div>

          {/* Popular Destinations Column */}
          <div>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "1.2rem" }}>
              Popular Destinations
            </h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Visakhapatnam", "Tirupathi", "Araku Valley", "Vijayawada", "Srikakulam"].map((place) => (
                <a 
                  key={place}
                  href="#places"
                  style={{ 
                    color: "#000000ff", 
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    display: "inline-block"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#7b43ff";
                    e.target.style.paddingLeft = "10px";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#000000ff";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  ✈️ {place}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h5 style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "1.2rem" }}>
              Contact Us
            </h5>
            <div style={{ color: "#000000ff", display: "flex", flexDirection: "column", gap: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>📧</span>
                <a 
                  href="mailto:contact@destinationdiscoveries.com"
                  style={{ color: "#000000ff", textDecoration: "none" }}
                  onMouseOver={(e) => e.target.style.color = "#7b43ff"}
                  onMouseOut={(e) => e.target.style.color = "#000000ff"}
                >
                  contact@destinationdiscoveries.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>📞</span>
                <a 
                  href="tel:+916301055724"
                  style={{ color: "#000000ff", textDecoration: "none" }}
                  onMouseOver={(e) => e.target.style.color = "#7b43ff"}
                  onMouseOut={(e) => e.target.style.color = "#000000ff"}
                >
                  +91 6301055724
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "20px" }}>📍</span>
                <span>Andhra Pradesh, India</span>
              </div>
              
              {/* Social Media Icons */}
              <div style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: "12px", fontSize: "0.9rem" }}>Follow Us:</p>
                <div style={{ display: "flex", gap: "15px" }}>
                  <a 
                    href="#!" 
                    style={{ 
                      fontSize: "28px", 
                      transition: "transform 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                  >
                    📘
                  </a>
                  <a 
                    href="#!" 
                    style={{ 
                      fontSize: "28px", 
                      transition: "transform 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                  >
                    🐦
                  </a>
                  <a 
                    href="#!" 
                    style={{ 
                      fontSize: "28px", 
                      transition: "transform 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                  >
                    📷
                  </a>
                  <a 
                    href="#!" 
                    style={{ 
                      fontSize: "28px", 
                      transition: "transform 0.3s ease",
                      display: "inline-block"
                    }}
                    onMouseOver={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                  >
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div style={{ 
        backgroundColor: "#eef5f4ff", 
        padding: "15px 10px",
        borderTop: "1px solid #34495e"
      }}>
        <div style={{ 
          maxWidth: "800px", 
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          
        }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px"
          }}>
            <p style={{ margin: 0, color: "#000000ff", fontSize: "0.95rem" }}>
              © {new Date().getFullYear()} Destination Discoveries. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <a 
                href="#!" 
                style={{ color: "#050505ff", textDecoration: "none", fontSize: "0.9rem" }}
                onMouseOver={(e) => e.target.style.color = "#4c00fcff"}
                onMouseOut={(e) => e.target.style.color = "#000000ff"}
              >
                Privacy Policy
              </a>
              <span style={{ color: "#000000ff" }}>|</span>
              <a 
                href="#!" 
                style={{ color: "#000000ff", textDecoration: "none", fontSize: "0.9rem" }}
                onMouseOver={(e) => e.target.style.color = "#7b43ff"}
                onMouseOut={(e) => e.target.style.color = "#000000ff"}
              >
                Terms of Service
              </a>
              <span style={{ color: "#000000ff" }}>|</span>
              <a 
                href="#!" 
                style={{ color: "#000000ff", textDecoration: "none", fontSize: "0.9rem" }}
                onMouseOver={(e) => e.target.style.color = "#7b43ff"}
                onMouseOut={(e) => e.target.style.color = "#000000ff"}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;