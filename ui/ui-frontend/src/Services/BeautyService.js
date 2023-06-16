import { authenticateApi, api } from "./axiosConfig";

export const BeautyService = {

    async getAllBeautyProducts() {
        const res = await api.request({
            url: `/api/beauty/getAllBeautyProducts`,
            method: 'GET'
        });
        return res;
    },

    async getBeautyProductsById(beautyId) {
        const res = await api.request({
            url: `/api/beauty/getBeautyById/${beautyId}`,
            method: 'GET'
        });
        return res;
    },

    async getBeautyBySellerName(sellerName) {
        const res = await authenticateApi.request({
            url: `/api/beauty/getBeautyBySellerName/${sellerName}`,
            method: 'GET'
        });
        return res;
    },

    async updateBeautyProducts(beautyId, beauty) {
        const res = await authenticateApi.request({
            url: `/api/beauty/updateSellerProducts/${beautyId}`,
            method: 'PUT',
            data: beauty
        });
        return res;
    },

    async saveAllBeautyProducts(beautyProductsList) {
        const res = await authenticateApi.request({
            url: `/api/beauty/addMultipleBeautyProducts`,
            method: 'POST',
            data: beautyProductsList
        });
        return res;
    },

    async saveBeautyProducts(beautyProductsList) {
        const res = await authenticateApi.request({
            url: `/api/beauty/add`,
            method: 'POST',
            data: beautyProductsList
        });
        return res;
    }


}