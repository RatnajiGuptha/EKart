import axios from 'axios';

const products_URI = "https://fakestoreapi.com/products";


class ProductService {

    getAllProducts() {
        return axios.get(products_URI);
    }
}

export default new ProductService() ;