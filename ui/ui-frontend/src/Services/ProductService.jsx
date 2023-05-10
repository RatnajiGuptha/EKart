import axios from 'axios';

const PRODUCTS_BASE_URI = "https://fakestoreapi.com/products";

const products_URI = "http://localhost:8200/api/fashionProducts";

class ProductService {

    getAllProducts() {
        return axios.get(PRODUCTS_BASE_URI);
    }

    getProductById(productId) {
        return axios.get(PRODUCTS_BASE_URI + "/" + productId);
    }

    getProdByType() {
        // return axios.get(products_URI + "/getProducts/type/" + type);
        return axios.get(PRODUCTS_BASE_URI);
    }

}

export default new ProductService();