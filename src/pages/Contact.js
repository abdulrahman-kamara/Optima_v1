import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="form-container">
      <div class="my-form">
        <div>
          <h2 class="form-header">Nous contacter</h2>
        </div>
        <form
          class="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div class="civilité">
            <div class="prenom">
              <label for="validationCustom02" class="form-label">
                Prenom
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
            <div class="col-md-4 nom">
              <label for="validationCustom02" class="form-label">
                Nom de famille
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="Nom de famille"
                required
              />
            </div>
            <div class="email">
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

          <div class="personal-info">
            <div class="telephone">
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
            <div class="col-md-4 société">
              <label for="validationCustom02" class="form-label">
                société
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="société"
                required
              />
            </div>
            <div class="col-md-4 occupation">
              <label for="validationCustom02" class="form-label">
                occupation
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                placeholder="occupation"
                required
              />
            </div>
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
};

export default Contact;
