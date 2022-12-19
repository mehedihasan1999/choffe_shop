import React from 'react';
import HeaderNav from '../Shared/HeaderNav';
import AboutUs from './AboutUs';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Menu from './Menu';
import Product from './Product';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <HeroSection></HeroSection>
            <AboutUs></AboutUs>
            <Menu></Menu>
            <Product></Product>
            <Review></Review>
            <Contact></Contact>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;