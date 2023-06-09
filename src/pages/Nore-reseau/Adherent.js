
 import React, { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import {  GoogleMap, Marker,  useLoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode"
import { Circles } from "react-loader-spinner";
// import { saveAs } from "file-saver";


const containerStyle = {
  width:'800px',
  height:'600px'
};
// const positioncenter = {
//   lat: 47.824905,
//   lng: 2.618787
// };


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
  const [markers, setMarkers] = useState({})
  const [coordonnees, setCoordonnees] = useState({})

    const { isLoaded, loadError  } = useLoadScript ({
    id: 'google-map-script',
    googleMapsApiKey:"AIzaSyCA_ci3M6bA1zeImm816wm6dtt85OPihXk",
    // libraries: 'places',
  });
  // const getIcon = (activite) => {
  //   if (activite === '1') {
  //     return '/public/gaz.jpg';
  //   } else {
  //     return '/public/logo.jpg';
  //   }
  // };

  // const getAllAdherent = async (search, actif, activite) => {
  //   await supervisionService
  //     .getAllAdherent(search, actif, activite)
  //     .then((response) => setAdherents(response));
  // };

  useEffect(() => {
    const fetchData = async (search, actif, activite) => {
      try {
        if (!adherents) {
          const response = await supervisionService.getAllAdherent(search, actif, activite);
          setAdherents(response);
          console.log(response);
          Geocode.setApiKey("AIzaSyCA_ci3M6bA1zeImm816wm6dtt85OPihXk");
  
          const coordinatesArray = []; // New array to store coordinates
  
          // Assuming response is an array, loop through each element
          for (const item of response) {
            const address = item.adresse1_adherent + ", " + item.departement + " " + item.ville
            const numero_adherent = item.numero_adherent
            const nom_adherent = item.nom_adherent
  
            try {
              const geocodeResponse = await Geocode.fromAddress(address);
              const { lat, lng  } = geocodeResponse.results[0].geometry.location;
  
              const coordonnees = {
                lng: lng,
                lat: lat,
                label: address, // Include label for the marker
                numéro: numero_adherent,
                nom_adherent: nom_adherent
                // icon: getIcon(address), // Call a function to determine the appropriate icon for the address
              };
  
  
              coordinatesArray.push(coordonnees); // Store coordinates in the array
            } catch (error) {
              console.error('An error occurred during geocoding:', error);
            }
          }
        
          console.log("test", response);
          console.log("testrr", coordinatesArray); // Log the coordinates array
          setMarkers(coordinatesArray); // Set the markers state with the coordinates array


        }
      } catch (error) {
        console.error(error);
      }
      
     
    };
   setLoadingscreen(false);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    if (isLoaded) {
      fetchData(search, actif, "all");
    }
  }, [actif, adherents, coordonnees, isLoaded, search])
  
  
  

  

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
        { isLoaded ?  (
           <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          loadGoogleMapsApi={true}
          >
             { coordonnees && coordonnees.lng && (
               <Marker
              position={coordonnees}
             />
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




