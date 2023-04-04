import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image from '../../assets/Caresoul/bg.jpg'


import slider1 from '../../assets/Caresoul/first-slider.png'
import slider2 from '../../assets/Caresoul/baner1.png'
import slider3 from '../../assets/Caresoul/baner.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HomeCarousel = () => {
    return (
        <div  className='bg-gray-200' >





      
          

                    <div className='max-w-7xl mx-auto'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='flex items-center justify-center p-8 gap-4   md:p-16 flex-wrap-reverse '>
                                    <div>
                                        <h1 className='font-bold text-red-600 text-xl md:text-4xl italic mb-4 '>Best in Cafeu</h1>
                                        <h1 className='text-2xl md:text-5xl max-w-xl font-bold space-y-5 leading-normal text-pink-600'>Different Spice For A Different Taste</h1>
                                        <p className='max-w-xl my-4 text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus molestiae pariatur unde? Aliquid error iure atque voluptatum, ullam vero.</p>
                                        <button className=' bg-red-600 px-6 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-red-400 text-white  md:text-xl'>Order now</button>
                                    </div>
                                    <div>
                                        <img src={slider2} className='h-36 w-36 md:h-96 md:w-96 rounded-full' alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex items-center justify-center p-8 gap-4   md:p-16 flex-wrap-reverse '>
                                    <div>
                                        <h1 className='font-bold text-red-600 text-xl md:text-4xl italic mb-4 '>Best in Cafeu</h1>
                                        <h1 className='text-2xl md:text-5xl max-w-xl font-bold space-y-5 leading-normal text-pink-600'>Asian Lettuce Wrap Chicken Chopped Salad</h1>
                                        <p className='max-w-xl my-4 text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus molestiae pariatur unde? Aliquid error iure atque voluptatum, ullam vero.</p>
                                        <button className=' bg-red-600 px-6 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-red-400 text-white  md:text-xl'>Order now</button>
                                    </div>
                                    <div>
                                        <img src={slider2} className='h-36 w-36 md:h-96 md:w-96 rounded-full' alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='flex items-center justify-center p-8 gap-4   md:p-16 flex-wrap-reverse '>
                                    <div>
                                        <h1 className='font-bold text-red-600 text-xl md:text-4xl italic mb-4 '>Best in Cafeu</h1>
                                        <h1 className='text-2xl md:text-5xl max-w-xl font-bold space-y-5 leading-normal text-pink-600'>BBQ Chicken Salad with Creamy Avocado</h1>
                                        <p className='max-w-xl my-4 text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus molestiae pariatur unde? Aliquid error iure atque voluptatum, ullam vero.</p>
                                        <button className=' bg-red-600 px-6 py-2 rounded-md transition-all duration-300 cursor-pointer hover:bg-red-400 text-white  md:text-xl'>Order now</button>
                                    </div>
                                    <div>
                                        <img src={slider2} className='h-36 w-36 md:h-96 md:w-96 rounded-full' alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>





          


                        </Swiper>
                    </div>


         

        </div>
    );
};

export default HomeCarousel;