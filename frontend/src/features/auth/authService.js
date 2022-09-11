import axios from 'axios'

const API_URL = '/api/users/'

//register a user
const register = async (userData) => {

    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//login a user
const login = async (userData) => {

    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout a user
const logOut = async() => {
    localStorage.removeItem("user")
}

const authService = {
    register,
    login,
    logOut
}



export default authService