import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsBank, BsTelephoneForward } from "react-icons/bs";
import { GiChart } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { motion, useScroll, useSpring } from "framer-motion"
import "./Accueil.css"
import "../components/Card/Card.css"
import CardImage from "../components/Card/CardImage";
import Footer from "../components/Nav/Footer/fotter";


function Accueil({images}) {
  const { scrollYProgress,   } = useScroll();
  const scaleX = useSpring(scrollYProgress)

  return (

    <div>
        <div className="home-container">
          <section>
          <motion.div className="hero-section" >
          <h2 style={{  marginTop:"50px" }}>Offre Accompagnement Qualité :</h2>
          <h2 style={{ textDecoration: "underline", }}>
            Profiter de l'expérience de notre pôle auditeur !
          </h2>
            <motion.div className="list-accueil">
            <ol>
            <li>Audit interne ou Audit blanc</li>
            <li>Formation, mise en place de système Qualité.</li>
            <li>
              Préparation audit de certification ou accréditation. ISO 9001 /
              ISO 17020 / ISO 14001
            </li>
            <li>
              Document Unique d'Evaluation des Risques / Certification MASE
            </li>
            <li>Conseil et Expertise en métrologie légale.</li>
          </ol>
            </motion.div>
          
        </motion.div>
        </section>
        <div className="section-metier">
          <div className="section-text">
            <h4>
            
Le réseau au croisement de la métrologie légale et du système qualité.
          </h4>
          <p className="para-section">
 Nous sommes expert dans les métiers de la vérification, l'installation des instruments de mesure. Notre panel de services regroupés en une offre unique s'articulent autour d'un système qualité, d'un logiciel d'aide à la décision et d'un accompagnement terrain. (Formation, Hotline technique et réglementaire, audits internes et évaluation des compétences de vos équipes). Le but de cette démarche ? respect des normes et des réglementations, délivrance de produits conformes, amélioration continue et optimisation des te
          </p> 
          </div>
          <motion.div className="section-image">
            <img src="\images\section_image.jpg" alt="section" loading="lazy"/>
          </motion.div>
          <div className="section-number">
            <div className="section-année">
              <h3 style={{color:"white", fontSize:"30px"}}>
              2003
              </h3>
              <p style={{color:"white", fontSize:"20px"}}>notre année de création</p>
            </div>
            <div className="section-percentage">
              <h3 style={{color:"white", fontSize:"30px"}}>
              100%
              </h3>
              <p style={{color:"white", fontSize:"20px",}}>indépendant</p>
            </div>
          </div>
        </div>
        <div className="plus-line" >
        <div className="plus">
        </div>
        <div className="arrowlink">
            <Link to="/notre-métier" style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px", color:"white", textDecoration:"none"}}>Savoir Plus <BsArrowRight style={{paddingLeft:"5px", fontSize:"25px", }}/>
            </Link>

          </div>
        </div>
        <div className="section-card">
          <div className="para-link">
            <h4 style={{color:"black", }}>Nos Activite :</h4>
          </div>
          <div className="d-cards">
            <CardImage/>
          </div>
        
        </div>
        <div className="section-activite">
        <div className="section-image">
            <img src="\images\technicien tachy.jpg" alt="section" loading="lazy"/>
          </div>
          
          <div className="activite-heading">
             <h4>
            Notre expertise
              </h4>
        
          <motion.div className="section-items">
            <div>
              <GiChart style={{paddingLeft:"5px", }} size={40} color="#fffff"/>
              <p className="paragraph">Système de management de la qualité</p>
            </div>
            <div>
              <BsTelephoneForward style={{paddingLeft:"5px",  }} size={40} color="#fffff"/>
              <p className="paragraph">Support technique, aide à la décision</p>
            </div>
            <div>
              <AiOutlineFundProjectionScreen style={{paddingLeft:"5px",  }} size={40} color="#fffff"/>
              <p className="paragraph">Informatique, développement de logiciels</p>
            </div>
            <div>
              <BsBank style={{paddingLeft:"5px", fontSize:"40px", }}/>
              <p className="paragraph">Normes et règlementation</p>
            </div>
          </motion.div>
          </div>
            </div>
            <div className="plus-line">
        <div className="plus">
        </div>
        <div className="arrowlink">
            <Link to="/activities" style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px", color:"white", textDecoration:"none"}}>Savoir Plus <BsArrowRight style={{paddingLeft:"5px", fontSize:"25px", }}/>
            </Link>

          </div>
        </div>
    
      <div  className="blank-section"></div>
      <Footer/>
    </div>
    </div>
  );
}

export default Accueil;
