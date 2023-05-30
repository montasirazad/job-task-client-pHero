import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import NewPost from '../../Shared/NewPost/NewPost';
import Banner from '../../pages/Banner/Banner';

const Home = () => {
    return (

        <>
            <Header />
            <div>
                <Banner />
                <NewPost />
                <Footer />
            </div>
        </>

    );
};

export default Home;