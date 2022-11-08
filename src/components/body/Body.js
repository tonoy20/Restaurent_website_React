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
                <Route path="/" element={<Navigate to="/home" />} exact component={Home} />
                <Route path="/menu" exact element={<Menu />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/about" exact component={About} />

            </Routes>
        </div>
    );
}

export default Body;