// import { Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { RiTaxiLine } from "react-icons/ri";
import "./pages.css";
// import ScrollReveal from "scrollreveal";
function Activities() {
  //   ScrollReveal().reveal(".card");
  return (
    <section className="activite-contaier">
      <span className="spanheading">
        <h2 className="heading">Nos différentes Activités !</h2>
      </span>
      <div className="main-container">
        <div
          class="card"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            padding: "10px",
            marginTop: "15px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_ee6e878e37544461bc7e1b85bb6b1288~mv2.jpg/v1/fill/w_138,h_78,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/558047_ee6e878e37544461bc7e1b85bb6b1288~mv2.jpg"
                  alt=""
                  style={{
                    width: "60px",
                    height: "40px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold">Système Qualité</h6>
            </div>

            <ul class="card-text align-baseline fw-light ">
              <li className="justify-content-start text-break">
                Notre système qualité est un tronc commun qui nous permet de le
                décliner pour les différentes activités réglementées.
              </li>
              <li>
                Evolutivité, pluridisciplinarité, polyvalence et service client
                sont les valeurs essentielles de notre entreprise
              </li>
              <li>
                Le système s'enrichie et évolue en fonction des retours des
                techniciens des ateliers du réseau pour coller au plus prés du
                quotidien de vos collaborateurs.
              </li>

              <li>
                Notre mission : démocratiser les réglementations et différentes
                normes au service de votre productivité.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="card card1"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            marginLeft: "543px",
            backgroundColor: "#e65d5e",
            padding: "20px",
            marginTop: "8%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <RiTaxiLine size={50} />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold text-light">
                Taximètre
              </h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break text-light">
                La première pierre fondatrice de Cercle Optima, le système
                qualité a été créé pour et avec les installateurs et
                vérificateurs de Taximètre.
              </li>
              <li className="justify-content-start text-break text-light">
                Nous vous aidons à délivrer un produit conforme dans le respect
                de la réglementation.
              </li>
              <li className="justify-content-start text-break text-light">
                Aujourd'hui, plus de la moitié des taxis évoluant sur le
                territoire sont entretenus dans un de nos centres.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="card"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            backgroundColor: "white",
            padding: "20px",
            marginTop: "45%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_a14c948db0364833b849e7a6a98c2045~mv2.png/v1/fill/w_136,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/558047_a14c948db0364833b849e7a6a98c2045~mv2.png"
                  alt=""
                  style={{
                    width: "60px",
                    height: "25px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold">
                Tachygraphe Numérique
              </h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break">
                L'activité la plus exigeante et en pleine mutation avec de
                nouvelles générations d'instrument et donc des modifications
                réglementaires rapides et nombreuses.
              </li>
              <li>
                Nous vous aidons et vous accompagnons dans toutes les grandes
                échéances de cette activité. De l'installation de votre
                infrastructure, à la réussite des audits importants qui
                ponctuent la vie de l'activité.
              </li>
              <li>
                Profitez de l'enrichissement de la base de connaissances
                techniques grâce au retour terrain de nos adhérents.
              </li>
              <li>La libération d'un véhicule conforme est un impératif !</li>
            </ul>
          </div>
        </div>
        <div
          class="card"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            backgroundColor: "white",
            padding: "20px",
            marginTop: "100%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_f307aec7d0944e01a6f99f63e0e19e0f~mv2.png/v1/fill/w_172,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/558047_f307aec7d0944e01a6f99f63e0e19e0f~mv2.png"
                  alt=""
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold">
                Ethylotests Anti-Démarrage
              </h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break">
                Devenez acteur de la sécurité routière, obligatoire depuis
                Septembre 2015 sur les véhicules de transport en commun, puis
                imposé sur décision judiciaire ou préfectorale sur les véhicules
                légers, le marché de la vérification et de l'installation se
                porte bien.
              </li>
              <li>
                Une activité en développement lié au fait que l'installation
                d'un EAD peut conditionner le droit de rouler aux personnes
                suspendues de permis.
              </li>
              <li>
                Cette activité, du moins pour les véhicules de transport, est
                intimement liée à l'inspection des chronotachygraphes et permet
                de compléter l'offre de service aux clients.
              </li>
              <li>
                A l'avenir, nous comptons sur une généralisation dans les
                métiers du transport, à suivre...
              </li>
            </ul>
          </div>
        </div>
        <div
          class="card"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            backgroundColor: "white",
            padding: "20px",
            marginTop: "155%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_65444bda9cb84421800700b931226610~mv2.jpg/v1/fill/w_88,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/558047_65444bda9cb84421800700b931226610~mv2.jpg"
                  alt=""
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold">Ponts élévateurs</h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break">
                La petite dernière de nos activités, qui vient se mutualisé à
                l'activité Analyseur de Gaz et Opacimètre.
              </li>
              <li>
                Une seule application pour faire tous vos rapports
                d'intervention.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="card card1"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            marginLeft: "543px",
            backgroundColor: "#e65d5e",
            padding: "20px",
            marginTop: "52%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_6e2ba97064c34db4ba749def9a017d32~mv2.png/v1/fill/w_136,h_52,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/558047_6e2ba97064c34db4ba749def9a017d32~mv2.png"
                  alt=""
                  style={{
                    width: "67px",
                    height: "26px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold text-light">
                Analyseurs de gaz et Opacimètre
              </h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break text-light">
                L'activité la plus en lien avec l'actualité et les enjeux
                environnementaux actuels, puisqu'elle est directement lié aux
                émissions de gaz
              </li>
              <li className="justify-content-start text-break text-light">
                Améliorez votre efficacité de vos interventions, notre logiciel
                intégré Comet comporte la base de données de tous les
                certificats et les épreuves de substitution des instruments du
                marché.
              </li>
              <li className="justify-content-start text-break text-light">
                Notre champ d'action s'applique aux vérifications mais aussi à
                la réparation. Et nous disposons aussi d'un système qualité à
                l'usage des fabricants et/ou importateurs.
              </li>
              <li className="justify-content-start text-break text-light">
                Le logiciel Comet permet de vous simplifier la gestion de votre
                parc d'intruments. Un système d'alerte vous facilite la gestion
                du planning d'étalonnage.
              </li>
            </ul>
          </div>
        </div>
        <div
          class="card card1"
          style={{
            Height: 100,
            width: 550,
            position: "absolute",
            marginLeft: "543px",
            backgroundColor: "#e65d5e",
            padding: "20px",
            marginTop: "107%",
          }}
        >
          <div class="card-body placeholder-glow">
            <div className="card-icon">
              <h5 class="card-title-icon">
                <img
                  src="https://static.wixstatic.com/media/558047_a2386c34c7174eb18cc9413d6efbbeb9~mv2.png/v1/fill/w_88,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/558047_a2386c34c7174eb18cc9413d6efbbeb9~mv2.png"
                  alt="img"
                  style={{
                    width: "44px",
                    height: "44px",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                />
              </h5>
              <h6 className="card-subtitle fs-3 fw-bold text-light">
                Auto-Ecole
              </h6>
            </div>

            <ul class="card-text align-baseline fw-light">
              <li className="justify-content-start text-break text-light">
                Depuis le 1er Janvier 2019 date d'application de l'arrêté du 27
                juin 2017 concernant l'obligation d'être qualifié par l'UTAC
                pour l'adaptation des véhicules légers à l'activité d'auto
                école.
              </li>
              <li className="justify-content-start text-break text-light">
                Nous vous aidons dans l'obtention de la qualification.
              </li>
              <li className="justify-content-start text-break text-light">
                Grâce à Comet, nous facilitons votre gestion administrative des
                rapports d'intervention, le logiciel vous génère automatiquement
                les documents exigés pour la modification de type des véhicules.
              </li>
              <li className="justify-content-start text-break text-light">
                Vos attestations d'adaptation réversibles deviennent exhaustives
                et donc conformes à la réglementation en vigueur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
