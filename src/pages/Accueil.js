// import { JoinFullSharp } from "@mui/icons-material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../components/Background/backgroundImage.webp";
import "./Accueil.css"

const list_accueil = {

}

function Accueil() {
  const bgImage = image;




  return (

    <div>
        <div className="home-container">
          <section>
          <div className="hero-section">
          <h2>Offre Accompagnement Qualité :</h2>
          <h2 style={{ textDecoration: "underline" }}>
            Profiter de l'expérience de notre pôle auditeur !
          </h2>
            <div className="list-accueil">
            <ol>
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
          </ol>
            </div>
          
        </div>
        </section>
        <div className="second-section">
          <div className="section-text">
            <h4>
            
Le réseau au croisement de la métrologie légale et du système qualité.
          </h4>
          <p>
            
Le réseau au croisement de la métrologie légale et du système qualité.
 
 Nous sommes expert dans les métiers de la vérification, l'installation des instruments de mesure. Notre panel de services regroupés en une offre unique s'articulent autour d'un système qualité, d'un logiciel d'aide à la décision et d'un accompagnement terrain. (Formation, Hotline technique et réglementaire, audits internes et évaluation des compétences de vos équipes). Le but de cette démarche ? respect des normes et des réglementations, délivrance de produits conformes, amélioration continue et optimisation des te
          </p>
          <div className="section-number">
            <div className="section-année">
              <h4>
              2003
              </h4>
              <p>notre année de création</p>
            </div>
            <div className="section-percentage">
              <h4>
              100%
              </h4>
              <p>indépendant</p>
            </div>
          </div>
          </div>
          <div className="section-image">
            <img src="\images\section_image.jpg" alt="section-image" />
          </div>
          

        </div>
        <div className="plus"></div>
         
      

  
      <div  className="blank-section"></div>
      <div className="footer">
        <span className="email-text">
          <h6 className="section-text">E-mail</h6>
          <p className="section-text">contact@cercleoptima.com</p>
        </span>
        <span className="email-text">
          <h6 className="section-text">Téléphone</h6>
          <p className="section-text">04 42 50 96 90</p>
        </span>
        <span className="email-text">
          <p className="section-text">
            Cercle Optima 31 avenue Francis Perrin 13106 Rousset Cedex France
          </p>
        </span>
      </div>
     
    </div>
    </div>
  );
}

export default Accueil;
