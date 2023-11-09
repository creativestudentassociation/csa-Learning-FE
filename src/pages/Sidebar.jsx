import React, { useEffect, useState } from 'react';
import { JournalCode, Speedometer2 } from 'react-bootstrap-icons';
import { X } from 'react-bootstrap-icons';
import { JournalBookmark } from 'react-bootstrap-icons';
import SideBarlist from '../components/Fragment/SideBarlist/SideBarlist';
import { csaLogo } from '../image';
import { ChatLeftDots } from 'react-bootstrap-icons';
import { useSideBar } from '../hook/useSideBar';
import { Display } from 'react-bootstrap-icons';






function Sidebar() {

    const [hideBar, setHideBar] = useState('d-none')
    const role = useSideBar()
    useEffect(() => {
        if (role === 'admin') {
            setHideBar('d-block')
        } else {
            setHideBar('d-none')
        }
    },);

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                    <X className="btn-close mx-10" data-bs-dismiss="offcanvas" aria-label="Close"></X>
                    <div className="offcanvas-header">
                        <img className='mx-auto' src={csaLogo} alt="" />

                    </div>

                    <div className="offcanvas-body ">
                        <ul className="menu me-4">
                            <SideBarlist title='Home' icon={<Speedometer2 style={{ fontSize: '23px' }} />} location='/home' />
                            <SideBarlist title='Course' icon={<JournalBookmark style={{ fontSize: '23px' }} />} location='/choiseDivision' />
                            <SideBarlist title='Learn More' icon={<JournalCode style={{ fontSize: '23px' }} />} location="/materiList" />
                            <SideBarlist title='Chat AI' icon={<ChatLeftDots style={{ fontSize: '23px' }} />} location="/chatAI" />
                            <SideBarlist title='Materi Admin' icon={<Display style={{ fontSize: '23px' }} />} location="/materiAdmin" condition={hideBar} />
                            <SideBarlist title='Challenge Admin' icon={<Display style={{ fontSize: '23px' }} />} location="/challengeAdmin" condition={hideBar} />
                        </ul>

                    </div>

                </div>
            </div>
        </div >


    )
}

export default Sidebar
