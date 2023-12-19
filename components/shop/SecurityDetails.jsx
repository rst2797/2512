import React from 'react'
import CardSecure from "./SVG/CardProtectionSVG"
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";

const SecurityDetails = () => {
    const secure = [
        {
            title: 'Sustainable Clothing',
            Logo: GiClothes
        },
        {
            title: 'Secure Checkout',
            Logo: CardSecure
        },
        {
            title: 'Pan India Delivery',
            Logo: BsGlobeCentralSouthAsia
        },
    ]
  return (
    <div className='flex justify-between pt-[1rem] pb-[2rem]  px-[0.94rem]   2xl:px-20   border-b-4 border-white'>
        {
            secure.map((item, index) => (
                <div key={index} className='flex flex-col items-center justify-center text-center'>
                    <item.Logo className='text-4xl'/>
                    <h2 className='font-lato-regular !text-[1rem] !font-[400] mt-[0.69rem]'>{item.title}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default SecurityDetails