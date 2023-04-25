import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"
import { motion } from "framer-motion";

function Certificats() {
const [data, setData] = useState([])
const [searchTerm, setSearchTerm] = useState('');


useEffect(() => {
   
  getAllAdherentAgrement(0);
  

}, []);

const getAllAdherentAgrement = async (numero_adherent) => {
await supervisionService
  .getAllAdherentAgrements(numero_adherent)
  .then((response) =>{ setData(response)
  console.log("data", response);
  })
  
};


const searchFilter = (data) => {
  return data.filter((item) => {
    if (item && item.titre_agrement && item.titre_agrement.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }
  });
};
  return (
    <div style={{display:"flex",  justifyContent:"center", alignContent:"center", backgroundColor:"white", marginTop:"2rem",}}>
  
    <div>
      {data && data.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;


  {/* <input type="text" placeholder="Search by numéro d'adhérent" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /> */}