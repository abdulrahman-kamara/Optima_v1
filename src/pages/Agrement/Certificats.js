import React, {useState, useEffect} from "react";
import supervisionService from "../../Context/SupervisionService";
import Card from "../../components/Card/Card"
import "../Carrières.css"
import "../../components/Card/Card.css"
import { Circles } from "react-loader-spinner";

function Certificats() {
const [data, setData] = useState([])
const [filteredData, setFilteredData] = useState([]);
const [selectOption, setSelectOption] = useState('');
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
     getAllAdherentAgrement(0);

     setTimeout(() => {
      setIsLoading(false)
     }, 2000)
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
    <div className="c-c" >
    <div className="custom-select">
      <select value={selectOption} onChange={handleOptionChange} className="c-select">
        <option value="">Tous</option>
        <option value="1">Taximètre</option>
        <option value="2">Gaz/Opacimètre</option>
        <option value="4">Tachygraphe</option>
        <option value="5">Ethylotest</option>
      </select>
    </div>
  
    {isLoading ? (
   <div className="spinner">
   <Circles
      height="50"
      width="50"
      
      color="#4869ee"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
      </div>
    ):(<div className="my-grid-c">
      { filteredData?.map((data, i) =>(
        <Card key={i} data={data}/>
      ) )}
    </div>)}
    
    </div>
  );
}

export default Certificats;


