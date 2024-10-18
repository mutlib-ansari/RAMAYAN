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




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate } from 'antd';
// import { Button } from 'antd';
// import Slider from 'react-slick';
// import stachuImage from '../Assests/stachu.png';
// import stachuImage2 from '../Assests/naks1.png';
// import stachuImage3 from '../Assests/naks2.png';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

// // Map product images
// const imageMap = {
//   'stachu.png': stachuImage,
//   'naks1.png': stachuImage2,
//   'naks2.png': stachuImage3,
// };

// export default function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find((item) => item.id === parseInt(productId, 10));

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [reviews, setReviews] = useState([
//     { name: 'John Doe', rating: 5, comment: 'Great product!' },
//     { name: 'Jane Smith', rating: 4, comment: 'Very satisfied with the purchase.' },
//   ]);
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

//   // State to manage the visibility of the review input section
//   const [showReviewInput, setShowReviewInput] = useState(false);

//   const productImages = product ? [imageMap[product.imageName], stachuImage2, stachuImage3] : [];

//   useEffect(() => {
//     if (productImages.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [productImages]);

//   if (!product) {
//     return <div className="container mx-auto mt-10">Product not found</div>;
//   }

//   const handleReviewSubmit = () => {
//     if (newReview.name && newReview.rating && newReview.comment) {
//       setReviews([...reviews, newReview]);
//       setNewReview({ name: '', rating: 0, comment: '' });
//       setShowReviewInput(false); // Hide input after submitting
//     }
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute left-0 bottom-20  z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//       >
//         &#8592; {/* Left arrow symbol */}
//       </div>
//     );
//   };

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute right-0  bottom-20  z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//       >
//         &#8594; {/* Right arrow symbol */}
//       </div>
//     );
//   };

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//   };

//   return (
//     <div className="container mx-auto sm:px-4 lg:px-8 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Image section with slider */}
//         <div className="relative flex justify-center items-center">
//           <img className="w-96 h-96 object-contain" src={productImages[currentImageIndex]} alt={product.name} />
//         </div>

//         {/* Product details */}
//         <div className="flex flex-col justify-center items-start">
//           <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>

//           {/* Rating and Reviews */}
//           <div className="flex items-center mt-2">
//             <Rate allowHalf value={product.rating} className="mr-2" />
//             <span>({reviews.length} customer reviews)</span>
//           </div>

//           {/* Price section */}
//           <div className="text-lg mt-4 flex items-center">
//             <span className="line-through mr-2">${product.originalPrice.toFixed(2)}</span>
//             <span className="text-red-600">${product.discountedPrice.toFixed(2)}</span>
//           </div>

//           {/* Description */}
//           <p className="mt-4 text-gray-700">{product.description}</p>

//           <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4">Add to Cart</Button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="mt-10">
//         <div className='flex justify-between text-xl font-bold'> 
//           <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
//           <h5 
//             className="cursor-pointer text-yellow-500 hover:text-yellow-600"
//             onClick={() => setShowReviewInput((prev) => !prev)} // Toggle review input visibility
//           >
//             {showReviewInput ? 'Cancel' : 'Leave a Review'}
//           </h5>
//         </div>

//         {/* Display Reviews */}
//         <div className="space-y-4">
//           {reviews.map((review, index) => (
//             <div key={index} className="border p-4 rounded-lg bg-gray-100">
//               <div className="flex justify-between">
//                 <h4 className="font-bold">{review.name}</h4>
//                 <Rate value={review.rating} disabled />
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//             </div>
//           ))}
//         </div>

//         {/* Add a Review */}
//         {showReviewInput && (
//           <div className="mt-6">
//             <h4 className="font-bold mb-2">Leave a Review</h4>
//             <div className="flex flex-col space-y-2">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={newReview.name}
//                 onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//                 className="border p-2 rounded-lg"
//               />
//               <Rate
//                 onChange={(value) => setNewReview({ ...newReview, rating: value })}
//                 value={newReview.rating}
//               />
//               <textarea
//                 placeholder="Your Review"
//                 value={newReview.comment}
//                 onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                 className="border p-2 rounded-lg"
//                 rows={4}
//               />
//               <Button onClick={handleReviewSubmit} className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4">
//                 Submit Review
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Related Products Slider */}
//       <div className="mt-10">
//         <h3 className="text-xl font-bold mb-4">Related Products</h3>
//         <Slider {...settings}>
//           {/* Example related products using the same stachu image */}
//           <div>
//             <img src={stachuImage} alt="Related Product 1" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 1</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 2" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 2</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 3" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 3</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 4" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 4</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 5" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 5</h4>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate, Button, Modal, Input } from 'antd';
// import Slider from 'react-slick';
// import stachuImage from '../Assests/stachu.png';
// import stachuImage2 from '../Assests/naks1.png';
// import stachuImage3 from '../Assests/naks2.png';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../Herosection/Styles.css';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// const { TextArea } = Input;

// const imageMap = {
//   'stachu.png': stachuImage,
//   'naks1.png': stachuImage2,
//   'naks2.png': stachuImage3,
// };

// export default function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find((item) => item.id === parseInt(productId, 10));

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [reviews, setReviews] = useState([
//     { name: 'John Doe', rating: 5, comment: 'Great product!' },
//     { name: 'Jane Smith', rating: 4, comment: 'Very satisfied with the purchase.' },
//   ]);
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const productImages = product ? [imageMap[product.imageName], stachuImage2, stachuImage3] : [];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     if (productImages.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prevIndex) =>
//           prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [productImages]);

//   if (!product) {
//     return <div className="container mx-auto mt-10">Product not found</div>;
//   }

//   const handleReviewSubmit = () => {
//     if (newReview.name && newReview.rating && newReview.comment) {
//       setReviews([...reviews, newReview]);
//       setNewReview({ name: '', rating: 0, comment: '' });
//       setIsModalVisible(false);
//     }
//   };

//   // Custom Prev Arrow using Ant Design Icon
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//         style={{ left: '-25px' }} // Adjust the position
//       >
//         <LeftOutlined style={{ fontSize: '24px' }} /> {/* Ant Design left arrow */}
//       </div>
//     );
//   };

//   // Custom Next Arrow using Ant Design Icon
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//         style={{ right: '-25px' }} // Adjust the position
//       >
//         <RightOutlined style={{ fontSize: '24px' }} /> {/* Ant Design right arrow */}
//       </div>
//     );
//   };

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Display one image at a time
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />, // Using custom arrow components
//     nextArrow: <NextArrow />, // Using custom arrow components
//   };

//   return (
//     <div className="container mx-auto sm:px-4 lg:px-8 py-10 pt-36">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Image section with slider */}
//         <div className="relative flex justify-center items-center">
//           <Slider {...settings}>
//             {productImages.map((image, index) => (
//               <div key={index}>
//                 <img
//                   className="w-96 h-96 object-contain"
//                   src={image}
//                   alt={product.name}
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         <div className="flex flex-col justify-center items-start">
//           <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>

//           <div className="flex items-center mt-2">
//             <Rate allowHalf value={product.rating} className="mr-2" />
//             <span>({reviews.length} customer reviews)</span>
//           </div>

//           <div className="text-lg mt-4 flex items-center">
//             <span className="line-through mr-2">₹{product.originalPrice.toFixed(2)}</span>
//             <span className="text-red-600">₹{product.discountedPrice.toFixed(2)}</span>
//           </div>

//           <p className="mt-4 text-gray-700">{product.description}</p>

//           <Link to='/Addtocard'><Button className="custom-button mt-6 py-2 px-4">Add to Cart</Button></Link>
//         </div>
//       </div>

//       <div className="mt-10">
//         <div className='flex justify-between text-xl font-bold'>
//           <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
//           <h5
//             className="cursor-pointer text-yellow-500 hover:text-yellow-600"
//             onClick={() => setIsModalVisible(true)}
//           >
//             Leave a Review
//           </h5>
//         </div>

//         <div className="space-y-4">
//           {reviews.map((review, index) => (
//             <div key={index} className="border p-4 rounded-lg bg-gray-100">
//               <div className="flex justify-between">
//                 <h4 className="font-bold">{review.name}</h4>
//                 <Rate value={review.rating} disabled />
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Modal
//         title="Leave a Review"
//         visible={isModalVisible}
//         onCancel={() => setIsModalVisible(false)}
//         footer={null}
//       >
//         <div className="flex flex-col space-y-2">
//           <Input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//           />
//           <Rate
//             onChange={(value) => setNewReview({ ...newReview, rating: value })}
//             value={newReview.rating}
//           />
//           <TextArea
//             placeholder="Your Review"
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//             rows={4}
//           />
//           <Button onClick={handleReviewSubmit} className="custom-button py-2 px-4 mt-4">
//             Submit Review
//           </Button>
//         </div>
//       </Modal>

//       {/* Related Products Slider */}
//       <div className="mt-10">
//         <h3 className="text-xl font-bold mb-4">Related Products</h3>
//         <Slider {...settings}>
//           <div>
//             <img src={stachuImage} alt="Related Product 1" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 1</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 2" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 2</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 3" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 3</h4>
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import products from '../data/Products.json';
// import { Rate, Button, Modal, Input, } from 'antd';
// import Slider from 'react-slick';
// import stachuImage from '../Assests/stachu.png';
// import stachuImage2 from '../Assests/naks1.png';
// import stachuImage3 from '../Assests/naks2.png';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../Herosection/Styles.css'
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// const { TextArea } = Input;


// const imageMap = {
//   'stachu.png': stachuImage,
//   'naks1.png': stachuImage2,
//   'naks2.png': stachuImage3,
// };

// export default function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find((item) => item.id === parseInt(productId, 10));

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [reviews, setReviews] = useState([
//     { name: 'John Doe', rating: 5, comment: 'Great product!' },
//     { name: 'Jane Smith', rating: 4, comment: 'Very satisfied with the purchase.' },
//   ]);
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

//   // State to manage the visibility of the modal
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const productImages = product ? [imageMap[product.imageName], stachuImage2, stachuImage3] : [];


//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top
//   }, []);


//   // useEffect(() => {
//   //   if (productImages.length > 0) {
//   //     const interval = setInterval(() => {
//   //       setCurrentImageIndex((prevIndex) =>
//   //         prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
//   //       );
//   //     }, 3000);

//   //     return () => clearInterval(interval);
//   //   }
//   // }, [productImages]);

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
//     );
//   };

//   if (!product) {
//     return <div className="container mx-auto mt-10">Product not found</div>;
//   }

//   const handleReviewSubmit = () => {
//     if (newReview.name && newReview.rating && newReview.comment) {
//       setReviews([...reviews, newReview]);
//       setNewReview({ name: '', rating: 0, comment: '' });
//       setIsModalVisible(false); // Hide modal after submitting
//     }
//   };

//   // const PrevArrow = ({ onClick }) => {
//   // //   return (
//   // //     <div
//   // //       className="absolute left-0 bottom-20  z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//   // //       onClick={onClick}
//   // //     >
//   // //       &#8592; {/* Left arrow symbol */}
//   // //     </div>
//   // //   );
//   // // };

//   // // const NextArrow = ({ onClick }) => {
//   // //   return (
//   // //     <div
//   // //       className="absolute right-0  bottom-20  z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//   // //       onClick={onClick}
//   // //     >
//   // //       &#8594; {/* Right arrow symbol */}
//   // //     </div>
//   // //   );
//   // // };
//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute left-0 bottom-20 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//       >
//         <LeftOutlined />
//       </div>
//     );
//   };

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute right-0 bottom-20 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//         onClick={onClick}
//       >
//         <RightOutlined />
//       </div>
//     );
//   };



//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // prevArrow: <PrevArrow />,
//     // nextArrow: <NextArrow />,
//   };

//   return (
//     <div className="container mx-auto sm:px-4 lg:px-8 py-10 pt-36">
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         <div className="relative flex justify-center items-center">
//           <img className="w-96 h-96 object-contain" src={productImages[currentImageIndex]} alt={product.name} />
//         </div>


//         <div className="flex flex-col justify-center items-start">
//           <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>


//           <div className="flex items-center mt-2">
//             <Rate allowHalf value={product.rating} className="mr-2" />
//             <span>({reviews.length} customer reviews)</span>
//           </div>


//           <div className="text-lg mt-4 flex items-center">
//             <span className="line-through mr-2">₹{product.originalPrice.toFixed(2)}</span>
//             <span className="text-red-600">₹{product.discountedPrice.toFixed(2)}</span>
//           </div>


//           <p className="mt-4 text-gray-700">{product.description}</p>

//           <Link to='/Addtocard'><Button className="custom-button mt-6 py-2 px-4">Add to Cart</Button></Link>
//         </div>

//       </div> */}



//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         <div className="relative flex justify-center items-center">

//           <div
//             className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//             onClick={handlePrevImage}
//             style={{ left: '-1px' }}
//           >
//             <LeftOutlined style={{ fontSize: '24px' }} />
//           </div>


//           <img className="w-96 h-96 object-contain" src={productImages[currentImageIndex]} alt={product.name} />


//           <div
//             className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
//             onClick={handleNextImage}
//             style={{ right: '-1px' }} // Adjust the position
//           >
//             <RightOutlined style={{ fontSize: '24px' }} />
//           </div>
//         </div>

//         <div className="flex flex-col justify-center items-start">
//           <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>

//           <div className="flex items-center mt-2">
//             <Rate allowHalf value={product.rating} className="mr-2" />
//             <span>({product.rating} customer reviews)</span>
//           </div>

//           <div className="text-lg mt-4 flex items-center">
//             <span className="line-through mr-2">₹{product.originalPrice.toFixed(2)}</span>
//             <span className="text-red-600">₹{product.discountedPrice.toFixed(2)}</span>
//           </div>

//           <p className="mt-4 text-gray-700">{product.description}</p>

//           <Link to='/Addtocard'><Button className="custom-button mt-6 py-2 px-4">Add to Cart</Button></Link>
//         </div>
//       </div>

//       <div className="mt-10">
//         <div className='flex justify-between text-xl font-bold'>
//           <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
//           <h5
//             className="cursor-pointer text-yellow-500 hover:text-yellow-600"
//             onClick={() => setIsModalVisible(true)}
//           >
//             Leave a Review
//           </h5>
//         </div>


//         <div className="space-y-4">
//           {reviews.map((review, index) => (
//             <div key={index} className="border p-4 rounded-lg bg-gray-100">
//               <div className="flex justify-between">
//                 <h4 className="font-bold">{review.name}</h4>
//                 <Rate value={review.rating} disabled />
//               </div>
//               <p className="text-gray-600 mt-2">{review.comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>


//       <Modal
//         title="Leave a Review"
//         visible={isModalVisible}
//         onCancel={() => setIsModalVisible(false)}
//         footer={null} // We'll handle the footer within the modal content
//       >
//         <div className="flex flex-col space-y-2">
//           <Input
//             type="text"
//             placeholder="Your Name"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//           />
//           <Rate
//             onChange={(value) => setNewReview({ ...newReview, rating: value })}
//             value={newReview.rating}
//           />
//           <TextArea
//             placeholder="Your Review"
//             value={newReview.comment}
//             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//             rows={4}
//           />
//           <Button onClick={handleReviewSubmit} className="custom-button py-2 px-4 mt-4">
//             Submit Review
//           </Button>
//         </div>
//       </Modal>

//       {/* Related Products Slider */}
//       <div className="mt-10">
//         <h3 className="text-xl font-bold mb-4">Related Products</h3>
//         <Slider {...settings}>
//           <div>
//             <img src={stachuImage} alt="Related Product 1" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 1</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 2" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 2</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 3" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 3</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 4" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 4</h4>
//           </div>
//           <div>
//             <img src={stachuImage} alt="Related Product 5" className="object-contain h-48 w-full" />
//             <h4 className="text-center mt-2">Related Product 5</h4>
//           </div>
//         </Slider>
//       </div>




//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Rate, Button, Modal, Input, Tabs } from 'antd'; // Import Tabs component
import Slider from 'react-slick';
import products from '../data/Products.json';
import stachuImage from '../Assests/stachu.png';
import stachuImage2 from '../Assests/naks1.png';
import stachuImage3 from '../Assests/naks2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Herosection/Styles.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { TabPane } = Tabs; 

const imageMap = {
  'stachu.png': stachuImage,
  'naks1.png': stachuImage2,
  'naks2.png': stachuImage3,
};

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === parseInt(productId, 10));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reviews, setReviews] = useState([
    { name: 'John Doe', rating: 5, comment: 'Great product!' },
    { name: 'Jane Smith', rating: 4, comment: 'Very satisfied with the purchase.' },
  ]);
  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  // State for managing Q&A section
  const [qaList, setQaList] = useState([
    { question: 'What is the material?', answer: 'It is made of high-quality plastic.' },
    { question: 'Is this durable?', answer: 'Yes, it is very durable.' },
  ]);
  const [newQuestion, setNewQuestion] = useState({ question: '', answer: '' });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const productImages = product ? [imageMap[product.imageName], stachuImage2, stachuImage3] : [];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  if (!product) {
    return <div className="container mx-auto mt-10">Product not found</div>;
  }

  const handleReviewSubmit = () => {
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 0, comment: '' });
      setIsModalVisible(false); // Hide modal after submitting
    }
  };

  const handleQuestionSubmit = () => {
    if (newQuestion.question && newQuestion.answer) {
      setQaList([...qaList, newQuestion]);
      setNewQuestion({ question: '', answer: '' });
    }
  };

  return (
    <div className="container mx-auto sm:px-4 lg:px-8 py-10 pt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative flex justify-center items-center">
          <div
            className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
            onClick={handlePrevImage}
            style={{ left: '5px' }}
          >
            <LeftOutlined style={{ fontSize: '20px' }} />
          </div>

          <img className="w-96 h-96 object-contain" src={productImages[currentImageIndex]} alt={product.name} />

          <div
            className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full hover:bg-yellow-600 cursor-pointer"
            onClick={handleNextImage}
            style={{ right: '5px' }}
          >
            <RightOutlined style={{ fontSize: '20px' }} />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg sm:text-2xl font-bold">{product.name}</h3>

          <div className="flex items-center mt-2">
            <Rate allowHalf value={product.rating} className="mr-2" />
            <span>({product.rating} customer reviews)</span>
          </div>

          <div className="text-lg mt-4 flex items-center">
            <span className="line-through mr-2">₹{product.originalPrice.toFixed(2)}</span>
            <span className="text-red-600">₹{product.discountedPrice.toFixed(2)}</span>
          </div>

          <p className="mt-4 text-gray-700">{product.description}</p>

          <Link to='/Addtocard'><Button className="custom-button mt-6 py-2 px-4">Add to Cart</Button></Link>
        </div>
      </div>



     
      <div className="mt-10">
        <div className='flex justify-between text-xl font-bold'>
          <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
          <h5
            className="cursor-pointer text-yellow-500 hover:text-yellow-600"
            onClick={() => setIsModalVisible(true)}
          >
            Leave a Review
          </h5>
        </div>

        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-100">
              <div className="flex justify-between">
                <h4 className="font-bold">{review.name}</h4>
                <Rate value={review.rating} disabled />
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      
      <Modal
        title="Leave a Review"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="flex flex-col space-y-2">
          <Input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          />
          <Rate
            onChange={(value) => setNewReview({ ...newReview, rating: value })}
            value={newReview.rating}
          />
          <TextArea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            rows={4}
          />
          <Button onClick={handleReviewSubmit} className="custom-button py-2 px-4 mt-4">
            Submit Review
          </Button>
        </div>
      </Modal>

      <Tabs defaultActiveKey="1" className="mt-10">
        <TabPane tab="Description" key="1">
          <h3 className="text-xl font-bold mb-4">Product Description</h3>
          <p>{product.description}</p>
        </TabPane>
        <TabPane tab="Q&A" key="2">
          <h3 className="text-xl font-bold mb-4">Questions & Answers</h3>
          <div className="space-y-4">
            {qaList.map((qa, index) => (
              <div key={index} className="border p-4 rounded-lg bg-gray-100">
                <p className="font-bold">Q: {qa.question}</p>
                <p className="text-gray-600 mt-2">A: {qa.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="font-bold">Ask a question:</h4>
            <TextArea
              placeholder="Your question"
              value={newQuestion.question}
              onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
              rows={2}
              className="mt-2"
            />
            <TextArea
              placeholder="Your answer"
              value={newQuestion.answer}
              onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
              rows={2}
              className="mt-2"
            />
            <Button onClick={handleQuestionSubmit} className="custom-button py-2 px-4 mt-4">
              Submit Q&A
            </Button>
          </div>
        </TabPane>
      </Tabs>

    </div>
  );
}



