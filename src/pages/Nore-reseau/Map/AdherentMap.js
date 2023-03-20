import React from "react";
import { FeatureGroup, LayerGroup, LayersControl, MapContainer, Marker,  Popup, TileLayer } from "react-leaflet";
import { useState, useEffect } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./AdherentMap.css"
 import supervisionService from "../../../Context/SupervisionService"
import { useRef } from "react";
import ChekBox from "./ChekBox";



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
      const [marker, setmarker] = useState([])
      const [Filters, setFilters] = useState({
     
        AdherentLocation: [],
        price: []
      })


   
  
  useEffect(()=> {
    getAllAdherents("", true, "all")
  
  }, [])

  const getAllAdherents = async (search, actif, activite) => {
    await supervisionService
      .getAllAdherent(search, actif, activite)
      .then((response) => {  console.log("response", response)
    ; setAdherents(response)})
  };








const  center =[47.824905, 2.618787]
const mapRef = useRef()



// const handleChange = (activite, e) =>{

//    getAllAdherents("", true, activite)
   
// }  



// filtering the resukt of the checked box

const showFilterResult = (filters) => {
  getAllAdherents()

}




const handleFilter = (filters, activite) => {
  console.log(filters);
  const newFilters = {...Filters}
  newFilters[activite] = Filters

  // condition ici


  showFilterResult(newFilters)
  setFilters(newFilters)

}





  return (
    <>
    <div className="map-container">
   
 
    <div className="maker-icon">
    <ChekBox 
    handleFilter={filters => handleFilter(filters, "AdherentLocation")}
    />
</div>

    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100vh", paddingRight:"100px" }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {adherents && adherents.map(adherent => (
      
      

       
       

<LayerGroup   >
             
           
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