import React, {Suspense, useState, useRef} from "react"
import "./Réclamations.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import ReactDatePicker from "react-datepicker";
import  { Circles } from 'react-loader-spinner';
import capchakey from "../Constant/capcha_key/capcha"
import emailId from "../Constant/email/reclamation-email/email_id"
import templeteId from "../Constant/email/reclamation-email/email_template"
import emailKey from "../Constant/email/reclamation-email/email_key"
const  ReCAPTCHA = React.lazy(() => import('react-google-recaptcha'));
// value of the reclamation infomation
const initialValue = {activite: "", society: "", email: "", phone: "", civilite:"", adresse: "", place: "", contract_name: "", message: ""}


function Réclamations() {
  // the formdata set the initialvalue of the relcamation 
const [formData, setFormData] = useState(initialValue)
// represent the date and set it 
const [selectedDate, setSelectedDate] = useState(null)
// set the error method
const [error, setError] = useState({})
// handle the isloading state of the page
const [isLoading, setIsLoading] = useState(false)
// set google capcha of the page
const [captchaValue, setCaptchaValue] = useState("");
// checked if the capcha is verified set it to true when verified
const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
// return the mutable ref object of the form 
const form = useRef();
// create a ref for the capcha
const recaptchaRef = React.createRef()

// handle the form submition after checking for all the neccessary validation of the form using emailjs
const sendEmail = (e) => {
  e.preventDefault();
  let newErrors = {}
  if (!formData.activite) newErrors =  {...newErrors, activite: "votre activite est requirer"};
  if (!formData.place) newErrors =  {...newErrors, place: "votre lieu est requirer"};
  if (!formData.contract_name) newErrors =  {...newErrors, contract_name: "votre nom est requirer"};
  if(!formData.civilite) newErrors = {...newErrors, civilite: "votre civilité est requirer"};
  if(!formData.email) newErrors = {...newErrors, email: "votre adresse email est requirer"}
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors = {...newErrors, email: "le format est invaliable"}
  if(!formData.phone) newErrors = {...newErrors, phone: "votre numéro téléphone est requirer"}
  else if  (!/^\d{10}$/.test(formData.phone)) newErrors = {...newErrors, phone: "le format est est pas bonne"}
  if(!formData.society) newErrors = {...newErrors, society: "votre société est requirer"};
  if(!formData.adresse) newErrors = {...newErrors, adresse: "votre adresse est requirer"};
  if(!formData.message) newErrors = {...newErrors, message: "votre message est requirer"};
  if(selectedDate === null) newErrors = {...newErrors, selectedDate: "vous doit choisissez un date"} 
  setError(newErrors)
  
  if(Object.keys(newErrors).length === 0){
    setIsLoading(true) 
    if(isCaptchaVerified){
    emailjs.sendForm(emailId, templeteId, form.current, emailKey,)
    .then((result) => {
        console.log(result.text);
        console.log("message sent"); 
        toast.success("Votre message est bien envoyer Merci!")
        setFormData(initialValue)
    }).catch ((error) => {
        console.log(error.text);
        console.log("message not sent"); 
        toast.error("Votre message est pas envoyer Merci!")
       
    })
    .finally(() => {
      setIsLoading(false)
    })
    }

  }
};

  //handle the change of the capha
  const handleCaptchaChange = (value) => {
    console.log("I am not a robot");
    setCaptchaValue(value);
    setIsCaptchaVerified(true);
    if (error.captcha) {
      const { captcha: _, ...rest } = error;
      setError(rest);
    }
  };
  


  return (
    <div className="reclamation-container">
      <div className="my-form">
        <div>
          <h5 className="form-header">
            La description du processus de traitement des réclamations et des
            appels peut être mis à disposition sur simple demande.
          </h5>
        </div>
        
        <ToastContainer 
        position="top-center"
        theme="colored"
        autoClose={5000}
        />
        <form
          className="row g-3 needs-validation"
         ref={form}
          onSubmit={sendEmail}
        >
          <div className="select-list">
            <label className="form-label">
              Activité concernée
            </label>
            <select className="form-select" name="activite" value={formData.activite} onChange={e => {setFormData({...formData, activite : e.target.value}); if (error.activite && e.target.value) {
                  const { activite: _, ...rest } = error;
                  setError(rest);
                }} }>
              <option defaultValue="">Choisissez une Option</option>
              <option value="1">Taximètre</option>
              <option value="2">Tachygraphe</option>
              <option value="3">Analyseur de gaz/Opacimètre</option>
              <option value="1">Ethylotest</option>
              <option value="2">Auto-Ecole</option>
              <option value="3">Pont Elévateur</option>
              <option value="3">Formation</option>
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
              onChange={e => {setFormData({...formData, society : e.target.value}); if (error.society && e.target.value) {
                const { society: _, ...rest } = error;
                setError(rest);
              }} }
            />
            {error.society && <span>{error.society}</span>}
          </div>
          <div className="civilité">
            <div className="options">
              <label className="form-label">
                Civilité
              </label>
              <select className="option-select" name="civilite" value={formData.civilite}   onChange={e => {setFormData({...formData, civilite : e.target.value}); if (error.civilite && e.target.value) {
                  const { civilite: _, ...rest } = error;
                  setError(rest);
                }} }>
                  <option defaultValue="">Choisissez une Option</option>
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
                onChange={e => {setFormData({...formData, contract_name : e.target.value}); if (error.contract_name && e.target.value) {
                  const { contract_name: _, ...rest } = error;
                  setError(rest);
                }} }
              />
              {error.contract_name && <span>{error.contract_name}</span>}
            </div>
          </div>
          <div className="col-md-4 address">
            <label  className="form-label">
              Adresse
            </label>
            <input
              type="text"
              className="form-control"
              name="adresse"
              value={formData.adresse}
              placeholder="Adresse"
              onChange={e => {setFormData({...formData, adresse : e.target.value}); if (error.adresse && e.target.value) {
                const { adresse: _, ...rest } = error;
                setError(rest);
              }} }
            />
            {error.adresse && <span>{error.adresse}</span>}
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
                onChange={e => {setFormData({...formData, phone : e.target.value}); if (error.phone && e.target.value) {
                  const { phone: _, ...rest } = error;
                  setError(rest);
                }} }
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
                onChange={e => {setFormData({...formData, email : e.target.value}); if (error.email && e.target.value) {
                  const { email: _, ...rest } = error;
                  setError(rest);
                }} }
              />
              {error.email && <span>{error.email}</span>}
            </div>
          </div>
          <div className="datepicker">
            <label>
              Date
            <ReactDatePicker
            placeholderText="Choisissez une date"
            selected={selectedDate}
            onChange={(date) => {setSelectedDate(date); if(error.selectedDate && selectedDate === null){
              const {selectedDate: _, ...rest} = error;
              setError(rest)
            }}}
            className="dates"
            />
            {error.selectedDate && <span>{error.selectedDate}</span>}
            </label>
          </div>
          <div className="col-md-4 lieu">
            <label  className="form-label">
              Lieu ou atelier :
            </label>
            <input
              type="text"
              className="form-control"
              name="place"
              value={formData.place}
              placeholder=" Lieu ou atelier"
              onChange={e => {setFormData({...formData, place : e.target.value}); if (error.place && e.target.value) {
                const { place: _, ...rest } = error;
                setError(rest);
              }} }
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
              placeholder="Ecrire votre message"
              rows="3"
              onChange={e => {setFormData({...formData, message : e.target.value}); if (error.message && e.target.value) {
                const { message: _, ...rest } = error;
                setError(rest);
              }} }
            ></textarea>
            {error.message && <span>{error.message}</span>}
          </div>
          <Suspense fallback={ <div className="spinner">
           <Circles
              height="50"
              width="50"
              
              color="blue"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
              </div>}>
              <ReCAPTCHA
  sitekey={capchakey}
  name={captchaValue}
  onChange={handleCaptchaChange}
  className="capcha"
  onLoad={() => setIsCaptchaVerified(false)}
/>

          </Suspense>
          
          <div className="button-sub">
            <button className="btn btn-primary" type="submit" disabled={!isCaptchaVerified || Object.keys(error).length > 0}>
            {isLoading ? (
            <div className="spinner">
           <Circles
              height="50"
              width="50"
              
              color="blue"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
              </div>
              
              ): "Envoyer" 
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Réclamations;
