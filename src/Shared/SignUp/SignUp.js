import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';

const SignUp = () => {




    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data)
    };


    return (
        <>
            <Header />

            <div className='h-[400px] flex justify-center items-center text-center'>
                <div>
                    <h2>Sign Up</h2> <br />
                    <div className="form-control">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"
                                {...register("name")}
                                placeholder="Enter your name"
                                className="input input-bordered input-primary w-full max-w-xs" />


                            <br /> <br />
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


                            <button className="input input-bordered input-primary w-full max-w-xs">Register</button>

                        </form>


                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;