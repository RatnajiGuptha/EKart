import axios from "axios";

const Accessories_BASE_URL = "http://localhost:8888/api/accessoriesProducts";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};
class AccessoriesService {

    getAllAccessories() {
        return axios.get(Accessories_BASE_URL + "/getAllAccessoriesProduct");
    }

    getAccessoriesProductById(id) {
        return axios.get(Accessories_BASE_URL + "/getAccessoriesProductById/" + id);
    }

    getAccessoriesByType(type) {
        return axios.get(Accessories_BASE_URL + "/getAccessories/type/" + type);
    }

    getAccessoriesByTypeAndId(type, id) {
        return axios.get(Accessories_BASE_URL + "/getAccessories/type/" + type + "/" + id);
    }

    getAccessoriesProductsBySellerName(sellerName) {
        return axios.get(Accessories_BASE_URL + "/getAccessories/sellerName/" + sellerName, header);
    }

    updateAccessoriesProducts(accessoryId, accessoriesProducts) {
        return axios.put(Accessories_BASE_URL + "/updateProducts/" + accessoryId, accessoriesProducts, header);
    }

    addProduct(accessoriesProducts) {
        return axios.post(Accessories_BASE_URL + "/add", accessoriesProducts, header);
    }
}

export default new AccessoriesService();