import React from 'react';
import SectionBanner from '../../Shared/SectionBanner';

const Contact = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Further logic, e.g., sending data to a server
    };



    return (
        <div className='mt-20'>


            <SectionBanner pageName={'Contact us'} path={'contact'}  ></SectionBanner>

            <div className='flex justify-center shadow-md flex-wrap md:flex-nowrap border  gap-12   md:w-2/4 mx-auto my-24'>
                <div className='w-3/4  md:p-12'>

                    <div className='text-center mt-4 '>
                        <h4 className='italic text-red-600'>Contact Us</h4>
                        <p className='text-center font-bold text-2xl mb-10'>Please Get In Touch With Us </p>
                    </div>

                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                                    name="name"
                                    placeholder="User Name"
                                    required
                                />

                                <input
                                    type="email"
                                    className="bg-white py-2 px-4 text-xl border w-full rounded-md mb-6"
                                    name="email"
                                    placeholder="User Email"
                                    required
                                />



                                <textarea className="   border textarea-bordered h-24 w-full  bg-white py-2 px-4 text-xl  rounded-md mb-6" placeholder="Your Message"  ></textarea>



                                <button
                                    type="submit"
                                    className="bg-pink-500 w-full rounded-md py-2 text-xl text-white hover:bg-pink-400"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>

                    </div>

                </div>

                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.66865966133!2d90.3732191146674!3d23.803760440578795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7452d787051%3A0x826652c6f9b5e68d!2z4Kas4Ka_4Ka44Kau4Ka_4Kay4KeN4Kay4Ka-4Ka5IOCmn-CmvuCmk-Cmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1709060534583!5m2!1sen!2sbd"
                       className='h-96 md:h-full '
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>



        </div>
    );
};

export default Contact;