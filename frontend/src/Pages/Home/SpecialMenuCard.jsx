import React from 'react';
import img1 from '../../assets/menu/1.png'
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SpecialMenuCard = () => {



    return (
        <div className='my-10'>



            <div className=' grid grid-cols-1 md:grid-cols-2   gap-12 place-items-center mx-12  lg:flex lg:items-center lg:justify-center lg:flex-wrap lg:mx-72' >
                {/* <div className='flex items-center justify-center gap-16 mx-12'> */}
                <Link  to='/shopDetails' >
                    <div className="card card-compact w-96  shadow-xl cursor-pointer hover:text-red-600   hover:scale-105 transition-transform duration-300">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <div>
                                <h1 className='text-xl font-bold'>Marghetto Pizza </h1>
                                <p className='text-gray-400 max-w-72 text-wrap my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, praesentium.</p>
                            </div>
                            <div className='flex pr-8'>
                                <p className='text-red-600 '>Delivery Fee : $10</p>
                                <div className='flex gap-4 text-2xl mb-2'>
                                    <FaRegHeart className='cursor-pointer' />
                                    <FaCartPlus className='cursor-pointer'></FaCartPlus>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

               
                <div className="card card-compact w-96  shadow-xl cursor-pointer hover:text-red-600 transition-transform  hover:scale-105 transition-transform duration-300">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div>
                            <h1 className='text-xl font-bold'>Marghetto Pizza </h1>
                            <p className='text-gray-400 max-w-72 text-wrap my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, praesentium.</p>
                        </div>
                        <div className='flex pr-8'>
                            <p className='text-red-600 '>Delivery Fee : $10</p>
                            <div className='flex gap-4 text-2xl mb-2'>
                                <FaRegHeart className='cursor-pointer' />
                                <FaCartPlus className='cursor-pointer'></FaCartPlus>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96  shadow-xl cursor-pointer hover:text-red-600 transition-transform  hover:scale-105 transition-transform duration-300">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div>
                            <h1 className='text-xl font-bold'>Marghetto Pizza </h1>
                            <p className='text-gray-400 max-w-72 text-wrap my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, praesentium.</p>
                        </div>
                        <div className='flex pr-8'>
                            <p className='text-red-600 '>Delivery Fee : $10</p>
                            <div className='flex gap-4 text-2xl mb-2'>
                                <FaRegHeart className='cursor-pointer' />
                                <FaCartPlus className='cursor-pointer'></FaCartPlus>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    );
};

export default SpecialMenuCard;