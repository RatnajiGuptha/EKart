import axios from "axios";

export const api = axios.create({
    withCredentials: false,
    baseURL: "http://localhost:8888",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
    }
})

// Authenticating API with token
export const authenticateApi = axios.create({
    withCredentials: false,
    baseURL: "http://localhost:8888",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
   
})

// defining a custom error handler for all APIs
const errorHandler = (error) => {
    const statusCode = error.response.status
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }
    return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})
