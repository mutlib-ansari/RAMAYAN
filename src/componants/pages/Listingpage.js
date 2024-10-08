


// import React, { useEffect, useState } from 'react';
// import products from '../data/Products.json';
// import { Rate, Button } from 'antd';
// import stachuImage from '../Assests/stachu.png';
// import { DownOutlined, UpOutlined } from '@ant-design/icons';


// const imageMap = {
//   'stachu.png': stachuImage,
//   // Add more images to the map as needed
// };

// export default function Listingpage() {
//   const [data, setData] = useState([]);
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close




//   useEffect(() => {
//     // Limit the products to only 3 items
//     if (products && products.length > 0) {
//       setData(products.slice(0, 3));
//     }
//   }, []);


//   const ListingPage = () => {
//     const [openMenu, setOpenMenu] = useState(null); // Track the currently open menu

//     const toggleMenu = (menuName) => {
//       // If the clicked menu is already open, close it; otherwise, open it and close others
//       setOpenMenu(openMenu === menuName ? null : menuName);
//     };

//     return (
//       <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">

//         {/*       
//       <div className="lg:w-2/5 w-full mt-9">
//         <ul className="bg-gray-100 rounded shadow-lg">
//           <li className="p-4 border-b cursor-pointer" onClick={toggleMenu}>
//             <div className="flex justify-between items-center">
//               <span>Main Menu</span>
//               {menuOpen ? <UpOutlined /> : <DownOutlined />}

          
//             </div>
//           </li>
          
//           {menuOpen && (
//             <ul className="bg-gray-200 transition-all duration-300">
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//             </ul>
//           )}

          
//         </ul>
        
//         <ul className="bg-gray-100 rounded shadow-lg">
//           <li className="p-4 border-b cursor-pointer" onClick={toggleMenu}>
//             <div className="flex justify-between items-center">
//               <span>Main Menu2</span>
//               {menuOpen ? <UpOutlined /> : <DownOutlined />}
//             </div>
//           </li>
          
//           {menuOpen && (
//             <ul className="bg-gray-200 transition-all duration-300">
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//             </ul>
//           )}
//         </ul>

//         <ul className="bg-gray-100 rounded shadow-lg">
//           <li className="p-4 border-b cursor-pointer" onClick={toggleMenu}>
//             <div className="flex justify-between items-center">
//               <span>Main Menu3</span>
//               {menuOpen ? <UpOutlined /> : <DownOutlined />}
//             </div>
//           </li>
          
//           {menuOpen && (
//             <ul className="bg-gray-200 transition-all duration-300">
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//               <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//             </ul>
//           )}
//         </ul>
//       </div> */}


//         <div className="lg:w-2/5 w-full mt-9">
//           {/* Menu 1 */}
//           <ul className="bg-gray-100 rounded shadow-lg">
//             <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu1')}>
//               <div className="flex justify-between items-center">
//                 <span>Main Menu 1</span>
//                 {openMenu === 'menu1' ? <UpOutlined /> : <DownOutlined />}
//               </div>
//             </li>
//             {openMenu === 'menu1' && (
//               <ul className="bg-gray-200 transition-all duration-300">
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//               </ul>
//             )}
//           </ul>

//           {/* Menu 2 */}
//           <ul className="bg-gray-100 rounded shadow-lg mt-4">
//             <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu2')}>
//               <div className="flex justify-between items-center">
//                 <span>Main Menu 2</span>
//                 {openMenu === 'menu2' ? <UpOutlined /> : <DownOutlined />}
//               </div>
//             </li>
//             {openMenu === 'menu2' && (
//               <ul className="bg-gray-200 transition-all duration-300">
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//               </ul>
//             )}
//           </ul>

//           {/* Menu 3 */}
//           <ul className="bg-gray-100 rounded shadow-lg mt-4">
//             <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu3')}>
//               <div className="flex justify-between items-center">
//                 <span>Main Menu 3</span>
//                 {openMenu === 'menu3' ? <UpOutlined /> : <DownOutlined />}
//               </div>
//             </li>
//             {openMenu === 'menu3' && (
//               <ul className="bg-gray-200 transition-all duration-300">
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//               </ul>
//             )}
//           </ul>

//           {/* Menu 4 */}
//           <ul className="bg-gray-100 rounded shadow-lg mt-4">
//             <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu4')}>
//               <div className="flex justify-between items-center">
//                 <span>Main Menu 4</span>
//                 {openMenu === 'menu4' ? <UpOutlined /> : <DownOutlined />}
//               </div>
//             </li>
//             {openMenu === 'menu4' && (
//               <ul className="bg-gray-200 transition-all duration-300">
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
//                 <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
//               </ul>
//             )}
//           </ul>
//         </div>

