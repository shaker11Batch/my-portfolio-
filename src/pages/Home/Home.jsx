import React from 'react';
import Navbar from '../Navbar/Navbar';
import Profile from '../../component/Profile/Profile';
import Skills from '../../component/Skills/Skills';
import About from '../About/About';
import Contact from '../contact/Contact';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Profile></Profile>
            <Contact/>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;