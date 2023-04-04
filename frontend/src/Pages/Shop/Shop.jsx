import React from 'react';
import SectionBanner from '../../Shared/SectionBanner';
import { Link } from 'react-router-dom';

const Shop = () => {
    return (
        <div className='mt-32'>
            <SectionBanner pageName={'Shop'} path={'shop'}  ></SectionBanner>



            <div>
                <Link to='/shopDetails'>
                    <button className='mx-auto border  mb-24 mx-64'>shop details</button>
                </Link>
            </div>

        </div>
    );
};

export default Shop;