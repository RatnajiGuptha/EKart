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

    getUserInfo(username) {
        return axios.get(BASE_URL + "/getUserInfo/" + username)
    }

    getUserByEmail(email) {
        return axios.get(BASE_URL + "/getUserByMail/" + email)
    }

    updateUserByUserName(username, fullName, email, contactNumber) {
        return axios.put(BASE_URL + "/updateUserData/" + username + "/" + fullName + "/" + email + "/" + contactNumber)
    }
}

export default new SecurityService();
