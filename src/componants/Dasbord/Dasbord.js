



import React, { useEffect, useRef, useState } from 'react';
import '../Herosection/Styles.css'
import bg from '../Assests/bgimage.png';
import stachu from '../Assests/stachu.png';
import { Button } from "antd";
import Image1 from '../Assests/image1.png';
import { Link } from 'react-router-dom';

export default function Dasbord() {


  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState({ section: false });

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === sectionRef.current) {
          setIsVisible(prev => ({ ...prev, section: true }));
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);




  return (


    <div
      style={{ backgroundImage: `url(${bg}) ` }}
     
      className={`bg-cover bg-center  w-full    `}
    >
      {/* <img className='w-' src={bg}/>
       */}
      <div
     
        className="container mx-auto xl:max-w-6xl  flex flex-col md:flex-row  "

      >

        <div    ref={sectionRef}  className={`md:w-1/2 flex justify-center items-center z-0${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
          <div className="text-left md:pl-5 md:translate-y ">
            <h1 className="mt-20 text-4xl md:text-6xl">
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
              <Link to="/BlogPage"><Button className=" custom-button mt-4 mr-5"> know more</Button></Link>
              <Button className=" custom-button mt-4"> contect us</Button>

            </div>
          </div>
        </div>


        <div ref={sectionRef} className={`md:w-1/2 flex justify-end items-center  md:translate-y-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
          <img src={stachu} className="h-3/4 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 " alt="Stachu" />
        </div>
      </div>

      {/* <marquee > <img src={Image1} /></marquee> */}
    </div>
  );
}

