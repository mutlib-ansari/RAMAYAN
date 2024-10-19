// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Stachu from '../Assests/stachu.png'

// const WishlistPage = () => {
//   // Sample product data (this could come from an API or state management)
//   const [wishlistItems, setWishlistItems] = useState([
//     {
//       id: 1,
//       image: Stachu, 
//       name: 'Stachu',
//       price: 4080.00,
//       quantity: 1
//     },
//     {
//       id: 2,
//       image: Stachu,
//       name: 'Stachu',
//       price: 4080.00,
//       quantity: 1
//     }
//   ]);

 
//   const handleQuantityChange = (id, type) => {
//     const updatedItems = wishlistItems.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1 > 0 ? item.quantity - 1 : 1
//         };
//       }
//       return item;
//     });
//     setWishlistItems(updatedItems);
//   };

//   // Handle remove item from wishlist
//   const handleRemoveItem = (id) => {
//     const updatedItems = wishlistItems.filter(item => item.id !== id);
//     setWishlistItems(updatedItems);
//   };

 
//   const calculateTotal = () => {
//     return wishlistItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-8 lg:max-w-6xl relative top-16">
//       <h1 className="text-6xl font-semibold mb-6 text-center ">Your Wishlist</h1>
//       <div className=" flex  justify-center  gap-5 text-2xl font-semibold text-center mb-20 "> <Link to="../"><p>Home</p></Link> <span>Wislist</span> </div>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="px-6 py-3 text-left">Image</th>
//             <th className="px-6 py-3 text-left">Product</th>
//             <th className="px-6 py-3 text-left">Unit Price</th>
//             <th className="px-6 py-3 text-left">Quantity</th>
//             <th className="px-6 py-3 text-left">Total</th>
//             <th className="px-6 py-3 text-left">Remove</th>
//           </tr>
//         </thead>
//         <tbody>
//           {wishlistItems.map(item => (
//             <tr key={item.id} className="border-t">
//               <td className="px-6 py-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-32 object-cover " />
//               </td>
//               <td className="px-6 py-4">{item.name}</td>
//               <td className="px-6 py-4">₹{item.price.toFixed(2)}</td>
//               <td className="px-6 py-4">
//                 <div className="flex items-center">
//                   <button
//                     className="px-2 py-1 border"
//                     onClick={() => handleQuantityChange(item.id, 'decrease')}
//                   >
//                     -
//                   </button>
//                   <span className="px-4">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 border"
//                     onClick={() => handleQuantityChange(item.id, 'increase')}
//                   >
//                     +
//                   </button>
//                 </div>
//               </td>
//               <td className="px-6 py-4">₹{(item.price * item.quantity).toFixed(2)}</td>
//               <td className="px-6 py-4">
//                 <button
//                   className="text-red-600 hover:text-red-800"
//                   onClick={() => handleRemoveItem(item.id)}
//                 >
//                   ×
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="text-right mt-6">
//         <h2 className="text-xl font-semibold">Total: ₹{calculateTotal()}</h2>
//         <Link to="/Addtocard" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
//           Proceed to Checkout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WishlistPage;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Stachu from '../Assests/stachu.png';
import bg from '../Assests/bgimage.png'

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: Stachu, 
      name: 'Stachu',
      price: 4080.00,
      quantity: 1
    },
    {
      id: 2,
      image: Stachu,
      name: 'Stachu',
      price: 4080.00,
      quantity: 1
    }
  ]);

  const handleQuantityChange = (id, type) => {
    const updatedItems = wishlistItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1 > 0 ? item.quantity - 1 : 1
        };
      }
      return item;
    });
    setWishlistItems(updatedItems);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
  };

  const calculateTotal = () => {
    return wishlistItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center'>
    <div className="container mx-auto py-8 lg:max-w-6xl  px-4">
      <h1 className="text-4xl lg:text-6xl font-semibold mb-6 text-center">Your Wishlist</h1>
      <div className="flex justify-center gap-5 text-2xl font-semibold text-center mb-20">
        <Link to="../"><p>Home</p></Link> 
        <span>Wishlist</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Unit Price</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map(item => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-4">
                  <img src={item.image} alt={item.name} className="w-20 h-32 object-cover mx-auto" />
                </td>
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">₹{item.price.toFixed(2)}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center">
                    <button
                      className="px-2 py-1 border"
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border"
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-4">₹{(item.price * item.quantity).toFixed(2)}</td>
                <td className="px-4 py-4">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right mt-6">
        <h2 className="text-xl font-semibold">Total: ₹{calculateTotal()}</h2>
        <Link to="/Addtocard" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
          Proceed to Checkout
        </Link>
      </div>
    </div>
    </div>
  );
};

export default WishlistPage;
