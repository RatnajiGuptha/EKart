import axios from "axios";

const BASE_URL = "http://localhost:8400/";

class SecurityService {

    loginUser(login) {
        return axios.post(BASE_URL + "login", login)
    }

}

export default new SecurityService();
