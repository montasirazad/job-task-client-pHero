import React from 'react';
import { AiFillHeart } from 'react-icons/ai'
const PictureCard = (props) => {

    const { imageUrl, imgTitle, name, like } = props.allPost
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure>
                    <img src={imageUrl} alt="" className='h-40' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{imgTitle}</h2>
                    <br />
                    <h2>
                        By {name}
                    </h2>
                    <div className='flex'>
                        <AiFillHeart className='text-3xl mx-2' />
                        <p>{like}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PictureCard;