import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Cards = ({ data }) => {
  const numero = data.numero_document_agrement;

  const cettime = data.date_agrement;
  const euroTime = new Date(cettime);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "CET",
  };

  const formatedDate = euroTime.toLocaleString("fr-FR", options);

  return (
    <div className="card-certificat">
      <div className="grids-card">
        <div className="c-sections">
          <div className="body-cards">
            <h6 className="c-title fs-4"> {data.activite_detail_agrement}</h6>
            <p className="card-text fs-5">{data.type_agrement}</p>
            <div className="b-sections">
              <NavLink
                id={numero}
                //  className="adherent"
                to={"/certificat/" + numero}
                data={numero}
              >
                <p className="button-c">{data.numero_agrement}</p>
              </NavLink>

              <p className="button-c">{formatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
