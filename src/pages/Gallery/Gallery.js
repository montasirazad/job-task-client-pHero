import React, { useEffect, useState } from 'react';
import PictureCard from '../PictureCard/PictureCard';
import Header from '../../Shared/Header/Header';


const Gallery = () => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/newpost')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data)
                // console.log(data);
            })
    }, [])

    return (
        <>
            <Header />
            <div className='flex flex-wrap justify-center m-8'>
                {
                    allPosts.map(allPost => <PictureCard key={allPost._id} allPost={allPost} />)
                }
            </div>
        </>
    );
};

export default Gallery;