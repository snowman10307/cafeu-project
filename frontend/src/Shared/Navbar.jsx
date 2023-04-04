import React, { useContext, useEffect, useState } from "react";
// import img1 from "../assets/logo/s-logo-design-template-graphic-branding-element-free-vector.jpg";
// import { Link } from "react-router-dom";
import { FaArrowRight, FaBars, FaCross, FaTimesCircle } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import mainLogo from '../assets/logo/logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {


    const {user}=useContext(AuthContext);
    console.log(user);
  


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (Window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.addEventListener("scroll", handleScroll);
            };
        };
    });

    const navItems = [
        { link: "Home", path: "/" },
        { link: "Menu", path: "/menu" },
       
        { link: "About", path: "/about" },
        { link: "Contact", path: "/contact" },
        { link: "Cart", path: "/cart" },
        { link: "WishList", path: "/wishList" },
        { link: "Dashboard", path: "/admin" },
 
      
    ];




 
    return (
        <div className="bg-blue-600 ">
            <header className="w-full py-6    bg-gray-200 fixed top-0 left-0 right-0 border-b  z-10 ">
                <nav className="mx-12 flex items-center justify-between content-center ">
                    {/* logo  */}
                    <div className="flex items-center space-x-2">
                        <img className="h-12 mt-1 w-full rounded-full" src={mainLogo} alt="" />
                
                    </div>

                    {/* navitems  */}
                    <div className="hidden md:block">
                        <ul className="text-black text-2xl flex space-x-4 ">
                            {navItems.map((item) => (
                                <>
                                    <li className="">
                                        {/* <Link className="" to={item.path}>
                                            {item.link}
                                        </Link> */}

                                        <HashLink className=""    smooth to={item.path} >  {item.link} </HashLink>

                                        {/* <Link to={item.path}   smooth={true} offset={-100} > {item.link}</Link> */}
                                    </li>
                                </>
                            ))}
                        </ul>
                    </div>

                    {/* button  for large device*/}
                    <div className="hidden lg:block ">
                        {/* <img src={user?. } alt="" /> */}
                        <p>{user?.email}</p>
                        
                       <Link to='/login'>  <button className="bg-green-500 text-white py-1 px-2  rounded text-[18px] flex justify-center content-center items-center transition-all duration-300 hover:bg-green-600"> Register Now
                            <FaArrowRight className="  ml-2 text-white"> </FaArrowRight>
                        </button></Link>
                    </div>

                    {/* small device  */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {
                                isMenuOpen ?
                                 <div >
                                  <FaTimesCircle className="text-green-600 text-3xl "></FaTimesCircle> 
                                 </div>
                                 
                                 :
                                  <FaBars className="text-green-600 text-3xl " ></FaBars>
                            }
                        </button>
                    </div>



                </nav>


                {/* nav items for mobile device  */}
                {
                    isMenuOpen &&
                    <div className="">
                        <div className=" bg-green-500 mt-8 " >

                            <ul className="text-black text-2xl   ">
                                {navItems.map((item) => (
                                    <>
                                        <li className=" text-white p-4 text-center hover:bg-green-400 transition-all duration-300">
{/*                                            
                                            <Link className="" to={item.path}>
                                                {item.link}
                                            </Link> */}
                                                       <HashLink className=""    smooth to={item.path} >  {item.link} </HashLink>

                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                }


            </header>

        </div>
    );
};

export default Navbar;
