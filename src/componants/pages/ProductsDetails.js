// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { Rate } from 'antd';
// // import products from '../data/Products.json';
// // import stachuImage from '../Assests/stachu.png';
// // import Products from '../componants/Products/Products';
// // const imageMap = {
// //   'stachu.png': stachuImage,
// // };

// // export default function ProductsDetail() {
// //   const { productId } = useParams();
// //   const product = products.find((p) => p.id === parseInt(productId));

// //   if (!product) {
// //     return <div>Product not found</div>;
// //   }

// //   return (

   

// //     <div className="container mx-auto mt-10 flex">
// //      <Products/>
// //       <div className="w-1/2 flex justify-center">
// //         <img
// //           className="w-2/3 h-auto object-contain"
// //           src={imageMap[product.imageName]}
// //           alt={product.name}
// //         />
// //       </div>

// //       {/* Product Details on the right */}
// //       <div className="w-1/2 pl-10">
// //         <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
// //         <span className="font-bold text-lg block mb-2">
// //           <span className="line-through mr-2">${product.originalPrice.toFixed(2)}</span>
// //           ${product.discountedPrice.toFixed(2)}
// //         </span>
// //         <Rate allowHalf defaultValue={product.rating} />
// //         <p className="mt-4">{product.description}</p>

// //         {/* Add to Cart Button */}
// //         <button className="mt-6 border rounded p-2 hover:bg-yellow-600 text-white">
// //           <span className="text-black">Add to Cart</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../componants/data/Products.json';
// import { Rate } from 'antd';
// import stachuImage from '../componants/Assests/stachu.png';
// import { Link } from "react-router-dom";

// const imageMap = {
//   'stachu.png': stachuImage,
// };

// export default function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find((item) => item.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }
//   <Link to="/productdetails">Go to Product Details</Link>

//   return (
//     <div className='container mx-auto mt-10'>
         
//       <div className='flex flex-col md:flex-row items-center justify-center'>
//         <div className='flex justify-center items-center h-70 mb-5 md:mb-0'>
//           <img
//             className='w-1/2'
//             src={imageMap[product.imageName]}
//             alt={product.name}
//           />
//         </div>
//         <div className='md:ml-10'>
//           <h3 className='text-2xl font-bold'>{product.name}</h3>
//           <div className='text-lg mt-4'>
//             <span className='line-through mr-2'>
//               ${product.originalPrice.toFixed(2)}
//             </span>
//             <span className='text-red-600'>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//           </div>
//           <Rate allowHalf defaultValue={product.rating} className='mt-2' />
//           <p className='mt-4'>{product.description}</p>
//           <button className='mt-6 border rounded p-2 bg-yellow-600 text-white'>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/Products.json'; // Ensure the path is correct
// import { Rate } from 'antd';
// import stachuImage from '../Assests/stachu.png'; // Ensure the path is correct

// const imageMap = {
//   'stachu.png': stachuImage,
  
// };

// export default function ProductDetail() {
//   const { productId } = useParams(); // Get the productId from the URL
//   const product = products.find((item) => item.id === parseInt(productId, 10)); // Parse productId correctly

//   // Check if product exists
//   if (!product) {
//     return <div className='container mx-auto mt-10'>Product not found</div>; // Added container styling for consistency
//   }

//   return (
//     <div className='container mx-auto mt-10'>
//       <div className='flex flex-col md:flex-row items-center justify-center'>
//         <div className='flex justify-center items-center h-70 mb-5 md:mb-0'>
//           <img
//             className='w-1/2'
//             src={imageMap[product.imageName] || 'fallback-image.png'} // Provide a fallback image
//             alt={product.name}
//           />
//         </div>
//         <div className='md:ml-10'>
//           <h3 className='text-2xl font-bold'>{product.name}</h3>
//           <div className='text-lg mt-4'>
//             <span className='line-through mr-2'>
//               ${product.originalPrice.toFixed(2)}
//             </span>
//             <span className='text-red-600'>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//           </div>
//           <Rate allowHalf value={product.rating} className='mt-2' /> {/* Use value instead of defaultValue */}
//           <p className='mt-4'>{product.description}</p>
//           <button className='mt-6 border rounded p-2 bg-yellow-600 text-white'>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
 


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import stachuImage from '../Assests/stachu.png';

