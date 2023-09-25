import React from "react";
import {
  MdHighQuality,
  MdOutlineHouseSiding,
  MdPhoneIphone,
} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { ImMap } from "react-icons/im";
import { FcMindMap } from "react-icons/fc";
import "./Métier.css";


function Métier() {
  return (
    <div className="container">
      <div className="my-container">
        <div className="heading">
          <h1 className="hero-text">
            Nos compétences et notre offre de service
          </h1>
        </div>
        <div className="main-section">
          <div className="row">
            <div className="card-right">
              <div className="col-sm-6 mb-3 mb-sm-0 my-card">
                <div className="metier-carriere">
                  <div className="card-body my-card-body">
                    <div className="text-icon">
                      <p>
                        <MdPhoneIphone size={35} color="white" />
                      </p>
                      <h5 className="métier-title-right">Editeur de logiciel</h5>
                    </div>

                    <ul className="text-ul">
                      <li className="text-li-right">
                        Nous développons pour l'ensemble des activités, le
                        logiciel Comet qui tire profit du Cloud et de sa valeur
                        ajoutée. La gestion du parc d'instruments est intégrée.
                      </li>
                      <li className="text-li-right">
                        Un respect strict des réglementations afin de délivrer
                        un produit conforme. Un véritable outil d'aide à la
                        décision pour le technicien lorsqu'il réalise ses
                        inspections et vérifications.
                      </li>
                      <li className="text-li-right">
                        Il s'appuie également sur une gestion électronique de
                        documents qui facilite la gestion du système qualité !
                        La base de données intègre tous les documents
                        réglementaires, techniques et qualité dont le technicien
                        a besoin pour mener à bien sa mission
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0 my-card">
                <div className=" metier-carriere">
                  <div className="card-body my-card-body ">
                    <div className="text-icon">
                      <p>
                        <MdHighQuality size={35} color="white" />
                      </p>
                      <h5 className="mmétier-title-right">Système Qualité</h5>
                    </div>

                    <ul className="text-ul">
                      <li className="text-li-right">
                        Un système qualité multi-activités qui a fait ses
                        preuves, audité et validé par 4 organismes depuis prés
                        de 17 ans !
                      </li>
                      <li className="text-li-right">
                        Que vous pratiquiez une ou plusieurs activités
                        réglementées dans votre entreprise, un seul système est
                        utilisé.
                      </li>
                      <li className="text-li-right">
                        Les documents dématérialisés sont centralisés dans le
                        logiciel Comet, permettant ainsi une gestion
                        documentaire allégée et libère le temps de vos
                        techniciens qui peuvent se concentrer sur leur métier.
                        Dés qu'un document est modifié par le siège l'ensemble
                        des adhérents est à jour instantanément.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mb-sm-0 my-card">
                <div className=" metier-carriere">
                  <div className="card-body my-card-body">
                    <div className="text-icon">
                      <p>
                        <FcMindMap size={35} color="white" />
                      </p>
                      <h5 className="métier-title-right">La mutualisation</h5>
                    </div>

                    <ul className="text-ul">
                      <li className="text-li-right">
                        Tirez profit des retours d'expérience de nos nombreux
                        adhérents, la consolidation et le partage des
                        connaissances est notre leitmotiv. En intégrant le
                        réseau vous n'êtes plus seul dans votre entité face aux
                        différents acteurs.
                      </li>
                      <li className="text-li-right">
                        D'autre part nous rejoindre, c'est aussi profiter d'une
                        récurrence moins importante des audits externes des
                        institutionnels et donc de rationaliser vos coûts liés.
                      </li>
                      <li className="text-li-right">
                        Enfin, nous concentrons vos besoins de consommables afin
                        de vous proposer les produits dont vous avez besoin à
                        des prix intéressants, sur la boutique en ligne. Le
                        catalogue, c'est vous qui le définissez!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>



          </div>
          <div className="card-left">
            <div className="col-sm-6 mb-3 mb-sm-0 my-card">
              <div className="card my-left-card">
                <div className="card-body my-card-body">
                  <div className="text-icon">
                    <div className="icon-left">
                      <MdOutlineHouseSiding  fill="white"  />
                    </div>
                    <h5 className="métier-title">Conseil, Formation et Audit</h5>
                  </div>

                  <ul className="text-ul">
                    <li className="text-li">
                      Fort de notre expérience, nous pouvons vous conseillez
                      dans vos choix d'investissement structurels.
                    </li>
                    <li className="text-li">
                      Centre de gestion agréé (prise en charge OPCA) nous
                      dispensons des formations multi-marques biennales de vos
                      équipes, maintenons et évaluons leur niveau de
                      compétences. Des solutions d'E-learning sont aussi
                      proposées.
                    </li>
                    <li className="text-li">
                      La surveillance du réseau est effectuée par le biais d'un
                      audit blanc annuel in-situ par notre équipe d'auditeurs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 my-card">
              <div className="card my-left-card">
                <div className="card-body my-card-body">
                  <div className="text-icon">
                    <p>
                      <AiOutlineSetting size={35} fill="white" />
                    </p>
                    <h5 className="métier-title">
                      Hotline Technique et réglementaire
                    </h5>
                  </div>

                  <ul className="text-ul">
                    <li className="text-li">
                      Un interlocuteur unique pour toutes les questions
                      réglementaires, techniques et informatiques que vos
                      collaborateurs se posent pendant leurs interventions.
                    </li>
                    <li className="text-li">
                      La hotline est disponible 6/7 J de 8 h à 18 h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3 mb-sm-0 my-card">
              <div className="card my-left-card">
                <div className="card-body my-card-body">
                  <div className="text-icon">
                    <p>
                      <ImMap size={35} fill="white" />
                    </p>
                    <h5 className="métier-title">Réglementation</h5>
                  </div>

                  <ul className="text-ul">
                    <li className="text-li">
                      Cercle Optima assure la veille réglementaire et se
                      positionne en interface entre vous et les services de
                      contrôle et régulation de l'état.
                    </li>
                    <li className="text-li">
                      Nous défendons ainsi vos intêréts et l'assurance du
                      maintien des agréments et la pérennité de vos activités.
                    </li>
                    <li className="text-li">
                      La réponse aux audits externes est traitée par notre
                      équipe de spécialistes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="section-blank"></div>
  
      
    </div>
  );
}

export default Métier;
