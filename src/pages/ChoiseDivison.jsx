import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AuthLayout from '../components/Layout/AuthLayout'
import { multimedia, pemograman } from '../image'
import { useLogin } from '../hook/useLogin'

function ChoiseDivision() {
    useLogin()
    const [loading, setLoading] = useState(true)


    setTimeout(() => {
        setLoading(false);
    }, 800);
    return (
        <AuthLayout>

            <section className="ChoiseDivision d-flex align-items-center justify-content-center">
                {loading ? (
                    <div className="d-flex justify-content-center align-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <figure className="row rows-auto">
                        <div className="col" >
                            <NavLink to='/course' > <img src={pemograman} /></NavLink>
                            <figcaption >
                                <h2 className='text-center' >PROGRAMING</h2>
                                <p>Divisi Pemrograman adalah tim ahli yang menciptakan solusi perangkat lunak inovatif. Melalui kolaborasi kreatif, kami mengubah ide menjadi kode yang efisien, mendorong kemajuan teknologi dan pengalaman pengguna yang unik.</p>
                            </figcaption>
                        </div>

                        <div className="col" >
                            <NavLink ><img src={multimedia} className='mx-auto' /></NavLink>
                            <figcaption>
                                <h2 className='text-center'>MULTIMEDIA</h2>
                                <p>Multi media kami menggabungkan seni visual, audio, dan interaktif untuk menghasilkan pengalaman luar biasa. Kreativitas bertemu teknologi dalam setiap detail. Kami menggabungkan seni visual, audio, dan interaktif dalam multi media kami.</p>
                            </figcaption>
                        </div>
                    </figure>
                )}
            </section>

        </AuthLayout>

    )
}

export default ChoiseDivision