// import axios from "axios";

// const BEAUTY_BASE_URL = "http://localhost:8888/api/beauty";

// const token = localStorage.getItem('token');

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

// class BeautyService {

//     getAllBeautyProducts() {
//         return axios.get(BEAUTY_BASE_URL + "/getBeautyProducts");
//     }

//     getBeautyProductsById(beautyId) {
//         return axios.get(BEAUTY_BASE_URL + "/getBeautyById/" + beautyId);
//     }

//     getBeautyBySellerName(sellerName) {
//         return axios.get(BEAUTY_BASE_URL + "/getBeautyBySellerName/" + sellerName, config);
//     }

//     updateBeautyProducts(beautyId, beauty) {
//         return axios.put(BEAUTY_BASE_URL + "/updateProducts/" + beautyId, beauty, config);
//     }

//     saveAllBeautyProducts(beautyProductsList) {
//         return axios.post(BEAUTY_BASE_URL + "/addMultipleBeautyProducts", beautyProductsList, config);
//     }
// }

// export default new BeautyService();

import axios from "axios";

const BEAUTY_BASE_URL = "http://localhost:8888/api/beauty";
// const BEAUTY_BASE_URL = "http://localhost:8200/api/beauty";


const token = localStorage.getItem('token');
console.log(token)

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

class BeautyService {

    getAllBeautyProducts() {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyProducts");
    }

    getBeautyProductsById(beautyId) {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyById/" + beautyId);
    }

    getBeautyBySellerName(sellerName) {
        return axios.get(BEAUTY_BASE_URL + "/getBeautyBySellerName/" + sellerName,
            // {
            //     headers: {
            //         Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMYWttZXB2dEx0ZCIsImlhdCI6MTY4NTU0ODgyNCwiZXhwIjoxNjg1NTUyNDI0fQ.epP7HRDxoZ_G1XMbaTKrQsuS8KwU_H6teXimOIo3I-A"
            //     }

            // }
        );
    }

    updateBeautyProducts(beautyId, beauty) {
        return axios.put(BEAUTY_BASE_URL + "/updateProducts/" + beautyId, beauty, config);
    }

    saveAllBeautyProducts(beautyProductsList) {
        return axios.post(BEAUTY_BASE_URL + "/addMultipleBeautyProducts", beautyProductsList, config);
    }

    saveBeautyProducts(beautyProductsList) {
        return axios.post(BEAUTY_BASE_URL + "/add", beautyProductsList, config);
    }
}

export default new BeautyService();
