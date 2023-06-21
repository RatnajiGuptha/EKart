import { authenticateApi } from "./axiosConfig";

export const UserBalanceService = {

    // async getUserBalance(userName) {
    //     const res = await authenticateApi.request({
    //         url: `/api/userBalance/getBalanceByUserName/${userName}`,
    //         method: "GET",
    //     });
    //     return res;
    // },
    async getUserBalance(email) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/getBalanceByEmail/${email}`,
            method: "GET",
        });
        return res;
    },

    async updateUserBalance(email,amount) {
        const res = await authenticateApi.request({
            url: `/api/userBalance/updateBalanceByEmail/${email}/${amount}`,
            method: "PUT",
            data: amount
        });
        return res;
    },

    // async updateUserBalance(userName,amount) {
    //     const res = await authenticateApi.request({
    //         url: `/api/userBalance/updateBalance/${userName}/${amount}`,
    //         method: "PUT",
    //         data: amount
    //     });
    //     return res;
    // }

}

