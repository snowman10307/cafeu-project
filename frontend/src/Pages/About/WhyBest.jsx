import React from "react";
import image1 from "../../assets/about/exparience.png";
import service from "../../assets/about/service.png";
import booking from "../../assets/about/booking.png";
import { Link } from "react-router-dom";

const WhyBest = () => {
    return (
        <div className="mt-24">

            <div className="flex items-center place-content-center justify-center gap-8 md:gap-16 flex-wrap px-4 ">
                <div>
                    <img src={image1} alt="" />
                </div>

                <div>
                    <div className="mb-12">
                        <h4 className="text-red-600 italic text-xl mb-2">About Us</h4>
                        <h1 className="text-4xl font-bold mb-6"> Why We Are The Best </h1>
                        <p className="max-w-screen-sm text-justify text-gray-500 mb-4">
                            Quis autem vel eum iure reprehenderit qui in evoluptate velit esse
                            qua nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                            quvoluptas nulla pariatureaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>

                    <div>
                        <div className="flex my-12 gap-8 items-center ">
                            <img src={service} alt="" className="bg-red-200 p-3 rounded-md" />
                            <div>
                                <h4 className="text-xl font-semibold">Buffet Service</h4>
                                <p className="text-gray-500 text-justify max-w-2xl">
                                    Qariatureaque ipsa quae a illo inventore veritatis et quasi
                                    architecto{" "}
                                </p>
                            </div>
                        </div>

                        <div className="flex my-4 gap-8 items-center ">
                            <img src={booking} alt="" className="bg-red-200 p-3 rounded-md" />
                            <div>
                                <h4 className="text-xl font-semibold">Online Booking</h4>
                                <p className="text-gray-500 text-justify max-w-2xl">
                                    Qariatureaque ipsa quae a illo inventore veritatis et.{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                   <Link to='/about'>  <button className="font-bold text-white bg-red-600 px-8 py-4 rounded-md transition-all duration-300 my-8  hover:bg-green-950">About Us</button>
</Link>
                </div>
            </div>


        </div>
    );
};

export default WhyBest;
