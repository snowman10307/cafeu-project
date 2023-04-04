import React from 'react';
import WhyBest from './WhyBest';
import Banner from './Banner';
import Team from './Team';
import HappyCustomer from './HappyCustomer';
import SectionBanner from '../../Shared/SectionBanner';
// import bannerImg from '../../assets/about/banner2.jpg'
import Banner3 from './Banner3';

const About = () => {
    return (
        <div className='mt-20'>

            <SectionBanner pageName={'About us'} path={'about'}  ></SectionBanner>
          
            
            <WhyBest></WhyBest>
            <Banner></Banner>
            <Team></Team>
            <Banner3></Banner3>
            <HappyCustomer></HappyCustomer>
        </div>
    );
};

export default About;