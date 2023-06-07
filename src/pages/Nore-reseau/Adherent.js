
 import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import {  GoogleMap, Marker,  useLoadScript } from '@react-google-maps/api';
// import { useRef } from "react";
import { Circles } from "react-loader-spinner";
import { icon } from "leaflet";

const containerStyle = {
  width:'800px',
  height:'600px'
};
const positioncenter = {
  lat: 47.824905,
  lng: 2.618787
};





// const API_KEY =  process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // your google maps API key


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
  const [map, setMap] = React.useState(null);
  const [coordonnees, setCoordonnees] = useState({})

    const { isLoaded, loadError  } = useLoadScript ({
    id: 'google-map-script',
    googleMapsApiKey:"AIzaSyCA_ci3M6bA1zeImm816wm6dtt85OPihXk",
    // libraries: 'places',
  });
  const getIcon = (activite) => {
    if (activite === '1') {
      return '/public/gaz.jpg';
    } else {
      return '/public/logo.jpg';
    }
  };


  useEffect(() => {
    const fetchData = async (search, actif, activite) => {
      try {
        const response = await supervisionService.getAllAdherent(search, actif, activite);
        setAdherents(response);
        console.log("res", response);
        // const geocoder = new window.google.maps.Geocoder(); // Create a new instance of Geocoder
        // const newMarkers = [];
        // for (const data of response) {
        //   const address = data.adresse2_adherent 
        //   if (typeof address === 'string' && address.trim() !== '') {
        //     geocoder.geocode({ address : address }, (results, status) => {
        //       if (status === 'OK') {
        //         newMarkers.push({
        //           position: {
        //             lat: results[0].geometry.location.lat(),
        //             lng: results[0].geometry.location.lng(),
        //           },
        //           label: address,
        //           icon: getIcon(results[0].formatted_address),
        //         });
        //       } else {
        //         console.error('Geocode was not successful for the following reason: ' + status);
        //       }
  
        //       // center the map on the first marker
        //       if (newMarkers.length > 0 && map) {
        //         map.panTo(newMarkers[0].position);
        //       }
        //     });
        //   } else {
        //     console.error('Invalid address:', address);
        //   }
        // }
        // setMarkers(newMarkers); // set the markers once all geocoding has completed
      } catch (error) {
        console.error(error);
      }
    };
  
    if (isLoaded) {
      fetchData(search, actif, "all");
    }
    localStorage.setItem('markers', JSON.stringify(markers));
      setLoadingscreen(false);
      setTimeout(() =>{
        setIsLoading(false)
      }, 2000)
  }, []);

  

//updating the value change for each checkbox and unchecked checkbox in the array
const handleChanges = async (e, activite) => {
  const { value, checked } = e.target;
  var _valueOptions = [];
  var _adherents = [];

  if (checked) {
    _valueOptions = [...valueOptions, e.target.value];
    setValueOptions((prev) => [...prev, e.target.value]);

    console.log("_valueOptions", _valueOptions);
    await supervisionService.getAllAdherent("", true, activite).then((response) => {
      console.log("response", response);
      _adherents = response;
    });
    if (_valueOptions.length === 1) {
      await supervisionService
        .getAllAdherent("", true, activite)
        .then((response) => {
          console.log("response", response);
          setAdherents(response);
        });
    } else if (_valueOptions.length > 1) {
      await supervisionService
        .getAllAdherent("", true, activite)
        .then((response) => {
          let _adherents = [...adherents, ...response];
          _adherents = _adherents.filter(
            (obj, index) =>
              _adherents.findIndex(
                (_adherent) =>
                  _adherent.identification_adherent ===
                  obj.identification_adherent
              ) === index
          );
          console.log("_adherents", _adherents);
          setAdherents(_adherents);
        });
    } else {
      setValueOptions(valueOptions.filter((_value) => _value !== value));
    }
  }
  else {
    _valueOptions = valueOptions.filter((val) => val !== e.target.value)
     console.log("meemem",_valueOptions)
    setValueOptions(_valueOptions);
    if (_valueOptions.length === 0) {
      setValueOptions(_valueOptions);
      await supervisionService.getAllAdherent("", true, activite).then((response) => {
        console.log("response", response);
        setAdherents(response);
      });
    } else {
      let l_adherents = []
      _valueOptions.forEach(async element => {
        await supervisionService
        .getAllAdherent("", true, element)
        .then((response) => {
          l_adherents = [...l_adherents, ...response]
        });
        l_adherents = l_adherents.filter(
          (obj, index) =>
          l_adherents.findIndex(
              (_adherent) =>
                _adherent.identification_adherent ===
                obj.identification_adherent
            ) === index
        );
        console.log("l_adherents", l_adherents);
        setAdherents(l_adherents)
      });
    }
  }
}

console.log("ad", adherents);
console.log("search", search);
const center = useMemo(() =>({
  lat: 47.824905,
  lng: 2.618787
}), []) 

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
        { isLoaded ? (
           <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          loadGoogleMapsApi={true}
          >
             {markers && markers.map((marker, i) => (
               <Marker
               key={i}
               id={marker.numero_adherent}
               position={[
                 marker.position,
               ]}
              
              
              //  eventHandlers={{
              //    click: () => {
              //      setadherentlocation(markers);
              //    },
              //  }}
            
             />
             ))}
          
  <Marker position={center}/>
  
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
           {(!loadingscreen && adherents && adherents.filter((adherent) => {
          const adherentVille  = adherent.ville.toLowerCase().includes(search)
          const adherentDepartment = adherent.departement.toLowerCase().includes(search)
          return adherentVille || adherentDepartment
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


// Map 
 /* <MapContainer
          center={center}
          zoom={6}
          scrollWheelZoom={false}
          className="map"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {adherents &&
            adherents.map((adherent) => (
            <LayerGroup key={adherent.numero_adherent}>
              {adherent.atelier_latitude && adherent.atelier_longitude &&(
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
            valueOptions.includes("1")  ?    iconMap.taximetre : valueOptions.includes("2") ? iconMap.gaz :
            valueOptions.includes("4") ? iconMap.tachygraphie : valueOptions.includes("5")? iconMap.ethylotest : valueOptions.includes("6") ?iconMap.autoecole : iconMap.ethylotest
                }
              />
              )}
                </LayerGroup>
            ))}
          {adherentlocation && adherentlocation.atelier_latitude && adherentlocation.atelier_longitude && (
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
        </MapContainer>*/




