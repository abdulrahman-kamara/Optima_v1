import { display } from "@mui/system";
import React from "react";

const Cards = ({ data }) => {
  return (
    <div
      className="card  mb-3"
      style={{
        maxWidth: "50rem",
        backgroundColor: "#C1CAD6 ",
      }}
    >
      <div
        className="card-header"
        style={{
          fontSize: "25px",
          color: "#e65d5e",
          paddingLeft: "10px",
          borderBottom: "1px solid white",
        }}
      >
        {" "}
        {data.titre_agrement}
      </div>
      <div className="card-body">
        <h6
          className="card-title"
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "20px",
          }}
        >
          {" "}
          Numéro de Agrement :{" "}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              fontSize: "30px",
            }}
          >
            {data.numero_document_agrement}
          </span>
        </h6>
        <p className="card-text">
          Detail de Agrement :{" "}
          <span className="myspan">{data.activite_detail_agrement}</span>{" "}
        </p>
        <p className="card-text">
          {" "}
          Type de Agrements :{" "}
          <span className="myspan">{data.type_agrement}</span>
        </p>
        <p className="card-text">
          N° : <span className="myspan">{data.numero_agrement}</span>
        </p>
        <p className="card-text">
          {" "}
          Validité : <span className="myspan">{data.validite_agrement}</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
//  <div
//       style={{
//         border: "1px solid",
//         borderColor: "lightgray",
//         backgroundColor: "#f7fafb",
//         borderRadius: "10px",
//         marginBottom: "10px",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >

//       {/* <Card.Header
//         style={{
//           fontSize: "25px",
//           color: "#e65d5e",
//           paddingLeft: "10px",
//           borderBottom: "1px solid",
//           borderBottomColor: "lightgray",
//         }}
//       >
//         {data.titre_agrement}
//       </Card.Header>
//       <Card.Body>
//         <Card.Text style={{ fontSize: "15px", color: "black" }}>
//           {" "}
//           Numero Document de Agrement :{" "}
//           <span>{data.numero_document_agrement}</span>
//         </Card.Text>
//         <Card.Text>
//           {" "}
//           Detail de Agrement : <span>{data.activite_detail_agrement}</span>
//         </Card.Text>
//         <div>
//           <Card.Text style={{ fontSize: "15px" }}>
//             {" "}
//             Type de Agrements : <span>{data.type_agrement}</span>
//           </Card.Text>
//           <Card.Text style={{ fontSize: "15px" }}>
//             {" "}
//             N° : <span>{data.numero_agrement}</span>
//           </Card.Text>
//           <Card.Text style={{ fontSize: "15px" }}>
//             {" "}
//             Validité : <span>{data.validite_agrement}</span>
//           </Card.Text>
//         </div>
//       </Card.Body> */}
//     </div>
