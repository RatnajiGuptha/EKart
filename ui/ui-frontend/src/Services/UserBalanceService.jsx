import axios from "axios";

const User_Balance_URL = "http://localhost:8888/api/userBalance";

const token = localStorage.getItem('token');

const header = {
    headers: { Authorization: `Bearer ${token}` }
};

class userBalanceService {
    getUserBalance(userName) {
        return axios.get(User_Balance_URL + "/getBalanceByUserName/" + userName, header);
    }
}

export default new userBalanceService();