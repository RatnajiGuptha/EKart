import axios from 'axios';

<<<<<<< HEAD
const fake_products_URI = "https://fakestoreapi.com/products";
=======
const PRODUCTS_BASE_URI = "https://fakestoreapi.com/products";

>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a

const products_URI = "http://localhost:8200/api/fashionProducts/";
class ProductService {

    getAllProducts() {
<<<<<<< HEAD
        return axios.get(fake_products_URI);
    }
    getProdByType(type){
        return axios.get(products_URI +"getProducts/type/" + type);
=======
        return axios.get(PRODUCTS_BASE_URI);
    }

    getProductById(productId) {
        return axios.get(PRODUCTS_BASE_URI + "/" + productId);
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a
    }
    
}

export default new ProductService();