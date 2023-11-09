import axios from "axios";


export const updateCourse = async (id, formInput) => {
    const url = process.env.BASE_API;
    const token = localStorage.getItem('token')
    await axios.put(`${url}/courses/${id}`, formInput, {
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