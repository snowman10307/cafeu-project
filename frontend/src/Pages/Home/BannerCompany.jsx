import React from 'react';
import banner from '../../assets/banner/1.jpg'
import banner2 from '../../assets/banner/2.png'
import banner3 from '../../assets/banner/3.png'
import banner4 from '../../assets/banner/5.png'
 

 

import { Pagination } from 'swiper/modules';


const BannerCompany = () => {
    return (
        <div>

            <div className="relative bg-cover bg-center h-96 md:h-64 flex items-center justify-center">
                {/* Background image */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }} />

                {/* Black shadow overlay */}
                <div className="absolute inset-0 bg-black opacity-50" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-12">
                    {/* Content of your banner */}
                    <div className='flex gap-8 md:gap-12  flex-wrap  '>
                       <div className='flex gap-8 flex-wrap md:flex-nowrap items-center justify-center'>
                        <img src={banner2} alt="" />
                        <img src={banner3} alt="" />
                        <img src={banner4} alt="" />
                       </div>
 


                    </div>
                </div>
            </div>


        </div>
    );
};

export default BannerCompany;