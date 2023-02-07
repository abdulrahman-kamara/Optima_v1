import axios from "axios"
import apilink from "../Constant/Apilink"
// import history from "./Helper/History"

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

 const supervisionService = {
    getAllAdherent,
    getAdherent,
    getAdherentByIdentification,
}
export default supervisionService;

// const handleResponse = (response) => {
//     return response.text()
//         .then(
//             text => {
//                 const data = text
//                 if (!response.ok) {
//                     if (response.status === 401 || response.status === 403) {
//                         history.push('/logout')
//                         // eslint-disable-next-line no-restricted-globals
//                         location.reload(true)
//                     }
//                     const error = JSON.parse(data).message
//                     return Promise.reject(error)
//                 }
//                 return data
//             }
//         )
// }