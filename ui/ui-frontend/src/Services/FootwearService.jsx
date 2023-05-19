import axios from "axios";

const FOOTWEAR_BASE_URL = "http://localhost:8200/api/footWear"

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
}


export default new FootwearService();