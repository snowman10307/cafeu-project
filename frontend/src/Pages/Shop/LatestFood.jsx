import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/menu/1.png'
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';
import SpecialMenuCard from '../Home/SpecialMenuCard';
import Title from '../../Shared/Title';

const LatestFood = () => {
    return (
        <div>
            
      



<Title heading={'our latest food'} subHeading={'latest'}></Title>
 <SpecialMenuCard></SpecialMenuCard>


        </div>
    );
};

export default LatestFood;