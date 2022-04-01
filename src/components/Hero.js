import React from 'react'


const Hero = () => {
    return (
        <div className="container">
            <div className="row justify-content-around align-items-center">
                <div className="col-4">
                    <h4>Request skilled artisan close to you</h4>
                    <p>Never get stuck in any household issues again, easily connect with artisans close to you and live a stress free life</p>
                    <button className='btn btn-info p-3'>Request an artisan</button>
                </div>


                <div className="col-auto">
                    <img src="/images/ussd@2x.png" width="250px" height="auto" alt="phone" srcSet="" />
                </div>
            </div>
        </div>
    )
}

export default Hero;