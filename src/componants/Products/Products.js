

// // import React from 'react';
// // import products from '../data/Products.json';
// // import { Rate } from 'antd';

// // import stachuImage from '../Assests/stachu.png'; 

// // const imageMap = {
// //   "stachu.png": stachuImage
// // };

// // export default function Products() {
// //   return (
// //     <div className='container mx-auto '>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
// //         {products.map((product) => (
// //           <div key={product.id} className='text-center border bg-gray-200 p-4 relative'>

// //             {product.discount && (
// //               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
// //                 {product.discount}
// //               </span>
// //             )}

// //             <div className="flex justify-center items-center h-70"> 
// //               <img className='w-1/2' src={imageMap[product.imageName]} alt={product.name} />
// //             </div>
// //             <h3>{product.name}</h3>
// //             <span className='font-bold block '>
// //               <span className='line-through mr-2'>${product.originalPrice.toFixed(2)}</span>
// //               ${product.discountedPrice.toFixed(2)}
// //             </span>
// //             <Rate allowHalf defaultValue={product.rating} />
// //             <span className='flex justify-center'>
// //             <button className="border rounded p-2 mr-3 hover:bg-yellow-600 text-white">
// //               <span className='text-black'>Know more</span>
// //             </button>
// //             <button className="border rounded p-2 mr-3 hover:bg-yellow-600 text-white">
// //               <span className='text-black'>Ad to card</span>
// //             </button>
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }







// import React from 'react';
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import stachuImage from '../Assests/stachu.png';

// const imageMap = {
//   'stachu.png': stachuImage,
//   // Add more images to the map as needed
// };

// // export default function Products() {
// //   const handleProductClick = (product) => {
// //     const productUrl = `/product/${product.id}`;
// //     window.open(productUrl, '_blank'); // Open product details in a new tab
// //   };
// export default memo(function MultiSection() {
//   const goToDemoPage = () => {
//       window.open('/ProductsDetails', '_blank'); 
//   };

//   return (
//     <div className='container mx-auto'>
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className='text-center border bg-gray-200 p-4 relative'
//           >
//             {product.discount && (
//               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
//                 {product.discount}
//               </span>
//             )}

//             <div className='flex justify-center items-center h-70'>
//               <img
//                 className='w-1/2'
//                 src={imageMap[product.imageName] || 'fallback-image.png'} // Add fallback image here
//                 alt={product.name}
//               />
//             </div>
//             <h3>{product.name}</h3>
//             <span className='font-bold block'>
//               <span className='line-through mr-2'>
//                 ${product.originalPrice.toFixed(2)}
//               </span>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//             <Rate allowHalf defaultValue={product.rating} />
//             <div className='flex justify-center'>
//               <button
//                 className='border rounded p-2 mr-3 hover:bg-yellow-600 text-white'
//                 onClick={goToDemoPage}
//               >
//                 <span className='text-black'>Know more</span>
//               </button>
//               <button className='border rounded p-2 mr-3 hover:bg-gray-300 text-black'>
//                 <span className='text-black'>Add to cart</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { memo, useEffect, useRef, useState } from 'react';
// import './Styles.css'
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import { Button } from "antd";
// import stachuImage from '../Assests/stachu.png';
// import { useNavigate } from 'react-router-dom'; 

// const imageMap = {
//   'stachu.png': stachuImage,

// };

// export default memo(function Products() {
//   const navigate = useNavigate(); 

//   // Function to navigate to the product detail page
//   const goToProductDetail = (productId) => {
//     navigate(`/ProductsDetails/${productId}`);
//   };


//   const section1Ref = useRef(null);

//   const [isVisible, setIsVisible] = useState({ section1: false});

//   const handleScroll = (entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         if (entry.target === section1Ref.current) {
//           setIsVisible(prev => ({ ...prev, section1: true }));
//         } 
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(handleScroll);

//     if (section1Ref.current) observer.observe(section1Ref.current);


//     return () => {
//       if (section1Ref.current) observer.unobserve(section1Ref.current);

//     };
//   }, []);

//   return (
//     <div className='container mx-auto'>
//       <div  ref={section1Ref}  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center  mt-9 relative ${isVisible.section1 ? 'fade-in-right visible' : 'fade-in-right'}'>
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className='text-center border bg-gray-200 p-4 relative'
//           >
//             {product.discount && (
//               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
//                 {product.discount}
//               </span>
//             )}

//             <div className='flex justify-center items-center h-70'>
//               <img
//                 className='w-1/2'
//                 src={imageMap[product.imageName] || 'fallback-image.png'} // Add fallback image here
//                 alt={product.name}
//               />
//             </div>
//             <h3>{product.name}</h3>
//             <span className='font-bold block'>
//               <span className='line-through mr-2'>
//                 ${product.originalPrice.toFixed(2)}
//               </span>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//             <Rate allowHalf defaultValue={product.rating} />
//             <div className='flex justify-center mt-5'>
//               <Button
//                 className='border rounded p-2 mr-3  bg-yellow-500 hover:bg-yellow-600 text-white'
//                 onClick={() => goToProductDetail(product.id)} // Call the function with product ID
//               >
//                 <span>Know more</span>
//               </Button>

//               <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4"> Add to Cart</Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// });  


import React, { memo, useEffect, useRef, useState } from 'react';
import './Styles2.css'
import products from '../data/Products.json';
import { Rate } from 'antd';
import { Button } from "antd";
import stachuImage from '../Assests/stachu.png';
import { Link, useNavigate } from 'react-router-dom';

const imageMap = {
  'stachu.png': stachuImage,
};



export default memo(function Products() {
  const navigate = useNavigate();

  // Function to navigate to the product detail page
  const goToProductDetail = (productId) => {
    navigate(`/ProductsDetails/${productId}`);
  };

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
    <div className='container mx-auto xl:max-w-6xl '>
      <div
        ref={sectionRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mt-9 relative ${isVisible.section ? 'fade-in-right visible' : 'fade-in-right'}`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className='text-center border bg-gray-200 p-4 relative'
          >
            {product.discount && (
              <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
                {product.discount}
              </span>
            )}

            <div className='flex justify-center items-center h-70'>
              <img
                className='w-1/2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 scale-75 translate-y-3.5 transform-gpu'
                src={imageMap[product.imageName] || 'fallback-image.png'} // Add fallback image here
                alt={product.name}
              />
            </div>
            <h3>{product.name}</h3>
            <span className='font-bold block'>
              <span className='line-through mr-2'>
                ₹{product.originalPrice.toFixed(2)}
              </span>
              ₹{product.discountedPrice.toFixed(2)}
            </span>
            <Rate allowHalf defaultValue={product.rating} />
            <div className='flex justify-center mt-5'>
              <Link to={`/ProductsDetail/${product.id}`} ><Button
                className='custom-button'
              // onClick={() => goToProductDetail(product.id)} // Call the function with product ID
              >
                Know more
              </Button></Link>

              {/* <Link to="/Addtocard"><Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
                    Add to Cart
                  </Button></Link> */}




              <Link to="/Addtocard">
                <Button className="custom-button">
                  Add to Cart
                </Button>
              </Link>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
