import React from 'react'

function Button(props) {
    const { variant = 'btn-dark', children = 'Learn Now' } = props
    return (
        <button className={`btn ${variant}  mt-2 text-decoration-none`} >{children}</button>
    )
}

export default Button

