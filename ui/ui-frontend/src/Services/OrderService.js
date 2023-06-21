import { authenticateApi, api } from "./axiosConfig";

export const OrderService = {

    async createOrderForCart(addressId, coupon, email) {
        const res = await authenticateApi.request({
            url: `/api/createOrder/${addressId}/${coupon}/${email}`,
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

    },

    async getByUserName(userName) {
        const res = await authenticateApi.request({
            url: `/api/getByUserName/${userName}`,
            method: "GET"
        })
        return res;
    },

    async generateOtp(email) {
        const res = await api.request({
            url: `/api/generateOTP/${email}`,
            method: "GET",
        });
        return res;
    }

}

