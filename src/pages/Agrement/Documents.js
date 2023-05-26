import React,{ useState } from 'react';
import supervisionService from '../../Context/SupervisionService';
import { saveAs } from 'file-saver';
import { useParams } from 'react-router-dom';
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';



function Documents() {
//distructured the url id after getting it from useParams
  const { numero} = useParams();
//   const { numero_document_agrement } = useParams();
  const [isLoading, setIsLoading] = useState(false)

//   const doc = numero_document_agrement
//   console.log("doc", doc);


//Making a request to th api 
  const getDoc = async (documentName) => {
    try { 
          setIsLoading(true)
      const response = await supervisionService.GetDocumentListeByNumeroDocument(documentName);
      console.log("res", response);
       const fileData  = response.fichier_contenu;
       const fileType = 'application/pdf'
//Converting Base64 file to pdf file 
       const binaryString = window.atob(fileData);
    const uintArray = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      uintArray[i] = binaryString.charCodeAt(i);
    }

      const blob = new Blob([uintArray], { type: fileType });
      saveAs(blob, 'example.pdf');
      console.log('file', blob);
      toast.success("Votre fichier est bien enregistre Merci!")
    } catch (error) {
      console.error('fetching data:', error);
      toast.error("Votre ficher est pas téléchager Merci!")
    }finally{
        setTimeout(() => {
            setIsLoading(false)
           }, 2000)
    }
  };

  // the fucntion that handle the download of the file after convertion
  const handleDownload = () => {
    // Extract the document name from the numero parameter
    const documentName = numero.match(/\d+/)[0];
 
    // Call the getDoc function with the extracted document name
    getDoc(documentName);
   
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}>
         <ToastContainer 
        position="top-center"
        theme="colored"
        autoClose={5000}
        />

      <h5>Votre ficher de agrements ici!</h5>
      <button className="btn btn-primary" onClick={handleDownload}>
        {isLoading ?(
             <div className="spinner">
             <Circles
                height="50"
                width="50"
                color="blue"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
                </div>
        ):    "Télécharger le Fichier"
        }
   
      </button>
    </div>
  );
}

export default Documents;
