import { authenticateApi, api } from "./axiosConfig";

export const AccessoriesService = {
    async getAllAccessories() {
        const res = await api.request({
            url: `/api/accessoriesProducts/getAllAccessoriesProduct`,
            method: 'GET'
        })
        return res;
    },

    async getAccessoriesProductById(id) {
        const res = await api.request({
            url: `/api/accessoriesProducts/getAccessoriesProductById/${id}`,
            method: 'GET',
        })
        return res;
    },

    async getAccessoriesByType(type) {
        const res = await api.request({
            url: `/api/accessoriesProducts/getAccessories/type/${type}`,
            method: 'GET'
        })
        return res;
    },

    async getAccessoriesByTypeAndId(type, id) {
        const res = await api.request({
            url: `/api/accessoriesProducts/getAccessories/type/${type}/${id}`,
            method: 'GET'
        })
        return res
    },

    async getAccessoriesProductsBySellerName(sellerName) {
        const res = await api.request({
            url: `/api/accessoriesProducts/getAccessories/sellerName/${sellerName}`,
            method: 'GET'
        })
        return res
    },

    async updateAccessoriesProducts(accessoryId, accessoriesProducts) {
        const res = await api.request({
            url: `/api/accessoriesProducts/updateProducts/${accessoryId}`, accessoriesProducts,
            method: "PUT"
        })
        return res
    },

    async addProduct(accessoriesProducts) {
        const res = await api.request({
            url: `/api/accessoriesProducts/add`, accessoriesProducts,
            method: "POST"
        })
        return res
    }
}