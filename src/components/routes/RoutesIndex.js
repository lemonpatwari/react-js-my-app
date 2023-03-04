import React from 'react';
import {Routes, Route, Form} from "react-router-dom";
import Home from '../pages/Home'
import About from "../pages/About";
import ContactForm from "../pages/ContactForm";

const RoutesIndex = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact-form" element={<ContactForm />}/>
            </Routes>
        </>
    );
};

export default RoutesIndex;