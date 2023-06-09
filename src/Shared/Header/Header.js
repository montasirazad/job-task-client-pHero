import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { BiFace } from "react-icons/bi";

const Header = () => {
    const { signedInUser, handleGoogleSignOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-green-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/gallery'>
                                Gallery
                            </Link>
                        </li>


                        {/* <li>
                            <Link to='/my-account'>
                                My Account
                            </Link>
                        </li> */}

                        <li>
                            <Link to='/share-a-image'>
                                Share a image
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Picasso</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/gallery'>
                            Gallery
                        </Link>
                    </li>

                

                    {/* <li>
                        <Link to='/my-account'>
                            My Account
                        </Link>
                    </li> */}

                    <li>
                        <Link to='/share-a-image'>
                            Share a image
                        </Link>
                    </li>
                </ul>
            </div>



            <div className="navbar-end mx-7">
                {
                    signedInUser.email && <div className="avatar">
                        <div className="w-10 rounded-full mx-5">
                            {
                                signedInUser ? <img src={signedInUser.photoURL} alt='' />
                                    : <BiFace className='text-4xl' />
                            }
                        </div>
                    </div>
                }

                {
                    signedInUser.email && <p className='mx-2'>Hello,{signedInUser.displayName ? signedInUser.displayName
                        : signedInUser.email}</p>
                }



                {
                    signedInUser.email ?
                        <button className='btn btn-warning' onClick={handleGoogleSignOut}>Log out</button> :
                        <Link to='/login'>
                            <button className='btn btn-outline btn-error btn-sm mx-5'>Log in</button>
                        </Link>}
            </div>
        </div>
    );
};

export default Header; 