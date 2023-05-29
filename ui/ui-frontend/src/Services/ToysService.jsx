import axios from "axios";

// const TOYS_BASE_URL = "http://localhost:8200/api/Toys";
const TOYS_BASE_URL = "http://localhost:8888/api/Toys"

class ToysService {

    getAllToys() {
        return axios.get(TOYS_BASE_URL + "/getToys");
    }

    getToysById(toyId) {
        return axios.get(TOYS_BASE_URL + "/getToys/" + toyId);
    }

    getToysBySellerName(sellerName) {
        return axios.get(TOYS_BASE_URL + "/getToys/sellerName/" + sellerName);
    }

    updateToyProducts(toyId,toys){
        return axios.put(TOYS_BASE_URL+"/updateProducts/"+toyId,toys);
    }

    saveAllToys(toysList){
        return axios.post(TOYS_BASE_URL+"/addMultipleToys",toysList);
    }

}




export default new ToysService();