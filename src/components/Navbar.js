import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const MotionLink = motion(Link);

const routes = [
    "Request an artisan", "refer an artisan", "Register as an artisan", "faq",
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
                        // <MotionLink label={route} key={index} to="/" />
                        <Link label={route} key={index} to="/" />
                    ))}
                    <Link label="products" to="/products" />
                    <div className="d-flex gap-4">
                        <motion.button className='btn btn-bg-primary p-3 bg-info border-5 rounded-pill'>Sign up</motion.button>

                        <motion.button className='btn btn-bg-primary p-3 bg-info border-5 rounded-pill'
                            whileHover={{ color: "red" }}
                        >Login</motion.button>
                    </div>
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