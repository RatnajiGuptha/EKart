import axios from "axios";

const TOYS_BASE_URL = "http://localhost:8888/api/Toys";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};

class ToysService {

    getAllToys() {
        return axios.get(TOYS_BASE_URL + "/getToys");
    }

    getToysById(toyId) {
        return axios.get(TOYS_BASE_URL + "/getToys/" + toyId);
    }

    getToysBySellerName(sellerName) {
        return axios.get(TOYS_BASE_URL + "/getToys/sellerName/" + sellerName, header);
    }

    updateToyProducts(toyId, toys) {
        return axios.put(TOYS_BASE_URL + "/updateProducts/" + toyId, toys, header);
    }

    saveAllToys(toysList) {
        return axios.post(TOYS_BASE_URL + "/addMultipleToys", toysList, header);
    }

}




export default new ToysService();