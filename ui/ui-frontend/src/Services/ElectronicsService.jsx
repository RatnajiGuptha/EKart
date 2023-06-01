import axios from "axios";

const ELECTRONICS_BASE_URL = "http://localhost:8888/api/electronicsProducts";
const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};
class ElectronicsService {

    getAllElctronicProducts() {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics");
    }
    getElectronicsById(electronicsId) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronicsById/" + electronicsId);
    }

    getElectronicsByType(type) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics/" + type);
    }

    getElectronicsByTypeWithId(type, electronicsId) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics/" + type + "/" + electronicsId);
    }

    getElectronicsBySellerName(sellerName) {
        return axios.get(ELECTRONICS_BASE_URL + "/getElectronics/sellerName/" + sellerName, header);
    }

    updateElectronicsProducts(electronicsId, electronicsProducts) {
        return axios.put(ELECTRONICS_BASE_URL + "/updateProducts/" + electronicsId, electronicsProducts, header);
    }

    saveMultipleProducts(products) {
        return axios.post(ELECTRONICS_BASE_URL + "/addMultipleElectronics", products, header);
    }
}

export default new ElectronicsService();