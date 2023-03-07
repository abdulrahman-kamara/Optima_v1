import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

 import supervisionService from "../../../Context/SupervisionService"


export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25],
});




export default function AdherentMap() {
      //  const [Loadingscreen, setLoadingscreen] = useState(false)
      const [adherents, setAdherents] = useState(null)
      const [adherentlocation, setadherentlocation] = useState(null)
      const [taximetre, setTaximetre] = useState(true)
      const [tachygraphie, setTachygraphie] = useState(true)
      const [ethylotest, setEthylotest] = useState(true)
      const [autoecole, setAutoecole] = useState(true)


  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => {  console.log("response", response)
    ; setAdherents(response)})
  };

  useEffect(()=> {
    getAllAdherents("", true, "all")
  }, [])

  const handleTaximetre = () => {

  setTaximetre(!taximetre);

    

  };
  const handleTachygraphie = () => {
    setTachygraphie(!tachygraphie);
    
  };
  const handleEthylotest = () => {
    setEthylotest(!ethylotest);
    
  };
  const handleAutoecole = () => {
    setAutoecole(!autoecole);
    
  };



  return (
    <>
    <div className="card-container" >
     <div className="maker-icon">
     <div style={{ marginTop: "5px", marginLeft:"5px", display:"flex", justifyContent:"space-evenly" }}>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={taximetre} onChange={handleTaximetre} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Taximetre
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={tachygraphie} onChange={handleTachygraphie} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Tachygraphie
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={ethylotest} onChange={handleEthylotest} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Ethylotest
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={autoecole} onChange={handleAutoecole} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Auto-Ecole
  </label>
</div>
</div>
</div>
    <MapContainer
      center={[47.824905, 2.618787]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {adherents && adherents.map(adherent => (
        <Marker
          key={adherent.identification_adherent}
          id={adherent.numero_adherent}
          position={[
            adherent.atelier_latitude,
            adherent.atelier_longitude
          ]}
          eventHandlers={{
            click: () => {
              setadherentlocation(adherent);
            },
          }}
          icon={icon}
        />
      ))}
       { adherentlocation && (
        <Popup
        position={[
          adherentlocation.atelier_latitude,
        adherentlocation.atelier_longitude
        ]}
          onClose={() => {
            setadherentlocation(null);
          }}
        >
          <div>
          <h2>{adherentlocation.identification_adherent}</h2>
            <p>{ adherentlocation.nom_adherent}</p>
            <p>{ adherentlocation.adresse1_adherent}</p>
            <p>{ adherentlocation.ville_adherent}</p>
           

          </div>
        </Popup>
      )} 
    </MapContainer>
    </div>
    </>
    
  );
}
