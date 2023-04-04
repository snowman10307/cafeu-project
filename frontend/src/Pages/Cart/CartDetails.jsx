import React, { useState } from 'react';
import img1 from '../../assets/menu/11.png'
import Table from './Table';
import { Link } from 'react-router-dom';

const CartDetails = () => {

    const [quantity, setQuantity] = useState('');


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    return (
        <div className=' my-24'>


            <div>


                <Table page={'cart'}></Table>



                {/* discount coupon code and cart total */}

                <div className='mt-24 -mx-32 md:mx-2 flex justify-center flex-wrap md:flex-nowrap gap-12  md:gap-24'>
                    {/* discount  */}
                    <div className='w-1/2'>
                        <h1 className='text-2xl font-semibold mb-4'> Discount Coupon Codes </h1>
                        <p className='text-xl max-w-2xl text-gray-500 text-justify mb-8 '>Enter your coupon code if you have one and get discount up to 50% offer you will get discount with free shipping.</p>

                        <form action="">
                            <div className='flex flex-col gap-4 max-w-2xl'>
                                <input type="text" className='bg-white border text-black px-4 py-6 rounded-md text-xl' placeholder='Enter Your coupon' />
                                <button className='bg-green-600 py-2 px-4 md hover:bg-green-500 transition-all duration-300 rounded-md text-white text-xl'>Apply Coupon</button>
                            </div>
                        </form>
                    </div>

                    {/* total  */}
                    <div className='w-1/2'>

                        <h1 className='text-2xl font-semibold mb-4'>Cart Totals</h1>
                        <div className='border w-full'></div>

                        <div className='flex justify-between text-xl my-4'>
                            <p>Sub Total</p>
                            <p>$10.00</p>
                        </div>
                        <div className='flex justify-between text-xl my-4'>
                            <p>Shipping  </p>
                            <p>$5.00</p>
                        </div>
                        <div className='border w-full'></div>
                        <div className='flex justify-between text-xl my-4'>
                            <p>Total  </p>
                            <p className='text-red-600'>$5.00</p>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-4'>
                            <p className='mt-4'>Checkout with multiple items</p>
                            <Link to='/checkout'> <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-300'>Checkout</button></Link>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default CartDetails;