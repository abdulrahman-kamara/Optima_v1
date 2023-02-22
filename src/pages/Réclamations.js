import React from "react";
import "./Réclamations.css";
import Datepicker from "../components/Datepicker/Datepicker";

function Réclamations() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="container">
      <div class="my-form">
        <div>
          <h5 class="form-header">
            La description du processus de traitement des réclamations et des
            appels peut être mis à disposition sur simple demande.
          </h5>
        </div>
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div class="select-list">
            <label for="validationCustom01" class="form-label">
              Activité concernée
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Choisissez une Option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class=" col-md-4 Société">
            <label for="validationCustom01" class="form-label">
              Société
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              placeholder=""
              required
            />
          </div>

          <div class="civilité">
            <div class="sex-option">
              <label for="validationCustom01" class="form-label">
                Civilité
              </label>
              <select class="select-sex" aria-label="Default select example">
                <option value="1">M.</option>
                <option value="2">Mille</option>
                <option value="3">Mme</option>
              </select>
            </div>

            <div class="contact-name">
              <label for="validationCustom02" class="form-label">
                Nom du contact
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
          </div>
          <div class="col-md-4 address">
            <label for="validationCustom02" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Address"
              required
            />
          </div>

          <div class="personal-info">
            <div class="contact-info">
              <label for="validationCustom02" class="form-label">
                Téléphone
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>

            <div class="contact-info">
              <label for="validationCustom02" class="form-label">
                E-mail *
              </label>
              <input
                type="email"
                class="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
          </div>
          <div class="datepicker">
            <Datepicker />
          </div>
          <div class="col-md-4 lieu">
            <label for="validationCustom02" class="form-label">
              Lieu ou Atelier :
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              placeholder="Address"
              required
            />
          </div>
          <div class="col-md-4 message">
            <label for="validationCustom02" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="button-sub">
            <button class="btn btn-primary" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>

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
    </div>
  );
}

export default Réclamations;
