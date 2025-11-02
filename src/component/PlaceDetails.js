import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function PlaceDetails() {
  const { cityName, placeName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { city, place } = location.state || {};

  if (!city || !place) {
    return (
      <Container className="text-center mt-5 text-danger">
        <h3>Place not found!</h3>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Button
        variant="outline-primary"
        className="mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>

      <Card className="shadow-lg border-0 rounded-4">
        <Card.Img
          variant="top"
          src={city.img}
          alt={place.name}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <h2 className="fw-bold text-primary">{place.name}</h2>
          <h5 className="text-muted">Located in {city.name}</h5>
          <p className="mt-3">{place.desc}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PlaceDetails;
