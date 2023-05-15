import axios from 'axios';

const FASHION_PRODUCTS_BASE_URI = "http://localhost:8200/api/fashionProducts";

class FashionProductService {

    getAllProducts() {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts");
    }

    getProdByType(type) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/type/" + type);
    }

    getProductById(productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/" + productId)
    }

    getProductFilterTypeById(type, productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/type/" + type + "/" + productId);

    }

    getProductByGender(gender) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/suitableFor/" + gender);

    }

}

export default new FashionProductService();