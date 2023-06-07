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
        const res = await api.request({
            url: `/api/electronicsProducts/getElectronics/sellerName/${sellerName}`,
            method: "GET",
        });
        return res
    },

    async updateElectronicsProducts(electronicsId, electronicsProducts) {
        const res = await api.request({
            url: `/api/electronicsProducts/updateProducts/${electronicsId}`,
            method: "PUT",
            data: electronicsProducts,
        });
        return res;
    },

    async saveElectronics(products) {
        const res = await api.request({
            url: `/api/electronicsProducts/add`,
            method: "POST",
            data: products,
        });
        return res;
    },

}

