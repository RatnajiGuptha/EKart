import { authenticateApi } from "./axiosConfig";

export const PromoCodesService = {
    async getAllPromoCodes() {
        const res = await authenticateApi.request({
            url: `/api/promocodes/getAllPromoCodes`,
            method: "GET",
        });
        return res;
    },

    async getDiscountPrice(promoCode) {
        const res = await authenticateApi.request({
            url: `/api/promocodes/getDiscountPrice/${promoCode}`,
            method: "GET",
        });
        return res;
    },

    async getAllPromoCodesByStatus(status) {
        const res = await authenticateApi.request({
            url: `/api/promocodes/getAllPromoCodes/${status}`,
            method: "GET",
        });
        return res;
    },
};
