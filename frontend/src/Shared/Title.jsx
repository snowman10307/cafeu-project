import React from 'react';

const Title = ({heading,subHeading}) => {
 
 
    return (
        <div className='text-center my-16'>
            
            <h4 className='text-red-600 italic text-2xl capitalize'> {subHeading}</h4>
            <h1 className='text-4xl font-bold capitalize'>{heading}</h1>
        </div>
    );
};

export default Title;