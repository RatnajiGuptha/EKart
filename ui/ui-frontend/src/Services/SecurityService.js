
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

    async getUserInfo(email) {
        const res = await api.request({
            url: `/getUserInfo/${email}`,
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

    async updateUserByUserName(fullName, email, contactNumber) {
        const res = await authenticateApi.request({
            url: `/updateUserData/${fullName}/${email}/${contactNumber}`,
            method: 'PUT',
        });
        return res;
    },

    async updatePasswordByUsername(username, password) {
        const res = await authenticateApi.request({
            url: `/updatePasswordByUserName/${username}/${password}`,
            method: 'PUT'
        })
        return res;
    },

    async updatePasswordByEmail(email, password) {
        const res = await api.request({
            url: `/updatePasswordByEmail/${email}/${password}`,
            method: 'PUT'
        })
        return res;
    }

}