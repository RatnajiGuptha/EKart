import { authenticateApi, api } from "./axiosConfig";

export const OrderService = {

    async createOrderForCart(userName,email) {
        const res = await api.request({
            url: `/api/createOrder/${userName}/${email}`,
            method: "POST"
        })
        return res

    },

    async getOrderDetails(purchaseOrderId) {
        const res = await api.request({
            url: `/api/getOrders/${purchaseOrderId}`,
            method: "GET"
        })
        return res

    }
}

