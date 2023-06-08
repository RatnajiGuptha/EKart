import { authenticateApi, api } from "./axiosConfig";

export const OrderService = {

    async createOrderForCart(userName, addressId) {
        const res = await api.request({
            url: `/api/createOrder/${userName}/${addressId}`,
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

    },

    async getAllOrdersAfterPayment() {
        const res = await api.request({
            url: `/api/getOrders`,
            method: "GET"
        })
        return res

    }

}

