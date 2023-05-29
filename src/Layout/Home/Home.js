import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import NewPost from '../../Shared/NewPost/NewPost';

const Home = () => {
    return (
        <div>
            <Header />
            <NewPost />
            <Footer />
        </div>
    );
};

export default Home;