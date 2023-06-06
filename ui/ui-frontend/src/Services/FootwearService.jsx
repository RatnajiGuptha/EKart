import axios from "axios";

const FOOTWEAR_BASE_URL = "http://localhost:8888/api/footWear";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};
class FootwearService {

    getAllFootwear() {
        return axios.get(FOOTWEAR_BASE_URL + "/getFootWear");
    }

    getFootwearById(footWearId) {
        return axios.get(FOOTWEAR_BASE_URL + "/getFootWearById/" + footWearId);
    }

    getFootwearByType(type) {
        return axios.get(FOOTWEAR_BASE_URL + "/getFootWear/" + type);
    }

    getFootwearByTypeAndId(type, id) {
        return axios.get(FOOTWEAR_BASE_URL + "/getFootWear/type/" + type + "/" + id);
    }

    fetchBySellerName(sellerName) {
        return axios.get(FOOTWEAR_BASE_URL + "/getFootWearBySellerName/" + sellerName, header);
    }

    updateFootWearProducts(footWearId, footwearProducts) {
        return axios.put(FOOTWEAR_BASE_URL + "/updateProducts/" + footWearId, footwearProducts, header);
    }

    saveFootWare(footWears) {
        return axios.post(FOOTWEAR_BASE_URL + "/add", footWears, header);
    }
}


export default new FootwearService();