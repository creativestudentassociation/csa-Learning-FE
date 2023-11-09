import React from 'react'

function Sayhai({ name, fotoProfile, logOut, onClick }) {
    return (
        <>
            <div className='accountUser w-100 ms-2' >
                <span className='float-end' onClick={onClick} style={{ fontSize: '23px', cursor: 'pointer' }} >{logOut}</span>
                <div className="d-flex mb-2">
                    <img src={fotoProfile} alt="fotoprofile" />
                    <p className='my-auto ms-2 ' > HI {name} </p>
                </div>
                <h3>What Will You Learn Today?</h3>
            </div>
        </>
    );
}

export default Sayhai