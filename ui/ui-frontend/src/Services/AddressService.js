import { authenticateApi, api } from "./axiosConfig";

export const AddressService = {
    async addNewAddress(address) {
        const res = await api.request({
            url: `/api/address/addAddress`,
            method: 'POST',
            data: address
        });
        return res;
    },

    async getAllAddress(userName) {
        const res = await api.request({
            url: `/api/address/getAllAddress`,
            method: 'GET',
            data: userName
        });
        return res;
    },

    async deleteAddress(id) {
        const res = await api.request({
            url: `/api/address/deleteAddressById/${id}`,
            method: 'DELETE'
        });
        return res;
    },
    async getAddressById(id) {
        const res = await api.request({
            url: `/api/address/GetAddressById/${id}`,
            method: 'GET'
        });
        return res;
    }

}