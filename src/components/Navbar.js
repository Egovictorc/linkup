import React from 'react'
import { Link } from "react-router-dom"
const routes = [
    "Request an artisan", "refer an artisan", "Register as an artisan", "faq"
]

const Navbar = () => {
    return (
        <div className='container'>
            <div className="row justify-content-between align-content-center">
                <div className="col-1 my-auto">
                    <img src="/images/brokenLink@2x.png" alt="logo" width="inherit" height="30px" />
                </div>
                <div className="col-10 d-flex justify-content-end align-items-center">
                    {routes.map((route, index) => (
                        <Route label={route} />
                    ))}
                    <button className='btn btn-bg-primary p-3 bg-info border-5'>Login</button>
                </div>
            </div>
        </div>
    )
}



const Route = ({ label }) => (

    <Link to="/" className='text-decoration-none me-3'>
        {label}
    </Link>
)

export default Navbar