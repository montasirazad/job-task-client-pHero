import React from 'react';
import { Link } from 'react-router-dom';

const MidSection = () => {
    return (
        // <div className='text-center'>
        //     <Link to='/share-a-image'>Get Started</Link>
        // </div>

        <div className='flex justify-center p-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Lorem, ipsum.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum.</p>
                    <div className="card-actions justify-end">
                        <Link className='btn btn-primary' to='/share-a-image'>Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidSection;