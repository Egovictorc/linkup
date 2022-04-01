import React from 'react'

const Footer = () => {
    return (

        <section className="container py-3 bg-light">
            <footer className='row w-100'>
                <div className="col-auto text-align: center mx-auto">
                    All rights reserved &copy; {new Date().getFullYear()}
                </div>
            </footer>
        </section>
    )
}

export default Footer