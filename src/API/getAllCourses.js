import axios from "axios";

export const getAllCourses = (callback) => {
    const url = process.env.BASE_API;
    const token = localStorage.getItem('token');

    axios.get(`${url}/courses`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then((res) => {
            callback(res.data);
        })
        .catch((error) => {
            console.error("Error fetching courses:", error);
        });
};
