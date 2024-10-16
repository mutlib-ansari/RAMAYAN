// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Input } from 'antd';
// import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
// import stachuImage from '../Assests/stachu.png'
// import { Link } from 'react-router-dom';
// // import 'antd/dist/antd.css';

// const CartPage = () => {

//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to top
//     }, []);


//     const [quantity, setQuantity] = useState(1);
//     const pricePerItem = 7040.00;
//     const totalPrice = quantity * pricePerItem;




//     const handleQuantityChange = (type) => {
//         if (type === 'increase') {
//             setQuantity(prev => prev + 1);
//         } else if (type === 'decrease' && quantity > 1) {
//             setQuantity(prev => prev - 1);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-8">
//             <h1 className="text-2xl font-semibold mb-6">Your cart</h1>


//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <table className="min-w-full">
//                     <thead>
//                         <tr className="bg-gray-50">
//                             <th className="py-3 px-6 text-left font-medium text-gray-700">Product</th>
//                             <th className="py-3 px-6 text-center font-medium text-gray-700">Quantity</th>
//                             <th className="py-3 px-6 text-right font-medium text-gray-700">Total</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="border-t">

//                             <td className="py-4 px-6">
//                                 <div className="flex items-center">
//                                     <img
//                                         src={stachuImage}
//                                         alt="Product"
//                                         className="w-16 h-24 object-cover rounded"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="text-base font-semibold">CONTRASTING PANELED DRESS</h3>
//                                         <p className="text-sm text-gray-500">Size: XS</p>
//                                     </div>
//                                 </div>
//                             </td>

//                             {/* Quantity Selector */}
//                             <td className="py-4 px-6 text-center">
//                                 <div className="inline-flex items-center border rounded">
//                                     <Button
//                                         type="text"
//                                         icon={<MinusOutlined />}
//                                         onClick={() => handleQuantityChange('decrease')}
//                                     />
//                                     <span className="px-4">{quantity}</span>
//                                     <Button
//                                         type="text"
//                                         icon={<PlusOutlined />}
//                                         onClick={() => handleQuantityChange('increase')}
//                                     />
//                                 </div>
//                             </td>

//                             {/* Total Price */}
//                             <td className="py-4 px-6 text-right">
//                                 <p className="font-semibold">₹{totalPrice.toFixed(2)} INR</p>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//             {/* Actions */}
//             <div className="flex justify-between items-center mt-6">
//                 <Button type="link" className="text-sm">Continue shopping</Button>

//                 {/* Add Notes and Terms */}
//                 <div className="flex items-center space-x-4">
//                     <div className="flex items-center">
//                         <Checkbox />
//                         <span className="ml-2 text-sm">I agree with the <a href="#" className="underline">terms and conditions</a></span>
//                     </div>
//                 </div>
//             </div>

//             {/* Checkout Section */}
//             <div className="bg-white mt-6 p-6 shadow-md rounded-lg">
//                 <div className="flex justify-between items-center">
//                     <div className="flex items-center space-x-2">
//                         <p className="text-sm text-gray-500">Taxes and <a href="#" className="underline">shipping</a> calculated at checkout</p>
//                     </div>
//                     <div>
//                         <Link to="/Addtocard"><Button
//                             type="primary"
//                             className="text-lg font-semibold px-8 py-4 bg-yellow-500"
//                             style={{ backgroundColor: 'yellow-500', borderColor: 'yellow-500' }}
//                         >
//                             Checkout - ₹{totalPrice.toFixed(2)} INR
//                         </Button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;


// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Input } from 'antd';
// import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
// import stachuImage from '../Assests/stachu.png';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top
//   }, []);

//   const [quantity, setQuantity] = useState(1);
//   const pricePerItem = 7040.0;
//   const totalPrice = quantity * pricePerItem;

//   const handleQuantityChange = (type) => {
//     if (type === 'increase') {
//       setQuantity((prev) => prev + 1);
//     } else if (type === 'decrease' && quantity > 1) {
//       setQuantity((prev) => prev - 1);
//     }
//   };

//   return (

 
//     <div className="container mx-auto lg:max-w-6xl p-4 sm:p-8 relative top-20 mb-20">
//       <h1 className="text-xl sm:text-2xl font-semibold mb-6">Your cart</h1>

//       {/* Cart Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-50"> 
//               <th className="py-3 px-2 sm:px-6 text-left font-medium text-gray-700">Product</th>
//               <th className="py-3 px-2 sm:px-6 text-center font-medium text-gray-700">Quantity</th>
//               <th className="py-3 px-2 sm:px-6 text-right font-medium text-gray-700">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-t">
//               <td className="py-4 px-1 w-1/3 sm:px-6">
//                 <div className="flex items-center">
//                   <img
//                     src={stachuImage}
//                     alt="Product"
//                     className="w-12 h-16 sm:w-16 sm:h-24 object-cover rounded"
//                   />
//                   <div className="ml-4">
//                     <h3 className="text-sm sm:text-base font-semibold">
//                       STACHU
//                     </h3>
//                     <p className="text-xs sm:text-sm text-gray-500"></p>
//                   </div>
//                 </div>
//               </td>

