

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
  

// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import products from '../data/Products.json';
// // import { Rate } from 'antd';
// // import stachuImage from '../Assests/stachu.png';

// // const imageMap = {
// //   'stachu.png': stachuImage,
// // };

// // export default function Products() {
// //   const navigate = useNavigate();

// //   const handleProductClick = (product) => {
// //     const productUrl = `/product/${product.id}`;
// //     window.open(productUrl, '_blank'); // Open the product details in a new tab
// //   };

// //   return (
// //     <div className='container mx-auto'>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className='text-center border bg-gray-200 p-4 relative'
// //           >
// //             {product.discount && (
// //               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
// //                 {product.discount}
// //               </span>
// //             )}

// //             <div className='flex justify-center items-center h-70'>
// //               <img
// //                 className='w-1/2'
// //                 src={imageMap[product.imageName]}
// //                 alt={product.name}
// //               />
// //             </div>
// //             <h3>{product.name}</h3>
// //             <span className='font-bold block'>
// //               <span className='line-through mr-2'>
// //                 ${product.originalPrice.toFixed(2)}
// //               </span>
// //               ${product.discountedPrice.toFixed(2)}
// //             </span>
// //             <Rate allowHalf defaultValue={product.rating} />
// //             <div className='flex justify-center'>
// //               <button
// //                 className='border rounded p-2 mr-3 hover:bg-yellow-600 text-white'
// //                 onClick={() => handleProductClick(product)}
// //               >
// //                 <span className='text-black'>Know more</span>
// //               </button>
// //               <button className='border rounded p-2 mr-3 hover:bg-yellow-600 text-white'>
// //                 <span className='text-black'>Add to cart</span>
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // import React from 'react';
// // import products from '../data/Products.json';
// // import { Rate } from 'antd';
// // import stachuImage from '../Assests/stachu.png';
// // // import { useNavigate } from 'react-router-dom';


   

// // const imageMap = {
// //   'stachu.png': stachuImage,
// // };

// // export default function Products() {
// //   const handleProductClick = (product) => {
// //     const productUrl = `/product/${product.id}`;
// //     window.open(productUrl, '_blank'); // Open product details in a new tab
// //   };
// //   // const navigate = useNavigate()
// //   // function gotoProductsDetails() {
// //   //   navigate("Pages")
// //   // }

// //   return (
// //     <div className='container mx-auto'>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className='text-center border bg-gray-200 p-4 relative'
// //           >
// //             {product.discount && (
// //               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
// //                 {product.discount}
// //               </span>
// //             )}

// //             <div className='flex justify-center items-center h-70'>
// //               <img
// //                 className='w-1/2'
// //                 src={imageMap[product.imageName]}
// //                 alt={product.name}
// //               />
// //             </div>
// //             <h3>{product.name}</h3>
// //             <span className='font-bold block'>
// //               <span className='line-through mr-2'>
// //                 ${product.originalPrice.toFixed(2)}
// //               </span>
// //               ${product.discountedPrice.toFixed(2)}
// //             </span>
// //             <Rate allowHalf defaultValue={product.rating} />
// //             <div className='flex justify-center'>
// //               <button
// //                 className='border rounded p-2 mr-3 hover:bg-yellow-600- text-white'
// //                 onClick={() => handleProductClick(product)}
// //               >
// //                 <span className='text-black'>Know more</span>
// //               </button>
// //               <button className='border rounded p-2 mr-3 hover:bg-white text-white'>
// //                 <span className='text-black'>Add to cart</span>
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // // }
// // import React from 'react';
// // import products from '../data/Products.json';
// // import { Rate } from 'antd';
// // import stachuImage from '../Assests/stachu.png';
// // // import { useNavigate } from 'react-router-dom';

// // const imageMap = {
// //   'stachu.png': stachuImage,
// //   // Add more images to the map as needed
// // };

// // export default function Products() {
// //   const handleProductClick = (product) => {
// //     const productUrl = `/product/${product.id}`;
// //     window.open(productUrl, '_blank'); // Open product details in a new tab
// //   };

// //   return (
// //     <div className='container mx-auto'>
// //       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
// //         {products.map((product) => (
// //           <div
// //             key={product.id}
// //             className='text-center border bg-gray-200 p-4 relative'
// //           >
// //             {product.discount && (
// //               <span className='absolute border bg-yellow-600 text-white rounded top-2 right-2 px-2 py-1'>
// //                 {product.discount}
// //               </span>
// //             )}

// //             <div className='flex justify-center items-center h-70'>
// //               <img
// //                 className='w-1/2'
// //                 src={imageMap[product.imageName] || 'fallback-image.png'} // Add fallback image here
// //                 alt={product.name}
// //               />
// //             </div>
// //             <h3>{product.name}</h3>
// //             <span className='font-bold block'>
// //               <span className='line-through mr-2'>
// //                 ${product.originalPrice.toFixed(2)}
// //               </span>
// //               ${product.discountedPrice.toFixed(2)}
// //             </span>
// //             <Rate allowHalf defaultValue={product.rating} />
// //             <div className='flex justify-center'>
// //               <button
// //                 className='border rounded p-2 mr-3 hover:bg-yellow-600 text-white'
// //                 onClick={() => handleProductClick(product)}
// //               >
// //                 <span className='text-black'>Know more</span>
// //               </button>
// //               <button className='border rounded p-2 mr-3 hover:bg-gray-300 text-black'>
// //                 <span className='text-black'>Add to cart</span>
// //               </button>
// //             </div>
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
// // import { useNavigate } from 'react-router-dom';

// const imageMap = {
//   'stachu.png': stachuImage,
//   // Add more images to the map as needed
// };

// export default function Products() {
//   const handleProductClick = (product) => {
//     const productUrl = `/product/${product.id}`;
//     window.open(productUrl, '_blank'); // Open product details in a new tab
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
//                 onClick={() => handleProductClick(product)}
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



import React from 'react';
import products from '../data/Products.json';
import { Rate } from 'antd';
import stachuImage from '../Assests/stachu.png';

const imageMap = {
  'stachu.png': stachuImage,
  // Add more images to the map as needed
};

export default function Products() {
  const handleProductClick = (product) => {
    const productUrl = `/product/${product.id}`;
    window.open(productUrl, '_blank'); // Open product details in a new tab
  };

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mx-5 mt-9 relative'>
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
            <div className='flex justify-center'>
              <button
                className='border rounded p-2 mr-3 hover:bg-yellow-600 text-white'
                onClick={() => handleProductClick(product)}
              >
                <span className='text-black'>Know more</span>
              </button>
              <button className='border rounded p-2 mr-3 hover:bg-gray-300 text-black'>
                <span className='text-black'>Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
