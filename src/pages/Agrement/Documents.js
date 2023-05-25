import React from 'react';
import supervisionService from '../../Context/SupervisionService';
import { saveAs } from 'file-saver';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

function Documents() {
  const { numero } = useParams();
  console.log('data', numero);

  const getDoc = async (documentName) => {
    try {
      const response = await supervisionService.GetDocumentListeByNumeroDocument(documentName);
       const fileData  = response.fichier_contenu;
       const fileType = 'application/pdf'

       const byteCharacters = Buffer.from(fileData, 'base64').toString('binary');
       const byteNumbers = new Array(byteCharacters.length);
     
       for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
       }
     
       const byteArray = new Uint8Array(byteNumbers);

      const blob = new Blob([byteArray], { type: fileType });
      saveAs(blob, 'example.pdf');
      console.log('file', blob);
    } catch (error) {
      console.error('fetching data:', error);
    }
  };

  const handleDownload = () => {
    // Extract the document name from the numero parameter
    const documentName = numero.match(/\d+/)[0];
    console.log("name", documentName);
    // Call the getDoc function with the extracted document name
    getDoc(documentName);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
      <h5>Download Here!</h5>
      <Button variant="primary" onClick={handleDownload}>
        Télécharger le Fichier
      </Button>
    </div>
  );
}

export default Documents;
