import React from 'react';
import HappyCustomer from '../About/HappyCustomer';
import Team from '../About/Team';
import Banner3 from '../About/Banner3';
import WhyBest from '../About/WhyBest';
import Features from './Features';
import BannerHome from './BannerHome';
import BannerCompany from './BannerCompany';
import SpecialMenu from './SpecialMenu';
 
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <div className='mt-24'>

 <HomeCarousel></HomeCarousel>
            <Features></Features>
            <BannerHome></BannerHome>
            <WhyBest></WhyBest>
            <SpecialMenu></SpecialMenu>

            <Banner3></Banner3>
        
            <Team></Team>

            <BannerCompany></BannerCompany>
            <HappyCustomer></HappyCustomer>
            

        </div>
    );
};

export default Home;      