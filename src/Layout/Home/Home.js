import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../../pages/Banner/Banner';

const Home = () => {
    return (

        <>
            <Header />
            <div>
                <Banner />
                {/* <NewPost /> */}
                <Footer />
            </div>
        </>

    );
};

export default Home;