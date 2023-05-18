import axios from "axios";

const Accessories_BASE_URL = "http://localhost:8200/api/accessoriesProducts"

class AccessoriesService {

    getAllAccessories() {
        return axios.get(Accessories_BASE_URL + "/getAllAccessoriesProduct");
    }

    getAccessoryById(id) {
        return axios.get(Accessories_BASE_URL + "/getAccessoriesProductById/" + id);
    }

    getAccessoriesByType(type) {
        return axios.get(Accessories_BASE_URL + "/getAccessories/type/" + type);
    }

    getAccessoriesByTypeAndId(type, id) {
        return axios.get(Accessories_BASE_URL + "/getAccessories/type/" + type + "/" + id);
    }

}




export default new AccessoriesService();