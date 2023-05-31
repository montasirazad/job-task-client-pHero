import React from 'react';

const PictureCard = (props) => {
    
    const { imageUrl, imgTitle,name } = props.allPost
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                <figure>
                    <img src={imageUrl} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{imgTitle}</h2>
                    <br />
                    <h2>
                        By {name}
                    </h2>
                     
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PictureCard;