


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

import React, { memo, useEffect, useState } from 'react';
import products from '../data/Products.json';
import { Rate, Button, Checkbox } from 'antd';
import stachuImage from '../Assests/stachu.png';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../Products/Styles2.css'



const imageMap = {
  'stachu.png': stachuImage,

};

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
}

export default memo(function Listingpage() {

  const [data, setData] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);


  // const goToProductsDetailpage = (productId) => {
  //   navigate(`/ProductsDetail/${productId}`); // Navigate to the product details page
  // };

  useEffect(() => {

    if (products && products.length > 0) {
      setData(products.slice(0, 3));
    }
  }, []);



  const toggleMenu = (menuName) => {

    setOpenMenu(openMenu === menuName ? null : menuName);
  };



  return (

    <div className="container mx-auto lg:max-w-6xl grid grid-cols-1 lg:grid-cols-3 pt-5   ">

      <div className="lg:w-3/4 mt-20 ">


      

        <ul className="bg-gray-100 rounded shadow-lg p-7">

        
      <div className="">
       
        <aside className="w-full p-4 ">
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Filter by Brands</h3>
            <ul>
              <li><input type="checkbox" id="casali" /> <label htmlFor="casali">Casali</label></li>
              <li><input type="checkbox" id="decar" /> <label htmlFor="decar">Decar</label></li>
              <li><input type="checkbox" id="fantini"/> <label htmlFor="fantini">Fantini</label></li>
              <li><input type="checkbox" id="flamentstyle" /> <label htmlFor="flamentstyle">Flamentstyle</label></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Filter by Price</h3>
            <input type="range" min="10" max="599" className="w-full custom-button" />
            <p>Price: $10 - $599</p>
          </div>
        </aside>

        
      
      </div>
    


          <li className="p-4 border-b cursor-pointer" onClick={() => toggleMenu('menu1')}>
            <div className="flex justify-between items-center">
              <span>categroy</span>
              {openMenu === 'menu1' ? <UpOutlined /> : <DownOutlined />}
            </div>
          </li>
          {/* {openMenu === 'menu1' && ( */}
          <ul className="bg-gray-100 transition-all duration-300">
            <span className='p-3 font-bold hover:bg-yellow-300'>Products</span>
            <li className="p-3 hover:bg-yellow-300">Accessories</li>
            <li className="p-3 hover:bg-yellow-300">Cameras & Photography</li>
            <li className="p-3 hover:bg-yellow-300">Computers & Accessories</li>
            <li className="p-3 hover:bg-yellow-300">Home Audio</li>
            <li className="p-3 hover:bg-yellow-300">Mobiles & Accessories</li>
            <li className="p-3 hover:bg-yellow-300">Portable Media Players</li>
            <li className="p-3 hover:bg-yellow-300">Radio Communication</li>
            <li className="p-3 hover:bg-yellow-300">Telephones & Accessories</li>
            <li className="p-3 hover:bg-yellow-300">Warranties</li>

            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>Delivery Day</span>
              <ul>
                <li><Checkbox onChange={onChange}>Eligible for Pay On Delivery</Checkbox></li>



              </ul>
            </li>

            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>Pay On Delivery</span>
              <ul>
                <li><Checkbox onChange={onChange}>Get It Today</Checkbox></li>
                <li><Checkbox onChange={onChange}>Get It by Tomorrow</Checkbox></li>


              </ul>
            </li>

            <li className="p-3 "> <span className='font-bold hover:bg-yellow-300'>  Avg. Customer Review</span>
              <ul>
                <li> <Rate /> & up
                </li>
                <li> <Rate /> & up</li>
                <li> <Rate /> & up</li>

              </ul>

            </li>
            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>New Arrivals</span>
              <ul>
                <li>Last 30 days</li>
                <li>Last 90 days</li>
              </ul>
            </li>

            <li className=' p-3 '>  <span className='font-bold hover:bg-yellow-300'> Item Condition</span>
              <ul>
                <li>New</li>
                <li>Renewed</li>
              </ul>
            </li>

            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'> Price</span>
              <ul>
                <li>Under ₹1,000</li>
                <li>₹1,000 - ₹5,000</li>
                <li>₹5,000 - ₹10,000</li>
                <li>₹10,000 - ₹20,000</li>
                <li>Over ₹20,000</li>
              </ul>
            </li>

            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>Deals & Discounts</span>
              <ul>
                <li>All Discounts</li>
                <li>Today's Deals</li>

              </ul>
            </li>


            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>Discount</span>
              <ul>
                <li>10% Off or more</li>
                <li>25% Off or more</li>
                <li>35% Off or more</li>
                <li>50% Off or more</li>
                <li>60% Off or more</li>
                <li>70% Off or more</li>

              </ul>
            </li>

            <li className=' p-3 '> <span className='font-bold hover:bg-yellow-300'>Availability</span>
              <ul>
                <li><Checkbox onChange={onChange}>Include Out of Stock</Checkbox></li>


              </ul>
            </li>
          </ul>
          {/* )} */}
        </ul>


        {/* <ul className="bg-gray-100 rounded shadow-lg mt-4">
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
          </ul> */}
      </div>

      
      <div className="lg:w-1/3 w-full h-1/2 mt-6 col-span-2">
      
        <div className="flex flex-col lg:flex-row gap-5 mt-9 pt-5 ">
          {data &&
            data.map((product) => (
              <div
                key={product.id}
                className="text-center border bg-gray-200 p-2 relative rounded-lg shadow-md w-full "
              >
                {product.discount && (
                  <span className="absolute bg-yellow-600 text-white rounded-full top-2 right-2 px-2 py-1">
                    {product.discount}
                  </span>
                )}
                <div className="flex justify-center items-center h-30">
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
                  <Link to={`/ProductsDetail/${product.id}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3">
                      Know more
                    </Button>
                  </Link>
                  <Link to="/Addtocard"><Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
                    Add to Cart
                  </Button></Link>
                </div>
              </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-9 pt-5">
          {data &&
            data.map((product) => (
              <div
                key={product.id}
                className="text-center border bg-gray-200 p-2 relative rounded-lg shadow-md w-full"
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
                  <Link to={`/ProductsDetail/${product.id}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3">
                      Know more
                    </Button>
                  </Link>
                  <Link to="/Addtocard"><Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
                    Add to Cart
                  </Button></Link>
                </div>
              </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-9 pt-5">
          {data &&
            data.map((product) => (
              <div
                key={product.id}
                className="text-center border bg-gray-200 p-2 relative rounded-lg shadow-md w-full "
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
                  <Link to={`/ProductsDetail/${product.id}`}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3">
                      Know more
                    </Button>
                  </Link>
                  <Link to="/Addtocard"><Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2">
                    Add to Cart
                  </Button></Link>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>

  );
})
