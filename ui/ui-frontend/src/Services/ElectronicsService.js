import { authenticateApi, api } from "./axiosConfig";

export const ElectronicsService = {

    async getAllElectronicProducts() {
        const res = await api.request({
            url: `/api/electronicsProducts/getAllElectronics`,
            method: "GET",
        });
        return res;
    },

    async getElectronicsById(electronicsId) {
        const res = await api.request({
            url: `/api/electronicsProducts/getElectronicsById/${electronicsId}`,
            method: "GET",
        });
        return res;
    },

    async getElectronicsByType(type) {
        const res = await api.request({
            url: `/api/electronicsProducts/getElectronicsByType/${type}`,
            method: "GET",
        });
        return res;
    },

    async getElectronicsByTypeWithId(type, electronicsId) {
        const res = await api.request({
            url: `/api/electronicsProducts/getElectronicsByTypeAndId/${type}/${electronicsId}`,
            method: "GET",
        });
        return res;
    },

    async getElectronicsBySellerName(sellerName) {
        const res = await authenticateApi.request({
            url: `/api/electronicsProducts/getElectronicsBySellerName/sellerName/${sellerName}`,
            method: "GET",
        });
        return res;
    },

    async updateElectronicsProducts(electronicsId, electronicsProducts) {
        const res = await authenticateApi.request({
            url: `/api/electronicsProducts/updateSellerProducts/${electronicsId}`,
            method: "PUT",
            data: electronicsProducts,
        });
        return res;
    },

    async saveElectronics(product) {
        const res = await authenticateApi.request({
            url: `/api/electronicsProducts/add`,
            method: "POST",
            data: product,
        });
        return res;
    },

    async getElectronicsBySellerNameAndType(sellerName, type){
        const res = await authenticateApi.request({
            url: `/api/electronicsProducts/getElectronicsBySellerNameAndType/sellerName/${sellerName}/type/${type}`,
            method: "GET"
        });
        return res;
    }

}

