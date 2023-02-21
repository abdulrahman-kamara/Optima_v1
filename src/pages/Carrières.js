import React from "react";
import { Container } from "react-bootstrap";
import "./Carrières.css";

function Carrières() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#E0E8F2",
        height: "100vh",
      }}
    >
      <div className="carriere-head">
        <h2 className="heading">Carrières</h2>
      </div>

      <div className="card-bg">
        <div class="col-sm-6 mb-3 mb-sm-0 my-cards">
          <div class="card carriere">
            <div class="card-body">
              <h5 class="card-title">Nous rejoindre</h5>
              <p class="card-text">
                Toujours en quête de nouveaux talents, Cercle Optima gère un
                vivier de candidatures ! Si l'amélioration continue, la qualité,
                la métrologie légale vous intéressent que vous êtes autonome et
                mobile, n'hésitez plus, transmettez nous votre candidature.
              </p>

              <h5 class="card-second-text-h">
                Vous souhaitez rejoindre notre équipe ?
              </h5>
              <p class="card-second-text">
                Envoyez votre candidature à recrutement@cercleoptima.com
              </p>
            </div>
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

export default Carrières;
