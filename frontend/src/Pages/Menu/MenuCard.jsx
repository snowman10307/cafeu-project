import React from "react";
import MenuTItle from "./MenuTItle";
import img1 from "../../assets/menu/1.png";
import { Link } from "react-router-dom";

const MenuCard = ({ menuData, heading, backgroundColor }) => {
  console.log(menuData, backgroundColor);
  const [price, name, detailsDescription] = menuData;

  return (
    <div className={`bg-${backgroundColor} p-4 mb-12`}>
      <MenuTItle heading={heading}></MenuTItle>

      <div className="grid grid-cols-1 gap-4  md:flex md:items-center md:justify-center flex-wrap  md:gap-12">
        {menuData.map((item) => (
          <   >
            
          <div className="flex items-center gap-8 border p-4 md:w-2/5 rounded-md shadow-md md:h-48 lg:h-44  cursor-pointer hover:scale-105 duration-300 transition-transform">
         
              <img src={img1} className="h-20 w-16 rounded-full   " alt="" />
              <div className="w-full ">
                <div className="flex text-xl lg:text-2xl md:text-[16px] font-semibold items-center justify-between mb-2">
                  <p className=" "> {item.name}</p>
                  <p>${item.price}</p>
                </div>
                <div>
                  <p className="text-gray-500  text-wrap">
                    {" "}
                    {item.detailsDescription.length > 80 ? (
                <div className="">
                    {item.detailsDescription.slice(0, 80)} <span className="text-blue-600">... See more</span>
                </div>
            ) : item.detailsDescription.length > 100 ? (
                <>
                    {item.detailsDescription.slice(0, 100)}
                </>
            ) : (
                <>
                    {item.detailsDescription}
                </>
            )}
                    
                  </p>

                  <div className="flex items-center  gap-8">
                  <button className="outline-none border-b-2 border-b-blue-500 font-bold mt-4 text-[10px] md:text-[12px] text-blue-600 hover:text-red-600 hover:border-b-red-600">
                    ADD TO CART
                  </button>

                 <Link to='/shopDetails'>   <button className="outline-none border-b-2 border-b-blue-500 font-bold mt-4 text-[10px] md:text-[12px] text-blue-600 hover:text-red-600 hover:border-b-red-600">
                    DETAILS
                  </button></Link>
                  </div>
                </div>
              </div>
 

            </div>
           
         
          </>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
