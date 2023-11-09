import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarlist({ location, icon, title, condition, }) {

    return (
        <li className={`sidebar-item ${condition}`}>
            <NavLink to={location} className='sidebar-link'>
                <div className='iconNavbar  '>{icon} </div>
                <span>{title}</span>
            </NavLink>
        </li>
    )
}

export default SideBarlist