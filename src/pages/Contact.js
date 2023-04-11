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
const initialValue = {prenom: "", nom: "", email: "", tel: "", society:"", occupation: "", message: ""}



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

const handleCaptchaChange = (value) => {
  console.log("im not a robot");
  setCaptchaValue(value);
  setIsCaptchaVerified(true);
};
//seeting the submit button unclickable if the values are not yet given and make it clickable when all the fields are filled
// const isDisabled = !(formData.prenom && formData.nom && formData.email && formData.tel && formData.society && formData.occupation && formData.message);

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
                Prenom:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.prenom}
                name="prenom"
                placeholder="prenom"
                onChange={e => setFormData({...formData, prenom : e.target.value})}
              />
              {/* {error.prenom && <div>{error.prenom}</div>} */}
                
            </div>
            <div className="col-md-4 nom">
            <label  className="form-label">
                nom:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.nom}
                name="nom"
                placeholder="nom"
             onChange={e => setFormData({...formData, nom : e.target.value})}
              />
              {/* {error.nom && <div>{error.nom}</div>} */}
                
            </div>
            <div className="email">
            <label  className="form-label">
                email:
            </label>
              <input
                type="text"
                className="form-control"
                value={formData.email}
                name="email"
                placeholder="email"
                onChange={e => {setFormData({...formData, email : e.target.value}); if (error.email && e.target.value) {
              const { email: _, ...rest } = error;
              setError(rest);
            }} }
              />
              {error.email && <div>{error.email}</div>}
               
            </div>
          </div>

          <div className="personal-info">
            <div className="telephone">
            <label  className="form-label">
                Tel:
           </label>
              <input
                type="text"
                className="form-control"
                value={formData.tel}
                placeholder="tel"
                pattern="^\d{10}$"
                name="tel"
                onChange={e => {setFormData({...formData, tel: e.target.value});
              if (error.tel && e.target.value) {
                const { tel: _, ...rest } = error;
                setError(rest);
              }}}
              />
              {error.tel && <div>{error.tel}</div>}
                
            </div>
            <div className="col-md-4 société">
            <label  className="form-label">
                society:
                </label>
              <input
                type="text"
                className="form-control"
                value={formData.society}
                name="society"
                placeholder="society"
                onChange={e => setFormData({...formData, society : e.target.value})}
              />
              {/* {error.society && <div>{error.society}</div>} */}
           
            </div>
            <div className="col-md-4 occupation">
            <label  className="form-label">
                occupation:
             </label>
              <input
                type="text"
                className="form-control"
                value={formData.occupation}
                name="occupation"
                placeholder="occupation"
                onChange={e => setFormData({...formData, occupation : e.target.value})}
              />
              {/* {error.occupation && <div>{error.occupation}</div>} */}
              
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
              placeholder="Ecrir votre message"
              onChange={e => setFormData({...formData, message : e.target.value})}
            ></textarea>
           
            {/* {error.message && <span>{error.message}</span>} */}
          </div>
          <ReCAPTCHA
          ref={recaptchaRef}
        sitekey={capchakey}
        onChange={handleCaptchaChange}
        className="capcha"
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
