import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="form-container">
      <div className="my-form">
        <div>
          <h2 className="form-header">Nous contacter</h2>
        </div>
        <form
          className="row g-3 needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="civilité">
            <div className="prenom">
              <label for="validationCustom02" className="form-label">
                Prenom
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-4 nom">
              <label for="validationCustom02" className="form-label">
                Nom de famille
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Nom de famille"
                required
              />
            </div>
            <div className="email">
              <label for="validationCustom02" className="form-label">
                E-mail *
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="personal-info">
            <div className="telephone">
              <label for="validationCustom02" className="form-label">
                Téléphone
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-4 société">
              <label for="validationCustom02" className="form-label">
                société
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="société"
                required
              />
            </div>
            <div className="col-md-4 occupation">
              <label for="validationCustom02" className="form-label">
                occupation
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="occupation"
                required
              />
            </div>
          </div>

          <div className="col-md-4 message">
            <label for="validationCustom02" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="button-sub">
            <button className="btn btn-primary" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>

      <div className="section-footer">
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
  );
};

export default Contact;
