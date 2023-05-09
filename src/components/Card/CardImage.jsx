import React from "react";
import images from "./listOfImage";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Card.css";

const CardImage = () => {
  const images = [
    {
      url: "/images/taxi.jpg",
      alt: "image1",
      caption: "Taximétre",
    },
    {
      url: "/images/capteur.jpg",
      alt: "image2",
      caption: "Taximétre",
    },
    {
      url: "/images/analyze.jpg",
      alt: "image1",
      caption: "Taximétre",
    },
    {
      url: "/images/ethylotest.jpg",
      alt: "image1",
      caption: "Taximétre",
    },
    {
      url: "/images/auto.jpg",
      alt: "image1",
      caption: "Taximétre",
    },
    {
      url: "/images/point.webp",
      alt: "image1",
      caption: "Taximétre",
    },
  ];

  return (
    <Container>
      <Row>
        {images.map((card) => (
          <Col key={card.id} xs={12} sm={6} md={6}>
            <Card className="mb-4 my-cards">
              <Card.Img variant="top" src={card.url} />
              <Card.ImgOverlay>
                <Card.Text>{card.caption}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardImage;