//               {/* Quantity Selector */}
//               <td className="py-4 px-2 w-1/3 sm:px-6 text-center">
//                 <div className="inline-flex items-center border rounded">
//                   <Button
//                     type="text"
//                     icon={<MinusOutlined />}
//                     onClick={() => handleQuantityChange('decrease')}
//                   />
//                   <span className="px-2 sm:px-4">{quantity}</span>
//                   <Button
//                     type="text"
//                     icon={<PlusOutlined />}
//                     onClick={() => handleQuantityChange('increase')}
//                   />
//                 </div>
//               </td>

//               {/* Total Price */}
//               <td className="py-4 px-2 w-1/3 sm:px-6 text-right">
//                 <p className="font-semibold">₹{totalPrice.toFixed(2)} INR</p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
//         <Button type="link" className="text-sm">
//           Continue shopping
//         </Button>

//         {/* Add Notes and Terms */}
//         <div className="flex items-center space-x-2">
//           <Checkbox />
//           <span className="text-sm">
//             I agree with the{' '}
//             <a href="#" className="underline">
//               terms and conditions
//             </a>
//           </span>
//         </div>
//       </div>

//       {/* Checkout Section */}
//       <div className="bg-white mt-6 p-4 sm:p-6 shadow-md rounded-lg">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-sm text-gray-500 mb-4 sm:mb-0">
//             Taxes and{' '}
//             <a href="#" className="underline">
//               shipping
//             </a>{' '}
//             calculated at checkout
//           </p>
//           <Link to="/Addtocard">
//             <Button
//               type="primary"
//               className="text-lg font-semibold px-6 py-3"
//               style={{ backgroundColor: '#facc15', borderColor: '#facc15' }} // Tailwind's yellow-500 color
//             >
//               Checkout - ₹{totalPrice.toFixed(2)} INR
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
   
//   );
// };

// export default CartPage;


// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Input } from 'antd';
// import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
// import stachuImage from '../Assests/stachu.png'; // Replace with your product images as needed
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top
//   }, []);

//   // Define the initial products in the cart
//   const initialProducts = [
//     {
//       id: 1,
//       name: 'STACHU',
//       image: stachuImage,
//       price: 7040.0,
//       quantity: 1,
//     },
//     // Add more products as needed
//   ];

//   const [products, setProducts] = useState(initialProducts);

//   const handleQuantityChange = (id, type) => {
//     setProducts((prev) =>
//       prev.map((product) => {
//         if (product.id === id) {
//           return {
//             ...product,
//             quantity: type === 'increase' ? product.quantity + 1 : Math.max(product.quantity - 1, 1),
//           };
//         }
//         return product;
//       })
//     );
//   };

//   const handleRemoveProduct = (id) => {
//     setProducts((prev) => prev.filter((product) => product.id !== id));
//   };

//   // Calculate the total price of all products in the cart
//   const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

//   return (
//     <div className="container mx-auto lg:max-w-6xl p-4 sm:p-8 relative top-20 mb-20">
//       <h1 className="text-xl sm:text-2xl font-semibold mb-6">Your cart</h1>

//       {/* Cart Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="min-w-full">
//           <thead>
//             <tr className="bg-gray-50"> 
//               <th className="py-3 px-2 sm:px-6 text-left font-medium text-gray-700">Product</th>
//               <th className="py-3 px-2 sm:px-6 text-center font-medium text-gray-700">Quantity</th>
//               <th className="py-3 px-2 sm:px-6 text-right font-medium text-gray-700">Total</th>
//               <th className="py-3 px-2 sm:px-6 text-right font-medium text-gray-700">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="border-t">
//                 <td className="py-4 px-1 w-1/3 sm:px-6">
//                   <div className="flex items-center">
//                     <img
//                       src={product.image}
//                       alt="Product"
//                       className="w-12 h-16 sm:w-16 sm:h-24 object-cover rounded"
//                     />
//                     <div className="ml-4">
//                       <h3 className="text-sm sm:text-base font-semibold">{product.name}</h3>
//                       <p className="text-xs sm:text-sm text-gray-500"></p>
//                     </div>
//                   </div>
//                 </td>

//                 {/* Quantity Selector */}
//                 <td className="py-4 px-2 w-1/3 sm:px-6 text-center">
//                   <div className="inline-flex items-center border rounded">
//                     <Button
//                       type="text"
//                       icon={<MinusOutlined />}
//                       onClick={() => handleQuantityChange(product.id, 'decrease')}
//                     />
//                     <span className="px-2 sm:px-4">{product.quantity}</span>
//                     <Button
//                       type="text"
//                       icon={<PlusOutlined />}
//                       onClick={() => handleQuantityChange(product.id, 'increase')}
//                     />
//                   </div>
//                 </td>

