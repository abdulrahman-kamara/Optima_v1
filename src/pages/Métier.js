import React from "react";
import { Container } from "react-bootstrap";
import {
  MdHighQuality,
  MdOutlineHouseSiding,
  MdPhoneIphone,
} from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import { ImMap } from "react-icons/im";
import "./Métier.css";

function Métier() {
  return (
    <Container fluid>
      <div className="my-container">
        <div className="heading">
          <h2 className="hero-text">
            Nos compétences et notre offre de service
          </h2>
        </div>
        <div className="main-section">
          <div class="card-right">
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card carriere">
                <div class="card-body my-card-body">
                  <div class="text-icon">
                    <p>
                      <MdPhoneIphone size={50} color="white" />
                    </p>
                    <h5 class="card-title">Editeur de logiciel</h5>
                  </div>

                  <ul class="text-ul">
                    <li>
                      Nous développons pour l'ensemble des activités, le
                      logiciel Comet qui tire profit du Cloud et de sa valeur
                      ajoutée. La gestion du parc d'instruments est intégrée.
                    </li>
                    <li>
                      Un respect strict des réglementations afin de délivrer un
                      produit conforme. Un véritable outil d'aide à la décision
                      pour le technicien lorsqu'il réalise ses inspections et
                      vérifications.
                    </li>
                    <li>
                      Il s'appuie également sur une gestion électronique de
                      documents qui facilite la gestion du système qualité ! La
                      base de données intègre tous les documents réglementaires,
                      techniques et qualité dont le technicien a besoin pour
                      mener à bien sa mission
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card carriere">
                <div class="card-body my-card-body ">
                  <div class="text-icon">
                    <p>
                      <MdHighQuality size={50} color="white" />
                    </p>
                    <h5 class="card-title">Système Qualité</h5>
                  </div>

                  <ul class="text-ul">
                    <li>
                      Un système qualité multi-activités qui a fait ses preuves,
                      audité et validé par 4 organismes depuis prés de 17 ans !
                    </li>
                    <li>
                      Que vous pratiquiez une ou plusieurs activités
                      réglementées dans votre entreprise, un seul système est
                      utilisé.
                    </li>
                    <li>
                      Les documents dématérialisés sont centralisés dans le
                      logiciel Comet, permettant ainsi une gestion documentaire
                      allégée et libère le temps de vos techniciens qui peuvent
                      se concentrer sur leur métier. Dés qu'un document est
                      modifié par le siège l'ensemble des adhérents est à jour
                      instantanément.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card carriere">
                <div class="card-body my-card-body">
                  <div class="text-icon">
                    <p>
                      <MdPhoneIphone size={50} color="white" />
                    </p>
                    <h5 class="card-title">La mutualisation</h5>
                  </div>

                  <ul class="text-ul">
                    <li>
                      Tirez profit des retours d'expérience de nos nombreux
                      adhérents, la consolidation et le partage des
                      connaissances est notre leitmotiv. En intégrant le réseau
                      vous n'êtes plus seul dans votre entité face aux
                      différents acteurs.
                    </li>
                    <li>
                      D'autre part nous rejoindre, c'est aussi profiter d'une
                      récurrence moins importante des audits externes des
                      institutionnels et donc de rationaliser vos coûts liés.
                    </li>
                    <li>
                      Enfin, nous concentrons vos besoins de consommables afin
                      de vous proposer les produits dont vous avez besoin à des
                      prix intéressants, sur la boutique en ligne. Le catalogue,
                      c'est vous qui le définissez!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card-left">
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card left-cards">
                <div class="card-body my-card-body">
                  <div class="text-icon">
                    <p>
                      <MdOutlineHouseSiding size={50} color="white" />
                    </p>
                    <h5 class="card-title">Conseil, Formation et Audit</h5>
                  </div>

                  <ul class="text-ul">
                    <li class="text-li">
                      Fort de notre expérience, nous pouvons vous conseillez
                      dans vos choix d'investissement structurels.
                    </li>
                    <li class="text-li">
                      Centre de gestion agréé (prise en charge OPCA) nous
                      dispensons des formations multi-marques biennales de vos
                      équipes, maintenons et évaluons leur niveau de
                      compétences. Des solutions d'E-learning sont aussi
                      proposées.
                    </li>
                    <li class="text-li">
                      La surveillance du réseau est effectuée par le biais d'un
                      audit blanc annuel in-situ par notre équipe d'auditeurs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card left-cards">
                <div class="card-body my-card-body">
                  <div class="text-icon">
                    <p>
                      <AiOutlineSetting size={50} color="white" />
                    </p>
                    <h5 class="card-title">
                      Hotline Technique et réglementaire
                    </h5>
                  </div>

                  <ul class="text-ul">
                    <li class="text-li">
                      Un interlocuteur unique pour toutes les questions
                      réglementaires, techniques et informatiques que vos
                      collaborateurs se posent pendant leurs interventions.
                    </li>
                    <li class="text-li">
                      La hotline est disponible 6/7 J de 8 h à 18 h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0 my-card">
              <div class="card left-cards">
                <div class="card-body my-card-body">
                  <div class="text-icon">
                    <p>
                      <ImMap size={50} color="white" />
                    </p>
                    <h5 class="card-title">Réglementation</h5>
                  </div>

                  <ul class="text-ul">
                    <li class="text-li">
                      Cercle Optima assure la veille réglementaire et se
                      positionne en interface entre vous et les services de
                      contrôle et régulation de l'état.
                    </li>
                    <li class="text-li">
                      Nous défendons ainsi vos intêréts et l'assurance du
                      maintien des agréments et la pérennité de vos activités.
                    </li>
                    <li class="text-li">
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
      <div fluid class="section-blank"></div>
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
    </Container>
  );
}

export default Métier;
