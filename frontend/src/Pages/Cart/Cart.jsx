import React from 'react';
import SectionBanner from '../../Shared/SectionBanner';
import CartDetails from './CartDetails';
import BannerHome from '../Home/BannerHome';
import BannerCompany from '../Home/BannerCompany';

const Cart = () => {
    return (
        <div className='mt-24'>
            
            <SectionBanner pageName={'Cart Page'} path={'cart'}  ></SectionBanner>
            <div className='max-w-6xl mx-auto'>

                <CartDetails></CartDetails>


            </div>
         <BannerCompany></BannerCompany>


        </div>
    );
};

export default Cart;