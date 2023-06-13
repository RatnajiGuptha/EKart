import { authenticateApi } from "./axiosConfig";

export const UserBalanceService = {

    async getUserBalance(userName) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/getBalanceByUserName/${userName}`,
            method: "GET",
        });
        return res;
    },

    async updateUserBalance(userName,amount) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/updateBalance/${userName}/${amount}`,
            method: "PUT",
            data: amount
        });
        return res;
    }

}

