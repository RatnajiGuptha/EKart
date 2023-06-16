import { authenticateApi, api } from "./axiosConfig";

export const FootwearService = {
    async getAllFootwear() {
        const res = await api.request({
            url: `/api/footWear/getAllFootWear`,
            method: 'GET'
        })
        return res;
    },

    async getFootwearById(footWearId) {
        const res = await api.request({
            url: `/api/footWear/getFootWearById/${footWearId}`,
            method: 'GET'
        })
        return res;
    },

    async getFootwearByType(type) {
        const res = await api.request({
            url: `/api/footWear/getFootWearByType/${type}`,
            method: 'GET'
        })
        return res;
    },

    async getFootwearByTypeAndId(type, id) {
        const res = await api.request({
            url: `/api/footWear/getFootWearByTypeAndId/type/${type}/${id}`,
            method: 'GET'
        })
        return res;
    },


    async fetchBySellerName(sellerName) {
        const res = await authenticateApi.request({
            url: `/api/footWear/getFootWearBySellerName/${sellerName}`,
            method: 'GET'
        })
        return res;
    },

    async updateFootWearProducts(footWearId, footwearProducts) {
        const res = await authenticateApi.request({
            url: `/api/footWear/updateSellerProducts/${footWearId}`,
            method: 'PUT',
            data: footwearProducts
        })
        return res;
    },

    async saveFootWare(footWears) {
        const res = await authenticateApi.request({
            url: `/api/footWear/add`,
            method: 'POST',
            data: footWears
        })
        return res;
    },

    async getFootWearBySellerNameAndType(sellerName, type){
        const res = await authenticateApi.request({
            url: `/api/footWear/getFootWearBySellerNameAndType/sellerName/${sellerName}/type/${type}`,
            method: "GET"
        });
        return res;
    }
}

