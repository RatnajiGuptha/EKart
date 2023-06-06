import axios from 'axios';

const FASHION_PRODUCTS_BASE_URI = "http://localhost:8888/api/fashionProducts";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};

class FashionProductService {

    getAllProducts() {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getAllProducts");
    }

    getProductById(productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsById/" + productId)
    }

    getProdByType(type) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsByType/type/" + type, header)
    }


    getProductFilterTypeById(type, productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsByTypeAndId/type/" + type + "/" + productId);
    }

    getProductByGender(gender) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsBySuitable/suitableFor/" + gender);
    }

    getProductByGenderId(gender, id) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getSuitableProductsById/suitableFor/" + gender + "/" + id);
    }

    getProductByGenderAndType(gender, type) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getProductsByGenderAndType/suitablefor/" + gender + "/" + type);
    }

    getProductByGenderAndTypeWithProductId(gender, type, productId) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getSuitableProductsByTypeAndId/suitablefor/" + gender + "/" + type + "/id/" + productId);
    }

    getFashionProductsBySellerName(sellerName) {
        return axios.get(FASHION_PRODUCTS_BASE_URI + "/getSellerProducts/sellerName/" + sellerName, header);
    }

    updateFashionProducts(fashionId, fashionProducts) {
        return axios.put(FASHION_PRODUCTS_BASE_URI + "/updateProducts/" + fashionId, fashionProducts,header);
    }

    addFashionProduct(fashionProducts) {
        return axios.post(FASHION_PRODUCTS_BASE_URI + "/add", fashionProducts,header);
    }


}

export default new FashionProductService();