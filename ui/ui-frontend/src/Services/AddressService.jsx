import axios from "axios";

const BASE_URL = "http://localhost:8888/api/address";

class AddressService {

    addNewAddress(address) {
        return axios.post(BASE_URL + "/addAddress", address);
    }

    getAllAddress() {
        return axios.get(BASE_URL + "/getAllAddress");
    }

    deleteAddress(receiverName) {
        return axios.delete(BASE_URL + "/deleteAddress/" + receiverName)
    }

}

export default new AddressService();