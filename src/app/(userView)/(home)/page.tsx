import About from '@//components/home/About';
import Banner from '@//components/home/Banner';
import Contact from '@//components/home/Contact';
import Service from '@//components/home/Service';
import React from 'react';

const page = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <Contact/>
        </div>
    );
};

export default page;