import React from "react";
import { appendErrors, useForm } from "react-hook-form";


export default function SignupForm() {

    const { watch, register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "philipdoe@gmail.com"
        }
    });


    const onSubmit = (values) => console.log("values ", values);
    console.log("errors ", errors)
    console.log(watch("email"))
    return (
        <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="email"
                    {...register("email", { required: "Email is required" })}
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                {
                    errors.email && <p className="error">Email is required</p>
                }
            </div>
            <div class="mb-3">
                <label for="password1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password1"
                    name="password"
                    {...register("password", {
                        required: "Password is required", 
                        minLength: {
                            value: 4,
                            message: "minimum of 7 characters"
                        }
                    })}
                />
                <p className="text-danger">
                    {errors.password?.message}
                </p>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword"
                    // name="confirm-password" 
                    {...register("confirmPassword", {
                        required: "Password confirmation is required"
                    })}
                />
                <p>
                    {errors.confirmPassword?.required}
                </p>
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Age</label>
                <input className="form-control" id="age"
                    // name="confirm-password" 
                    {...register("age", {
                        required: "Age is required",
                        min: {
                            value: 18,
                            message: "Adults only: 18 and above"
                        }
                    })}
                />
                <p className="text-danger">
                    {errors.age?.message}
                </p>
            </div>
            {/* 
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select> */}
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
