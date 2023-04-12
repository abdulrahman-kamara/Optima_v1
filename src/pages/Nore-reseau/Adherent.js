 import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import { LayerGroup, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";

 




const Reseau = () => {
  //Tous les adherents
  const [adherents, setAdherents] = useState([]);
  // Element recherché
  const [search, setSearch] = useState("");
  //Etat de chargement d'un adherent
  const [actif, setActif] = useState(true);
  // Chargement de la liste des adherents
  const [loadingscreen, setLoadingscreen] = useState(true);
  const [adherentlocation, setadherentlocation] = useState(null);
  const [valueOptions, setValueOptions] = useState([]);
  const [markers, setMarkers] = useState([])



  useEffect(() => {
   
      getAllAdherents(search, actif, );
      setLoadingscreen(false);
  
  }, [search, actif]);

  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => setAdherents(response)).then((response) => setMarkers(response))
      .then(response => console.log("data", adherents))
  };


  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };



  //the center of the map
  const center = [47.824905, 2.618787];
  const mapRef = useRef();




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
     console.log(_valueOptions)
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



const iconMap = {
  taximetre: L.icon({
    iconUrl: "/taxi.jpg",
    iconSize: [40, 40],
    iconAnchor:[22, 36]
  }),
  gaz: L.icon({
    iconUrl: "/gaz.jpg",
    iconSize: [25, 25],
    iconAnchor:[22, 36]
  }),
  tachygraphie: L.icon({
    iconUrl: "/truck.jpg",
    iconSize: [25, 25],
    iconAnchor:[22, 36]
  }),
  ethylotest: L.icon({
    iconUrl: "logo.jpg",
    iconSize: [25, 25],
    iconAnchor:[22, 36]
  }),
  autoecole: L.icon({
    iconUrl: "/auto-ecole.jpg",
    iconSize: [25, 25],
    iconAnchor:[22, 36]
  })
}







  return (
   

    <div className="adherent_main-container"> 
     
     <div className="adherent-container">

<div className="map-container">
        <div className="maker-icon">
          <div
            style={{
              gap: "5px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="form-check map-checkbox">
              <input
                class="form-check-input "
                type="checkbox"
                value="1"
                name="taximetre"
                onChange={(e) => handleChanges(e, "1")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
                Atelier Taximètre
              </label>
            </div>
            <div className="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="2"
                name="gaz"
                onChange={(e) => handleChanges(e, "2")}
                id="flexCheckDefault"
              />
              <label className="form-check-label" >
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
              <label className="form-check-label" >
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
              <label className="form-check-label" >
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
              <label className="form-check-label" >
                Auto-Ecole
              </label>
            </div>
          </div>
        </div>

        <MapContainer
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
                </LayerGroup>
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
}





 export default Reseau;


   // const handleChanges = async (e, activite) => {
  //   const { value, checked } = e.target;

  //   if (checked) {
  //     const newOptions = [...valueOptions, value];
  //     setValueOptions(newOptions);

  //     const adherentsResponse = await supervisionService.getAllAdherent(
  //       "",
  //       true,
  //       activite
  //     );
  //     const allAdherents = adherentsResponse || [];

  //     let newAdherents = [];

  //     if (newOptions.length === 1) {
  //       newAdherents = allAdherents;
  //     } else if (newOptions.length > 1) {
  //       const newAdherentsResponse = await supervisionService.getAllAdherent(
  //         "",
  //         true,
  //         activite
  //       );
  //       newAdherents = [...adherents, ...(newAdherentsResponse || [])];
  //       console.log("response", newAdherents);
  //       newAdherents = newAdherents.filter(
  //         (obj, index) =>
  //           newAdherents.findIndex(
  //             (_adherent) =>
  //               _adherent.identification_adherent ===
  //               obj.identification_adherent
  //           ) === index
  //       );
  //     }
     
  //     setAdherents(newAdherents);
  //   } else{
  //     setValueOptions(valueOptions.filter((_value) => _value !== value));
  //    await supervisionService.getAllAdherent("", true, activite).then((response) => {
  //     setAdherentss(response)
  //     })
     
  //   }
  // };

    // const getMarkerIcon = (adherents) => {
  //   if(adherents == valueOptions.includes("1")){
  //     return L.icon({
  //       iconUrl: "/taxi.jpg",
  //       iconSize: [40, 40],
  //     })

  //   }else if (adherents === valueOptions.includes("2")) {
  //     return L.icon({
  //        iconUrl: "/gaz.jpg",
  //   iconSize: [25, 25],
  //     })
     
  //   }else if (adherents === valueOptions.includes("4")) {
  //     return L.icon({
  //       iconUrl: "/truck.jpg",
  //       iconSize: [25, 25],
  //     })
      
  //   }else if (adherents === valueOptions.includes("5")) {
  //     return L.icon({
  //       iconUrl: "/truck.jpg",
  //       iconSize: [25, 25],
  //     })
  //   }

  //   else if (adherents === valueOptions.includes("6")) {
  //     return L.icon({
  //       iconUrl: "/auto-ecole.jpg",
  //       iconSize: [25, 25],
  //     })
  //   }else{
  //     return L.icon({
  //       iconUrl: "logo.jpg",
  //       iconSize: [25, 25],
  //     })
  //   }

  // }
