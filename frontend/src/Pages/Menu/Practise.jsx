import React from 'react';
import img1 from '../../assets/menu/1.png'


const Practise = () => {


    return (
        <div className='flex items-center justify-start w-full border md:w-2/4'>
            <div>
                <img src={img1} className='h-28 w-28  ' alt="" />
            </div>
            <div className='flex   items-center gap-4 justify-between'>
                <p>JEwel rana</p>
                <p>9.00</p>
            </div>



        </div>
    );
};

export default Practise;