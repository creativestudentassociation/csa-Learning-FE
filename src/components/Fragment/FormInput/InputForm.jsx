import React from 'react'

function FormInput({ htmlFor, title, type, onChange, value, required }) {
    return (
        <>
            <label htmlFor={htmlFor} className="form-label ">
                {title}
            </label>
            <input
                type={type}
                className="form-control"
                aria-describedby="emailHelp"
                name={htmlFor}
                onChange={onChange}
                value={value}
                required={required}
            />
        </>
    )
}

export default FormInput