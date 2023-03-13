import React from "react";
import { Circle, FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker, Polygon, Popup, Rectangle, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

 import supervisionService from "../../../Context/SupervisionService"
import activiteList from "../../../Constant/activeList";


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
      const [adherents, setAdherents] = useState(null)
      const [adherentlocation, setadherentlocation] = useState(null)
      const [ischecked, setIscChecked] = useState(false)
      const [taximetre, setTaximetre] = useState(false)
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

 


const handleChange = (activite) =>{
  getAllAdherents("", true, activite)


 
}


const handleCkeck = (event)=> {
 setIscChecked(event.target.value);

}






const fillBlue = {color:"blue "}
const fillRed = {color:"red"}

const  center =[47.824905, 2.618787]

  return (
    <>
    <div card-container>
   
 
    <div className="maker-icon">
     <div style={{ marginTop: "5px", marginLeft:"5px", display:"flex", justifyContent:"space-evenly" }}>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" checked={handleCkeck} onChange={e=> handleChange("1")} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Taximetre
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" checked={tachygraphie} onChange={e=> handleChange("2")} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Tachygraphie
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={ethylotest} onChange={e=> handleChange("4")}id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   Ethylotest
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={autoecole} onChange={e=> handleChange("5")} id="flexCheckDefault"/>
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
      style={{ width: "100%", height: "100vh", paddingRight:"100px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {adherents && adherents.map(adherent => (
       
       

<LayerGroup key={adherent.identification_adherent}
         id={adherent.numero_adherent}  >
           
           <Circle center={[47.824905, 4.618787]} pathOptions={fillBlue} radius={200}>
            <Popup>this is a test</Popup>
           </Circle>
           <Marker 
          position={[
            adherent.atelier_latitude,
            adherent.atelier_longitude
          ]}
          eventHandlers={{
            click: () => {
              setadherentlocation(adherent);
            },
          }}
          icon={icon1}
        />
          

         </LayerGroup>
      

       
       
       
       
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

    