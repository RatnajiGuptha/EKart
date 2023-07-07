import { authenticateApi, api } from "./axiosConfig";

export const FashionProductService = {

    async getAllProducts() {
        const res = await api.request({
            url: `/api/fashionProducts/getAllProducts`,
            method: "GET",
        });
        return res;
    },

    async getProductById(productId) {
        const res = await authenticateApi.request({
            url: `/api/fashionProducts/getProductsById/${productId}`,
            method: "GET",
        });
        return res;
    },

    async getProdByType(type) {
        const res = await api.request({
            url: `/api/fashionProducts/getProductsByType/type/${type}`,
            method: "GET",
        });
        return res;
    },

    async getProductFilterTypeById(type, productId) {
        const res = await api.request({
            url: `/api/fashionProducts/getProductsByTypeAndId/type/${type}/${productId}`,
            method: "GET",
        });
        return res;
    },

    async getProductByGender(gender) {
        const res = await api.request({
            url: `/api/fashionProducts/getProductsBySuitable/suitableFor/${gender}`,
            method: "GET",
        });
        return res;
    },

    async getProductByGenderId(gender, id) {
        const res = await api.request({
            url: `/api/fashionProducts/getSuitableProductsById/suitableFor/${gender}/${id}`,
            method: "GET",
        });
        return res;
    },

    async getProductByGenderAndType(gender, type) {
        const res = await api.request({
            url: `/api/fashionProducts/getProductsByGenderAndType/suitablefor/${gender}/${type}`,
            method: "GET",
        });
        return res;
    },

    async getProductByGenderAndTypeWithProductId(gender, type, productId) {
        const res = await api.request({
            url: `/api/fashionProducts/getSuitableProductsByTypeAndId/suitablefor/${gender}/${type}/id/${productId}`,
            method: "GET",
        });
        return res;
    },

    async getFashionProductsBySellerName(sellerName) {
        const res = await authenticateApi.request({
            url: `/api/fashionProducts/getSellerProducts/sellerName/${sellerName}`,
            method: "GET",
        });
        return res;
    },

    async updateFashionProducts(fashionId, fashionProducts) {
        const res = await authenticateApi.request({
            url: `/api/fashionProducts/updateSellerProducts/${fashionId}`,
            method: "PUT",
            data: fashionProducts,
        });
        return res;
    },

    async addFashionProduct(fashionProducts) {
        const res = await authenticateApi.request({
            url: `/api/fashionProducts/add`,
            method: "POST",
            data: fashionProducts,
        });
        return res;
    },

    async getBySellerNameAndType(sellerName, type) {
        const res = await authenticateApi.request({
            url: `/api/fashionProducts/getProductsBySellerNameAndType/sellerName/${sellerName}/type/${type}`,
            method: "GET"
        });
        return res;
    }

}
