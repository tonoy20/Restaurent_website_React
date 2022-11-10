import React from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Routes >
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Navigate to='/home' replace />} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact element={<About />} />

            </Routes>
        </div>
    );
}

export default Body;