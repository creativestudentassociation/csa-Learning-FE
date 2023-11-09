import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { Link } from 'react-router-dom'
const url = process.env.BASE_API;
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { useLogin } from '../hook/useLogin';
import { getAllCourses } from '../API/getAllCourses';



function MateriList() {
    useLogin()

    const [courses, setCourses] = useState([])
    useEffect(() => {
        getAllCourses((data) => {
            setCourses(data.data)
        })
    }, []);

    return (
        <AuthLayout>


            <section className="materiList">


                <div className="containerMateri">
                    <div className="rekomenMateriList">

                        <Splide options={{
                            focus: 'center',
                            autoWidth: true,
                            gap: 30,
                            type: 'loop',
                            arrows: false,
                            autoplay: true,
                            perPage: 1,
                            breakpoints: {
                                500: {
                                    pagination: false,
                                },

                            }

                        }}>
                            {courses.map((course, index) => (
                                <SplideSlide key={index} >
                                    <Link to={`/Course/${course.id}`}>
                                        <img src={`${url}/${course.image_course}`} alt="Image " />
                                    </Link>
                                </SplideSlide>
                            ))}


                        </Splide>

                    </div>

                    <h4 className='text-center mb-5' >Belajar Dasar HTML</h4>

                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 g-3" >

                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }} >
                            <div className="col p-3 rounded-3" >

                                <h5 className="fw-4">Apa itu HTML</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                            </div>
                        </a>



                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }}>
                            <div className="col p-3 rounded-3">
                                <h5 className="fw-4">Semantik Code</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </a>

                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }}>
                            <div className="col p-3 rounded-3">
                                <h5 className="fw-4">Image Elements</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </a>

                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }}>
                            <div className="col p-3 rounded-3">

                                <h5 className="fw-4">Audio & Vidio</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </a>

                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }}>
                            <div className="col p-3 rounded-3">

                                <h5 className="fw-4">Canvas</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </a>

                        <a href="https://www.w3schools.com/html/" target="_blank" style={{ textDecoration: 'none' }}>
                            <div className="col p-3 rounded-3">

                                <h5 className="fw-4">Svg</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            </div>
                        </a>


                    </div>
                </div>
            </section >


        </AuthLayout >
    )
}

export default MateriList 