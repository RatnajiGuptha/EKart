import axios from "axios";

// const BASE_URL = "http://localhost:8400";
const BASE_URL = "http://localhost:8888";

class SecurityService {

    loginUser(login) {
        return axios.post(BASE_URL + "/login", login);
    }

    addUser(user) {
        return axios.post(BASE_URL + "/addUser", user);
    }

    addSeller(seller) {
        return axios.post(BASE_URL + "/addSeller", seller)
    }

    getUserByUsername(username) {
        return axios.get(BASE_URL + "/getUserName/" + username)
    }

    getUserByEmail(email) {
        return axios.get(BASE_URL + "/getUserByMail/" + email)
    }

    getUserByContactNumber(contactNumber) {
        return axios.get(BASE_URL + "/getUserByContactNumber/" + contactNumber);
    }

    getUserInfo(username) {
        return axios.get(BASE_URL + "/getUserInfo/" + username);
    }


}

export default new SecurityService();
