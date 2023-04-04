import React, {useState, useRef} from "react";
import "./Réclamations.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';import ReactDatePicker from "react-datepicker";
;

// import email_id from "../Constant/email/reclamation-email/email_id"
// import email_key from "../Constant/email/reclamation-email/email_key"
// import email_template from "../Constant/email/reclamation-email/email_template"


const initialValue = {activite: "", society: "", email: "", phone: "", civilite:"", address: "", place: "", contract_name: "", message: ""}


function Réclamations() {
const [formData, setFormData] = useState(initialValue)
const [selectedDate, setSelectedDate] = useState(null)
const [error, setError] = useState({})
const [isLoading, setIsLoading] = useState(false)
const form = useRef();

// Regular expressions for email and phone validation
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const phoneRegex = /^[0-9]{10}$/;






const sendEmail = (e) => {
  e.preventDefault();
  let newErrors = {}
  if (!formData.activite)newErrors =  {...newErrors, activite: "votre activite est requirer"};
  if (!formData.place)newErrors =  {...newErrors, place: "votre place est requirer"};
  if (!formData.contract_name)newErrors =  {...newErrors, contract_name: "votre contract_name est requirer"};
  if(!formData.civilite)newErrors = {...newErrors, civilite: "votre civilite est requirer"};
  if(!formData.email)newErrors = {...newErrors, email: "votre email est requirer"}
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors = {...newErrors, email: "le format est invaliable"}
  if(!formData.tel)newErrors = {...newErrors, tel: "votre tel est requirer"}
  else if  (!/^\d{10}$/.test(formData.phone)) newErrors = {...newErrors, phone: "le format est invaliable"}
  if(!formData.society)newErrors = {...newErrors, society: "votre society est requirer"};
  if(!formData.address)newErrors = {...newErrors, address: "votre address est requirer"};
  if(!formData.message)newErrors = {...newErrors, message: "votre message est requirer"};
  if(selectedDate === null)newErrors ={...newErrors, selectedDate: "vous doit choisi un date"} 
  setError(newErrors)
  if(Object.keys(newErrors).length === 0){
    setIsLoading(true)
    
  emailjs.sendForm("email_id", "email_template", form.current, "email_key",)
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




const isDisabled = !(formData.activite && formData.place && formData.email && formData.phone && formData.society && formData.address && formData.message && formData.contract_name && formData.civilite);


  return (
    <div className="reclamation-container">
      <div className="my-form">
        <div>
          <h5 className="form-header">
            La description du processus de traitement des réclamations et des
            appels peut être mis à disposition sur simple demande.
          </h5>
        </div>
        <form
          className="row g-3 needs-validation"
         ref={form}
          onSubmit={sendEmail}
        >
          <div className="select-list">
            <label className="form-label">
              Activité concernée
            </label>
            <select className="form-select" name="activite" value={formData.activite}  onChange={e => setFormData({...formData, activite : e.target.value})}>
              <option selected>Choisissez une Option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
                   {error.activite && <span>{error.activite}</span>}
          </div>
          <div className=" col-md-4 Société">
            <label className="form-label">
              Société
            </label>
            <input
              type="text"
              className="form-control"
              value={formData.society}
              placeholder=""
              name="society"
              onChange={e => setFormData({...formData, society : e.target.value})}
            />
            {error.society && <span>{error.society}</span>}
          </div>

          <div className="civilité">
            <div className="options">
              <label className="form-label">
                Civilité
              </label>
              <select className="option-select" name="civilite" value={formData.civilite}   onChange={e => setFormData({...formData, civilite : e.target.value})}>
                <option value="1">M.</option>
                <option value="2">Mille</option>
                <option value="3">Mme</option>
              </select>
              {error.civilite && <span>{error.civilite}</span>}
            </div>

            <div className="options">
              <label  className="form-label">
                Nom du contact
              </label>
              <input
                type="text"
                className="form-control"
                name="contract_name"
                value={formData.contract_name}
                placeholder=""
                onChange={e => setFormData({...formData, contract_name : e.target.value})}
              />
              {error.contract_name && <span>{error.contract_name}</span>}
            </div>
          </div>
          <div className="col-md-4 address">
            <label  className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={e => setFormData({...formData, address : e.target.value})}
            />
            {error.address && <span>{error.address}</span>}
          </div>

          <div className="personal-info">
            <div className="contact-info">
              <label  className="form-label">
                Téléphone
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                placeholder=""
                onChange={e => setFormData({...formData, phone : e.target.value})}
                pattern={phoneRegex}
              />
              {error.phone && <span>{error.phone}</span>}
            </div>

            <div className="contact-info">
              <label  className="form-label">
                E-mail *
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                placeholder=""
                onChange={e => setFormData({...formData, email : e.target.value})}
                pattern={emailRegex}
              />
              {error.email && <span>{error.email}</span>}
            </div>
          </div>
          <div className="datepicker">
            <ReactDatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            />
            
          </div>
          <div className="col-md-4 lieu">
            <label  className="form-label">
              Lieu ou Atelier :
            </label>
            <input
              type="text"
              className="form-control"
              name="place"
              value={formData.place}
              placeholder="leiu ou artilier"
              onChange={e => setFormData({...formData, place : e.target.value})}
            />
            {error.place && <span>{error.place}</span>}
          </div>
          <div className="col-md-4 message">
            <label  className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              value={formData.message}
              rows="3"
              onChange={e => setFormData({...formData, message : e.target.value})}
            ></textarea>
            {error.message && <span>{error.message}</span>}
          </div>

          <div className="button-sub">
            <button className="btn btn-primary" type="submit" >
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
}

export default Réclamations;
