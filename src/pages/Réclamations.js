import React, {useState, useRef} from "react";
import "./Réclamations.css";
import Datepicker from "../components/Datepicker/Datepicker";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import email_id from  "../Constant/email/email_id" 
import email_template from  "../Constant/email/email_template" 
import email_key from  "../Constant/email/email_key"

// the values of the contact information
const initialValue = {place: "", contract: "", email: "", tel: "", society:"", address: "", message: ""}


function Réclamations() {
   // i used useRef hook to be able to return an object that can i can use during the lifecyle of this component and also to access a DOM child directly
const form = useRef();  
// this stae handle the initailvalues of the form ans set it so it can be access locally
const [formData, setFormData] = useState(initialValue)
//to display my error messages
const [error, setError] = useState({})
// showing the loading state of the submit request
const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {}
    if (!formData.prenom)newErrors =  {...newErrors, prenom: "votre prenom est requirer"};
    if(!formData.nom)newErrors = {...newErrors, nom: "votre nom est requirer"};
    if(!formData.email)newErrors = {...newErrors, email: "votre email est requirer"}
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors = {...newErrors, email: "le format est invaliable"}
    if(!formData.tel)newErrors = {...newErrors, tel: "votre tel est requirer"}
    else if  (!/^\d{10}$/.test(formData.tel)) newErrors = {...newErrors, tel: "le format est invaliable"}
    if(!formData.society)newErrors = {...newErrors, society: "votre society est requirer"};
    if(!formData.occupation)newErrors = {...newErrors, occupation: "votre occupation est requirer"};
    if(!formData.message)newErrors = {...newErrors, message: "votre message est requirer"};
    setError(newErrors)
    if(Object.keys(newErrors).length === 0){
      setIsLoading(true)
      
    emailjs.sendForm(email_id, email_template, form.current, email_key,)
      .then((result) => {
          console.log(result.text);
          console.log("message sent"); 
          toast.success("Votre message est bien envoyer Merci!")
          setFormData(initialValue)
      }).catch ((error) => {
          console.log(error.text);
          toast.error("Votre message est pas envoyer Merci!")
         
      })
      .finally(() => {
        setIsLoading(false)
      })
    }
  };

  return (
    <div className="reclamation-container">
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
              <option value="1">Taxi</option>
              <option value="2">Tachygraphe</option>
              <option value="3">Analyseur de gaz/ Opacimètre</option>
              <option value="2">Ethylotest</option>
              <option value="3">Auto-Ecole</option>
              <option value="2">Pont Elévateur</option>
              <option value="3">Formation</option>
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
            <div class="options">
              <label for="validationCustom01" class="form-label">
                Civilité
              </label>
              <select class="option-select" aria-label="Default select example">
                <option value="1">M.</option>
                <option value="1">Melle</option>
                <option value="3">Mme</option>
              </select>
            </div>

            <div class="options">
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
