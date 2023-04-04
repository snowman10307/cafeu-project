import React, { useState } from 'react';
import SectionBanner from '../../Shared/SectionBanner';
import { Link } from 'react-router-dom';
import img1 from '../../assets/menu/11.png'
import Swal from 'sweetalert2';


const Checkout = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [specialNote, setSpecialNote] = useState('');

    const [couponShow, setCouponShow] = useState(false);


    // Event handlers to update state variables
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSpecialNoteChange = (event) => {
        setSpecialNote(event.target.value);
    };

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log("Form submitted with data:", { firstName, lastName, phone, email, address, specialNote });


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Place Order"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: " Done",
                    text: "Successfully Placed Your Order!",
                    icon: "success"
                });
            }
        });
    };




    return (
        <div className='my-24'>
            <SectionBanner pageName={'Checkout Page'} path={'checkout'}  ></SectionBanner>
            <form onSubmit={handleSubmit}>
                <div className='max-w-6xl mx-auto'>

                    <div className='bg-gray-100 p-4 border-t-4 border-black'>
                        <p className='text-xl'>
                            Have a coupon?  <span className='text-red-600 cursor-pointer' onClick={()=>setCouponShow(!couponShow)}>Click here to enter your code</span>
                        </p>
                    </div>
                    {
                        couponShow &&
                        <>
                            <div className='w-full mt-12 border px-10 shadow-xl py-8'>
                                <h1 className='text-2xl font-semibold mb-4'> Discount Coupon Codes </h1>
                                <p className='text-xl  text-gray-500 text-justify mb-8 '>Enter your coupon code if you have one and get discount up to 50% offer you will get discount with free shipping.</p>

                                <form action="">
                                    <div className='flex flex-col gap-4 max-w-2xl'>
                                        <input type="text" className='bg-white border text-black px-4 py-6 rounded-md text-xl' placeholder='Enter Your coupon' />
                                        <button className='bg-green-600 py-2 px-4 md hover:bg-green-500 transition-all duration-300 rounded-md text-white text-xl'>Apply Coupon</button>
                                    </div>
                                </form>
                            </div>

                        </>
                    }


                    <div className='mt-24 -mx-32 md:mx-2 flex justify-center flex-wrap md:flex-nowrap gap-12  md:gap-24'>
                        {/* discount  */}
                        <div className='w-1/2'>
                            <h1 className='text-2xl font-semibold mb-4'> Billing Details</h1>

                            {/* <form onSubmit={handleSubmit}> */}
                            <p className='text-xl font-semibold pl-1 py-2'>Name</p>
                            <div className='w-full flex items-center justify-center gap-8'>
                                <input type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl' placeholder='First Name' name='firstName' value={firstName} onChange={handleFirstNameChange} />
                                <input type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl' placeholder='Last Name' name='lastName' value={lastName} onChange={handleLastNameChange} />
                            </div>

                            <div className='my-8'>
                                <p className='text-xl font-semibold mb-3 pl-1'>Phone</p>
                                <input type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl w-full' placeholder='Mobile Number' required name='phone' value={phone} onChange={handlePhoneChange} />
                            </div>

                            <div className='my-8'>
                                <p className='text-xl font-semibold mb-3 pl-1'>Email</p>
                                <input type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl w-full' placeholder='xyz@gmail.com' name='email' value={email} onChange={handleEmailChange} />
                            </div>

                            <div className='my-8'>
                                <p className='text-xl font-semibold mb-3 pl-1'>Address</p>
                                <input type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl w-full' placeholder=' Enter your address' required name='address' value={address} onChange={handleAddressChange} />
                            </div>

                            <div className='my-8'>
                                <p className='text-xl font-semibold mb-3 pl-1'>Special Note</p>
                                <textarea type="text" className='bg-white border text-black px-4 py-2 rounded-md text-xl w-full h-24' placeholder=' Special note about your order or how a delivery man can get address easily.' name='specialNote' value={specialNote} onChange={handleSpecialNoteChange} />
                            </div>


                            {/* </form> */}
                        </div>

                        {/* total  */}
                        <div className='w-1/2'>

                            <h1 className='text-2xl font-semibold mb-4'>Your Order</h1>
                            <div className='border w-full'></div>
                            <div className='border p-4'>
                                <div className='flex justify-between   my-4'>
                                    <p className='text-xl font-semibold'>Products  </p>
                                    <p className='font-semibold'> Sub Total</p>

                                </div>

                                <div className='flex justify-between items-center text-xl '>
                                    <div className='flex items-center gap-4'>
                                        <img className='h-14 w-14 rounded-full ' src={img1} alt="" />
                                        <p> Pizza <span className='font-bold'>x 1</span></p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500'>$10.00</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center text-xl '>
                                    <div className='flex items-center gap-4'>
                                        <img className='h-14 w-14 rounded-full ' src={img1} alt="" />
                                        <p> Burger <span className='font-bold'>x 1</span></p>
                                    </div>
                                    <div>
                                        <p className='text-gray-500'>$10.00</p>
                                    </div>
                                </div>


                                <div className='border w-full mt-4'></div>
                                <div className='flex justify-between text-gray-500 text-xl mt-8  my-4'>

                                    <p className='font-bold'>Sub Total</p>
                                    <p className='font-bold'>$10.00</p>
                                </div>

                                <div className='flex justify-between text-gray-500 text-xl my-4'>
                                    <p className='font-bold'>Total  </p>
                                    <p className=' font-bold'>$5.00</p>
                                </div>
                            </div>
                            <button className='bg-green-600 text-white px-4 py-2 rounded-md w-full mt-10 hover:bg-green-500 transition-all duration-300 text-xl'>Place Order</button>


                        </div>

                    </div>


                </div>
            </form>

        </div>
    );
};

export default Checkout;