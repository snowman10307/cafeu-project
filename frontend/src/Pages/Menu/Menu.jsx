import React, { useEffect, useState } from 'react';
import QrCode from './QrCode';
import MenuCard from './MenuCard';
import SectionBanner from '../../Shared/SectionBanner';
import Practise from './Practise';



const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])




    // console.log(menu);

    const lunchMenu = menu.filter(item => item.timing === 'Lunch');
    // console.log(lunchMenu);
    const happyHourMenu = menu.filter(item => item.timing === 'happyHour');
    // console.log(happyHourMenu);
    const dinnerMenu = menu.filter(item => item.timing === 'Dinner');
    // console.log(dinnerMenu);



    return (
        <div className='mt-24'>
            <SectionBanner pageName={'Menu'} path={'menu'}  ></SectionBanner>

{/* <Practise></Practise> */}

            <MenuCard menuData={lunchMenu} heading={'lunch'}  ></MenuCard>
            <MenuCard menuData={happyHourMenu} heading={'haapy hour'} backgroundColor={'gray-200'}></MenuCard>
            <MenuCard menuData={dinnerMenu} heading={'dinner'}  ></MenuCard>
            <QrCode  backgroundColor={'gray-200'}></QrCode>




        </div>
    );
};

export default Menu;