import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"
import { motion } from "framer-motion";
import "./Carrières.css"

function Certificats() {
const [data, setData] = useState([])
const [searchItems, setsearchItems] = useState('');


useEffect(() => {
   
  getAllAdherentAgrement(0);
  

}, []);

const getAllAdherentAgrement = async (numero_adherent) => {
await supervisionService
  .getAllAdherentAgrements(numero_adherent)
  .then((response) =>{ setData(response)
  console.log("data", response);
  console.log("data", data[4]);
  })
  
};


const searchFilter = (data) => {
  return data.filter((item) => {
    if (item && item.titre_agrement && item.titre_agrement.toString().toLowerCase().includes(searchItems.toLowerCase())) {
      return item;
    }
  });
};
  return (
    <div style={{display:"flex", flexDirection:"column",  justifyContent:"center", alignItems:"center", backgroundColor:"white", marginTop:"2rem", padding:"20px"}}>
 
    <input className="form-control"  type="text" value={searchItems} placeholder="search" onChange={(e) => setsearchItems(e.target.value)} style={{ display:"flex", borderRadius:"5px", padding:"5px", maxWidth:"50rem", flexWrap: "wrap", marginBottom:"1rem", border:"2px solid #ccc"}}/>
 
    <div style={{ display: "flex",  flexDirection:"column", flexWrap: "wrap", }}>
      { searchFilter(data).map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;


