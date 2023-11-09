import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import MateriCourse from '../components/Fragment/MateriCourse/MateriCourse'
import { People } from 'react-bootstrap-icons'
import { csaLogo } from '../image'
import { getAllCourses } from '../API/getAllCourses'
import { useLogin } from '../hook/useLogin'





function Course() {
    useLogin()
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true)


    const [courses, setCourses] = useState([])
    useEffect(() => {
        getAllCourses((data) => {
            setCourses(data.data)
            setLoading(false)
        })
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
    }

    const filteredCourses = courses.filter(course => {
        return course.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

    console.log(filteredCourses);

    return (

        <AuthLayout>
            <section className="course">
                <div className="hero-course ">
                    <img className='mb-4' src={csaLogo} />
                    <p>Kelas online belajar Pemograman from A to Z. Cocok buat yang pengen punya karir bagus, skill dibutuhin industri, gaji tinggi dan bisa bikin web atau aplikasi buat ngembangin bisnis online sendiri.</p>
                    <div className="d-flex  mt-5">
                        <People className='mt-1 me-2' />
                        <p>120 Mahasiswa</p>
                    </div>
                </div>


                <div className="container mx-auto mt-5 ">

                    <input type="text" className="searchCourse form-control w-25 " value={searchQuery} onChange={handleSearch} placeholder="Search Materi..." aria-label="Username" aria-describedby="basic-addon1" />

                    <hr className='hr' />
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-4 ">

                        {loading ? <div className="d-flex justify-content-center w-100">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                            filteredCourses.map((course, index) => (
                                <MateriCourse key={index} title={course.title}
                                    location={course.id} image={course.image_course} />
                            ))}

                    </div>
                </div>
            </section>
        </AuthLayout>
    )
}

export default Course