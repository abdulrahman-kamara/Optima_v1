import React, {useEffect, useState} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import Geocode from "react-geocode"
import company from "../../data/buildings.png"
import supervisionService from '../../Context/SupervisionService'
import "./AdherentDetail.css"


// Style de la map
const mapStyles = {
  position: 'relative !important',
  width: '100%',
  height: '160px'
}

function AdherentDetail(props) {


  const [adherent, setAdherent] = useState(null)
  const [coordonnees, setCoordonnees] = useState({})

  const {identification_adherent} = useParams()
console.log("mydata", identification_adherent);


  const getAdherentByIdentification = async (identification) => {
    return await supervisionService.getAdherentByIdentification(identification)
    .then(response => {
        console.log("test", response);
      setAdherent(response)
      return response
    })
    

  }

    /**
     * Récupère tous les intervenants de l'adhérent sélectionné
     * @param {number} adherent 
     * @param {Boolean} qualifie 
     */
//     const getAllIntervenant = async (adherent, qualifie) => {
//       await supervisionService.getAllIntervenant(adherent, qualifie)
//           .then(
//               response => setIntervenants(response)
//           )
//   }

  useEffect(() => {
    // Adherent n'a pas encore été initialisé
    // On récupère l'adhérent et ses intervenants
    if (!adherent) {
        getAdherentByIdentification(identification_adherent)
            .then(response => {
        
                // Utilisation de l'api pour le Geocode
                Geocode.setApiKey(process.env.REACT_APP_SECRET)

                if (response) {
                    // Récupère les coordonnées en latitude et longitude
                    // en lui passant une adresse pour placer un marqueur
                    // sur la map sinon cela ne marchera pas 
                    Geocode.fromAddress(response.nom_adherent + ", " + response.adresse1_adherent + " , " + response.cP_adherent + " " + response.ville_adherent)
                        .then(
                            response2 => {
                                const { lat, lng } = response2.results[0].geometry.location
                                setCoordonnees({
                                    lng: lng,
                                    lat: lat
                                })
                            },
                            error => {

                            }
                        )
                }
            })
            .catch(error => Navigate.push('/404'))
    }
    // Adherent déjà initialisé, on met à jour
    // que les intervenants
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



// // Accéder au profil d'un intervenant
// const goToIntervenant = async (event) => {
//   let intervenant = event.currentTarget.id
//   await supervisionService.getIntervenantQualif(adherent.numero_adherent, parseInt(intervenant))
//       .then(
//           response => {
//               localStorage.setItem('monIntervenant', JSON.stringify(response))
//           }
//       )
//       Navigate.push(id + '/intervenant')
// }

  return (
    <>
    {adherent &&
      <div className="jumbotron">
          <div className="container">
              <div className="mes-adherents c-mt-5">
                  <div className="presentation-adherent c-mt-2">
                  <div className='image-adherent'>
                              <img src={adherent && adherent.logo ? "data:image/jpeg;base64," + adherent.logo : company} alt="Pas de photo1 pour cette supervision" />
                          </div>
                        
                      <div className="coordonnees">
                          <h4>{adherent && adherent.identification_adherent}</h4>
                          <span>{adherent && adherent.nom_adherent}</span>
                          <div className="adresse c-mt-1">
                              <div className="adresse-content">
                                  <p>{adherent && adherent.adresse1_adherent}</p>
                                  <p>{adherent && adherent.adresse2_adherent}</p>
                                  <p>{adherent && adherent.cP_adherent} - {adherent && adherent.ville_adherent}</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="join-adherent">
                      <a className="cbtn join-button" href={"tel:+" + (adherent && adherent.tel_adherent)}>Appeler</a>
                      <a className="cbtn join-button" disabled={adherent && adherent.email === "" ? true : false} href={"mailto:" + (adherent && adherent.email)}>Email</a>
                      <a className="cbtn join-button" rel="noreferrer" target="_blank" href={"https://maps.google.com/?q=" + (adherent && adherent.nom_adherent) + ", " + (adherent && adherent.adresse1_adherent) + ", " + (adherent && adherent.cP_adherent) + " " + (adherent && adherent.ville_adherent)}>
                          Y Aller
                      </a>
                  </div>
                  <div className="details-adherent">
                      {/* Si coordonnées bien récupérée ou existant 
                          avec l'adresse donnée de l'adhérent */}
                      {coordonnees && coordonnees.lng &&
                          <Map
                              className="map c-mt-2 c-mb-2"
                              google={props.google}
                              zoom={14}
                              style={mapStyles}
                              initialCenter={{
                                  lat: coordonnees.lat,
                                  lng: coordonnees.lng
                              }}
                          >
                              <Marker
                                  google={props.google}
                                  name={adherent.adresse1_adherent}
                              />

                          </Map>
                      }
                  </div>
                 
              </div>
          </div>
      </div>
    
  }
   
  </>
  )
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_SECRET
})(AdherentDetail)

  // const [intervenants, setIntervenants] = useState([])
      // const [coordonnees, setCoordonnees] = useState({})
      // const [search, setSearch] = useState("");

  //   const url = supervisionService.getAllAdherent(search, actif)
  //  const {data, isLoading, error} = useSWR(url, fetcher)

  //  const locationadhrent = data && !error ?  data.slice(0, 500) : [];
  //  console.log("test", data);


  // useEffect(() => {
  //   setTimeout(() => {
  //     getAdherentByIdentification()
  //     getAllAdherents(search, actif);
  //     setLoadingscreen(false);
  //   }, 1000);
  // }, [search, actif]);

  // const getAllAdherents = async (search, actif) => {
  //   await supervisionService
  //     .getAllAdherent(search, actif)
  //     .then((response) => setAdherents(response))
      
  // };
    // const [aderentLoc, setAdherentLoc] = useState(null);
  //     const [actif, setActif] = useState(null)
  // const fetcher = (...args) => fetch(...args).then(res => res.json())