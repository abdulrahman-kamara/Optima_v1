import React, {useState, useRef} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import email_id from  "../Constant/email/contact-email/email_id" 
import email_template from  "../Constant/email/contact-email/email_template" 
import email_key from  "../Constant/email/contact-email/email_key" 
import  { Circles } from 'react-loader-spinner';
import ReCAPTCHA from "react-google-recaptcha";
import capchakey from "../Constant/capcha_key/capcha"

// the values of the contact information
const initialValue = {prénom: "", nom: "", email: "", tel: "", society:"", occupation: "", message: ""}


const Contact = () => {
  // i used useRef hook to be able to return an object that can i can use during the lifecyle of this component and also to access a DOM child directly
const form = useRef();  
// this stae handle the initailvalues of the form ans set it so it can be access locally
const [formData, setFormData] = useState(initialValue)
//to display my error messages
const [error, setError] = useState({})
// showing the loading state of the submit request
const [isLoading, setIsLoading] = useState(false)
//google capcha verification 
const [captchaValue, setCaptchaValue] = useState("");
const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
const recaptchaRef = React.createRef()


// the submit function that handle the validation and the submit request of the form. and also using react emailjs liberey
const sendEmail = (e) => {
  e.preventDefault();
  let newErrors = {}
  if (!formData.prénom)newErrors =  {...newErrors, prénom: "votre prénom est requirer"};
  if(!formData.nom)newErrors = {...newErrors, nom: "votre nom est requirer"};
  if(!formData.email)newErrors = {...newErrors, email: "votre email est requirer"}
  else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors = {...newErrors, email: "le format est invaliable"}
  if(!formData.tel)newErrors = {...newErrors, tel: "votre téléphone est requirer"}
  else if  (!/^\d{10}$/.test(formData.tel)) newErrors = {...newErrors, tel: "le format est invaliable"}
  if(!formData.society)newErrors = {...newErrors, society: "votre société est requirer"};
  if(!formData.occupation)newErrors = {...newErrors, occupation: "votre occupation est requirer"};
  if(!formData.message)newErrors = {...newErrors, message: "votre message est requirer"};
  setError(newErrors)
  if(Object.keys(newErrors).length === 0){
    setIsLoading(true)
    if(isCaptchaVerified){
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
    <div className="form-container">
      <div className="my-form">
        <div>
          <h2 className="form-header">Nous contacter</h2>
        </div>
        <ToastContainer 
        position="top-center"
        theme="colored"
        autoClose={5000}
        />
        <form
          className="row g-3 needs-validation"
          id="contact-form"
          
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="civilité">
            <div className="prenom">
              <label  className="form-label">
                Prénom:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.prénom}
                name="prénom"
                placeholder=" votre prénom"
                onChange={e => {setFormData({...formData, prénom : e.target.value}); if (error.prénom && e.target.value) {
                  const { prénom: _, ...rest } = error;
                  setError(rest);
                  
                }} }
              />
              {error.prénom && <div style={{color:"red"}}>{error.prénom}</div> }
                
            </div>
            <div className="col-md-4 nom">
            <label  className="form-label">
                Nom:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.nom}
                name="nom"
                placeholder="votre nom"
                onChange={e => {setFormData({...formData, nom : e.target.value}); if (error.nom && e.target.value) {
                  const { nom: _, ...rest } = error;
                  setError(rest);
                }} }              />
              {error.nom && <div style={{color:"red"}}>{error.nom}</div>}
                
            </div>
            <div className="email">
            <label  className="form-label">
                Email:
            </label>
              <input
                type="text"
                className="form-control"
                value={formData.email}
                name="email"
                placeholder="votre adresse email"
                onChange={e => {setFormData({...formData, email : e.target.value}); if (error.email && e.target.value) {
              const { email: _, ...rest } = error;
              setError(rest);
            }} }
              />
              {error.email && <div style={{color:"red"}}>{error.email}</div>}
               
            </div>
          </div>

          <div className="personal-info">
            <div className="telephone">
            <label  className="form-label">
                Téléphone:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.tel}
                placeholder="téléphone"
                pattern="^\d{10}$"
                name="tel"
                onChange={e => {setFormData({...formData, tel: e.target.value});
              if (error.tel && e.target.value) {
                const { tel: _, ...rest } = error;
                setError(rest);
              }}}
              />
              {error.tel && <div style={{color:"red"}}>{error.tel}</div>}
                
            </div>
            <div className="col-md-4 société">
            <label  className="form-label">
                Société:
                </label>
              <input
                type="text"
                className="form-control"
                value={formData.society}
                name="society"
                placeholder="votre société"
                onChange={e => {setFormData({...formData, society : e.target.value}); if (error.society && e.target.value) {
                  const { society: _, ...rest } = error;
                  setError(rest);
                }} }              />
              {error.society && <div style={{color:"red"}}>{error.society}</div>}
           
            </div>
            <div className="col-md-4 occupation">
            <label  className="form-label">
                Occupation:
             </label>
              <input
                type="text"
                className="form-control"
                value={formData.occupation}
                name="occupation"
                placeholder="votre occupation"
                onChange={e => {setFormData({...formData, occupation : e.target.value}); if (error.occupation && e.target.value) {
                  const { occupation: _, ...rest } = error;
                  setError(rest);
                }} }              />
              {error.occupation && <div style={{color:"red"}}>{error.occupation}</div>}
              
            </div>
          </div>

          <div className="col-md-4 message">
            <label  className="form-label">
              Message:
             </label>
            <textarea
              className="form-control"
              value={formData.message}
              rows="3"
              name="message"
              placeholder="Ecrire votre message"
              onChange={e => {setFormData({...formData, message : e.target.value}); if (error.message && e.target.value) {
                const { message: _, ...rest } = error;
                setError(rest);
              }}}></textarea>
           
            {error.message && <div style={{color:"red" }}>{error.message}</div >}
          </div>
          <ReCAPTCHA
          ref={recaptchaRef}
        sitekey={capchakey}
        name={captchaValue}
        onChange={handleCaptchaChange}
        className="capcha"
        onLoad={() => setIsCaptchaVerified(false)}
          />
          <div className="button-sub">
            <button className="btn btn-primary" type="submit" disabled={!isCaptchaVerified}>
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
};

export default Contact;
