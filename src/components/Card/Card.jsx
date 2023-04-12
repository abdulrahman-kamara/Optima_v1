import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Cards = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: "lightgray",
        backgroundColor: "#f7fafb",
        borderRadius: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Header
        style={{
          fontSize: "25px",
          color: "#e65d5e",
          paddingLeft: "10px",
          borderBottom: "1px solid",
          borderBottomColor: "lightgray",
        }}
      >
        {data.titre_agrement}
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ fontSize: "15px" }}>
          {" "}
          Numero Document de Agrement :{" "}
          <span>{data.numero_document_agrement}</span>
        </Card.Text>
        <Card.Text>
          {" "}
          Detail de Agrement : <span>{data.activite_detail_agrement}</span>
        </Card.Text>
        <div>
          <Card.Text style={{ fontSize: "15px" }}>
            {" "}
            Type de Agrements : <span>{data.type_agrement}</span>
          </Card.Text>
          <Card.Text style={{ fontSize: "15px" }}>
            {" "}
            N° : <span>{data.numero_agrement}</span>
          </Card.Text>
          <Card.Text style={{ fontSize: "15px" }}>
            {" "}
            Validité : <span>{data.validite_agrement}</span>
          </Card.Text>
        </div>
      </Card.Body>
    </div>
  );
};

export default Cards;
