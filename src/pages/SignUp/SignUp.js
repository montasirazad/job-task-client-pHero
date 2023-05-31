import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Header from '../../Shared/Header/Header';
const SignUp = () => {


    const { signedInUser, createNewUserWithEmailAndPassword } = useContext(AuthContext)

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        createNewUserWithEmailAndPassword(data.email, data.password);

        console.log(data)
    };


    return (
        <>
            <Header />

            {
                signedInUser.email ?

                    <div className='my-8  text-center'>
                        <h2 className='text-3xl'>Thanks for register</h2>

                        <Link to='/' className='text-primary'> Click here to go back to main Website</Link>

                    </div>


                    : <div className='h-[400px] flex justify-center items-center text-center'>
                        <div>
                            <h2>Sign Up</h2> <br />
                            <div className="form-control">

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* <input type="text"
                                {...register("name")}
                                placeholder="Enter your name"
                                className="input input-bordered input-primary w-full max-w-xs" />


                            <br /> <br /> */}
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
                    </div>}
        </>
    );
};

export default SignUp;