import React, { useState } from 'react';
import SectionBanner from '../../Shared/SectionBanner';
import img1 from '../../assets/menu/1.png'
import { FaStar } from 'react-icons/fa';
import LatestFood from './LatestFood';
import TabDetails from './TabDetails';

const ShopDetails = () => {

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState('');

    const handleSizeChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleQuantityChange = (event) => {
        selectedQuantity(event.target.value);
    };

    return (
        <div className='mt-24 mb-12  '>
            <SectionBanner pageName={'Shop Details'} path={'shop details'}  ></SectionBanner>


            <div className='flex flex-wrap justify-center items-center gap-4 md:gap-24 p-4'>
                <div  className='   '>
                    <img className='rounded-md   lg:h-[500px] '  src={img1} alt="" />
                </div>
                <div>
                    <h1 className='text-4xl font-bold my-4'>Caesar Salad</h1>
                    <p className='text-xl my-2'>Price : <span className='text-red-600'>$6.99</span></p>

                    <div className='flex my-4 gap-2 items-center '>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>

                        (3) Rating
                    </div>

                    <p className='text-gray-500'>Availability : <span className='text-red-600'>In stock</span></p>
                    <p className='text-gray-500'>Product cose : <span className='text-red-600'> #53483</span></p>
                    <p className='text-gray-500'>Tags: <span className='text-red-600'>Food, BBQ</span></p>


                    <p className=' max-w-xl my-4 text-gray-500  text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint adipisci beatae debitis eos libero aspernatur autem dicta obcaecati atque molestias nisi enim sed, consequatur vel et expedita dolore saepe a tempore aperiam in aliquid? Voluptates   </p>

                    <form action="">
                        <div className='flex justify-between items-center  gap-4 mb-8'>
                            {/* Size */}
                            <div  className='w-1/2'>
                                <p className='font-bold'>Size</p>
                                <select className="select select-secondary w-full bg-white mt-2 outline-none text-xl" value={selectedSize} name='selectSize' onChange={handleSizeChange}>
                                    <option disabled value=''>Select</option>
                                    <option value='l'>L</option>
                                    <option value='xl'>XL</option>
                                    <option value='xxl'>XXL</option>
                                    <option value='xxxl'>XXXL</option>
                                </select>
                            </div>

                            {/* Quantity */}
                            <div  className='w-1/2'>
                                <p className='font-bold'>Qty</p>
                                <select className="select select-secondary w-full bg-white mt-2 outline-none text-xl" value={selectedQuantity} name='selectQuantity' onChange={handleQuantityChange}>
                                    <option disabled value=''>Quantity</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                </select>
                            </div>
                        </div>
                    </form>




                    <div className='flex gap-8'>
                        <button className='border py-2 px-4 rounded-md bg-red-600 text-white font-bold hover:bg-green-950 transition-all duration-300 text-[10px]'>Add To Cart</button>
                        <button className='border py-2 px-4 rounded-md bg-red-600 text-white font-bold hover:bg-green-950 transition-all duration-300 text-[10px]'>Add To Wishlist</button>

                    </div>











                </div>
            </div>

<TabDetails></TabDetails>
<LatestFood></LatestFood>


            

        </div>
    );
};

export default ShopDetails;