import React from 'react';
import image from '../../assets/about/banner3.jpg'
import { FaYoutube } from 'react-icons/fa';

const Banner3 = () => {
    return (
        <div className='my-24'>


 

           

           <div className="relative   bg-cover bg-center  h-72  md:h-72   flex items-center justify-center   ">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                />

                {/* Black shadow overlay */}
                <div className="absolute inset-0 bg-black opacity-50 " />

                {/* Content */}
                <div className="absolute inset-0 flex   justify-center flex-col text-white p-12  md:ml-24 p-8">

                    <p className='text-red-600 text-2xl'>
                        <FaYoutube></FaYoutube>
                    </p>

                    <p className='font-bold text-2xl max-w-xl'>
                        We Have Excellent Of Quality
                        Japanese Food
                    </p>
                    <p className='max-w-xl text-justify mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dignissimos quae necessitatibus laboriosam perspiciatis, aliquid repudiandae libero asperiores assumenda totam earum neque maiores facere vitae, sunt reiciendis sequi nulla error!</p>
                </div>
            </div>  

 
            {/* <div className='border bg-green-200 shadow-xl w-[400px] p-4 text-center mx-auto mt-4 relative  md:-mt-14   lg:-mt-32md:float-end md:mr-96  rounded-md'>
                <div>
                    <p className='text-red-600 italic my-2'>Opening Times</p>
                    <h1 className='text-2xl font-bold capitalize' >Check Availability</h1>
                </div>
                <div className='mt-4'>
                  
                    <div className='text-gray-600 flex items-center justify-center gap-32 border-b border-dashed border-gray-400 py-2'>
                        <p>Sunday to Tuesday</p>
                        <p>03:00 - 06:00</p>
                    </div>
                    <div className='text-gray-600 flex items-center justify-center gap-32 border-b border-dashed border-gray-400 py-2'>
                        <p>Sunday to Tuesday</p>
                        <p>03:00 - 06:00</p>
                    </div>
                    <div className='text-gray-600 flex items-center justify-center gap-32 border-b border-dashed border-gray-400 py-2'>
                        <p>Sunday to Tuesday</p>
                        <p>03:00 - 06:00</p>
                    </div>
                    <div className='text-gray-600 flex items-center justify-center gap-32 border-b border-dashed border-gray-400 py-2'>
                        <p>Sunday to Tuesday</p>
                        <p>03:00 - 06:00</p>
                    </div>
                    <div className='text-gray-600 flex items-center justify-center gap-32 border-b border-dashed border-gray-400 py-2'>
                        <p>Sunday to Tuesday</p>
                        <p>03:00 - 06:00</p>
                    </div>
                </div>


                <div className='mt-4'>
                    <h1 className='font-bold italic'>Call Us Now</h1>
                    <p> +993240-765238</p>
                </div>

            </div>    */}





        </div>
    );
};

export default Banner3;