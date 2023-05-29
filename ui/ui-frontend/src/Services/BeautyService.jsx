import axios from "axios";

// const BEAUTY_BASE_URL = "http://localhost:8200/api/beauty";
const BEAUTY_BASE_URL = "http://localhost:8888/api/beauty";

class BeautyService {

    getAllBeautyProducts() {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyProducts");
    }

    getBeautyProductsById(beautyId) {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyById/" + beautyId);
    }

    
    getBeautyBySellerName(sellerName){
        return axios.get(BEAUTY_BASE_URL+"/getBeautyBySellerName/"+sellerName);
    }

    updateBeautyProducts(beautyId,beauty){
        return axios.put(BEAUTY_BASE_URL+"/updateProducts/"+beautyId,beauty);
    }

    saveAllBeautyProducts(beautyProductsList){
        return axios.post(BEAUTY_BASE_URL+"/addMultipleBeautyProducts",beautyProductsList);
    }
}

export default new BeautyService();