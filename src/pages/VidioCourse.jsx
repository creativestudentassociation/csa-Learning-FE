import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { Link, useParams } from 'react-router-dom'
import { getDetailCourse } from '../API/detailCourse'
import { useLogin } from '../hook/useLogin'

function VidioCourse() {
    useLogin()
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [vidioCourse, setVidioCourse] = useState({})
    useEffect(() => {
        getDetailCourse(id, (data) => {
            setVidioCourse(data.data)
            setLoading(false)
        })
    }, [id]);
    console.log(id);
    console.log(vidioCourse);
    return (

        <AuthLayout>
            <section className="vidioCourse d-grid align-items-center ">

                <div className="row ">



                    {loading ? (
                        <div className="d-flex justify-content-center w-100">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        Object.keys(vidioCourse).length &&
                        <>
                            <div className="col-xl-7">
                                <div className="ratio ratio-16x9">
                                    <iframe className="modulLearning-item" src={`https://www.youtube.com/embed/${vidioCourse.link_video}?rel=0`} title="YouTube video" allowFullScreen></iframe>
                                </div>
                                <h4>{vidioCourse.title}</h4>
                            </div>
                            <div className="col-xl-5">
                                <div className="recomendationVidio row  row-cols-2  g-3" >


                                    <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                                        <div className="col p-3 rounded-3" >

                                            <h5 className="fw-4">Apa itu HTML</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                                        </div>
                                    </Link>


                                    <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                                        <div className="col p-3 rounded-3">
                                            <h5 className="fw-4">Semantik Code</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                        </div>
                                    </Link>

                                    <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                                        <div className="col p-3 rounded-3">
                                            <h5 className="fw-4">Image Elements</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                        </div>
                                    </Link>

                                    <Link to={'/VidioCourse'} style={{ textDecoration: 'none' }}>
                                        <div className="col p-3 rounded-3">

                                            <h5 className="fw-4">Audio & Vidio</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                                        </div>
                                    </Link>




                                </div>
                            </div>
                        </>
                    )}


                </div>



            </section>
        </AuthLayout>
    )
}

export default VidioCourse