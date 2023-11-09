import axios from "axios";
const token = localStorage.getItem('token')


export const deleteCourse = (id) => {
    const url = process.env.BASE_API;
    try {
        axios.delete(`${url}/courses/${id}`, {
            headers: {
                'Authorization': token
            }
        })
    } catch (error) {
        console.log(error);
    }
}