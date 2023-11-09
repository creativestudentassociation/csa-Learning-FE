import axios from "axios";
export const getDetailCourse = (id, callback) => {
    const url = process.env.BASE_API;
    const token = localStorage.getItem('token');
    axios.get(`${url}/courses/${id}`, {
        headers: {
            'Authorization': token
        }
    })

        .then((res) => {
            callback((res.data))
        }).catch((err) => {
            console.log(err);
        });
}