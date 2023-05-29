import React from 'react';

const NewPost = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted');
    }

    return (
        <div className='p-3 mt-5 text-center '>
            <form onSubmit={handleSubmit}>
                <h2>Share a beautiful moment</h2>
                <input type="file"
                    className="file-input file-input-bordered file-input-xs w-full max-w-xs mt-4" />
                <br />
                <input type="text" placeholder='Give a title'
                    className="input input-primary input-bordered w-1/2 mt-4" />
                <br />
                <textarea placeholder="Tell something about your post"
                    className="textarea textarea-bordered w-1/2 mt-4" />
                <br />
                <button className='btn btn-primary btn-sm' type="submit" >Share</button>

            </form>

        </div>
    );
};

export default NewPost;