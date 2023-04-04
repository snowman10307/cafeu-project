import React from 'react';
import img1 from '../../assets/features/1 (1).png'
import img2 from '../../assets/features/2.png'
import img3 from '../../assets/features/3.png'
import img4 from '../../assets/features/4.png'

const Features = () => {

    return (
        <div className='grid grid-cols-2 md:grid-3 lg:grid-cols-4 gap-2 md:gap-8   mx-4 md:mx-44 my-24'>
        {/* <div className='flex items-center md:flex-wrap justify-center gap-12 mx-44'> */}

            <div className='border p-4 md:p-8 rounded-lg cursor-pointer hover:text-red-600 hover:shadow-lg'>
                <div className='flex'>
                    <img src={img1} className='h-16 w-16   mx-auto ' alt="" />
                </div>
                <p className='text-center font-bold mt-4 cursor-pointer   mb-2'> 100% Swiss Quality</p>
                <p className='text-center text-gray-400 text-justify'>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua </p>
            </div>

            <div className='border p-4 md:p-8 rounded-lg cursor-pointer hover:text-red-600 hover:shadow-lg'>
                <div className='flex'>
                    <img src={img2} className='h-16 w-16   mx-auto' alt="" />
                </div>
                <p className='text-center font-bold mt-4 cursor-pointer   mb-2'> Organic Production</p>
                <p className='text-center text-gray-400'>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua </p>
            </div>
            <div className='border p-4 md:p-8rounded-lg cursor-pointer hover:text-red-600 hover:shadow-lg'>
                <div className='flex'>
                    <img src={img3} className='h-16 w-16   mx-auto' alt="" />
                </div>
                <p className='text-center font-bold mt-4 cursor-pointer   mb-2'> Food Law Certified</p>
                <p className='text-center text-gray-400'>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua </p>
            </div>
            <div className='border p-4 md:p-8 rounded-lg cursor-pointer hover:text-red-600 hover:shadow-lg'>
                <div className='flex'>
                    <img src={img4} className='h-16 w-16   mx-auto' alt="" />
                </div>
                <p className='text-center font-bold mt-4 cursor-pointer   mb-2'> Food Production</p>
                <p className='text-center text-gray-400'>Lorem ipsum dol consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua </p>
            </div>

            

  


        </div>
    );
};

export default Features;