

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


import React, { memo } from 'react';
import products from '../data/Products.json';
import { Rate } from 'antd';
import { Button } from "antd";
import stachuImage from '../Assests/stachu.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const imageMap = {
  'stachu.png': stachuImage,
  // Add more images to the map as needed
};

export default memo(function Products() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to navigate to the product detail page
  const goToProductDetail = (productId) => {
    navigate(`/ProductsDetails/${productId}`); // Navigate to the product details page
  };

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center  mt-9 relative'>
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
                className='w-1/2'
                src={imageMap[product.imageName] || 'fallback-image.png'} // Add fallback image here
                alt={product.name}
              />
            </div>
            <h3>{product.name}</h3>
            <span className='font-bold block'>
              <span className='line-through mr-2'>
                ${product.originalPrice.toFixed(2)}
              </span>
              ${product.discountedPrice.toFixed(2)}
            </span>
            <Rate allowHalf defaultValue={product.rating} />
            <div className='flex justify-center mt-5'>
              <Button
                className='border rounded p-2 mr-3  bg-yellow-500 hover:bg-yellow-600 text-white'
                onClick={() => goToProductDetail(product.id)} // Call the function with product ID
              >
                <span>Know more</span>
              </Button>

              <Button className=" bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4"> Add to Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});  
