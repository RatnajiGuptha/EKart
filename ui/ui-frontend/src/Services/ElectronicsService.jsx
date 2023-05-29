import axios from "axios";

//const ELECTRONICS_BASE_URL = "http://localhost:8200/api/electronicsProducts";
const ELECTRONICS_BASE_URL = "http://localhost:8888/api/electronicsProducts";

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

    getElectronicsBySellerName(sellerName){
        return axios.get(ELECTRONICS_BASE_URL+"/getElectronics/sellerName/"+sellerName);
    }

    updateElectronicsProducts(electronicsId,electronicsProducts){
        return axios.put(ELECTRONICS_BASE_URL+"/updateProducts/"+electronicsId,electronicsProducts);
    }

    saveMultipleProducts(products){
        return axios.post(ELECTRONICS_BASE_URL+"/addMultipleElectronics",products);
    }
}

export default new ElectronicsService();