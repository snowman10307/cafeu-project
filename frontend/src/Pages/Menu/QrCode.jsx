import React from 'react';
import img1 from '../../assets/menu/menu-qr-code.png'

const QrCode = () => {


    return (
        <div className={` flex flex-col-reverse md:flex-row justify-center md:justify-center items-center gap-4 md:gap-24 mx-auto   bg-gray-300 p-4 md:p-12 rounded-md flex-wrap md:flex-nowrap `} >
            <div>
                <p className='md:text-4xl font-bold text-center text-wrap'>SCAN THE QR CODE
                    TO VIEW FULL MENU</p>
            </div>

            <div>
                <img  src={img1} alt="" />
            </div>
        </div>
    );
};

export default QrCode;