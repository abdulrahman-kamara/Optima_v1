import axios from "axios"
import apilink from "../Constant/Apilink"
//  import history from "./Helper/History"

const getAllAdherent = (search = "", actif = true, activite = "all", option = 2) => {
    return axios.get(apilink + "/adherent?search=" + search + "&actif=" + actif + "&activite=" + activite + "&option=" + option)
        .then(response => response.data)
        
}

const getAdherent = (adherent) => {
    return axios.get(apilink + "/adherent/" + adherent)
        .then(response => response.data)
}

const getAdherentByIdentification = (identification) => {
    return axios.get(apilink + "/adherent/id/" + identification)
        .then(response => response.data)
}

const getAllAdherentAgrements = (numero_adherent) => { 
    return axios.get(apilink + "/adherent/agrements/" + numero_adherent)
    .then(response => response.data )
}

const GetDocumentListeByNumeroDocument = (numero) => { 
    return axios.get(apilink + "/adherent/documents/" + numero)
    .then(response => response.data )
}


 const supervisionService = {
    getAllAdherent,
    getAdherent,
    getAdherentByIdentification,
    getAllAdherentAgrements,
    GetDocumentListeByNumeroDocument
}
export default supervisionService;

