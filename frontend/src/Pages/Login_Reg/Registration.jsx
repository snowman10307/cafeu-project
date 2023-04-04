import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

import img1 from '../../assets/menu/1.png'
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const Registration = () => {

    const inputRef = useRef(null)

    const { createAccount } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [image, setImage] = useState('')

    // console.log(image.name);

    const navigate = useNavigate();


    const handleImageClick = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(e.target.files[0])
    }

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        // console.log(form.email);
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const mobile = form.mobile.value;

        // console.log(email,name,password,mobile);
       
    
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);


        // createAccount(email, password)
        //     .then(res => {
        //         const loggedUser = res.user;
        //         // console.log(loggedUser);

        //         fetch("http://localhost:5000/users", {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(registerData)
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 // console.log(data);
        //                 if (data.insertedId) {
        //                     // reset();
        //                     Swal.fire(
        //                         'Congratulations!',
        //                         'Successfully registered!!!!',
        //                         'success'
        //                     )
        //                     navigate('/login');
        //                 }

        //             })
        //     })
        //     .catch(error => {
        //         // console.log(error);
        //         setError(error)
        //         Swal.fire({
        //             icon: "error",
        //             title: "Oops...",
        //             // text: "Something went wrong!!!  try again    ",
        //             text: `${error}`,
        //             footer: '<a href="#">Why do I have this issue?</a>'
        //         });
        //     })


        fetch(img_hosting_url, {
            method: "post",
            body: formData,
        })
            .then((res) => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                   const imgURL = imgResponse.data.display_url;                 
                   const registerData = { email, name, password, mobile,image:imgURL ,userRole: 'customer' }
                    createAccount(email, password)
                        .then(res => {
                            const loggedUser = res.user;
                            // console.log(loggedUser);
                            fetch("http://localhost:5000/users", {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(registerData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    // console.log(data);
                                    if (data.insertedId) {
                                        // reset();
                                        Swal.fire(
                                            'Congratulations!',
                                            'Successfully registered!!!!',
                                            'success'
                                        )
                                        navigate('/login');
                                    }
                                })
                        })
                        .catch(error => {
                            // console.log(error);
                            setError(error)
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                // text: "Something went wrong!!!  try again    ",
                                text: `${error}`,
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        })
                }
            })
    }

    return (
        <div className='bg-slate-100 shadow-2xl mt-36 md:mt-24 mb-20 '>
            <div className='flex items-center justify-center h-screen'>
                <div className='bg-white shadow-2xl   md:h-auto md:w-5/12 px-4 py-16  md:px-12 rounded-lg'>

                    <h1 className='text-4xl font-bold text-center mb-12'>Sign Up</h1>
                    <form action="" onSubmit={handleSubmit}>


                        <div>
                            <input type="email " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='email' placeholder='User Email ' required />

                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='name' placeholder='User Name ' required />

                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='mobile' placeholder='Mobile ' required />


                            <input type="text " className='bg-white py-2 px-4 text-xl border w-full rounded-md mb-6' name='password' placeholder='User Password ' required />


                            <div onClick={handleImageClick} className='flex items-center gap-4 mb-4 flex-wrap md:flex-nowrap'>
                                {
                                    image ?
                                        <>
                                            <img src={URL.createObjectURL(image)} className='h-12 w-12 rounded-full' alt="" />
                                        </> :

                                        <>     <img src={img1} className='h-12 w-12 rounded-full  ' alt="" />  </>
                                }
                                <input type="file"
                                    ref={inputRef}
                                    onChange={handleImageChange}
                                     required
                                    className='cursor-pointer max-w-[200px] rounded-xl bg-gray-200 p-2 '
                                />
                            </div>


                            <button className='bg-pink-500 w-full rounded-md py-2 text-xl text-white '>Register</button>





                        </div>


                    </form>

                    <SocialLogin></SocialLogin>
                    <div className='mt-8 '>

                        {/* <p className='text-center mb-4'><Link className='border p-2 rounded-lg px-4 bg-blue-500 text-white' to='/login'> Sign In</Link></p> */}
                        <p className='text-center'>
                            <Link >Forgot password</Link>
                        </p>
                        <p className='text-center mt-4'>ALready have an account? <Link to='/login' className='text-blue-600' >Sign In</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;