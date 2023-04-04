import React from 'react';
import banner from '../../assets/about/banner2.jpg'

const BannerHome = () => {
    return (
        <div className='mt-24'>


<div className="relative bg-cover bg-center h-96 md:h-64 flex items-center justify-center">
    {/* Background image */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }} />

    {/* Black shadow overlay */}
    <div className="absolute inset-0 bg-black opacity-50" />

    {/* Content */}
    <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-12">
        {/* Content of your banner */}
        <div className='flex gap-8 md:gap-12  flex-wrap'>
            <div>
                <h1 className='font-bold text-2xl mb-4 text-center'>Stay Informed About Special Offers</h1>
                <p className='text-center text-gray-200'>For Exclusive Deals, Coupons, News and More!</p>
            </div>
            <div className='flex'>
                <input type="email" className='bg-white outline-none text-black w-full rounded-l-lg py-2 px-4' placeholder="Enter your email" />
                <button className='bg-red-500 rounded-r-lg py-2 px-4 text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default BannerHome;