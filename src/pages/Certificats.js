import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"
import { motion } from "framer-motion";
import "./Carrières.css"

function Certificats() {
const [data, setData] = useState([])
const [filteredData, setFilteredData] = useState([]);
const [selectOption, setSelectOption] = useState('');

useEffect(() => {
     getAllAdherentAgrement(0);
}, []);




const getAllAdherentAgrement = async (numero_adherent) => {
  try {
    const response = await supervisionService
  .getAllAdherentAgrements(numero_adherent)
   setData(response)
   setFilteredData(response)
  console.log("data", response);
  } catch (error) {
    console.error("fetching data:", error);
  }

  
};

const handleOptionChange = e => {
  const selectedValue = e.target.value
  setSelectOption(selectedValue)
  seleceted(selectedValue)
  console.log(selectOption);
}

const seleceted = (adherent) => {
  if (adherent === '') {
    setFilteredData(data)
  }else{
    const filtered = data.filter((data) => data.agrement_activite.toString() === adherent)
    setFilteredData(filtered)
  }

}



  return (
    <div style={{display:"flex", flexDirection:"column",  justifyContent:"center", alignItems:"center",  marginTop:"2rem", padding:"20px"}} >
 
 <div className="custom-select">
      <select value={selectOption} onChange={handleOptionChange} className="value-select">
        <option value="">All</option>
        <option value="1">Taximètre</option>
        <option value="2">Gaz/Opacimètre</option>
        <option value="4">Tachygraphe</option>
        <option value="5">Ethylotest</option>
        
      </select>

      </div>
  
 
    <div style={{ display: "flex",  flexDirection:"column", flexWrap: "wrap",marginTop:"20px" }}>
      { filteredData?.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;


