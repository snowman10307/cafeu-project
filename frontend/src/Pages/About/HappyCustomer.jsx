import React from 'react';
import Title from '../../Shared/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';



const HappyCustomer = () => {
    return (
        <div className='my-24'>

            <Title heading={'Our Guestbook'} subHeading={'Happy Customers'}></Title>


            <div className='   '>



                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper       shadow-lg"



                >
                    <SwiperSlide>
                       <div className='flex gap-12 p-12 shadow-md border border-l-red-600   justify-center rounded-md'>
                       <div>
                            <p className='text-2xl font-bold max-w-64'>James Smith list Specification 2023</p>

                            <p className='max-w-64 text-justify py-4 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eligendi molestias quasi beatae, dolor, nostrum soluta eum cumque modi tenetur ex ut vel ratione quo aliquam perspiciatis delectus eos debitis nihil culpa odit! Quaerat magni delectus labore nobis sit aliquid.</p>
                            <p className='text-xl font-bold'>Reson Roy <span className='text-[12px] font-normal'>- Regular customer</span></p>
                        </div>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-64 rounded-lg' />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='flex gap-12 p-12 shadow-md border border-l-red-600   justify-center rounded-md'>
                       <div>
                            <p className='text-2xl font-bold max-w-64'>James Smith list Specification 2023</p>

                            <p className='max-w-64 text-justify py-4 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eligendi molestias quasi beatae, dolor, nostrum soluta eum cumque modi tenetur ex ut vel ratione quo aliquam perspiciatis delectus eos debitis nihil culpa odit! Quaerat magni delectus labore nobis sit aliquid.</p>
                            <p className='text-xl font-bold'>Reson Roy <span className='text-[12px] font-normal'>- Regular customer</span></p>
                        </div>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-64 rounded-lg' />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='flex gap-12 p-12 shadow-md border border-l-red-600   justify-center rounded-md'>
                       <div>
                            <p className='text-2xl font-bold max-w-64'>James Smith list Specification 2023</p>

                            <p className='max-w-64 text-justify py-4 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eligendi molestias quasi beatae, dolor, nostrum soluta eum cumque modi tenetur ex ut vel ratione quo aliquam perspiciatis delectus eos debitis nihil culpa odit! Quaerat magni delectus labore nobis sit aliquid.</p>
                            <p className='text-xl font-bold'>Reson Roy <span className='text-[12px] font-normal'>- Regular customer</span></p>
                        </div>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-64 rounded-lg' />
                       </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className='flex gap-12 p-12 shadow-md border border-l-red-600   justify-center rounded-md'>
                       <div>
                            <p className='text-2xl font-bold max-w-64'>James Smith list Specification 2023</p>

                            <p className='max-w-64 text-justify py-4 text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum eligendi molestias quasi beatae, dolor, nostrum soluta eum cumque modi tenetur ex ut vel ratione quo aliquam perspiciatis delectus eos debitis nihil culpa odit! Quaerat magni delectus labore nobis sit aliquid.</p>
                            <p className='text-xl font-bold'>Reson Roy <span className='text-[12px] font-normal'>- Regular customer</span></p>
                        </div>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-64 rounded-lg' />
                       </div>
                    </SwiperSlide>

   

                </Swiper>














                {/* <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=' '
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    ...
                </Swiper> */}

            </div>

        </div>
    );
};

export default HappyCustomer;