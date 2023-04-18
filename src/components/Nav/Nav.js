import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";

function NavBar() {
  const [mobile, setmobile] = useState(false);

  return (
    <nav className="navbar shadow-sm">
      <div className="logo">
        <a className="nav-bar-link" href="/">
          <img src="/images/logo.jpg" alt="" className="logo-image" />
          <h6 className="logo-name">CERCLE OPTIMA</h6>
        </a>
      </div>

      <ul className={mobile ? "nav-links-mobile" : "nav-link"}
        onClick={() => setmobile(false)}>
        <Link to="/">
          <li>Accueil</li>
        </Link>
        <Link to="/activities">
          <li>Nos Activités</li>
        </Link>
        <Link to="/notre-métier">
          <li>Notre métier</li>
        </Link>
        <Link to="/certificat">
          <li>Certificats & Agréments</li>
        </Link>
        <Link to="https://www.cercleoptima.fr/shop/">
          <li>Boutique</li>
        </Link>
        <Link to="/carrières">
          <li>Carrières</li>
        </Link>
        <Link to="/reseau">
          <li>Notre Réseau</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/réclamations">
          <li>Réclamations / Appels</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setmobile(!mobile)}>
        {mobile ? <ImCross size={15} /> : <ImMenu size={25} />}
      </button>
    </nav>
  );
}

export default NavBar;
