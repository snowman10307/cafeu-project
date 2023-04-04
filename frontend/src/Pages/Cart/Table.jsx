import React, { useState } from 'react';
import img1 from '../../assets/menu/11.png'
import { Link } from 'react-router-dom';

const Table = ({ page }) => {

    const [quantity, setQuantity] = useState('');


    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };


    return (
        <div>
            <div className="w-full bg-white shadow-md rounded my-6 overflow-auto px-2">
                <div className="flex flex-col   ">
                    {/* Table Header */}
                    <div className="flex bg-gray-100 px-4 py-2  ">
                        <div className="flex-1  ">Image</div>
                        <div className="flex-1  ">Name</div>
                        <div className="flex-1  ">Price</div>
                        <div className="flex-1  ">Quantity</div>
                        <div className="flex-1  ">Action</div>
                    </div>
                    {/* Table Rows */}
                    <div className="divide-y divide-gray-200">
                        {/* Sample row */}
                        <div className="flex bg-white py-4 px-4">
                            <div className="flex-1  ">
                                <img className="h-16 w-16 object-cover rounded" src={img1} alt="Product" />
                            </div>
                            <div className="flex-1 ">Product Name</div>
                            <div className="flex-1  ">$10.99</div>
                            <div className="flex-1  ">
                                <div className=''>
                                    <select className="    border  p-2 bg-white    text-xl" value={quantity} name='selectSize' onChange={handleQuantityChange}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1  ">
                                <button className="text-red-600">Remove</button>
                            </div>
                        </div>

                        <div className="flex bg-white py-4 px-4">
                            <div className="flex-1  ">
                                <img className="h-16 w-16 object-cover rounded" src="image.jpg" alt="Product" />
                            </div>
                            <div className="flex-1 ">Product Name</div>
                            <div className="flex-1  ">$10.99</div>
                            <div className="flex-1  ">
                                <div className=''>
                                    <select className="    border  p-2 bg-white    text-xl" value={quantity} name='selectSize' onChange={handleQuantityChange}>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1  ">
                                <button className="text-red-600">Remove</button>
                            </div>
                        </div>


                        {/* Add more rows as needed */}
                    </div>
                </div>

            </div>

            <div className='flex justify-between items-center px-2 '>
                <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition-all duration-300'>Continue Shopping</button>


                {
                    page === 'cart' ?
                        <>
                            <Link to='/checkout'>
                                <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-300'>Checkout</button>
                            </Link>
                        </>
                        :
                        <>
                            <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-all duration-300'>Add All To Cart</button>
                        </>
                }
            </div>
        </div>
    );
};

export default Table;