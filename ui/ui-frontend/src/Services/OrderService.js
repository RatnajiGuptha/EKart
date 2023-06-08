import { authenticateApi } from "./axiosConfig";

export const OrderService = {

    async createOrderForCart(userName, addressId, email) {
        const res = await authenticateApi.request({
            url: `/api/createOrder/${userName}/${addressId}/${email}`,
            method: "POST"
        })
        return res

    },

    async getOrderDetails(purchaseOrderId) {
        const res = await authenticateApi.request({
            url: `/api/getOrders/${purchaseOrderId}`,
            method: "GET"
        })
        return res

    },

    async getAllOrdersAfterPayment() {
        const res = await authenticateApi.request({
            url: `/api/getOrders`,
            method: "GET"
        })
        return res

    }

}

