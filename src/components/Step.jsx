import React from 'react'

function Step({ title, meta, src, alt }) {
    return (

        <div className="row align-items-center w-100 justify-content-center mx-auto" style={{maxWidth: "600px"}}>
            <div className="col-7 order-1">
                <h5>{title}</h5>
                <p>{meta}</p>
            </div>
            <div className="col-4">
                <img src={src} alt={alt}  width="150px" height="auto" />
            </div>

        </div>
    )
}

export default Step