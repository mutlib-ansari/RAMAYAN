



// import React, { useEffect, useRef, useState } from 'react';
// import '../Herosection/Styles.css'
// import bg from '../Assests/bgimage.png';
// import stachu from '../Assests/stachu.png';
// import { Button } from "antd";
// import Image1 from '../Assests/image1.png';
// import { Link } from 'react-router-dom';

// export default function Dasbord() {


//   const sectionRef = useRef(null);

//   const [isVisible, setIsVisible] = useState({ section: false });

//   const handleScroll = (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (entry.target === sectionRef.current) {
//           setIsVisible(prev => ({ ...prev, section: true }));
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleScroll);

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);




//   return (


//     <div
//       style={{ backgroundImage: `url(${bg}) ` }}

//       className={`bg-cover bg-center  w-full    `}
//     >
//       {/* <img className='w-' src={bg}/>
//        */}
//       <div

//         className="container mx-auto xl:max-w-6xl  flex flex-col md:flex-row  "

//       >

//         <div ref={sectionRef}  className={`md:w-1/2 flex justify-center items-center z-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
//           <div className="text-left md:pl-5 md:translate-y ">
//             <h1 className="mt-20 text-4xl md:text-6xl">
//               Lorem ipsum dolor sit amet,{' '}
//               <span className="text-yellow-600">consectetur,</span>
//             </h1>
//             <p className="mt-4 text-sm md:text-base">
//               There are many variations of passages of Lorem Ipsum available, but
//               the majority have suffered alteration in some form, by injected
//               humour, or randomised words which don't look even slightly
//               believable.
//             </p>
//             <div className="mt-6 ">
//               <Link to="/BlogPage"><Button className=" custom-button mt-4 mr-5"> know more</Button></Link>
//               <Button className=" custom-button mt-4"> contect us</Button>

//             </div>
//           </div>
//         </div>


//         <div ref={sectionRef} className={`md:w-1/2 flex justify-end items-center  md:translate-y-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
//           <img src={stachu} className="h-3/4 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 " alt="Stachu" />
//         </div>
//       </div>

//       {/* <marquee > <img src={Image1} /></marquee> */}
//     </div>
//   );
// }




// import React, { useEffect, useRef, useState } from 'react';
// import '../Herosection/Styles.css';
// import bg from '../Assests/bgimage.png';
// import stachu from '../Assests/stachu.png';
// import stachu2 from '../Assests/naks1.png';
// import stachu3 from '../Assests/naks2.png';
// import { Button } from "antd";
// import Image1 from '../Assests/image1.png';
// import { Link } from 'react-router-dom';
// import Slider from "react-slick"; // Import react-slick slider
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel styles

// export default function Dasbord() {

//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState({ section: false });

//   const handleScroll = (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (entry.target === sectionRef.current) {
//           setIsVisible(prev => ({ ...prev, section: true }));
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleScroll);

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   // Image list for the slider
//   const stachuImages = [stachu, stachu2, stachu3];
//   // console.log("Images array:", stachuImages);

//   console.log(bg, stachu, stachu2, stachu3); // This should print the correct paths or URLs


//   return (
//     <div style={{ backgroundImage: `url(${bg}) ` }} className={`bg-cover bg-center w-full`}>
//       <div className="container mx-auto xl:max-w-6xl flex flex-col md:flex-row">
//         <div ref={sectionRef} className={`md:w-1/2 flex justify-center items-center z-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
//           <div className="text-left md:pl-5 md:translate-y ">
//             <h1 className="mt-20 text-4xl md:text-6xl">
//               Lorem ipsum dolor sit amet,{' '}
//               <span className="text-yellow-600">consectetur,</span>
//             </h1>
//             <p className="mt-4 text-sm md:text-base">
//               There are many variations of passages of Lorem Ipsum available, but
//               the majority have suffered alteration in some form, by injected
//               humour, or randomised words which don't look even slightly
//               believable.
//             </p>
//             <div className="mt-6 ">
//               <Link to="/BlogPage"><Button className=" custom-button mt-4 mr-5">Know more</Button></Link>
//               <Button className=" custom-button mt-4">Contact us</Button>
//             </div>
//           </div>
//         </div>

//         {/* Image slider section */}
//         <div ref={sectionRef} className={`md:w-1/2 flex justify-end items-center md:translate-y-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'} `}>
//           <Slider {...settings}>
//             {stachuImages.map((image, index) => (
//               <div key={index}>
//                 <img
//                   src={image}
//                   className="h-9 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300"
//                   alt={`Stachu ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick'; // Import react-slick for slider functionality
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Herosection/Styles.css';
import bg from '../Assests/bgimage.png';
import { Button } from "antd";
import { Link } from 'react-router-dom';



import stachu1 from '../Assests/stachu.png';
import stachu2 from '../Assests/stachu.png';
import stachu3 from '../Assests/stachu.png';

export default function Dashboard() {
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

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,


    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center w-full pb-20 lg:pt-20 ">
      <div className="container mx-auto xl:max-w-6xl flex flex-col md:flex-row ">




        <div ref={sectionRef} className={`md:w-1/2 flex justify-center items-center z-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'}`}>
          <div className="text-left md:pl-5">
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
            <div className="mt-6">
              <Link to="/BlogPage">
                <Button className="custom-button mt-4 mr-5">know more</Button>
              </Link>
              <Button className="custom-button mt-4">contact us</Button>
            </div>
          </div>
        </div>

        {/* Image slider for Stachu images */}
        {/* <div ref={sectionRef} className={`md:w-1/2  items-center md:translate-y-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'}`}>
          <Slider {...sliderSettings}>
            <div className=''>
              <img src={stachu1} className="w-1/3  " alt="Stachu 1" />
            </div>
            <div>
              <img src={stachu2} className="w-1/3 " alt="Stachu 2" />
            </div>
            <div>
              <img src={stachu3} className="w-1/3" alt="Stachu 3" />
            </div>
          </Slider>
        </div> */}

        <div ref={sectionRef} className={`md:w-1/2 flex justify-center mt-5  items-center md:translate-y-0 ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'}`}>
          <div className='w-1/2 float-end'><Slider {...sliderSettings}>
            <div className=""> {/* Added flex properties */}
              <img src={stachu1} className=" h-3/45 object-cover" alt="Stachu 1" />
            </div>
            <div className=""> {/* Added flex properties */}
              <img src={stachu2} className="h-3/4" alt="Stachu 2" />
            </div>
            <div className=""> {/* Added flex properties */}
              <img src={stachu3} className="h-3/4" alt="Stachu 3" />
            </div>
          </Slider></div>
          
        </div>

      </div>
    </div>
  );
}


