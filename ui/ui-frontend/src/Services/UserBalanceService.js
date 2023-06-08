import { authenticateApi, api } from "./axiosConfig";

export const UserBalanceService = {

    async getUserBalance(userName) {
        const res = await api.request({
            url: `/api/userBalance/getBalanceByUserName/${userName}`,
            method: "GET",
        });
        return res;
    }

}

