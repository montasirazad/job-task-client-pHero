import React, { useState } from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const LogIn = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data)
    };



    return (
        <>
            <Header />

            <div className='h-[400px] flex justify-center items-center text-center'>


                <div>

                    <h2>Login</h2> <br />
                    <Link to='/signup' className='text-purple-700'>New User..? Click here to sign up</Link>
                    <br /> <br />
                    <div className="form-control">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input type="text"
                                {...register("email")}
                                placeholder="Enter your e-mail"
                                className="input input-bordered input-primary w-full max-w-xs" />
                            <br /> <br />
                            <input type="password"
                                {...register("password")}
                                placeholder='Enter your password'
                                className="input input-bordered input-primary w-full max-w-xs" />
                            <br /> <br />

                            <button type='submit' className="input input-bordered input-primary w-full max-w-xs">Log In</button> :

                        </form>
                        <br />

                        <h3>Or</h3>

                        <button className="btn btn-outline btn-primary my-4">Log in with Google</button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default LogIn;