// const imageMap = {
//   'stachu.png': stachuImage,
//   // Add more images as needed
// };

// export default function ProductDetail() {
//   const { productId } = useParams(); // Get the productId from the URL
//   const product = products.find((item) => item.id === parseInt(productId, 10)); // Parse productId correctly

//   // Check if product exists
//   if (!product) {
//     return <div className='container mx-auto mt-10'>Product not found</div>; // Added container styling for consistency
//   }

//   return (
//     <div className='container mx-auto mt-10'>
//       <div className=' grid grid-cols-2 md:flex-row items-center justify-center'>
//         <div className='flex justify-center  h-70 mb-5 md:mb-0'>
//           <img
//             className='w-1/3'
//             src={imageMap[product.imageName] || 'fallback-image.png'}
//             alt={product.name}
//           />
//         </div>
//         <div className='md:ml-10'>
//           <p>It looks like you’ve written "lorem." How can I assist you further? If you were referring to "Lorem Ipsum," it's often used as placeholder text in design and typesetting. Let me know if you need more information!</p>
//           <h3 className='text-2xl font-bold'>{product.name}</h3>
//           <div className='text-lg mt-4'>
//             <span className='line-through mr-2'>
//               ${product.originalPrice.toFixed(2)}
//             </span>
//             <span className='text-red-600'>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//           </div>
//           <Rate allowHalf value={product.rating} className='mt-2' />
//           <p className='mt-4'>{product.description}</p>
//           <button className='mt-6 border rounded p-2 hover:bg-yellow-600 hover:text-white'>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import stachuImage from '../Assests/stachu.png';

// const imageMap = {
//   'stachu.png': stachuImage,
//   // Add more images as needed
// };

// export default function ProductDetail() {
//   const { productId } = useParams(); // Get the productId from the URL
//   const product = products.find((item) => item.id === parseInt(productId, 10)); // Parse productId correctly

//   // Check if product exists
//   if (!product) {
//     return <div className='container mx-auto mt-10'>Product not found</div>; // Added container styling for consistency
//   }

//   return (
//     <div className=' sm:px-6 lg:px-8 '>
//       <div className='grid grid-cols-1 md:grid-cols-2 '>
//         {/* Image section */}
//         <div className='flex justify-center'>
//           <img
//             className='h-1/2 sm:w-1/2 md:w-full object-contain'
//             src={imageMap[product.imageName] || 'fallback-image.png'}
//             alt={product.name}
//           />
//         </div>

//         {/* Product details */}
//         <div className='md:ml-10  translate-y-36  '>
//           <h3 className='text-xl sm:text-2xl font-bold'>{product.name}</h3>

//           {/* Price section */}
         

//           {/* Rating */}
//            <div><Rate allowHalf value={product.rating} className='mt-2 pr-5' />
//            <span>
//            (5 customer reviews)</span>
//            </div>

//            <div className='text-lg mt-4 flex items-center'>
//             <span className='line-through mr-2'>
//               ${product.originalPrice.toFixed(2)}
//             </span>
//             <span className='text-red-600'>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//           </div>


//           {/* Description */}
//           <p className='mt-4'>{product.description}</p>

//           {/* Add to Cart Button */}
//           <button className='mt-6 border rounded p-2 hover:bg-yellow-600 hover:text-white transition'>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// } 

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import stachuImage from '../Assests/stachu.png';
// import stachuImage2 from '../Assests/naks1.png'; 
// import stachuImage3 from '../Assests/naks2.png'; 


