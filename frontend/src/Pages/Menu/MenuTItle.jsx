import React from 'react';
import img1 from '../../assets/menu/service-icon.png'

const MenuTItle = ({heading}) => {
    return (
        <div className='flex flex-col justify-center items-center my-8   mx-4 uppercase'>
            
            <img src={img1} className='h-12 w-12' alt="" />
            <p className='text-4xl font-bold text-red-600 italic mt-4'>{ heading}</p>



        </div>
    );
};

export default MenuTItle;