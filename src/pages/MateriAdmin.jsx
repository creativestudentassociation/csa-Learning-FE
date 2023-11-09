import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import { useAdmin } from "../hook/useAdmin"
import '../css/materiAdmin.css'
import Modal from '../components/Fragment/Modal/Modal'
import FormInput from '../components/Fragment/FormInput/InputForm'
import { getAllCourses } from '../API/getAllCourses'
import { createCourse } from '../API/createCourse'
import { deleteCourse } from '../API/deleteCourse'
import { updateCourse } from '../API/updateCourse'
import { updateImageCourse } from '../API/updateImage'
import { postImage } from '../API/postImageCourse'

function MateriAdmin() {
    useAdmin()
    const url = process.env.BASE_API;
    const [courses, setCourses] = useState([])
    const [idImage, setIdImage] = useState('')
    const [statusLink, setStatusLink] = useState('')
    const [buttonImageErr, setButtonImageErr] = useState('d-block')




    useEffect(() => {
        getAllCourses((data) => {
            setCourses(data.data)
        })
    }, []);

    const [formInput, setFormInput] = useState({
        title: '',
        image_course: null,
        link_video: '',
        playlist: 'playlist'
    })

    const handleChange = (e) => {
        const { name, value, } = e.target;
        setFormInput({ ...formInput, [name]: value });
    }


    const handleImageChange = (e) => {
        const { name, files } = e.target
        setFormInput({ ...formInput, [name]: files[0] });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        createCourse(formInput, (status, response) => {
            setStatusLink('')
            setButtonImageErr('d-block')
            if (status) {
                console.log('data berhasil terkirim', response.data);
                setIdImage(response.data)
                console.log(response.response.data.data);
                setStatusLink('')

            } else {
                setStatusLink(response.response.data.data)
                setButtonImageErr('d-none')
            }

            getAllCourses((data) => {
                setCourses(data.data)
            })
        });
    }



    const handleSubmitImage = async () => {
        if (!formInput.image_course) {
            alert("Gambar tidak boleh kosong!");
        } else {
            alert('Materi terkirim')
            const formData = new FormData();
            formData.append('image_course', formInput.image_course);
            await postImage(idImage.id, formData)
            setIdImage('');
            setFormInput({
                title: '',
                image_course: null,
                link_video: '',
                playlist: 'playlist'
            })
            getAllCourses((data) => {
                setCourses(data.data)
            })
        }
    }


    const handleUpdateImage = async (id) => {
        const formData = new FormData();
        formData.append('image_course', formInput.image_course);
        await updateImageCourse(id, formData)
        getAllCourses((data) => {
            setCourses(data.data)
        })
    }


    const handleDelete = (id) => {
        deleteCourse(id);
        setCourses(courses.filter(course => course.id !== id));
    };


    const handleUpdate = async (id) => {
        await updateCourse(id, formInput)
        setFormInput({
            title: '',
            image_course: null,
            link_video: '',
            playlist: 'playlist'
        })
        getAllCourses((data) => {
            setCourses(data.data)
        })

    }
    console.log(statusLink);

    return (
        <AuthLayout>
            <section id='materiAdmin'>

                {(formInput.title !== '' && formInput.link_video !== '') && (
                    <Modal id={'addImage'} title={'Choise Image'} onClick={handleSubmitImage} styleButton={`btn-primary ${buttonImageErr}`} >
                        <div className="mb-3 col">
                            <p className='text-danger'>{statusLink}</p>
                            <FormInput htmlFor={'image_course'} type={'file'} title={'Image Materi'} onChange={handleImageChange} required={'required'} />
                        </div>
                    </Modal>
                )}

                <form className='mx-auto mb-5 ' onSubmit={handleSubmit} >
                    <div className="mb-3 col">
                        <FormInput htmlFor={'title'} type={'text'} title={'Name Materi'} onChange={handleChange} value={formInput.title} required={'required'} />
                    </div>
                    <div className="mb-3 col">
                        <FormInput htmlFor={'link_video'} type={'text'} title={'Link Vidio '} onChange={handleChange} value={formInput.link_video} required={'required'} />
                    </div>
                    <button className='btn' type='submit' data-bs-toggle="modal" data-bs-target='#addImage' >Create </button>
                </form>


                {courses.length > 0 && courses.map((course, index) => (

                    <div key={index}>
                        <div className="materi-content card mb-3"  >

                            <div className="row row-cols-lg-2 row-cols-1 " >
                                <div className="col-xl-4">
                                    <img src={`${url}/${course.image_course} `} alt='materi' />
                                </div>
                                <div className="col-xl-8 my-auto">
                                    <div className="card-body text-white py-auto">

                                        <h6>ID : {course.id}</h6>
                                        <h5>{course.title}</h5>
                                        <h6>Link Video : {course.link_video}</h6>

                                        <hr />

                                        <div className="button-action d-flex  ">
                                            <button className='btn me-3' data-bs-toggle="modal"
                                                data-bs-target={`#delete${course.id}`}>Delete</button>

                                            <button className='btn me-3' data-bs-toggle="modal"
                                                data-bs-target={`#update${course.id}`}>Update Materi</button>

                                            <button className='btn me-3' data-bs-toggle="modal"
                                                data-bs-target={`#updateImage${course.id}`}>Update Image</button>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <Modal id={`update${course.id}`} title={`Update Materi ${course.id} `} onClick={() => handleUpdate(course.id)} >
                            <div className="mb-3">
                                <FormInput title={'Title Materi'} htmlFor={'title'} value={formInput.title} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <FormInput title={'Link Vidio From Youtube'} htmlFor={'link_video'} value={formInput.link_video} onChange={handleChange} />
                            </div>
                        </Modal>

                        <Modal id={`updateImage${course.id}`} title={`Update Image ${course.id} `} onClick={() => handleUpdateImage(course.id)} >
                            <div className="mb-3 " >
                                <FormInput htmlFor={'image_course'} type={'file'} title={'Image Materi'} onChange={handleImageChange} required={'required'} />
                            </div>
                        </Modal>

                        <Modal onClick={() => handleDelete(course.id)} id={`delete${course.id}`} title={'Delete Course'} styleButton={'btn-danger'} textButton='Delete' >
                            <p>are you sure want delete this course {course.id} ?</p>
                        </Modal>

                    </div>

                ))}











            </section>
        </AuthLayout >
    )
}

export default MateriAdmin