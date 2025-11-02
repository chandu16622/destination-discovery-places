import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import visakhapatnam from "../images/visakhapatnam.jpg";
import tirupathi from "../images/tirupathi.jpg";
import srikakulam from "../images/srikakulam.jpg";
import araku from "../images/araku.jpg";
import vijayawada from "../images/vijayawada.jpg";
import godavari from "../images/godavari.jpg";
import vijayanagaram from "../images/vijayanagaram.jpg";
import kadapa from "../images/kadapa.jpg";
import "../App.css";
import  logo from "../images/logo.png";

function HomePage() {
  const navigate = useNavigate();
  const [hoveredLink, setHoveredLink] = useState(null);

  const getNavLinkStyle = (linkName) => ({
    color: hoveredLink === linkName ? "#f8038aff" : "black",
    fontWeight: hoveredLink === linkName ? "bold" : "500",
    transition: "all 0.3s ease",
    textShadow: hoveredLink === linkName ? "1px 1px 3px rgba(0,0,0,0.3)" : "none",
  });

  const cities = [
    {
      id: 1,
      name: "Visakhapatnam",
      img: visakhapatnam,
      brief: `Visakhapatnam, often called the Jewel of the East Coast, is Andhra Pradesh's largest city and a major seaport. 
It offers a blend of natural beauty and modern infrastructure, with golden beaches, lush green hills, and scenic drives. 
The iconic RK Beach is perfect for sunrise walks, while Kailasagiri provides panoramic views of the coastline. 
INS Kurusura Submarine Museum is one of the few submarine museums in the world. 
Yarada Beach and Rushikonda Beach attract adventure seekers and swimmers alike. 
Simhachalam Temple, an ancient architectural marvel, draws devotees from across the nation. 
The city is also known for its clean environment and calm lifestyle. 
Tourists love the Araku Valley trip via the scenic Eastern Ghats rail route. 
Visakhapatnam perfectly balances culture, spirituality, and modernity. 
It's a must-visit destination for travelers seeking both relaxation and exploration.`,
    },
    {
      id: 2,
      name: "Tirupati",
      img: tirupathi,
      brief: `Tirupati is one of the most sacred pilgrimage destinations in India, renowned for the Tirumala Venkateswara Temple. 
Situated at the foot of the Seshachalam Hills, it attracts millions of devotees each year. 
The temple, dedicated to Lord Balaji, is among the richest in the world. 
The serene surroundings of Kapila Theertham waterfall and Silathoranam rock formation add natural charm. 
Chandragiri Fort showcases the historical grandeur of the Vijayanagara Empire. 
Talakona Waterfalls, located nearby, is the highest in Andhra Pradesh and offers breathtaking views. 
Tirupati also has peaceful forest trails and a calm spiritual atmosphere. 
The region blends faith, nature, and history in perfect harmony. 
Local festivals and rituals add color to the city's spiritual identity. 
Tirupati's divine aura and scenic backdrop make it a soul-refreshing experience.`,
    },
    {
      id: 3,
      name: "Srikakulam",
      img: srikakulam,
      brief: `Srikakulam, known as the northernmost district of Andhra Pradesh, is rich in history, temples, and coastal beauty. 
The Arasavalli Sun Temple, dedicated to the Sun God, is one of the oldest of its kind in India. 
Srikurmam Temple, shaped like a tortoise, is unique in its architecture and mythology. 
Kalingapatnam Beach and Baruva Beach offer tranquility away from crowds. 
The Salihundam Buddhist site displays ancient stupas and relics, symbolizing centuries-old Buddhist influence. 
The Nagavali River enhances the district's scenic charm. 
The area also features green paddy fields and coconut plantations. 
Srikakulam's calm and cultural vibe makes it ideal for those who love heritage and peace. 
The craftsmanship of local artisans and handloom products reflects the town's creativity. 
It's a beautiful blend of spirituality, nature, and tradition.`,
    },
    {
      id: 4,
      name: "Araku Valley",
      img: araku,
      brief: `Araku Valley, located in the Eastern Ghats, is Andhra Pradesh's most famous hill station. 
Surrounded by coffee plantations and misty hills, it is often called the "Ooty of Andhra." 
The Borra Caves nearby are natural wonders formed over a million years ago. 
Katiki Waterfalls and Ananthagiri Hills offer thrilling trekking and sightseeing experiences. 
The valley is home to tribal communities that maintain rich traditions and cultural dances. 
The Tribal Museum displays the heritage and art of the local people. 
Tourists can enjoy coffee tasting sessions and organic produce from local farms. 
The scenic train journey from Vizag to Araku through tunnels and bridges is a highlight. 
Lush green valleys, cool breeze, and cozy resorts make it a romantic destination. 
Araku is a paradise for nature enthusiasts and photographers alike.`,
    },
    {
      id: 5,
      name: "Vijayawada",
      img: vijayawada,
      brief: `Vijayawada, situated on the banks of the Krishna River, is known as the business capital of Andhra Pradesh. 
It is home to the renowned Kanaka Durga Temple atop Indrakeeladri Hill. 
Prakasam Barrage across the Krishna River offers a breathtaking sight, especially at night. 
Bhavani Island is one of India's largest river islands and a hub for water sports. 
Undavalli Caves, carved out of sandstone, showcase ancient Indian rock-cut architecture. 
The city has a mix of religious, cultural, and modern attractions. 
Mangalagiri Temple nearby is an important pilgrimage site. 
The Krishna River adds life and greenery to the city's surroundings. 
Vijayawada is also famous for spicy Andhra cuisine and warm hospitality. 
It's a lively city blending devotion, business, and leisure.`,
    },
    {
      id: 6,
      name: "Godavari",
      img: godavari,
      brief: `The Godavari region, often referred to as the "Rice Bowl of Andhra," is a land of rivers, temples, and greenery. 
Rajahmundry, the cultural heart, sits on the banks of the mighty Godavari River. 
Papi Hills, with their breathtaking gorges and boat cruises, offer a heavenly view of nature. 
Dowleswaram Barrage, built by Sir Arthur Cotton, stands as an engineering marvel. 
Dindi Backwaters resemble Kerala's charm with coconut groves and houseboats. 
The Annavaram Temple on Ratnagiri Hill attracts thousands of devotees every year. 
Godavari is also famous for its literary heritage and classical dance traditions. 
Lush paddy fields and river islands define its picturesque landscapes. 
A trip here is incomplete without enjoying the local fish curry and sweet "pootharekulu." 
The region beautifully captures the soul of Andhra's natural beauty and culture.`,
    },
    {
      id: 7,
      name: "Vizianagaram",
      img: vijayanagaram,
      brief: `Vizianagaram, meaning "City of Victory," has a rich royal heritage and cultural depth. 
It was once the seat of the Vizianagaram Kingdom, and the magnificent Vizianagaram Fort still stands tall. 
Ramatheertham Temple and Thatipudi Reservoir offer scenic and spiritual experiences. 
The city has contributed immensely to classical music and dance. 
The royal family patronized art and education, giving rise to several historic institutions. 
Kumili Fort and Ganta Stambham are prominent attractions reflecting colonial influence. 
Festivals here are celebrated with grandeur and devotion. 
Surrounded by lush greenery and gentle hills, the city retains a charming old-world vibe. 
Local cuisine and handloom sarees are special highlights. 
Vizianagaram perfectly blends heritage, devotion, and serenity.`,
    },
    {
      id: 8,
      name: "Kadapa",
      img: kadapa,
      brief: `Kadapa, located in the heart of the Rayalaseema region, is a city of historic forts and natural wonders. 
Gandikota Fort, known as the "Grand Canyon of India," is the most breathtaking site with its massive gorge. 
Belum Caves, the second-longest caves in India, amaze visitors with stalactite formations. 
The Ameen Peer Dargah stands as a symbol of communal harmony. 
Vontimitta Temple showcases Vijayanagara-style architecture. 
Pushpagiri and Siddhavattam temples reflect the area's deep-rooted spirituality. 
Kadapa's landscape is filled with rocky hills, fertile plains, and ancient monuments. 
It offers adventure, history, and devotion in one place. 
Local cuisine, especially Rayalaseema spice-rich dishes, adds to its allure. 
Kadapa remains an underrated gem waiting to be fully explored by travelers.`,
    },
  ];

  return (
    <>
      {/* ✅ Header/Navbar Section */}
      <Navbar
        style={{
          backgroundColor: "white",
          minHeight: "90px",
        }}
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand
            href="#home"
            className="fw-bold"
            style={{
              fontSize: "1.8rem",
              color: "#2b2b2b",
            }}
          >
           <img src={logo} alt="Destination Discoveries" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                href="#places"
                style={{
                  ...getNavLinkStyle("home"),
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                }}
                onMouseEnter={() => setHoveredLink("home")}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Places
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
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Main Home Content */}
      <div id="places"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "50px 0",
        }}
      >
        <Container>
          <h1 className="text-center text-dark mb-5 fw-bold">
            Explore Andhra Pradesh – Famous Tourist Destinations
          </h1>

          <Row>
            {cities.map((city) => (
              <Col key={city.id} md={6} lg={4} className="mb-4">
                <Card
                  className="shadow-lg border-0 rounded-4 hover-card"
                  style={{
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={city.img}
                    alt={city.name}
                    className="rounded-top-4"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="text-primary fw-bold mb-3">
                      {city.name}
                    </Card.Title>
                    <Card.Text
                      className="text-muted text-start"
                      style={{
                        height: "230px",
                        overflowY: "auto",
                        textAlign: "justify",
                      }}
                    >
                      {city.brief}
                    </Card.Text>
                    <Button
                      variant="outline-primary"
                      onClick={() => navigate(`/city/${city.id}`)}
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0d6efd";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#0d6efd";
                      }}
                    >
                      View places
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
