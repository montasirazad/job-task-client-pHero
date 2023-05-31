import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const PictureCard = (props) => {

    const { imageUrl, imgTitle, name, like, _id } = props.allPost;
    const [likes, setLikes] = useState(like);
    const [likeColor, setLikeColor] = useState('');

    const likeStyle = {
        color: 'red'
    }

    const handleLike = () => {

        setLikeColor(likeColor ? '' : likeStyle);
        setLikes(parseInt(like) + 1)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5" style={{ color: '' }}>
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
                        <AiFillHeart
                            // text-3xl mx-2
                            style={likeColor}
                            onClick={handleLike}
                            className={'text-3xl mx-2'} />
                        <p>{likes}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/a}`}><button className="btn btn-primary">Learn more</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PictureCard;