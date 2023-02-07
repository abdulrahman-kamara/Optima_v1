import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import data from "../../../data/skateboard-parks.json";
// import supervisionService from "../../../Context/SupervisionService"
// import useSWR from 'swr'

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25],
});

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function AdherentMap() {
  const [aderentLoc, setAdherentLoc] = useState(null);
  //     const [actif, setActif] = useState(null)

  // const url = supervisionService.getAllAdherent()

  // const {data, error} = useSWR(url, fetcher)

  // const locationadhrent = data && !error ?  data.slice(0, 500) : [];

  return (
    <MapContainer
      center={[45.4, -75.7]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "50%", height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.features.map((park) => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0],
          ]}
          eventHandlers={{
            click: () => {
              setAdherentLoc(park);
            },
          }}
          icon={icon}
        />
      ))}
      {aderentLoc && (
        <Popup
          position={[
            aderentLoc.geometry.coordinates[1],
            aderentLoc.geometry.coordinates[0],
          ]}
          onClose={() => {
            setAdherentLoc(null);
          }}
        >
          <div>
            <h2>{aderentLoc.properties.NAME}</h2>
            <p>{aderentLoc.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}
