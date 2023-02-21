// import { JoinFullSharp } from "@mui/icons-material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../components/Background/backgroundImage.webp";
import "./pages.css";
function Accueil() {
  const bgImage = image;

  return (
    <Container fluid>
      <Row
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h2>Offre Accompagnement Qualité :</h2>
          <h2 style={{ textDecoration: "underline" }}>
            Profiter de l'expérience de notre pôle auditeur !
          </h2>

          <ul
            style={{
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            <li>Audit interne ou Audit blanc</li>
            <li>Formation, mise en place de système Qualité.</li>
            <li>
              Préparation audit de certification ou accréditation. ISO 9001 /
              ISO 17020 / ISO 14001
            </li>
            <li>
              Document Unique d'Evaluation des Risques / Certification MASE
            </li>
            <li>Conseil et Expertise en métrologie légale.</li>
          </ul>
        </div>

        <Col xs={12} md={4}>
          {/* Second section */}
        </Col>
        <Col xs={12} md={4}>
          {/* Third section */}
        </Col>
      </Row>
      <Row
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Col xs={12} md={6}>
          {/* Fourth section */}
        </Col>
        <Col xs={12} md={6}>
          {/* Fifth section */}
        </Col>
      </Row>
    </Container>
  );
}

export default Accueil;
