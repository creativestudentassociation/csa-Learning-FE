import axios from "axios";

const url = process.env.BASE_API;
const token = localStorage.getItem('token')

// Get All 
export const getAllChallenge = (callback) => {
    axios.get(`${url}/challenges`, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            callback(res.data)
        }).catch((err) => {
            console.log(err);
        })
}

// create
export const createChallenge = async (data) => {
    await axios.post(`${url}/challenges`, data, {
        headers: {
            ' Authorization': token
        }
    })

        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

}

export const deleteChalenge = (id) => {
    const url = process.env.BASE_API;
    axios.delete(`${url}/challenges/${id}`, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

}