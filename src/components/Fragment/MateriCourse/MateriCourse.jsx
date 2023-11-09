import React from 'react'
import { Link } from 'react-router-dom';


function MateriCourse({ image, title, location }) {
    const url = process.env.BASE_API;
    return (
        <div className="col card p-3 rounded-4 ">
            <Link to={`/course/${location}`}  >
                <img src={`${url}/${image} `} alt="" className="w-100 mb-3 rounded-3" />
            </Link>
            <h6> {title}</h6>
        </div>
    )
}

export default MateriCourse