

import React, { useState } from 'react';
import icon1 from '../Assests/icon1.png';
import bg from '../Assests/shape-1.png';
import bg2 from '../Assests/shape-2.png';
import bg3 from '../Assests/bgtranperent.png';

export default function Tebs() {
  const [activeTab, setActiveTab] = useState(0);

  const testimonials = [
    {
      name: 'Jack Smith',
      role: 'Dress Designer',
      image: icon1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Sara Johnson',
      role: 'Graphic Designer',
      image: icon1,
      content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      name: 'Mike Lee',
      role: 'Web Developer',
      image: icon1,
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    },
    {
      name: 'Anna Brown',
      role: 'Content Writer',
      image: icon1,
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
  ];

  return (
    <div className="bg-gray-100 mt-36 relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      {/* Background Images */}
      <img className="absolute right-10 h-40 md:w-30" src={bg} alt="bg1" />
      <img className="absolute left-0 bottom-0 h-40 md:w-30" src={bg2} alt="bg2" />
      {/* <img className="absolute right-10 opacity-25 md:w-0" src={bg3} alt="bg3" />
      <img className="absolute left-10 opacity-25 md:w-0" src={bg3} alt="bg3" /> */}

      
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg text-gray-500">Testimonials</h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-600 mt-4">
          What Our Client Says
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      
      <div className="mt-10">
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-full border-4 border-white overflow-hidden w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
            <img
              src={testimonials[activeTab].image}
              alt={testimonials[activeTab].name}
              className="object-cover w-full h-full"
            />
          </div>

          
          <h3 className="text-xl sm:text-2xl font-semibold mt-4">{testimonials[activeTab].name}</h3>
          <p className="text-gray-500 text-sm sm:text-base">{testimonials[activeTab].role}</p>

          
          <p className="text-gray-600 max-w-xl text-center mt-6 text-sm sm:text-base md:text-lg">
            {testimonials[activeTab].content}
          </p>

         
          <div className="mt-6">
            <div className="flex space-x-2 justify-center">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`h-3 w-3 md:h-4 md:w-4 rounded-full cursor-pointer ${activeTab === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
