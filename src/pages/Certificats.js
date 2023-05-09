import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"
import { motion } from "framer-motion";
import "./Carrières.css"

function Certificats() {
const [data, setData] = useState([])
const [filteredData, setFilteredData] = useState('');
const [selectOption, setSelectOption] = useState('');

useEffect(() => {
     getAllAdherentAgrement(0);
}, []);


// useEffect(() => {
   
//    const filtered = data.filter(item => {
//     return item.activite === selectOption;
//    })

//    setFilteredData(filtered)
// console.log(filtered);
// }, [selectOption, data]);



const getAllAdherentAgrement = async (numero_adherent) => {
  try {
    const response = await supervisionService
  .getAllAdherentAgrements(numero_adherent)
   setData(response)
  console.log("data", response);
  
  
  } catch (error) {
    console.error("fetching data:", error);
  }

  
};

const handleOptionChange = e => {
  setSelectOption(e.target.value)
}



const searchFilter = (data) => {
  return data.filter((item) => {
    if (item.ac) {
      return item;
    }
  });
};
  return (
    <div style={{display:"flex", flexDirection:"column",  justifyContent:"center", alignItems:"center", backgroundColor:"white", marginTop:"2rem", padding:"20px"}}>
 
 <div>
      <select value={selectOption} onChange={handleOptionChange}>
        <option value="">All</option>
        <option value="1">Taximètre</option>
        <option value="2">Tachygraphe</option>
        <option value="4">Ethylotest</option>
        <option value="5">Gaz/Opacimètre</option>
        <option value="6">Auto-Ecole</option>
      </select>

      </div>
    {/* <input className="form-control"  type="text" value={searchItems} placeholder="search" onChange={(e) => setsearchItems(e.target.value)} style={{ display:"flex", borderRadius:"5px", padding:"5px", maxWidth:"50rem", flexWrap: "wrap", marginBottom:"1rem", border:"2px solid #ccc"}}/> */}
 
    <div style={{ display: "flex",  flexDirection:"column", flexWrap: "wrap", }}>
      {filteredData && filteredData.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;


