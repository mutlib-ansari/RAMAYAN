



import React from 'react';
import bg from '../Assests/bgimage.png';
import stachu from '../Assests/stachu.png';

export default function Dasbord() {
  return (
    <div
      className="flex flex-col md:flex-row  bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="w-full md:w-1/2 flex justify-center items-center p-5">
        <div className="text-left md:pl-5 md:translate-y-20">
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
          <div className="mt-6">
            <button className="border rounded p-2 mr-3  hover:bg-yellow-600 text-white">
               <span  className='text-black'> Know more</span>
            </button>
            <button className="border rounded p-2  hover:bg-yellow-600 text-white">
              <span className='text-black'>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      
      <div className="md:w-1/2 flex justify-center items-center  md:translate-y-0">
        <img src={stachu} className="   h-3/4 " alt="Stachu" />
      </div>
    </div>
  );
}

