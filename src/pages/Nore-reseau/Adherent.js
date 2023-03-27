 import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UseAnimations from "react-useanimations";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
 import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import AdherentMap from "./Map/AdherentMap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

export const taximetre = new Icon({
  iconUrl: "/taxi.jpg",
  iconSize: [40, 40],
});

export const gaz = new Icon({
  iconUrl: "/gaz.jpg",
  iconSize: [25, 25],
});

export const tachygraphie = new Icon({
  iconUrl: "/truck.jpg",
  iconSize: [25, 25],
});

export const ethylotest = new Icon({
  iconUrl: "logo.jpg",
  iconSize: [25, 25],
});

export const autoecole = new Icon({
  iconUrl: "/auto-ecole.jpg",
  iconSize: [25, 25],
});



const Reseau = () => {
  //Tous les adherents
  const [adherents, setAdherents] = useState([]);
  // Element recherché
  const [search, setSearch] = useState("");
  //Etat de chargement d'un adherent
   const [onloading, setOnLoading] = useState(false);
  // Adherent selectionné
   const [selectedAdherent, setSelectedAdherent] = useState(0);
  // Etat d'ouverture d'un filtre
  const [filterOpened, setFilterOpened] = useState(false);
  // Filtre (Actif pour le moment)
  const [actif, setActif] = useState(true);
  // Chargement de la liste des adherents
  const [loadingscreen, setLoadingscreen] = useState(true);
  const [adherentlocation, setadherentlocation] = useState(null);
  const [valueOptions, setValueOptions] = useState([]);



  useEffect(() => {
   
      getAllAdherents(search, actif, "all");
      setLoadingscreen(false);
  
  }, [search, actif, "all"]);

  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => setAdherents(response))
      .then(response => console.log("data", adherents))
  };


  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };


  const handleCheck = () => {
    setActif((prevActive) => !prevActive);
  };



  //the center of the map
  const center = [47.824905, 2.618787];
  const mapRef = useRef();


  const handleChanges = async (e, activite) => {
    const { value, checked } = e.target;

    if (checked) {
      const newOptions = [...valueOptions, value];
      setValueOptions(newOptions);

      const adherentsResponse = await supervisionService.getAllAdherent(
        "",
        true,
        activite
      );
      const allAdherents = adherentsResponse || [];

      let newAdherents = [];

      if (newOptions.length === 1) {
        newAdherents = allAdherents;
      } else if (newOptions.length > 1) {
        const newAdherentsResponse = await supervisionService.getAllAdherent(
          "",
          true,
          activite
        );
        newAdherents = [...adherents, ...(newAdherentsResponse || [])];
        console.log("response", newAdherents);
        newAdherents = newAdherents.filter(
          (obj, index) =>
            newAdherents.findIndex(
              (_adherent) =>
                _adherent.identification_adherent ===
                obj.identification_adherent
            ) === index
        );
      }
     
      setAdherents(newAdherents);
    } else{
      setValueOptions(valueOptions.filter((_value) => _value !== value));
     await supervisionService.getAllAdherent("", true, activite).then((response) => {
        setAdherents(response)
      })
     
    }
  };


  return (
   

    <div className="adherent_main-container"> 
     
     <div className="adherent-container">
{/* <AdherentMap/>  */}
<div className="map-container">
        <div className="maker-icon">
          <div
            style={{
              gap: "5px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div class="form-check map-checkbox">
              <input
                class="form-check-input "
                type="checkbox"
                value="1"
                name="taximetre"
                onChange={(e) => handleChanges(e, "1")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Atelier Taximètre
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="2"
                name="gaz"
                onChange={(e) => handleChanges(e, "2")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Analyseur de gazs et Opacimètre
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="4"
                name="tachygraphie"
                onChange={(e) => handleChanges(e, "4")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Atelier Tachygraphe
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="5"
                name="ethylotest"
                onChange={(e) => handleChanges(e, "5")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Ethylotest
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="6"
                name="autoecole"
                onChange={(e) => handleChanges(e, "6")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" >
                Auto-Ecole
              </label>
            </div>
          </div>
        </div>

        <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "100vh", paddingRight: "100px" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {adherents &&
            adherents.map((adherent) => (
              <Marker
                key={adherent.identification_adherent}
                id={adherent.numero_adherent}
                position={[
                  adherent.atelier_latitude,
                  adherent.atelier_longitude,
                ]}
                eventHandlers={{
                  click: () => {
                    setadherentlocation(adherent);
                  },
                }}
                icon={
                  valueOptions.includes("1")
                    ? taximetre
                    : valueOptions.includes("2")
                    ? gaz
                    : valueOptions.includes("4") ? tachygraphie : valueOptions.includes("5") ? tachygraphie : valueOptions.includes("6") ? autoecole : ethylotest
                }
              />
            ))}

          {adherentlocation && (
            <Popup
              position={[
                adherentlocation.atelier_latitude,
                adherentlocation.atelier_longitude,
              ]}
              onClose={() => {
                setadherentlocation(null);
              }}
            >
              <div>
                <p>Identification <span>{adherentlocation.identification_adherent}</span></p>
                <p>Nom<span>{adherentlocation.nom_adherent}</span> </p>
                <p>Numero<span>{adherentlocation.numero_adherent}</span></p>
                <p>Addresse <span>{adherentlocation.adresse1_adherent}</span></p>
            
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>

  
     
      <div className="mes-aderent c-mt-6"> 
        <h5 className="mes-hero">Mes Adherents</h5>
        <div className="search-section">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              className="search"
              name="search"
              type="search"
              placeholder="Recherche..."
              onChange={(event) => {
                handleChange(event);
              }}
              autoComplete="off"
            />
          </div>
          <div style={{ marginTop: "5px", marginLeft:"5px" }}>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={actif} onChange={handleCheck} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   actif
  </label>
</div>
</div>
          </div>
          <div className="list-adherent">
           {(!loadingscreen &&
        adherents &&
        adherents.map((adherent, i) => (
          <NavLink
            id={adherent.numero_adherent} 
            data={i}
            key={i}
            className="adherent"
            to={
              "/reseau/" + adherent.identification_adherent
            } 
          >
            <span>{adherent.identification_adherent}</span>
            <p style={{marginTop:"10px", }}>{adherent.nom_adherent}</p>
           <MdOutlineKeyboardArrowRight/>
          </NavLink>
        ))) || (
        <>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
          <div className="adherent">
            <Skeleton height={20.8} />
            <Skeleton height={17.6} />
          </div>
        </>
      )}
          </div>
   
      </div>
    </div> 
    </div>


  );
};

export default Reseau;




