import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"
import { motion } from "framer-motion";

function Certificats() {
const [data, setData] = useState([])


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
  return (
    <div style={{display:"flex", justifyContent:"center", alignContent:"center", backgroundColor:"white", marginTop:"2rem",  boxShadow: "10px 10px 20px #888888"}}>
    <div>
      {data && data.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;