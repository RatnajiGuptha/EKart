import axios from "axios";

// const Purchase_Order_URL = "http://localhost:8300/api";
const User_Balance_URL = "http://localhost:8888/api/userBalance";

class userBalanceService {
    getUserBalance(userName){
        return axios.get(User_Balance_URL + "/getBalanceByUserName/"+userName);
    }
}

export default new userBalanceService();