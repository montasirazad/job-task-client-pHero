import React from 'react';
import { useForm } from "react-hook-form";


const NewPost = () => {


    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_image_bb_key;
    console.log(imageHostKey);
    const onSubmit = data => {

        console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
            })

    }



    return (
        <div className='p-3 mt-5 text-center '>

            <h2 className='text-2xl'>Share a image</h2> <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" className='my-10'
                    {...register("image")}
                /> <br />
                <input type="text"
                    {...register("title")}
                    placeholder="Enter a caption"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <br /> <br />
                <textarea type="textarea"
                    {...register("details")}
                    placeholder='Enter some details about this image'
                    className="input input-bordered input-primary w-full max-w-xs" />
                <br /> <br />

                <button type='submit' className="input input-bordered input-primary w-full max-w-xs">Share</button>

            </form>


            {/* <form onSubmit={handleSubmit}>
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

            </form> */}

        </div>
    );
};

export default NewPost;