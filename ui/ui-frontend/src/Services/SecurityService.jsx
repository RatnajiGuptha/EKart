import axios from "axios";

const BASE_URL = "http://localhost:8400";

class SecurityService {

    loginUser(login) {
        return axios.post(BASE_URL + "/login", login);
    }

    addUser(user) {
        return axios.post(BASE_URL + "/addUser", user);
    }

    getUserByUsername(username) {
        return axios.get(BASE_URL + "/getUserName/" + username)
    }

    getUserByEmail(email) {
        return axios.get(BASE_URL + "/getUserByMail/" + email)
    }
}

export default new SecurityService();
