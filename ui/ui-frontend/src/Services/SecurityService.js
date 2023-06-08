import { authenticateApi, api } from "./axiosConfig";

export const SecurityService = {

    async loginUser(login) {
        const res = await api.request({
            url: `/login`,
            method: 'POST',
            data: login
        });
        return res;
    },

    async addUser(user) {
        const res = await api.request({
            url: `/addUser`,
            method: 'POST',
            data: user
        });
        return res;
    },

    async addSeller(seller) {
        const res = await api.request({
            url: `/addSeller`,
            method: 'POST',
            data: seller
        });
        return res;
    },

    async getUserByUsername(username) {
        const res = await api.request({
            url: `getUserName/${username}`,
            method: 'GET',
        });
        return res;
    },

    async getUserInfo(username) {
        const res = await api.request({
            url: `/getUserInfo/${username}`,
            method: 'GET',
        });
        return res;
    },

    async getUserByEmail(email) {
        const res = await api.request({
            url: `/getUserByMail/${email}`,
            method: 'GET',
        });
        return res;
    }
    ,
    async getUserByContactNumber(contactNumber) {
        const res = await api.request({
            url: `/getUserByContactNumber/${contactNumber}`,
            method: 'GET',
        });
        return res;
    },

    async updateUserByUserName(username, fullName, email, contactNumber) {
        const res = await api.request({
            url: `/updateUserData/${username}/${fullName}/${email}/${contactNumber}`,
            method: 'PUT',
        });
        return res;
    }

}

