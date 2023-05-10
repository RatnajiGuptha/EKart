import axios from 'axios';

const PRODUCTS_BASE_URI = "https://fakestoreapi.com/products";


class ProductService {

    getAllProducts() {
        return axios.get(PRODUCTS_BASE_URI);
    }

    getProductById(productId) {
        return axios.get(PRODUCTS_BASE_URI + "/" + productId);
    }
}

export default new ProductService();