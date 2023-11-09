import { useEffect, useState } from 'react';
import { Codechalenge } from '../../../image'
import Modal from '../Modal/Modal'
import { getAllChallenge } from '../../../API/codeChallenge';


function CodeChalenge() {
    const [challenges, setChallenges] = useState([])
    useEffect(() => {
        getAllChallenge((data) => {
            setChallenges(data.data)
        })
    }, []);

    return (
        <>
            <Modal id={'codeChalengeModal'} styleButton={'d-none'} >
                {challenges.map((chalenge, index) => (
                    <ul className="list-group" key={index}>
                        <a href={chalenge.link} target='blank_'><li className="list-group-item">{chalenge.title}</li></a>
                    </ul>
                ))}

            </Modal>


            <div>
                <h5>Code Challenge</h5>
                <img data-bs-toggle="modal" data-bs-target="#codeChalengeModal" src={Codechalenge} alt="" />
            </div>
        </>
    )
}

export default CodeChalenge
