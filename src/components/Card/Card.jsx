import React, { useState } from "react";
import "./Card.css";
import supervisionService from "../../Context/SupervisionService";
import { saveAs } from "file-saver";
// import { useParams } from 'react-router-dom';
// import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const Cards = ({ data }) => {
  // const [isLoading, setIsLoading] = useState(false)
  const numero = data.numero_document_agrement;
  // console.log("me", numero);

  const cettime = data.date_agrement;
  const euroTime = new Date(cettime);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "CET",
  };
  const formatedDate = euroTime.toLocaleString("fr-FR", options);

  //Making a request to th api
  const getDoc = async (numero) => {
    try {
      const response =
        await supervisionService.GetDocumentListeByNumeroDocument(numero);
      console.log("res", response);
      const fileData = response.fichier_contenu;
      const fileType = "application/pdf";
      //Converting Base64 file to pdf file
      const binaryString = window.atob(fileData);
      const uintArray = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        uintArray[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([uintArray], { type: fileType });
      saveAs(blob, "agrément.pdf");
      console.log("file", blob);
      toast.success("Votre fichier est bien enregistre Merci!");
    } catch (error) {
      console.error("fetching data:", error);
      toast.error("Votre ficher est pas téléchager Merci!");
    }
  };

  // the fucntion that handle the download of the file after convertion
  const handleDownload = () => {
    // Extract the document name from the numero parameter
    // const numero = numero.match(/\d+/)[0];

    // Call the getDoc function with the extracted document name
    getDoc(numero);
  };

  return (
    <div className="card-certificat">
      <ToastContainer position="top-center" theme="colored" autoClose={5000} />
      <div className="grids-card">
        <div className="c-sections">
          <div className="body-cards">
            <h6 className="c-title fs-4"> {data.activite_detail_agrement}</h6>
            <p className="card-text fs-5">{data.type_agrement}</p>
            <div className="b-sections">
              <button
                onClick={handleDownload}
                // id={numero}
                //  className="adherent"
                // to={"/certificat/" + numero}
                // data={data}
              >
                <p className="button-c">{data.numero_agrement}</p>
              </button>

              <p className="button-c">{formatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
