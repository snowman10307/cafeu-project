import React from 'react';
import banner from '../../assets/about/bannerjpg.jpg'

const Banner = () => {
    return (
        <div className='my-24'>

            {/* <div className="bg-cover bg-center h-auto flex items-center justify-center   "
                style={{ backgroundImage: `url(${banner})` }} >

                <div className='z-12 text-white text-center p-8'>
                    <p className='text-xl'>Call to action</p>
                    <p className='font-bold text-4xl my-3'> Hire Your Next Candidate On Discate </p>
                    <p className='text-xl'>Call Us: +99 698 569 565</p>
                    <button className='bg-sky-300 px-8 py-2 rounded-md transition-all duration-300 my-8'>Discover More</button>
                </div>

            </div> */}

            <div className="relative   bg-cover bg-center h-96 md:h-64 flex items-center justify-center ">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner})` }}
                />

                {/* Black shadow overlay */}
                <div className="absolute inset-0 bg-black opacity-50 " />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-12">
                    {/* Content of your banner */}
                    <p className='text-xl mt-3'>Call to action</p>
                    <p className='font-bold text-4xl my-3 text-center'> Hire Your Next Candidate On Discate </p>
                    <p className='text-xl'>Call Us: +99 698 569 565</p>
                    <button className='bg-white text-black hover:bg-gray-400 hover:text-white px-8 py-2 rounded-md transition-all duration-300 my-8'>Discover More</button>

                </div>
            </div>



        </div>
    );
};

export default Banner;