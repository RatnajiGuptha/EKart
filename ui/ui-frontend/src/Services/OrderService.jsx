import axios from "axios";
const Purchase_Order_URL = "http://localhost:8300/api/createOrder";

class OrderService {
    createOrderForCart(userName) {
        return axios.post(Purchase_Order_URL + "/" + userName);
    }
}

export default new OrderService();