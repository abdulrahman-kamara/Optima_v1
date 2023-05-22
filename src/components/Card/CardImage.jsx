import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const CardImage = () => {
  const images = [
    {
      url: "/images/taxi.jpg",
      alt: "image1",
      link: "/activities",
      caption: "Taximétre",
    },
    {
      url: "/images/capteur.jpg",
      alt: "image2",
      link: "/activities",
      caption: "Tachygraphe",
    },
    {
      url: "/images/analyze.jpg",
      alt: "image1",
      link: "/activities",
      caption: "Analyseur de gaz / Opacimétre",
    },
    {
      url: "/images/ethylotest.jpg",
      alt: "image1",
      link: "/activities",
      caption: "Ethylotest antidémarrage",
    },
    {
      url: "/images/auto.jpg",
      alt: "image1",
      link: "/activities",
      caption: "Dispositif Auto-école",
    },
    {
      url: "/images/point.webp",
      alt: "image1",
      link: "/activities",
      caption: "Point éléateur",
    },
  ];

  return (
    <>
      {images.map((card) => (
        <div className="s-cards">
          <img src={card.url} alt={card.alt} className="card-image" />
          <Link to={card.link}>
            <p className="custom-card-title">{card.caption}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CardImage;
