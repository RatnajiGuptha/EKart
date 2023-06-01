import axios from "axios";

const Purchase_Order_URL = "http://localhost:8888/api";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};

class OrderService {

    createOrderForCart(userName) {
        return axios.post(Purchase_Order_URL + "/createOrder/" + userName, header);

    }

    getOrderDetails(purchaseOrderId) {
        return axios.get(Purchase_Order_URL + "/getOrders/" + purchaseOrderId, header);
    }
}
export default new OrderService();
