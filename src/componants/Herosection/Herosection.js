// 

import React from 'react'
import theme1 from '../Assests/naks1.png'
import theme2 from '../Assests/naks2.png'
import theme3 from '../Assests/naks3.png'
import bg2 from '../Assests/bgtranperent.png'

export default function Herosection() {
  return ( 
    <div>
    <div className='container mx-auto '>
      {/* Section 1 */}
      <div className='flex flex-col md:flex-row relative mt-10'>
        <div className='absolute top-0 right-0'>
          <img className='h-48 md:h-96' src={bg2} alt="Background 1"/>
        </div>
        <div className=' md:w-2/3 flex justify-start'>
          <img className='h-48 md:h-96' src={theme1} alt="Theme 1" />
        </div>
        <div className=' md:w-2/3 text-center'>
          <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40'>
            <span className="text-yellow-600">About Us,</span> <br />
            <h2 className='text-2xl md:text-4xl'>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
            <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            <button className="border rounded p-2  hover:bg-yellow-600 text-white">
              <span className='text-black'>Know more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='flex flex-col md:flex-row-reverse relative mt-10'>
        <div className='absolute top-0 left-0'>
          <img className='h-48 md:h-96' src={bg2} alt="Background 2"/>
        </div>
        <div className=' md:w-2/3 flex justify-end'>
          <img className='h-48 md:h-96' src={theme2} alt="Theme 2" />
        </div>
        <div className=' md:w-2/3 text-center'>
          <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40'>
            <span className="text-yellow-600">About Us,</span> <br />
            <h2 className='text-2xl md:text-4xl '>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
            <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            <button className="border rounded p-2 mr-3  hover:bg-yellow-600 text-white">
              <span className='text-black'>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='flex flex-col md:flex-row relative mt-10'>
        <div className='absolute top-0 right-0'>
          <img className='h-48 md:h-96' src={bg2} alt="Background 3"/>
        </div>
        <div className=' md:w-2/3 flex justify-start'>
          <img className='h-48 md:h-96' src={theme3} alt="Theme 3" />
        </div>
        <div className='md:w-2/3 text-center'>
          <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40'>
            <span className="text-yellow-600">About Us,</span> <br />
            <h2 className='text-2xl md:text-4xl '>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
            <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
            <button className="border rounded p-2 mr-3 hover:bg-yellow-600 text-white">
              <span className='text-black'>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