//                 {/* Total Price */}
//                 <td className="py-4 px-2 w-1/3 sm:px-6 text-right">
//                   <p className="font-semibold">₹{(product.price * product.quantity).toFixed(2)} INR</p>
//                 </td>

//                 {/* Remove Product Action */}
//                 <td className="py-4 px-2 w-1/3 sm:px-6 text-right">
//                   <Button
//                     type="text"
//                     icon={<DeleteOutlined />}
//                     onClick={() => handleRemoveProduct(product.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Actions */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
//         <Button type="link" className="text-sm">
//           Continue shopping
//         </Button>

//         {/* Add Notes and Terms */}
//         <div className="flex items-center space-x-2">
//           <Checkbox />
//           <span className="text-sm">
//             I agree with the{' '}
//             <a href="#" className="underline">
//               terms and conditions
//             </a>
//           </span>
//         </div>
//       </div>

//       {/* Checkout Section */}
//       <div className="bg-white mt-6 p-4 sm:p-6 shadow-md rounded-lg">
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-sm text-gray-500 mb-4 sm:mb-0">
//             Taxes and{' '}
//             <a href="#" className="underline">
//               shipping
//             </a>{' '}
//             calculated at checkout
//           </p>
//           <Link to="/Addtocard">
//             <Button
//               type="primary"
//               className="text-lg font-semibold px-6 py-3"
//               style={{ backgroundColor: '#facc15', borderColor: '#facc15' }} // Tailwind's yellow-500 color
//             >
//               Checkout - ₹{totalPrice.toFixed(2)} INR
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import stachuImage from '../Assests/stachu.png'; // Replace with your product images as needed
import { Link } from 'react-router-dom';
import '../Products/Styles2.css'

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  // Define the initial product in the cart
  const initialProduct = {
    id: 1,
    name: 'STACHU',
    image: stachuImage,
    price: 7040.0,
    quantity: 1,
  };

  const [product, setProduct] = useState(initialProduct);

  const handleQuantityChange = (type) => {
    setProduct((prev) => ({
      ...prev,
      quantity: type === 'increase' ? prev.quantity + 1 : Math.max(prev.quantity - 1, 1),
    }));
  };

  const handleRemoveProduct = () => {
    setProduct(null); 
  };

  if (!product) {
    return (
      <div className="container mx-auto lg:max-w-6xl p-4 sm:p-8 relative top-20 mb-20">
        <h1 className="text-xl sm:text-2xl font-semibold mb-6">Your cart is empty.</h1>
        <Link to="/">
          <Button type="primary" className="mt-4 custom-button">Go to Products</Button>
        </Link>
      </div>
    );
  }

  
  const totalPrice = product.price * product.quantity;

  return (
    <div className="container mx-auto lg:max-w-6xl p-4 sm:p-8 relative top-20 mb-20">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">Your cart</h1>

      {/* Cart Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50"> 
              <th className="py-3 px-2 sm:px-6 text-left font-medium text-gray-700">Product</th>
              <th className="py-3 px-2 sm:px-6 text-center font-medium text-gray-700">Quantity</th>
              <th className="py-3 px-2 sm:px-6 text-right font-medium text-gray-700">Total</th>
              <th className="py-3 px-2 sm:px-6 text-right font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-4 px-1 w-1/3 sm:px-6">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-12 h-16 sm:w-16 sm:h-24 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-sm sm:text-base font-semibold">{product.name}</h3>
                  </div>
                </div>
              </td>

              
              <td className="py-4 px-2 w-1/3 sm:px-6 text-center">
                <div className="inline-flex items-center border rounded">
                  <Button
                    type="text"
                    icon={<MinusOutlined />}
                    onClick={() => handleQuantityChange('decrease')}
                  />
                  <span className="px-2 sm:px-4">{product.quantity}</span>
                  <Button
                    type="text"
                    icon={<PlusOutlined />}
                    onClick={() => handleQuantityChange('increase')}
                  />
                </div>
              </td>

              
              <td className="py-4 px-2 w-1/3 sm:px-6 text-right">
                <p className="font-semibold">₹{totalPrice.toFixed(2)} INR</p>
              </td>

          
              <td className="py-4 px-2 w-1/3 sm:px-6 text-right">
                <Button
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={handleRemoveProduct}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0">
        <Button type="link" className="text-sm">
          Continue shopping
        </Button>

        
        <div className="flex items-center space-x-2">
          <Checkbox />
          <span className="text-sm">
            I agree with the{' '}
            <a href="#" className="underline">
              terms and conditions
            </a>
          </span>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="bg-white mt-6 p-4 sm:p-6 shadow-md rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            Taxes and{' '}
            <a href="#" className="underline">
              shipping
            </a>{' '}
            calculated at checkout
          </p>
          <Link to="/Addtocard">
            <Button
              type="primary"
              className="text-lg font-semibold px-6 py-3 custom-button "
              style={{ backgroundColor: '#facc15', borderColor: '#facc15' }} 
            >
              Checkout - ₹{totalPrice.toFixed(2)} INR
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
