import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
import Button from '../../Element/Button';
import { people, star, twodot } from '../../../image';

function LearningPath({ title, time, student, modalTitle, modalDesc, location }) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col">
            <div className="card lerningcard">
                <div className="card-body">
                    <h6>{title}</h6>
                    <p>{time}</p>
                    <div className="mt-4" >
                        <p>{student}</p>
                        <div className="d-flex">
                            <img src={people} alt="" />
                            <img src={star} alt="" />
                            <button onClick={handleShow} > <img src={twodot} alt="" /></button>
                        </div>
                    </div>
                </div>

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <div className="modalLayout">
                    <Modal.Header closeButton >
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >{modalDesc}</Modal.Body>
                    <Modal.Footer>

                        <Button onClick={handleClose}>
                            <NavLink className={"text-decoration-none text-white"} to={location}>
                                Lern Now
                            </NavLink>
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>

        </div>
    )
}

export default LearningPath