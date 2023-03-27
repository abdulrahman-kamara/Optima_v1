import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AdherentMap.css";
import supervisionService from "../../../Context/SupervisionService";
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


export default function AdherentMap() {
  //  const [Loadingscreen, setLoadingscreen] = useState(false)
  const [adherents, setAdherents] = useState(null);
  const [adherentlocation, setadherentlocation] = useState(null);
  const [valueOptions, setValueOptions] = useState([]);

  useEffect(() => {
    getAllAdherents("", true, "all");
  }, []);

  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => {
        console.log("response", response);
        setAdherents(response);
      });
  };

  //the center of the map
  const center = [47.824905, 2.618787];
  const mapRef = useRef();

  // update the state of the checkbox and also update the state of the map
  // const handleChange = (e, activite, indexToRemove = null) => {
  //   const { value, checked } = e.target;

  //   if (checked) {
  //     var _valueOptions = [...valueOptions, e.target.value];
  //     var _adherents = [];

  //     setValueOptions((prev) => [...prev, e.target.value]);

  //     console.log("_valueOptions", _valueOptions);
  //     supervisionService.getAllAdherent("", true, activite).then((response) => {
  //       console.log("response", response);
  //       _adherents = response;
  //     });

  //     if (_valueOptions.length === 1) {
  //       supervisionService
  //         .getAllAdherent("", true, activite)
  //         .then((response) => {
  //           console.log("response", response);
  //           setAdherents(response);
  //         });
  //     } else if (_valueOptions.length > 1) {
  //       supervisionService
  //         .getAllAdherent("", true, activite)
  //         .then((response) => {
  //           let _adherents = [...adherents, ...response];
  //           _adherents = _adherents.filter(
  //             (obj, index) =>
  //               _adherents.findIndex(
  //                 (_adherent) =>
  //                   _adherent.identification_adherent ===
  //                   obj.identification_adherent
  //               ) === index
  //           );
  //           console.log("_adherents", _adherents);
  //           setAdherents(_adherents);
  //         });
  //     } else {
  //       setValueOptions(valueOptions.filter((_value) => _value !== value));
  //     }
  //   }
  // };

  const handleChange = async (e, activite) => {
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
    </>
  );
}
