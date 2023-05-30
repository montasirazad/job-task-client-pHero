import React from 'react';
import PictureCard from '../PictureCard/PictureCard';
import Header from '../../Shared/Header/Header';

const fakeData = [
    {
        name: '',
        id: 0,
        image: ''
    },
    {
        name: '',
        id: 1,
        image: ''
    },
    {
        name: '',
        id: 2,
        image: ''
    }, {
        name: '',
        id: 3,
        image: ''
    }, {
        name: '',
        id: 4,
        image: ''
    }, {
        name: '',
        id: 5,
        image: ''
    }
]

const Gallery = () => {
    return (
        <>
            <Header />
            <div className='flex flex-wrap justify-around'>
                {
                    fakeData.map((x) => <PictureCard key={x.id} x={x} />)
                }
            </div>
        </>
    );
};

export default Gallery;