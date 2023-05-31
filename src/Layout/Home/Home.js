import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../../pages/Banner/Banner';
import MidSection from '../../pages/MIdSection/MidSection';

const Home = () => {
    return (

        <>
            <Header />
            <div>
                <Banner />
                <MidSection />
                <Footer />
            </div>
        </>

    );
};

export default Home;