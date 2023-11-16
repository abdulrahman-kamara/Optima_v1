import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { ImMenu } from "react-icons/im";
import MenuIcon from "../Svg/MenuIcon";
import { ImCross } from "react-icons/im";
import {NavData} from "./NavData";


function NavBar() {
  const [mobile, setmobile] = useState(false);
  const mobileMenuRef = useRef()

useEffect(() => {
  const handleClickOutside = (event) => {
    if(mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)){
       setmobile(false)
    }
  }
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
},[])


  return (
    <nav className="navbar shadow-sm">
      
      <div className="logo">
        <a className="nav-bar-link" href="/"  >
    <div>
       <img src="/logo.png" alt="" className="logo-image" />
    </div>
          <h6 className="logo-name">CERCLE OPTIMA</h6>
        </a>
      </div>

      <ul className={mobile ? "nav-links-mobile" : "nav-link"}
       ref={mobileMenuRef}>
       {NavData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to={item.path}>
              <span className="span-link">
                {item.title}
              </span>
            </Link>
          </li>
        )
       })}
      </ul>
      <button className="mobile-menu-icon" onClick={() => setmobile(!mobile)}>
        {mobile ? <ImCross size={15} /> : <MenuIcon  className="menuiconstyle" />}
      </button>
     
    </nav>
  );
}

export default NavBar;
