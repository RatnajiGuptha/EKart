import axios from "axios";

const BEAUTY_BASE_URL = "http://localhost:8200/api/beauty";

class BeautyService {


    getAllBeautyProducts() {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyProducts")
    }

    getBeautyProductsById(beautyId) {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyById/" + beautyId)
    }
}

export default new BeautyService();