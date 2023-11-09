import React, { useEffect, useState } from 'react'
import AuthLayout from '../components/Layout/AuthLayout'
import FormInput from '../components/Fragment/FormInput/InputForm'
import { createChallenge, deleteChalenge, getAllChallenge } from '../API/codeChallenge';
import Modal from '../components/Fragment/Modal/Modal'
import { Trash } from 'react-bootstrap-icons';
import { useAdmin } from '../hook/useAdmin';

function ChallengeAdmin() {
    useAdmin()
    const [challenges, setChallenges] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    const [inputForm, setInputForm] = useState({
        title: '',
        link: ''
    })

    useEffect(() => {
        getAllChallenge((data) => {
            setChallenges(data.data)
        })
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target
        setInputForm({ ...inputForm, [name]: value })

    }

    const handleCreate = async (e) => {
        e.preventDefault()

        if (inputForm.link.length < 7) {
            setErrorMsg('Link G-Form not Valid')
        } else {
            await createChallenge(inputForm)
            setErrorMsg('')
            getAllChallenge((data) => {
                setChallenges(data.data)
            })
        }

        setInputForm({
            title: '',
            link: ''
        })
    }

    const handleDelete = (id) => {
        try {
            deleteChalenge(id);
            setChallenges(challenges.filter(challenge => challenge.id !== id));
        } catch (error) {
            console.error('Gagal menghapus produk:', error);
        }
    }



    return (
        <AuthLayout>
            <section id="codeChalenge">
                <form className='mx-auto mb-5 ' onSubmit={handleCreate} >

                    <div className="mb-3 ">
                        <FormInput htmlFor={'title'} type={'text'} title={'Name Challenge'} onChange={handleChange} value={inputForm.title} />
                    </div>

                    <div className="mb-3 ">
                        <FormInput htmlFor={'link'} type={'text'} title={'Link Google from '} onChange={handleChange} value={inputForm.link} />
                    </div>
                    <p className='text-danger' >{errorMsg}</p>
                    <button className='btn ' type='submit' >Create</button>

                </form>

                <div className="table-content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Nama </th>
                                <th scope="col">Link G-FROM</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>



                        <tbody>
                            {challenges.map((challenge, index) => (
                                <tr key={index} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{challenge.title}</td>
                                    <td><a href={challenge.link} target="_blank"><p>{challenge.title}</p></a></td>
                                    <td ><Trash data-bs-toggle="modal" className='trash'
                                        data-bs-target={`#action${challenge.id}`} />

                                        <Modal title={'Delete'} id={`action${challenge.id}`} textButton={'Delete'} styleButton={'btn-danger'}
                                            onClick={() => handleDelete(challenge.id)} >
                                            <p>are you sure you want to delete  {challenge.title}</p>
                                        </Modal>

                                    </td>


                                </tr>
                            ))}
                        </tbody>




                    </table>
                </div>
            </section>
        </AuthLayout>
    )
}

export default ChallengeAdmin