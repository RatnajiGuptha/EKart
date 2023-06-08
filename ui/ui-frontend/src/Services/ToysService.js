import { authenticateApi, api } from "./axiosConfig";

export const ToysService = {
    async getAllToys() {
        const res = await api.request({
            url: `/api/Toys/getAllToys`,
            method: 'GET'
        })
        return res;
    },

    async getToysById(toyId) {
        const res = await api.request({
            url: `/api/Toys/getToysById/${toyId}`,
            method: 'GET'
        })
        return res;
    },

    async getToysBySellerName(sellerName) {
        const res = await api.request({
            url: `/api/Toys/getToysBySellerName/sellerName/${sellerName}`,
            method: 'GET'
        })
        return res;
    },

    async updateToyProducts(toyId, toys) {
        const res = await api.request({
            url: `/api/Toys/updateSellerProducts/${toyId}`,
            method: 'PUT',
            data: toys
        })
        return res;
    },

    async saveToys(toysList) {
        const res = await api.request({
            url: `/api/Toys/add`,
            method: 'POST',
            data: toysList
        })
        return res;
    },
}



