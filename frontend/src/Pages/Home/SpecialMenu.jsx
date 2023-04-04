import React from 'react';
import Title from '../../Shared/Title';
import all from '../../assets/menuIcon/7.png'
import pizza from '../../assets/menuIcon/1.png'
import asian from '../../assets/menuIcon/2.png'
import burger from '../../assets/menuIcon/3.png'
import salad from '../../assets/menuIcon/4.png'
import bakery from '../../assets/menuIcon/5.png'
import drink from '../../assets/menuIcon/6.png'
import SpecialMenuCard from './SpecialMenuCard';

const SpecialMenu = () => {
    return (
        <div className='my-24'>

            <Title heading={'Our Specials Menu'} subHeading={'Special Menu'}></Title>


            <div className='flex justify-center items-center gap-4 flex-wrap md:flex-nowrap md:gap-8 -mt-10'>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={all}      className='h-16 w-16 rounded-full '    />
                    <p className=''>All</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={pizza}     className='h-16 w-16 rounded-full '   alt="" />
                    <p className=''>Pizza</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={asian}     className='h-16 w-16 rounded-full '   alt="" />
                    <p className=''>Asian</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={burger}    className='h-16 w-16 rounded-full '    alt="" />
                    <p className=''>Burger</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={salad}     className='h-16 w-16 rounded-full '   alt="" />
                    <p className=''>Salad</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={bakery}    className='h-16 w-16 rounded-full '    alt="" />
                    <p className=''>Bakery</p>
                </div>
                <div className='flex flex-col items-center justify-center cursor-pointer hover:text-red-600  transition-all duration-300   md:text-xl '>
                    <img src={drink}     className='h-16 w-16 rounded-full '   alt="" />
                    <p className=''>Drink</p>
                </div>
            </div>

            <SpecialMenuCard></SpecialMenuCard>




        </div>
    );
};

export default SpecialMenu;