// const imageMap = {
//   'stachu.png': stachuImage,
//   'naks1.png': stachuImage2,
//   'naks2.png': stachuImage3,
 
// };

// export default function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find((item) => item.id === parseInt(productId, 10));

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   if (!product) {
//     return <div className='container mx-auto mt-10'>Product not found</div>;
//   }

//   // Example: Dynamically loading all product images based on product ID
//   const productImages = [
//     imageMap[product.imageName], // Main image
//     stachuImage2, // Additional images
//     stachuImage3,
    
//   ];

//   // Function to handle moving to the previous image
//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
//     );
//   };

//   // Function to handle moving to the next image
//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className='sm:px-6 lg:px-8'>
//       <div className='grid grid-cols-2 md:grid-cols-2'>
//         {/* Image section with left and right arrows */}
//         <div className='relative flex justify-center items-center'>
//           {/* Left Arrow */}
//           <button
//             className='absolute left-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-400'
//             onClick={handlePrevImage}
//           >
//             &#8592; {/* Left arrow symbol */}
//           </button>

//           {/* Display the current image */}
//           <img
//             className='h-1/2 sm:w-1/2 md:w-96 object-contain'
//             src={productImages[currentImageIndex] }
//             alt={product.name}
//           />

//           {/* Right Arrow */}
//           <button
//             className='absolute right-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-400'
//             onClick={handleNextImage}
//           >
//             &#8594; {/* Right arrow symbol */}
//           </button>
//         </div>

//         {/* Product details */}
//         <div className='md:ml-10 translate-y-36'>
//           <h3 className='text-xl sm:text-2xl font-bold'>{product.name}</h3>

//           {/* Rating and Reviews */}
//           <div>
//             <Rate allowHalf value={product.rating} className='mt-2 pr-5' />
//             <span>(5 customer reviews)</span>
//           </div>

//           {/* Price section */}
//           <div className='text-lg mt-4 flex items-center'>
//             <span className='line-through mr-2'>
//               ${product.originalPrice.toFixed(2)}
//             </span>
//             <span className='text-red-600'>
//               ${product.discountedPrice.toFixed(2)}
//             </span>
//           </div>

//           {/* Description */}
//           <p className='mt-4'>{product.description}</p>

//           {/* Add to Cart Button */}
//           <button className='mt-6 border rounded p-2 hover:bg-yellow-600 hover:text-white transition'>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products.json';
import { Rate } from 'antd';
import stachuImage from '../Assests/stachu.png';
import stachuImage2 from '../Assests/naks1.png';
import stachuImage3 from '../Assests/naks2.png';

const imageMap = {
  'stachu.png': stachuImage ,
  'naks1.png': stachuImage2,
  'naks2.png': stachuImage3,
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId, 10));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return <div className="container mx-auto mt-10">Product not found</div>;
  }

  // Example: Dynamically loading all product images based on product ID
  const productImages = [
    imageMap[product.imageName], // Main image
    stachuImage2, // Additional images
    stachuImage3,
  ];

  // Function to handle moving to the previous image
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  // Function to handle moving to the next image
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto sm:px-4 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image section with left and right arrows */}
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-400"
            onClick={handlePrevImage}
          >
            &#8592; {/* Left arrow symbol */}
          </button>

          {/* Display the current image */}
          <img
             className="w-96 h-96 object-contain" 
            src={productImages[currentImageIndex]}
            alt={product.name}
          />

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-400"
            onClick={handleNextImage}
          >
            &#8594; {/* Right arrow symbol */}
          </button>
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-2">
            <Rate allowHalf value={product.rating} className="mr-2" />
            <span>(5 customer reviews)</span>
          </div>

          {/* Price section */}
          <div className="text-lg mt-4 flex items-center">
            <span className="line-through mr-2">${product.originalPrice.toFixed(2)}</span>
            <span className="text-red-600">${product.discountedPrice.toFixed(2)}</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-gray-700">{product.description}</p>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}


