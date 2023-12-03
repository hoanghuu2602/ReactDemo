
import axios from "axios";
import { toast } from "react-toastify";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8080'
});
instance.defaults.withCredentials = true;

// Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    const status = error.response?.status || 500;

    switch (status) {
        case 401: {
            toast.error('Unauthenrized the user, please login,...')
            // window.location.href = '/login'
            // return Promise.reject(error);
            return error.response.data
        }
        case 403: {
            toast.error(`You don't permission to access this resource...`)
            // window.location.href = '/login'
            // return Promise.reject(error);
            return error.response.data
        }
        default: {
            return Promise.reject(error);
        }
    }



    return Promise.reject(error);
});

export default instance