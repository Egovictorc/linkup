import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'

const Signup = () => {
    const [name, setName] = useState("");
    const [state, setState ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("state ", state)
        // e.stopPropagation();
    }

    return (
        <Layout>

            <div className='' style={{ textAlign: "center" }}>
                <div style={{ width: "40px", height: "40px", margin: "0 auto" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><defs><linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%"><stop offset="0%" stop-color="#B66816"></stop><stop offset="100%" stop-color="#fda92d"></stop></linearGradient><linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FED680"></stop><stop offset="100%" stop-color="#fda92d"></stop></linearGradient><linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FED680"></stop><stop offset="100%" stop-color="#fda92d"></stop></linearGradient></defs><g fill="#fda92d" fill-rule="evenodd" stroke="none" stroke-width="1"><path fill="url(#BG1)" d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"></path><path fill="url(#BG2)" d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"></path><path fill="url(#BG3)" d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"></path></g></svg>
                </div>
                <p>
                    Sign up to continue
                </p>
            </div>
            <section className='' style={{ maxWidth: 550, margin: "0 auto" }}>
                <form onSubmit={handleSubmit} method="post">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        name="email" value={state.email}
                        onChange={handleChange}
                        />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                        name="password" value={state.password}
                        onChange={handleChange}
                        />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </section>

        </Layout>
    )
}

export default Signup