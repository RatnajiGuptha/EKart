import axios from "axios";

const TOYS_BASE_URL = "http://localhost:8200/api/Toys"

class ToysService {

    getAllToys() {
        return axios.get(TOYS_BASE_URL + "/getToys");
    }

    getToysById(toyId) {
        return axios.get(TOYS_BASE_URL + "/getToys/" + toyId);
    }

    getToysBySellerName(sellerName){
        return axios.get(TOYS_BASE_URL+"/getToys/sellerName/"+sellerName);
    }

}




export default new ToysService();