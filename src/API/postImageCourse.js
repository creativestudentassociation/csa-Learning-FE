import axios from "axios";

export const postImage = async (id, imageData) => {
    const url = process.env.BASE_API;
    const token = localStorage.getItem('token')
    await axios.post(`${url}/courses/upload/${id}`, imageData, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err);
        });
}