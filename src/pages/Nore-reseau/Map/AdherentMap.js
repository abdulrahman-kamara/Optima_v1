import React from "react";
import {
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AdherentMap.css";
import supervisionService from "../../../Context/SupervisionService";
import { useRef } from "react";
// import ChekBox from "./ChekBox";
import { Checkbox } from "antd";

export const icon = new Icon({
  iconUrl: "/taxi.jpg",
  iconSize: [25, 25],
});

export const icon1 = new Icon({
  iconUrl: "/truck.jpg",
  iconSize: [25, 25],
});

export default function AdherentMap() {
  //  const [Loadingscreen, setLoadingscreen] = useState(false)
  const [adherents, setAdherents] = useState(null);
  const [adherentlocation, setadherentlocation] = useState(null);
  const [filteredData, setfilteredData] = useState({
    tax: true,
    tco: true,
    gaz: true,
    ead: true,
    aut: true,
  });
  const [valueOptions, setValueOptions] = useState([]);

  useEffect(() => {
    getAllAdherents("", true, "all");
  }, []);

  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => {
        setAdherents(response);
      });
  };

  //the center of the map
  const center = [47.824905, 2.618787];
  const mapRef = useRef();

  // update the state of the checkbox and also update the state of the map
  const handleChange = (e, activite) => {
    const { value, checked } = e.target;

    if (checked) {
      var _valueOptions = [...valueOptions, e.target.value];
      var _adherents = [];

      setValueOptions((prev) => [...prev, e.target.value]);

      console.log("_valueOptions", _valueOptions);
      supervisionService.getAllAdherent("", true, activite).then((response) => {
        console.log("response", response);
        _adherents = response;
      });

      if (_valueOptions.length === 1) {
        supervisionService
          .getAllAdherent("", true, activite)
          .then((response) => {
            console.log("response", response);
            setAdherents(response);
          });
      } else if (_valueOptions.length > 1) {
        supervisionService
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
    } else {
      setValueOptions(valueOptions.filter((_value) => _value !== value));
    }
  };

  return (
    <>
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
                onChange={(e) => handleChange(e, "1")}
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
                onChange={(e) => handleChange(e, "2")}
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
                onChange={(e) => handleChange(e, "4")}
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
                onChange={(e) => handleChange(e, "5")}
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
                onChange={(e) => handleChange(e, "6")}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
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
                icon={icon1}
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
                <h2>{adherentlocation.identification_adherent}</h2>
                <p>{adherentlocation.nom_adherent}</p>
                <p>{adherentlocation.adresse1_adherent}</p>
                <p>{adherentlocation.ville_adherent}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
    </>
  );
}

// const handleTaxiChange = (e) =>{

//   e.preventDefault()
//   //  setIsChecked({taximetre: event.target.value})
// }
// const handleTachyChange = (event) =>{
//   setIsChecked({tachygraphie: event.target.value})
// }
// const handleEthyChange = (event) =>{
//   setIsChecked({ethylotest: event.target.value})
// }
// const handleAutoChange = (event) =>{
//   setIsChecked({autoecole: event.target.value})
// }
// const handleGazChange = (event) =>{
//   setIsChecked({gaz: event.target.value})

// const updatedAdherent = adherents && adherents.map(adherent => {
//   if (adherent === adherent.activite) {
//     return {...adherent, selected: !adherent.selected}
//   }else {
//     return adherent
//   }
// });
// setAdherents(updatedAdherent)

// const markers = [
// {
//   activite: "1",
//   location: {
//    lat: adherents.atelier_latitude,
//    log:  adherents.atelier_longitude
//   }
// },
// {
//   activite: "2",
//   location: {
//    lat: adherents.atelier_latitude,
//    log:  adherents.atelier_longitude
//   }
// },
// {
//   activite: "4",
//   location: {
//    lat: adherents.atelier_latitude,
//    log:  adherents.atelier_longitude
//   }
// },
// {
//   activite: "5",
//   location: {
//    lat: adherents.atelier_latitude,
//    log:  adherents.atelier_longitude
//   }
// },
// {
//   activite: 6,
//   location: {
//    lat: adherents.atelier_latitude,
//    log:  adherents.atelier_longitude
//   }
// }
// ]
