// 
// import React, { useEffect, useState } from 'react';
// import theme1 from '../Assests/naks1.png';
// import theme2 from '../Assests/naks2.png';
// import theme3 from '../Assests/naks3.png';
// import bg2 from '../Assests/bgtranperent.png';
// import { Button } from "antd";


// export default function Herosection() {
//   const [isVisible, setIsVisible] = useState({
//     section1: false,
//     section2: false,
//     section3: false
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       if (scrollPosition > 100) {
//         setIsVisible((prevState) => ({ ...prevState, section1: true }));
//       }
//       if (scrollPosition > 500) {
//         setIsVisible((prevState) => ({ ...prevState, section2: true }));
//       }
//       if (scrollPosition > 1000) {
//         setIsVisible((prevState) => ({ ...prevState, section3: true }));
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       {/* Section 1 */}
//       <div
//         style={{ backgroundImage: `url(${bg2}) ` }}
//         className="bg-no-repeat bg-right-top bg-contain"
//       >
//         <div className="container mx-auto">
//           <div
//             className={`flex flex-col md:flex-row relative mt-10 transition-opacity duration-1000 ${
//               isVisible.section1 ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="md:w-2/3 flex justify-start">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme1}
//                 alt="Theme 1"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit{' '}
//                   <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration in some
//                   form, by injected humour, or randomised words.
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div
//         style={{ backgroundImage: `url(${bg2}) ` }}
//         className="bg-no-repeat bg-left-top bg-contain"
//       >
//         <div className="container mx-auto">
//           <div
//             className={`flex flex-col md:flex-row-reverse relative mt-10 transition-opacity duration-1000 ${
//               isVisible.section2 ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="md:w-2/3 flex justify-end">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme2}
//                 alt="Theme 2"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit{' '}
//                   <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration in some
//                   form, by injected humour, or randomised words.
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div
//         style={{ backgroundImage: `url(${bg2}) ` }}
//         className="md:h-96 bg-no-repeat bg-right-top bg-contain"
//       >
//         <div className="container mx-auto">
//           <div
//             className={`flex flex-col md:flex-row relative mt-10 transition-opacity duration-1000 ${
//               isVisible.section3 ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="md:w-2/3 flex justify-start">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme3}
//                 alt="Theme 3"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit{' '}
//                   <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum
//                   available, but the majority have suffered alteration in some
//                   form, by injected humour, or randomised words.
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react'
// import theme1 from '../Assests/naks1.png'
// import theme2 from '../Assests/naks2.png'
// import theme3 from '../Assests/naks3.png'
// import bg2 from '../Assests/bgtranperent.png'
// import { Button } from "antd";





// export default function Herosection() {
//   return (

//     <div className='delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300" '>
//       {/* Section 1 */}
//       <div style={{ backgroundImage: `url(${bg2}) ` }}
//         className=' bg-no-repeat bg-right-top bg-contain '>
//         <div className='container mx-auto'>
//           <div className='flex flex-col md:flex-row relative mt-10 '>
//             <div className=' md:w-2/3  flex justify-start'>
//               <img className='h-48 md:h-96 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300' src={theme1} alt="Theme 1" />
//             </div>
//             <div className=' md:w-2/3  text-left  '>
//               <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40 '>
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className='text-2xl md:text-4xl'>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
//                 <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
//                 <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4"> know more</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div style={{ backgroundImage: `url(${bg2}) ` }}
//         className=' bg-no-repeat bg-left-top bg-contain  '>
//         <div className='container mx-auto'>
//           <div className='flex flex-col md:flex-row-reverse relative mt-10'>
//             <div className=' md:w-2/3 flex justify-end'>
//               <img className='h-48 md:h-96 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300' src={theme2} alt="Theme 2" />
//             </div>
//             <div className=' md:w-2/3 text-left '>
//               <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40'>
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className='text-2xl md:text-4xl '>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
//                 <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
//                 <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4"> know more</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div style={{ backgroundImage: `url(${bg2}) ` }}
//         className=' md:h-96 bg-no-repeat bg-right-top bg-contain'>
//         <div className='container mx-auto'>
//           <div className='flex flex-col md:flex-row relative mt-10'>
//             <div className=' md:w-2/3 flex justify-start'>
//               <img className='h-48 md:h-96 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300' src={theme3} alt="Theme 3" />
//             </div>
//             <div className='md:w-2/3 text-left '>
//               <div className='md:pl-5 mt-5 md:mt-0 md:translate-y-40'>
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className='text-2xl md:text-4xl '>Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2> <br />
//                 <p className='text-sm md:text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
//                 <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4"> know more</Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>

// );
// }

// src/components/Herosection.js




// import React, { useEffect } from 'react';
// import theme1 from '../Assests/naks1.png';
// import theme2 from '../Assests/naks2.png';
// import theme3 from '../Assests/naks3.png';
// import bg2 from '../Assests/bgtranperent.png';
// import { Button } from 'antd';
// import 'taos/taos.css'; // Import TAOS CSS

// export default function Herosection() {
//   useEffect(() => {
//     const taos = require('taos'); // Import TAOS after component mounts
//     taos.init(); // Initialize TAOS
//   }, []); // Only run once on mount

//   return (
//     <div>
//       {/* Section 1 */}
//       <div
//         style={{ backgroundImage: `url(${bg2})` }}
//         className="bg-no-repeat bg-right-top bg-contain"
//         data-taos="fade-up" // Add TAOS animation attribute
//         data-taos-offset="300" // Adjust the offset as needed
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row relative mt-10">
//             <div className="md:w-2/3 flex justify-start">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme1}
//                 alt="Theme 1"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum available...
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div
//         style={{ backgroundImage: `url(${bg2})` }}
//         className="bg-no-repeat bg-left-top bg-contain"
//         data-taos="fade-up" // Add TAOS animation attribute
//         data-taos-offset="300" // Adjust the offset as needed
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row-reverse relative mt-10">
//             <div className="md:w-2/3 flex justify-end">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme2}
//                 alt="Theme 2"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum available...
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div
//         style={{ backgroundImage: `url(${bg2})` }}
//         className="md:h-96 bg-no-repeat bg-right-top bg-contain"
//         data-taos="fade-up" // Add TAOS animation attribute
//         data-taos-offset="300" // Adjust the offset as needed
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row relative mt-10">
//             <div className="md:w-2/3 flex justify-start">
//               <img
//                 className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                 src={theme3}
//                 alt="Theme 3"
//               />
//             </div>
//             <div className="md:w-2/3 text-left">
//               <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                 <span className="text-yellow-600">About Us,</span> <br />
//                 <h2 className="text-2xl md:text-4xl">
//                   Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span>
//                 </h2>{' '}
//                 <br />
//                 <p className="text-sm md:text-base">
//                   There are many variations of passages of Lorem Ipsum available...
//                 </p>
//                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                   know more
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import theme1 from '../Assests/naks1.png';
// import theme2 from '../Assests/naks2.png';
// import theme3 from '../Assests/naks3.png';
// import bg2 from '../Assests/bgtranperent.png';
// import { Button } from 'antd';
// import ScrollFadeSection from '../ScrollFadeSection/ScrollFadeSection'; // Importing ScrollFadeSection

// export default function Herosection() {
//   return (
//     <div>
//       {/* Section 1 */}
//       <ScrollFadeSection direction="left"> {/* Fade from the left */}
//         <div
//           style={{ backgroundImage: `url(${bg2})` }}
//           className="bg-no-repeat bg-right-top bg-contain"
//         >
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row relative mt-10">
//               <div className="md:w-2/3 flex justify-start">
//                 <img
//                   className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                   src={theme1}
//                   alt="Theme 1"
//                 />
//               </div>
//               <div className="md:w-2/3 text-left">
//                 <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                   <span className="text-yellow-600">About Us,</span> <br />
//                   <h2 className="text-2xl md:text-4xl">
//                     Lorem ipsum dolor sit{' '}
//                     <span className="text-yellow-600">consectetur,</span>
//                   </h2>{' '}
//                   <br />
//                   <p className="text-sm md:text-base">
//                     There are many variations of passages of Lorem Ipsum available...
//                   </p>
//                   <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                     Know more
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ScrollFadeSection>

//       {/* Section 2 */}
//       <ScrollFadeSection direction="right"> {/* Fade from the right */}
//         <div
//           style={{ backgroundImage: `url(${bg2})` }}
//           className="bg-no-repeat bg-left-top bg-contain"
//         >
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row-reverse relative mt-10">
//               <div className="md:w-2/3 flex justify-end">
//                 <img
//                   className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                   src={theme2}
//                   alt="Theme 2"
//                 />
//               </div>
//               <div className="md:w-2/3 text-left">
//                 <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                   <span className="text-yellow-600">About Us,</span> <br />
//                   <h2 className="text-2xl md:text-4xl">
//                     Lorem ipsum dolor sit{' '}
//                     <span className="text-yellow-600">consectetur,</span>
//                   </h2>{' '}
//                   <br />
//                   <p className="text-sm md:text-base">
//                     There are many variations of passages of Lorem Ipsum available...
//                   </p>
//                   <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                     Know more
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ScrollFadeSection>

//       {/* Section 3 */}
//       <ScrollFadeSection direction="left"> {/* Fade from the left */}
//         <div
//           style={{ backgroundImage: `url(${bg2})` }}
//           className="md:h-96 bg-no-repeat bg-right-top bg-contain"
//         >
//           <div className="container mx-auto">
//             <div className="flex flex-col md:flex-row relative mt-10">
//               <div className="md:w-2/3 flex justify-start">
//                 <img
//                   className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                   src={theme3}
//                   alt="Theme 3"
//                 />
//               </div>
//               <div className="md:w-2/3 text-left">
//                 <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
//                   <span className="text-yellow-600">About Us,</span> <br />
//                   <h2 className="text-2xl md:text-4xl">
//                     Lorem ipsum dolor sit{' '}
//                     <span className="text-yellow-600">consectetur,</span>
//                   </h2>{' '}
//                   <br />
//                   <p className="text-sm md:text-base">
//                     There are many variations of passages of Lorem Ipsum available...
//                   </p>
//                   <Button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 mt-4">
//                     Know more
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ScrollFadeSection>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import './Styles.css'
import theme1 from '../Assests/naks1.png';
import theme2 from '../Assests/naks2.png';
import theme3 from '../Assests/naks3.png';
import bg2 from '../Assests/bgtranperent.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


export default function Herosection() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const [isVisible, setIsVisible] = useState({ section1: false, section2: false, section3: false });

  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target === section1Ref.current) {
          setIsVisible(prev => ({ ...prev, section1: true }));
        } else if (entry.target === section2Ref.current) {
          setIsVisible(prev => ({ ...prev, section2: true }));
        } else if (entry.target === section3Ref.current) {
          setIsVisible(prev => ({ ...prev, section3: true }));
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
    };
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <div  className={`bg-no-repeat bg-right-top bg-contain `} style={{ backgroundImage: `url(${bg2})` }}>
        <div className="container mx-auto xl:max-w-6xl ">
          <div ref={section1Ref} className={`flex flex-col md:flex-row relative mt-10 ${isVisible.section1 ? 'fade-in-right visible' : 'fade-in-right'}`}>
            <div className="md:w-2/3 flex justify-start">
              <img className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" src={theme1} alt="Theme 1" />
            </div>
            <div className="md:w-2/3 text-left">
              <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
                <span className="text-yellow-600">About Us,</span><br />
                <h2 className="text-2xl md:text-4xl">Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2><br />
                <p className="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form,</p>
                <Link to="/BlogPage"><Button className="custom-button  transition ease-out delay-150  hover:scale-110  duration-300">know more</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div ref={section2Ref} className={`bg-no-repeat bg-left-top bg-contain ${isVisible.section2 ? 'fade-in-left visible' : 'fade-in-left'}`} style={{ backgroundImage: `url(${bg2})` }}>
        <div className="container mx-auto xl:max-w-6xl ">
          <div className="flex flex-col md:flex-row-reverse relative mt-10">
            <div className="md:w-2/3 flex justify-end">
              <img className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" src={theme2} alt="Theme 2" />
            </div>
            <div className="md:w-2/3 text-left">
              <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
                <span className="text-yellow-600">About Us,</span><br />
                <h2 className="text-2xl md:text-4xl">Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2><br />
                <p className="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form,</p>
                <Link to="/BlogPage"><Button className="custom-button  transition ease-out delay-150  hover:scale-110  duration-300">know more</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div ref={section3Ref} className={`md:h-96 bg-no-repeat bg-right-top bg-contain ${isVisible.section3 ? 'fade-in-right visible' : 'fade-in-right'}`} style={{ backgroundImage: `url(${bg2})` }}>
        <div className="container mx-auto xl:max-w-6xl ">
          <div className="flex flex-col md:flex-row relative mt-10">
            <div className="md:w-2/3 flex justify-start">
              <img className="h-48 md:h-96 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300" src={theme3} alt="Theme 3" />
            </div>
            <div className="md:w-2/3 text-left">
              <div className="md:pl-5 mt-5 md:mt-0 md:translate-y-40">
                <span className="text-yellow-600">About Us,</span><br />
                <h2 className="text-2xl md:text-4xl">Lorem ipsum dolor sit <span className="text-yellow-600">consectetur,</span></h2><br />
                <p className="text-sm md:text-base">There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form,</p>
                <Link to="/BlogPage"><Button className="custom-button  transition ease-out delay-150  hover:scale-110  duration-300">know more</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
