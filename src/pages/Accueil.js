// import { JoinFullSharp } from "@mui/icons-material";
import React from "react";
import image from "../components/Background/backgroundImage.webp";
import "./pages.css";
function Accueil() {
  return (
    <>
      <section
        style={{
          backgroundImage: `URL(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "621px",
        }}
      >
        <div
          className="hero-title"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "24px",
            fontweight: "bold",
            textAlign: "center",
          }}
        >
          <div>
            <h2 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
              Offre Accompagnement Qualité :
            </h2>
            <a href="https://github.com/">
              {" "}
              Profiter de l'expérience de notre pôle auditeur !
            </a>
            <ul>
              <li>
                {" "}
                Audit interne ou Audit blanc Formation, mise en place de système
                Qualité.{" "}
              </li>
              <li> Préparation audit de certification ou accréditation.</li>
              <li> ISO 9001 / ISO 17020 / ISO 14001 </li>
              <li>
                {" "}
                Document Unique d'Evaluation des Risques / Certification MASE{" "}
              </li>
              <li> Conseil et Expertise en métrologie légale.</li>
            </ul>
            <a href="http://">
              Contactez nous ! Nous vous aiderons à définir vos besoins
              04.42.50.96.90 / contact@cercleoptima.com
            </a>
          </div>
        </div>
      </section>
      <main>
        <p>This is main</p>
      </main>
    </>
  );
}

export default Accueil;
