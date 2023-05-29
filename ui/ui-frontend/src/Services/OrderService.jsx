import axios from "axios";

// const Purchase_Order_URL = "http://localhost:8300/api";
const Purchase_Order_URL = "http://localhost:8888/api";

class OrderService {
   
    createOrderForCart(userName){
        return axios.post(Purchase_Order_URL+ "/createOrder/"+ userName);

    }

    getOrderDetails(purchaseOrderId){
        return axios.get(Purchase_Order_URL+"/getOrders/"+purchaseOrderId);
    }
}
export default new OrderService();
