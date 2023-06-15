
 import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import {  GoogleMap, InfoWindow, Marker, useLoadScript, } from '@react-google-maps/api';
import { Circles } from "react-loader-spinner";
import taximetreIconUrl from "../../assets/images/taxi.jpg";
import gazIconUrl from "../../assets/images/gaz.jpg";
import truckIconUrl from "../../assets/images/truck.jpg";
import ethylotestIconUrl from "../../assets/images/logo.jpg";
import autoecoleIconUrl from "../../assets/images/auto-ecole.jpg";
import { useRef } from "react";
// import { saveAs } from "file-saver";


const containerStyle = {
  width:'900px',
  height:'650px'
};


const Reseau = () => {
  //Tous les adherents
  const [adherents, setAdherents] = useState(null);
  // Element recherché
  const [search, setSearch] = useState("");
  //Etat de chargement d'un adherent
  const [actif, setActif] = useState(true);
  // Chargement de la liste des adherents
  const [loadingscreen, setLoadingscreen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [valueOptions, setValueOptions] = useState([]);
  const [markers, setMarkers] = useState([])
  const [allAdherents, setAllAdherents] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const mapRef = useRef(null);
  const apiKey = process.env.REACT_APP_API_KEY;
    const { isLoaded, loadError  } = useLoadScript ({
    id: 'google-map-script',
    googleMapsApiKey:apiKey,
    isScriptLoaded: () => window.google && window.google.maps,
    isScriptLoadSucceed: () => !!window.google
   
    
  });
 


// map icon 
const iconSize = new window.google.maps.Size(25, 25);

const iconMap = {
  taximetre: {
    url: taximetreIconUrl,
    scaledSize: iconSize
  },
  gaz: {
    url: gazIconUrl,
    scaledSize: iconSize
  },
  tachygraphie: {
    url: truckIconUrl,
    scaledSize: iconSize
  },
  ethylotest: {
    url: ethylotestIconUrl,
    scaledSize: iconSize
  },
  autoecole: {
    url: autoecoleIconUrl,
    scaledSize: iconSize
  },
};
 
  
  useEffect(() => {
const getMarkers = async (search, actif, activite) => {
    try {
      const response =  await supervisionService
      .getAllAdherent(search, actif, activite)

        setAdherents(response)
        setMarkers(response)
        console.log("markers", markers);
        console.log("mark", adherents);
      
    } catch (error) {
      console.error("error fetching", error);
    }
   
  };
  
    if (!isLoaded) {
      getMarkers();
        }

    setLoadingscreen(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  },[isLoaded, actif, search, adherents, markers])

  
const handleChanges = async (e, activite) => {
  const { value, checked } = e.target;

  if (checked) {
    setValueOptions([...valueOptions, value]);
    const response = await supervisionService.getAllAdherent("", true, activite);
    setAdherents(response);
    setAllAdherents(response);
  } else {
    const updatedValueOptions = valueOptions.filter((val) => val !== value);
    setValueOptions(updatedValueOptions);

    if (updatedValueOptions.length === 0) {
      resetAdherentsList();
    } else {
      const l_adherents = [];

      for (const option of updatedValueOptions) {
        const response = await supervisionService.getAllAdherent("", true, option);
        l_adherents.push(...response);
      }

      const uniqueAdherents = l_adherents.filter((obj, index) =>
        l_adherents.findIndex((_adherent) =>
          _adherent.identification_adherent === obj.identification_adherent
        ) === index
      );
      setAdherents(uniqueAdherents);
    }
  }
};

const center = useMemo(() =>({
  lat: 47.824905,
  lng: 2.618787
}), []) 


// Call this to reset the list of adherents to the original list
const resetAdherentsList = async (search, actif, activite) => {
  const response = await supervisionService.getAllAdherent(search, actif, activite);
  setAdherents(response);
  setAllAdherents(response);
};


console.log("list", allAdherents);
  return (
  <div className="adherent_main-container"> 
  <div className="adherent-container">
  <div className="map-container">
        <div className="maker-icon">
          <div className="sub-checkbox">
            <div className="form-check map-checkbox">
              <input
                className="form-check-input "
                type="checkbox"
                value="1"
                name="taximetre"
                onChange={(e) => handleChanges(e, "1")}
                id="flexCheckDefault"
              />
              
              <label className="form-check-label" >
                Taximètre
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="2"
                name="gaz"
                onChange={(e) => handleChanges(e, "2")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
                Analyseur de gaz/Opacimètre
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="4"
                name="tachygraphie"
                onChange={(e) => handleChanges(e, "4")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
                Tachygraphe
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="5"
                name="ethylotest"
                onChange={(e) => handleChanges(e, "5")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
                Ethylotest
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="6"
                name="autoecole"
                onChange={(e) => handleChanges(e, "6")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
                Auto-Ecole
              </label>
            </div>
          </div>
        </div>
        { isLoaded ?  (
           <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          loadGoogleMapsApi={true}
          ref={mapRef}
          >
             {adherents && adherents.map((marker) => (
          <Marker
            key={marker.identification_adherent}
            position={{ lat: parseFloat(marker.atelier_latitude), lng: parseFloat(marker.atelier_longitude) }}
           
            icon={
              valueOptions.includes("1")  ?    iconMap.taximetre : valueOptions.includes("2") ? iconMap.gaz :
            valueOptions.includes("4") ? iconMap.tachygraphie : valueOptions.includes("5")? iconMap.ethylotest : valueOptions.includes("6") ?iconMap.autoecole : iconMap.ethylotest
                }
                onClick={() => {
    const mapUrl = `https://www.google.com/maps?q=${(marker && marker.nom_adherent) + ", " + (marker && marker.adresse1_adherent) + ", " + (marker && marker.ville)}}`;
    window.open(mapUrl, "_blank");
  }}
    />
        ))}
  
      {selectedMarker && infoWindowOpen && (
                <InfoWindow
                  map={mapRef.current}
                  position={{ lat: selectedMarker.atelier_latitude, lng: selectedMarker.atelier_longitude }}
                  onCloseClick={() => setInfoWindowOpen(false)}
                >
                  <div>
                  <h3>name: {selectedMarker.nom_adherent}</h3>
                    <h3>Address: {selectedMarker.adresse1_adherent}</h3>
                    <p>Info: {selectedMarker.ville
              }</p>
                  </div>
                </InfoWindow>
              )}
          </GoogleMap>
        ): loadError ?(
          <div>Error loading Google Maps API</div>
        ): (
          <div>Loading Google Maps API...</div>
        )}
        </div>
      <div className="mes-aderent c-mt-6"> 
        <h5 className="mes-hero">Mes Adherents</h5>
        <div className="search-section">
          <div className="search-bar">
            {/* <i className="fas fa-search"></i> */}
            <input
              className="search"
              type="text"
              value={search}
              placeholder="Recherche..."
              onChange={(e) => 
                setSearch(e.target.value)
              }
              autoComplete="off"
            />
          </div>
          </div>
          {isLoading ? ( <div className="adh-spinner">
   <Circles
      height="50"
      width="50"
      color="#4869ee"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
      </div>):(
            <div className="list-background">
             <div className="list-adherent">
           {(!loadingscreen && adherents?.filter((adherent) => {
  const adherentVille = adherent.ville?.toLowerCase().includes(search);
  const adherentDepartment = adherent.departement?.toLowerCase().includes(search);
  return adherentVille || adherentDepartment;
}).map((adherent, i) => (
          <NavLink
            id={adherent.numero_adherent} 
            data={i}
            key={i}
            className="adherent"
            to={
              "/reseau/" + adherent.identification_adherent
            } 
          >
           <div className="adherent-card">
             <p className="adherent-nom">{adherent.nom_adherent}</p>
            <div className="vill-depart">
               <p className="adherent-ville">{adherent.ville}</p>
               <p className="adherent-depart">{adherent.departement}</p>
               <MdOutlineKeyboardArrowRight  size={30} className="icon-card"/>
            </div>
           </div>
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
          )}
      </div>
    </div> 
    </div>
  );
}

 export default Reseau;







