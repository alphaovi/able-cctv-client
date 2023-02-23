import React from 'react';
import About from '../About/About';
import Banners from '../Banners/Banners';
import Blogs from '../Blogs/Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Prices from '../Pricing/Prices/Prices';
import Services from '../Services/Services/Services';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import TeamMembers from '../TeamMembers/TeamMembers/TeamMembers';
import Testimonials from '../Testimonials/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <About></About>
            <Services></Services>
            <Prices></Prices>
            <SpecialOffer></SpecialOffer>
            <TeamMembers></TeamMembers>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;