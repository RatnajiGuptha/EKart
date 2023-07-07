import { authenticateApi } from "./axiosConfig";

export const AddressService = {
    async addNewAddress(address) {
        const res = await authenticateApi.request({
            url: `/api/address/addAddress`,
            method: 'POST',
            data: address
        });
        return res;
    },

    async getAllAddress(email) {
        const res = await authenticateApi.request({
            url: `/api/address/getAllAddressByEmail/${email}`,
            method: 'GET',
        });
        return res;
    },

    async deleteAddress(id) {
        const res = await authenticateApi.request({
            url: `/api/address/deleteAddressById/${id}`,
            method: 'DELETE'
        });
        return res;
    },

    async getAddressById(id) {
        const res = await authenticateApi.request({
            url: `/api/address/GetAddressById/${id}`,
            method: 'GET'
        });
        return res;
    }

}