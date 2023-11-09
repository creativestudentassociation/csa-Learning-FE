import React from 'react'
import { JustifyLeft } from 'react-bootstrap-icons'

function ButtonSidebar() {
    return (
        <JustifyLeft className='openClose' data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></JustifyLeft>
    )
}

export default ButtonSidebar