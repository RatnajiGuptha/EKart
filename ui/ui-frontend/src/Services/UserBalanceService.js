import { authenticateApi, api } from "./axiosConfig";

export const UserBalanceService = {

    async getUserBalance(email) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/getBalanceByEmail/${email}`,
            method: "GET",
        });
        return res;
    },

    async updateUserBalance(email, amount) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/updateBalanceByEmail/${email}/${amount}`,
            method: "PUT",
            data: amount
        });
        return res;
    },

    async addMoneyTowallet(userBalance) {
        const res = await api.request({
            url: `/api/userBalance/addBalance`,
            method: "POST",
            data: userBalance
        });
        return res;
    }
}

