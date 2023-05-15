import axios from "axios";

const Accessories_BASE_URL = "http://localhost:8200/api/accessoriesProducts"

class AccessoriesService {

    getAllAccessories() {
        return axios.get(Accessories_BASE_URL + "/getAllAccessoriesProduct");
    }

    getAccessoryById(id) {
        return axios.get(Accessories_BASE_URL + "/getAccessoriesProductById/" + id);

    }

}




export default new AccessoriesService();