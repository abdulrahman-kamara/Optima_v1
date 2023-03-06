// import { JoinFullSharp } from "@mui/icons-material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../components/Background/backgroundImage.webp";
import "./pages.css";
function Accueil() {
  const bgImage = image;

  return (

    <Container fluid>
      <div className="home-container">
        <div className="container">
          <div className="hero-section">
          <h2>Offre Accompagnement Qualité :</h2>
          <h2 style={{ textDecoration: "underline" }}>
            Profiter de l'expérience de notre pôle auditeur !
          </h2>

          <ul>
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
          </div>
      

      </div>
      <div fluid class="section-blank"></div>
      <div class="section-footer">
        <span class="email-text">
          <h6 class="section-text">E-mail</h6>
          <p class="section-text">contact@cercleoptima.com</p>
        </span>
        <span class="email-text">
          <h6 class="section-text">Téléphone</h6>
          <p class="section-text">04 42 50 96 90</p>
        </span>
        <span class="email-text">
          <p class="section-text">
            Cercle Optima 31 avenue Francis Perrin 13106 Rousset Cedex France
          </p>
        </span>
      </div>
     
    </Container>
  );
}

export default Accueil;
