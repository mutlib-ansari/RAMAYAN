



import React from 'react';
import bg from '../Assests/bgimage.png';
import stachu from '../Assests/stachu.png';
import { Button } from "antd";
import Image1 from '../Assests/image1.png';

export default function Dasbord() {
  return (

   
    <div  
    style={{ backgroundImage: `url(${bg}) ` }}
    className='bg-cover bg-center  w-full'
     >
          {/* <img className='w-' src={bg}/>
       */}
      <div
        className=" container mx-auto flex flex-col md:flex-row "
       
      >

        <div className=" md:w-1/2 flex justify-center items-center ">
          <div className="text-left md:pl-5 md:translate-y">
            <h1 className=" text-4xl md:text-6xl">
              Lorem ipsum dolor sit amet,{' '}
              <span className="text-yellow-600">consectetur,</span>
            </h1>
            <p className="mt-4 text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <div className="mt-6 ">
            <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4 mr-5"> know more</Button>
            <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4"> contect us</Button>
              
            </div>
          </div>
        </div>


        <div className="md:w-1/2 flex justify-end items-center  md:translate-y-0">
          <img src={stachu} className="   h-3/4 " alt="Stachu" />
        </div>
      </div>

      <marquee > <img src={Image1}/></marquee>
    </div>
  );
}

