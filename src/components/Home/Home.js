import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import Project from '../Project/Project';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;