import axios from "axios"

const loginUser = (valueLogin, password) => {
    return axios.post('http://localhost:8080/api/v1/login', {
        valueLogin, password
    })
}
const fetchListUser = (page,limit) => {
    return axios.get(`http://localhost:8080/api/user/read?page=${page}&limit=${limit}`)
}
export {
    loginUser,
    fetchListUser,

}