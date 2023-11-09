import axios from "axios";
import jwt_decode from 'jwt-decode'
const url = process.env.BASE_API

export const login = (formLogin, callback) => {
    axios.post(`${url}/auth/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err)
        })
}

export const getUsername = (token) => {
    const decoded = jwt_decode(token)
    console.log(decoded);
    return decoded.data.name
}

export const getRoleAdmin = (token) => {
    const decoded = jwt_decode(token)
    return decoded.data.role
}