//         {/* Product Listing Section */}
//         <div className="lg:w-3/5 w-full">
//           <div className="flex flex-col lg:flex-row gap-5 mt-9">
//             {data &&
//               data.map((product) => (
//                 <div
//                   key={product.id}
//                   className="text-center border bg-gray-200 p-4 relative rounded-lg shadow-md"
//                 >
//                   {product.discount && (
//                     <span className="absolute bg-yellow-600 text-white rounded-full top-2 right-2 px-2 py-1">
//                       {product.discount}
//                     </span>
//                   )}
//                   <div className="flex justify-center items-center h-40">
//                     <img
//                       className="w-1/2"
//                       src={imageMap[product.imageName] || 'fallback-image.png'}
//                       alt={product.name}
//                     />
//                   </div>
//                   <h3 className="mt-3">{product.name}</h3>
//                   <span className="font-bold block mt-2">
//                     <span className="line-through mr-2">
//                       ${product.originalPrice.toFixed(2)}
//                     </span>
//                     ${product.discountedPrice.toFixed(2)}
//                   </span>
//                   <Rate allowHalf defaultValue={product.rating} />
//                   <div className="flex justify-center mt-5">
//                     <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3">
//                       Know more
//                     </Button>
//                     <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
//                       Add to Cart
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     );
//   )}

import React, { useEffect, useState } from 'react';
import products from '../data/Products.json';
import { Rate, Button } from 'antd';
import stachuImage from '../Assests/stachu.png';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const imageMap = {
  'stachu.png': stachuImage,
  
};

export default function Listingpage() {
  const [data, setData] = useState([]);
  const [openMenu, setOpenMenu] = useState(null); 

  useEffect(() => {
    
    if (products && products.length > 0) {
      setData(products.slice(0, 3));
    }
  }, []);

  const toggleMenu = (menuName) => {
    
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
      <div className="lg:w-2/5 w-full mt-9">
       
        <ul className="bg-gray-100 rounded shadow-lg">
          <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu1')}>
            <div className="flex justify-between items-center">
              <span>Main Menu 1</span>
              {openMenu === 'menu1' ? <UpOutlined /> : <DownOutlined />}
            </div>
          </li>
          {openMenu === 'menu1' && (
            <ul className="bg-gray-200 transition-all duration-300">
              <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
            </ul>
          )}
        </ul>

       
        <ul className="bg-gray-100 rounded shadow-lg mt-4">
          <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu2')}>
            <div className="flex justify-between items-center">
              <span>Main Menu 2</span>
              {openMenu === 'menu2' ? <UpOutlined /> : <DownOutlined />}
            </div>
          </li>
          {openMenu === 'menu2' && (
            <ul className="bg-gray-200 transition-all duration-300">
              <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
            </ul>
          )}
        </ul>

       
        <ul className="bg-gray-100 rounded shadow-lg mt-4">
          <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu3')}>
            <div className="flex justify-between items-center">
              <span>Main Menu 3</span>
              {openMenu === 'menu3' ? <UpOutlined /> : <DownOutlined />}
            </div>
          </li>
          {openMenu === 'menu3' && (
            <ul className="bg-gray-200 transition-all duration-300">
              <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
            </ul>
          )}
        </ul>

        
        <ul className="bg-gray-100 rounded shadow-lg mt-4">
          <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu4')}>
            <div className="flex justify-between items-center">
              <span>Main Menu 4</span>
              {openMenu === 'menu4' ? <UpOutlined /> : <DownOutlined />}
            </div>
          </li>
          {openMenu === 'menu4' && (
            <ul className="bg-gray-200 transition-all duration-300">
              <li className="p-3 hover:bg-yellow-300">Sub Menu 1</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 2</li>
              <li className="p-3 hover:bg-yellow-300">Sub Menu 3</li>
            </ul>
          )}
        </ul>
      </div>

      
      <div className="lg:w-3/5 w-full h-1/2">
        <div className="flex flex-col lg:flex-row gap-5 mt-9 pt-5">
          {data &&
            data.map((product) => (
              <div
                key={product.id}
                className="text-center border bg-gray-200 p-7 relative rounded-lg shadow-md "
              >
                {product.discount && (
                  <span className="absolute bg-yellow-600 text-white rounded-full top-2 right-2 px-2 py-1">
                    {product.discount}
                  </span>
                )}
                <div className="flex justify-center items-center h-40">
                  <img
                    className="w-1/2"
                    src={imageMap[product.imageName] || 'fallback-image.png'}
                    alt={product.name}
                  />
                </div>
                <h3 className="mt-3">{product.name}</h3>
                <span className="font-bold block mt-2">
                  <span className="line-through mr-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <Rate allowHalf defaultValue={product.rating} />
                <div className="flex justify-center mt-5">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3">
                    Know more
                  </Button>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
