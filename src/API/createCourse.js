import axios from "axios";

export const createCourse = (data, callback) => {
    const url = process.env.BASE_API;
    const token = localStorage.getItem('token')

    axios.post(`${url}/courses`, data, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            callback(true, res.data);
            console.log('respon createCourse', res.data);
        })
        .catch((error) => {
            callback(false, error)
            console.log(error);
        });


}

