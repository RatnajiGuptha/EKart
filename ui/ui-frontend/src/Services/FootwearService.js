import { authenticateApi, api } from "./axiosConfig";

export const FootwearService = {
    async getAllFootwear() {
        const res = await api.request({
            url: `/api/footWear/getAllFootWear`,
            method: 'GET'
        })
        return res
    },

    async getFootwearById(footWearId) {
        const res = await api.request({
            url: `/api/footWear/getFootWearById/${footWearId}`,
            method: 'GET'
        })
        return res
    },

    async getFootwearByType(type) {
        const res = await api.request({
            url: `/api/footWear/getFootWearByType/${type}`,
            method: 'GET'
        })
        return res
    },

    async getFootwearByTypeAndId(type, id) {
        const res = await api.request({
            url: `/api/footWear/getFootWearByTypeAndId/type/${type}/${id}`,
            method: 'GET'
        })
        return res
    },


    async fetchBySellerName(sellerName) {
        const res = await api.request({
            url: `/api/footWear/getFootWearBySellerName/${sellerName}`,
            method: 'GET'
        })
        return res
    },

    async updateFootWearProducts(footWearId, footwearProducts) {
        const res = await api.request({
            url: `/api/footWear/updateProducts/${footWearId}`, footwearProducts,
            method: 'PUT'
        })
        return res
    },

    async saveFootWare(footWears) {
        const res = await api.request({
            url: `/api/footWear/add`, footWears,
            method: 'POST'
        })
        return res
    },
}

