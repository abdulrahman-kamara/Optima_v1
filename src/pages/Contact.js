import React, {useState, useRef} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const initialValue = {prenom: "", nom: "", email: "", tel: "", society:"", occupation: "", message: ""}

const initailState = {value: initialValue}
const Contact = () => {
const [prenom, setPrenom] = useState("")
const [nom, setnom] = useState("")
const [email, setemail] = useState("")
const [tel, settel] = useState("")
const [society, setsociety] = useState("")
const [occupation, setoccupation] = useState("")
const [message, setmessage] = useState("")
const [error, setError] = useState({})


const form = useRef();


const sendEmail = (event) => {
  event.preventDefault();

  emailjs.sendForm('service_2nvebav', 'template_s93bcoq', form.current, 'KweSbc76vuc4y4N6o')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });

};


const validateForm = () => {
  let error = {}
  if(!prenom){
    error.prenom = "prenom est require"
  }
  if(!nom){
    error.nom = "nom est require"
  }
  if(!email){
    error.email = "nom est require"
  }
  if(!tel){
    error.tel = "tel est require"
  }
  if(!society){
    error.society = "society est require"
  }
  if(!occupation){
    error.occupation = "occupation est require"
  }
  if(!message){
    error.message = "message est require"
  }

  setError(error)
  return Object.keys(error).length === 0
}





  return (
    <div className="form-container">
      <div className="my-form">
        <div>
          <h2 className="form-header">Nous contacter</h2>
        </div>
        <form
          className="row g-3 needs-validation"
          noValidate
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="civilité">
            <div className="prenom">
              <label  className="form-label">
                Prenom
              </label>
              <input
                type="text"
                className="form-control"
              name="prenom"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-4 nom">
              <label  className="form-label">
                Nom de famille
              </label>
              <input
                type="text"
                className="form-control"
              name="nom"
                placeholder="Nom de famille"
                required
              />
            </div>
            <div className="email">
              <label  className="form-label">
                E-mail *
              </label>
              <input
                type="email"
                className="form-control"
              name="email"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="personal-info">
            <div className="telephone">
              <label  className="form-label">
                Téléphone
              </label>
              <input
                type="text"
                className="form-control"
              name="tel"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-4 société">
              <label  className="form-label">
                société
              </label>
              <input
                type="text"
                className="form-control"
              name="society"
                placeholder="société"
                required
              />
            </div>
            <div className="col-md-4 occupation">
              <label  className="form-label">
                occupation
              </label>
              <input
                type="text"
                className="form-control"
              name="occupation"
                placeholder="occupation"
                required
              />
            </div>
          </div>

          <div className="col-md-4 message">
            <label  className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
             name="message"
              rows="3"
            ></textarea>
            {error.message && <span>{error.message}</span>}
          </div>

          <div className="button-sub">
            <button className="btn btn-primary" type="submit" disabled={!validateForm}>
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
