 import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UseAnimations from "react-useanimations";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
 import supervisionService from "../../Context/SupervisionService";
import "./Adherent.css";
import AdherentMap from "./Map/AdherentMap";


const Reseau = () => {
  //Tous les adherents
  const [adherents, setAdherents] = useState([]);
  // Element recherché
  const [search, setSearch] = useState("");
  //Etat de chargement d'un adherent
   const [onloading, setOnLoading] = useState(false);
  // Adherent selectionné
   const [selectedAdherent, setSelectedAdherent] = useState(0);
  // Etat d'ouverture d'un filtre
  const [filterOpened, setFilterOpened] = useState(false);
  // Filtre (Actif pour le moment)
  const [actif, setActif] = useState(true);
  // Chargement de la liste des adherents
  const [loadingscreen, setLoadingscreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getAllAdherents(search, actif);
      setLoadingscreen(false);
    }, 1000);
  }, [search, actif]);

  const getAllAdherents = async (search, actif) => {
    await supervisionService
      .getAllAdherent(search, actif)
      .then((response) => setAdherents(response))
  };


  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
  };
  const toggleFiltre = () => {
    setFilterOpened(!filterOpened);
  };

  const handleCheck = () => {
    setActif(!actif);
  };

  return (
   

    <div className="adherent_main-container"> 
     
     <div className="adherent-container">
<AdherentMap/> 
     
      {/* <div className="mes-aderent c-mt-6">
        <h5 className="mes-hero">Mes Adherent</h5>
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
          <div style={{ marginTop: "5px", marginLeft:"5px" }}>
           <div class="form-check">
  <input class="form-check-input" type="checkbox" value={4} checked={actif} onChange={handleCheck} id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
   actif
  </label>
</div>
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
   
      </div> */}
    </div> 
    </div>


  );
};

export default Reseau;




