import axios from 'axios';

const FASHION_PRODUCTS_BASE_URI = "http://localhost:8200/api/fashionProducts";

class FashionProductService {

    getAllProducts() {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts");
    }

    getProductById(productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/" + productId)
    }

    getProdByType(type) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/type/" + type);
    }

    getProductFilterTypeById(type, productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/type/" + type + "/" + productId);

    }

    getProductByGender(gender) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/suitableFor/" + gender);

    }

    getProductByGenderId(gender, id) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProducts/suitableFor/" + gender + "/" + id)
    }

    getProductByGenderAndType(gender, type) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsBy/suitablefor/" + gender + "/" + type);
    }

    getProductByGenderAndTypeWithProductId(gender, type, productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsBy/suitablefor/" + gender + "/" + type + "/id/" + productId);
    }


}

export default new FashionProductService();