import classNames from 'classnames'
import React from 'react'
import cx from "classnames";


function Step({ title, meta, src, alt, index }) {
    const order = index % 2 == 0? "order-1": null;
    console.log("order ", order)
    return (

        <div className="row align-items-center w-100 justify-content-center mx-auto mb-5" style={{maxWidth: "750px"}}>
            {/* <div className="col-7 order-1"> */}
            <div className={cx(order, "col-8")}>
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