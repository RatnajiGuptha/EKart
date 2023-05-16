import axios from "axios";

const ELECTRONICS_BASE_URL = "http://localhost:8200/api/electronicsProducts";

class ElectronicsService {

    getAllElctronicProducts() {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics")
    }
    getElectronicsById(electronicsId) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronicsById/" + electronicsId)
    }

    getElectronicsByType(type) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics/" + type)
    }

    getElectronicsByTypeWithId(type, electronicsId) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics/" + type + "/" + electronicsId)
    }
}

export default new ElectronicsService();