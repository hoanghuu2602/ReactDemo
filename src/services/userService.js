import axios from "../setup/axios"

const loginUser = (valueLogin, password) => {
    return axios.post('/api/v1/login', {
        valueLogin, password
    })
}
const fetchListUser = (page,limit) => {
    return axios.get(`/api/user/read?page=${page}&limit=${limit}`)
}
const fetchDeleteUser = (user) => {
    return axios.delete(`/api/user/delete`,{data:{id:user.id}})
}
const fetchAllGroup = (user) => {
    return axios.get(`/api/group/read`)
}
const fetchCreateUser = (userData) => {
    // return axios.post(`/api/user/create`,{userData} )
    return axios.post(`/api/user/create`, { ...userData })
}
export {
    loginUser,
    fetchListUser,
    fetchDeleteUser,
    fetchAllGroup,
    fetchCreateUser,

}