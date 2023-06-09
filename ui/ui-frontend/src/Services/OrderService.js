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


    async generateOtp(email,subject,body) {
        const res = await api.request({
            url: `/api/generateOTP/${email}/${subject}/${body}`,
            method: "GET",
        });
        return res;
    },

    async getAllOrderByUser(email) {
        const res = await authenticateApi.request({
            url: `/api/getByEmail/${email}`,
            method: "GET",
        });
        return res;
    }


}

