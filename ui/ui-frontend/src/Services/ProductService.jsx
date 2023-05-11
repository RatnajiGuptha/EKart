import axios from 'axios';

const FASHION_PRODUCTS_BASE_URI = "http://localhost:8200/api/fashionProducts";

class ProductService {

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


}

export default new ProductService();