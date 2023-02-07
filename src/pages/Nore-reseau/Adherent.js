// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import supervisionService from "../../Context/SupervisionService";
// // import Checkbox from "@mui/material/Checkbox";
// import "./Adherent.css";
// const data = [
//   "list of items",
//   "list of items",
//   "list of items",
//   "list of items",
//   "list of items",
//   "list of items",
//   "list of items",
//   "list of items",
// ];

// const Réseau = () => {
//   // Tous les adherents
//   // const [adherents, setAdherents] = useState([]);
//   // // Element recherché
//   // const [search, setSearch] = useState("");
//   // Etat de chargement d'un adherent
//   // const [onloading, setOnLoading] = useState(false);
//   // // Adherent selectionné
//   // const [selectedAdherent, setSelectedAdherent] = useState(0);
//   // // Etat d'ouverture d'un filtre
//   // const [filterOpened, setFilterOpened] = useState(false);
//   // // Filtre (Actif pour le moment)
//   // const [actif, setActif] = useState(true);
//   // // Chargement de la liste des adherents
//   // const [loadingscreen, setLoadingscreen] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     getAllAdherent(search, actif);
//   //     setLoadingscreen(false);
//   //   }, 1000);
//   // }, [search, actif]);

//   // const getAllAdherent = async (search, actif) => {
//   //   await supervisionService
//   //     .getAllAdherent(search, actif)
//   //     .then((response) => setAdherents(response))
//   //     .then((response) => console.log("adherents", adherents));
//   // };

//   // const handleChange = (event) => {
//   //   const inputValue = event.target.value;
//   //   setSearch(inputValue);
//   // };
//   // const toggleFiltre = () => {
//   //   setFilterOpened(!filterOpened);
//   // };

//   // const handleCheck = () => {
//   //   setActif(!actif);
//   // };

//   return (
//     // <div className="map">
//     //  <Map/>
//     // </div>

//     <div className="container">
//       <div className="mes-aderent">
//         <h1>Mes Adherent</h1>
//         <div className="search-section">
//           <div className="search-bar">
//             <i className="fas fa-search"></i>
//             <input
//               className="search"
//               name="search"
//               type="search"
//               placeholder="Recherche..."
//               // onChange={(event) => {
//               //   handleChange(event);
//               // }}
//               autoComplete="off"
//             />
//           </div>
//           {/* <div style={{ marginTop: "5px" }}>
//             <Checkbox
//               value={4}
//               checked={actif}
//               onChange={handleCheck}
//               inputProps={{
//                 "aria-label": "primary checkbox",
//               }}
//               sx={{ width: "60px", height: "40px" }}
//             />
//           </div> */}
//           <div className="list-adherent">
//             {/* <ul>
//                 {data.map((data, i) =>
//                 {
//                   <li key={i}>{data}</li>
//                 }

//                 )}
//                 </ul> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Réseau;
