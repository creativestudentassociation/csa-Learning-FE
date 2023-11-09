import React from 'react'
import Button from '../../Element/Button'

function CaraoselPage({ children, condition, image, interval, title }) {
    return (

        <div className={`carousel-item ${condition} mb-5`} data-bs-interval={interval}>
            <div className="innercaraosel d-flex mx-auto" >
                <img src={image} alt="" />
                <aside>
                    <h4 > {title} </h4>
                    <p>
                        {children}
                    </p>
                    <Button />
                </aside>
            </div>
        </div>

    )
}

export default CaraoselPage