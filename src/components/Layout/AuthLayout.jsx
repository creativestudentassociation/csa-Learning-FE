import React from 'react'
import ButtonSidebar from '../Element/ButtonSidebar/ButtonSidebar'
import Sidebar from '../../pages/Sidebar'



function AuthLayout({ children }) {
    return (
        <div id="main" >
            <ButtonSidebar />
            <Sidebar />
            <div className="page-content">
                {children}
            </div>
        </div>

    )
}

export default AuthLayout