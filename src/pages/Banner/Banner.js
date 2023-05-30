import React from 'react';
import imag1 from '../../images/img-1.jpg';
import imag2 from '../../images/img-2.jpeg';
import image3 from '../../images/img-3.jpg';
import { FcShare, FcLikePlaceholder, FcComments } from "react-icons/fc";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image3} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={imag1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <img src={imag2} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Picasso</h1>
                        <p className="py-6">Your favorite image sharing site</p>
                        <p className="py-2">
                            <FcShare />Share<FcLikePlaceholder />Like<FcComments />Comment
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;