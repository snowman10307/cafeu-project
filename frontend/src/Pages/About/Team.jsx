import React from 'react';
import Title from '../../Shared/Title';
import person from '../../assets/about/person.png'

const Team = () => {
    return (
        <div className='my-24'>
            <Title heading={'Meet Our Team'} subHeading={' Our Team'}></Title>



            {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-8   place-items-center'> */}
            <div className=' flex items-center justify-center gap-12 flex-wrap'>
            
                <div className="card w-96 shadow-xl border-b-red-500 hover:transition-all  cursor-pointer  hover:scale-105  transition-transform duration-300 ">
                    <figure className=" ">
                        <img src={person} alt="person" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title hover:text-red-600 text-2xl">  Cathy Anderson</h2>
                        <p> Chef Executive</p>
                    </div>
                    <div className='border w-3/4 mx-auto border-b-red-500'>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-b-red-500 hover:transition-all  cursor-pointer  hover:scale-105  transition-transform duration-300 ">
                    <figure className=" ">
                        <img src={person} alt="person" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title hover:text-red-600 text-2xl">  Cathy Anderson</h2>
                        <p> Chef Executive</p>
                    </div>
                    <div className='border w-3/4 mx-auto border-b-red-500'>

                    </div>
                </div>
                <div className="card w-96 shadow-xl border-b-red-500 hover:transition-all  cursor-pointer  hover:scale-105  transition-transform duration-300 ">
                    <figure className=" ">
                        <img src={person} alt="person" className="rounded-xl " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title hover:text-red-600 text-2xl">  Cathy Anderson</h2>
                        <p> Chef Executive</p>
                    </div>
                    <div className='border w-3/4 mx-auto border-b-red-500'>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Team;