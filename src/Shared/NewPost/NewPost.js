import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';


const NewPost = () => {
    const { signedInUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_image_bb_key;
    //console.log(imageHostKey);


    const onSubmit = data => {

        //console.log(data.image[0]);
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
                if (imgData.success) {

                    const imgUrl = imgData.data.display_url;
                    const name = data.name;
                    const imgTitle = data.title;
                    const imgDetail = data.details;
                    let like = 0;
                    let role = 'user'

                    const allData = {
                        name: name,
                        email: signedInUser.email,
                        role: role,
                        imageUrl: imgUrl,
                        imgTitle: imgTitle,
                        imgDetail: imgDetail,
                        like: like
                    }
                    console.log(allData);

                    fetch('http://localhost:5000/api/v1/newpost', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(allData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.status === 'success') {
                                alert('Image uploaded successfully');
                                window.location.reload(false)

                            }
                            console.log(data)
                        })

                }
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
                    {...register("name")}
                    placeholder="Enter Your name"
                    className="input input-bordered input-primary w-full max-w-xs" />
                <br /><br />
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