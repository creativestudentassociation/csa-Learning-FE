import React from 'react'

function Modal({ id, title, children, styleButton = 'btn-primary',
    textButton = 'Save changes', onClick, onChange, dataDismis = 'modal', className }) {

    return (
        <div
            className="modal fade "
            id={id}
            tabIndex={-1}
            aria-hidden="true"
        >
            <div className={`modal-dialog modal-xl modal-dialog-centered ${className} `}>
                <div className="modal-content text-black">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            {title}
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss={dataDismis}
                        >
                            Close
                        </button>

                        <button type="button" className={`btn ${styleButton}`} onChange={onChange} onClick={onClick} data-bs-dismiss={dataDismis} >
                            {textButton}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal