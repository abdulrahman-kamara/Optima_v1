import React, {useState, useEffect} from "react";
import supervisionService from "../Context/SupervisionService";
import Card from "../components/Card/Card"

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
    <div style={{display:"flex", justifyContent:"center", alignContent:"center", backgroundColor:"#fcfdfd",}}>
    <div  style={{width:"70%", boxShadow:"#151b26", }}>
      {data && data.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>
    </div>
  );
}

export default Certificats;