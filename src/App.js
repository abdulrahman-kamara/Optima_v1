import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import ButtonAppBar from "./components/Nav/Nav";
import Accueil from "./pages/Accueil";
import Activities from "./pages/Activities";
import Carrières from "./pages/Carrières";
import Certificats from "./pages/Certificats";
import Métier from "./pages/Métier";
import Réclamations from "./pages/Réclamations";
import Réseau from "./pages/Nore-reseau/Adherent";
import AdherentDetail from "./pages/Nore-reseau/AdherentDetail";
import Contact from "./pages/Contact";
import UnauthorizedPage from "./pages/UnauthorizedPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/notre métier" element={<Métier />} />
          <Route path="/certificat" element={<Certificats />} />
          <Route path="/carrières" element={<Carrières />} />
          <Route path="/reseau" element={<Réseau/>}/>
          <Route path="/reseau/:identification_adherent" element={<AdherentDetail/>}/> 
          <Route path="/réclamations" element={<Réclamations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<UnauthorizedPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
