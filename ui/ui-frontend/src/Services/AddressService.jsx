import axios from "axios";

const BASE_URL = "http://localhost:8888/api/address";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};

class AddressService {

    addNewAddress(address) {
        return axios.post(BASE_URL + "/addAddress", address), header;
    }

    getAllAddress() {
        return axios.get(BASE_URL + "/getAllAddress", header);
    }

    deleteAddress(id) {
        return axios.delete(BASE_URL + "/deleteAddressById/" + id, header)
    }

    getAddressById(id) {
        return axios.get(BASE_URL + "/GetAddressById/" + id, header)
    }

}

export default new AddressService();