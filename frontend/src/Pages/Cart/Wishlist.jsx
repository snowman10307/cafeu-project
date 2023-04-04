import React from 'react';
import Table from './Table';
import SectionBanner from '../../Shared/SectionBanner';



const Wishlist = () => {
    return (
        <div className='my-24'>
 <SectionBanner pageName={'Wishlist Page'} path={'wishlist'}  ></SectionBanner>
            <div className='max-w-6xl mx-auto'>

            <Table page={'wishlist'}></Table>


            </div>

          
        </div>
    );
};

export default Wishlist;