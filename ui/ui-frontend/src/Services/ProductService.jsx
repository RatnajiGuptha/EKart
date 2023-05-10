import axios from 'axios';

const fake_products_URI = "https://fakestoreapi.com/products";

const products_URI = "http://localhost:8200/api/fashionProducts/";
class ProductService {

    getAllProducts() {
        return axios.get(fake_products_URI);
    }
    getProdByType(type){
        return axios.get(products_URI +"getProducts/type/" + type);
    }
    
}

export default new ProductService() ;