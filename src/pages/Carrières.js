import React from "react";
import { Container } from "react-bootstrap";
import "./Carrières.css";

function Carrières() {

  const  handleClick = (event) => {
    event.preventDefault();

    const recipient = 'example@example.com';
    const subject = 'Hello';
    const body = 'This is the body of the email.';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }
  return (
    <>
    <Container
      style={{
        backgroundColor: "#E0E8F2",
        height: "100vh",
      }}
    >
      <div className="carriere-head">
        <h2 className="heading">Carrières</h2>
      </div>

      <div className="card-bg">
        <div className="col-sm-6 mb-3 mb-sm-0 my-cards">
          <div className=" carriere">
            <div className="my-body">
              <h5 className="card-title">Nous rejoindre</h5>
              <p className="text-p" >
                Toujours en quête de nouveaux talents, Cercle Optima gère un
                vivier de candidatures ! Si l'amélioration continue, la qualité,
                la métrologie légale vous intéressent que vous êtes autonome et
                mobile, n'hésitez plus, transmettez nous votre candidature.
              </p>

              <h5 className="card-second-text-h">
                Vous souhaitez rejoindre notre équipe ?
              </h5>
              <a className="card-second-text" href="#" onClick={handleClick}> Envoyez votre candidature à recrutement@cercleoptima.com</a>
              <p className="card-second-text">
               
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </Container>
     <div className="section-blank"></div>
    </>
  );
}

export default Carrières;
