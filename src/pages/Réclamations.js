import React from "react";
import "./Réclamations.css";

function Réclamations() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted");
  // };

  return (
    <div className="container">
      <div class="my-form">
        <div>
          <h5 class="form-header">
            La description du processus de traitement des réclamations et des
            appels peut être mis à disposition sur simple demande.
          </h5>
        </div>
        <form class="row g-3 needs-validation" novalidate>
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
              value="Mark"
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
                value="Nom du contact"
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
              value="Address"
              required
            />
            <div class="valid-feedback">Looks good!</div>
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
                value=""
                required
              />
            </div>

            <div class="contact-info">
              <label for="validationCustom02" class="form-label">
                E-mail *
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value=""
                required
              />
            </div>
          </div>

          <div class="button-sub">
            <button class="btn btn-primary" type="submit">
              Submit form
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
