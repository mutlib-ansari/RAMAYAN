
// import React, { useState, useEffect } from 'react';
// import Image1 from '../Assests/image1.png';
// import Image2 from '../Assests/image2.png';
// import Image3 from '../Assests/image3.png';
// import Image4 from '../Assests/image4.png';
// import Image5 from '../Assests/image5.png';
// import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

// import { Input, Select, Space } from 'antd';

// const { Search } = Input;
// const { Option } = Select;

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null); // To control the open submenu

//   const onSearch = (value) => {
//     console.log(value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  
//   const toggleSubMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//     if (menu === 'about') {
//       setIsSubSidebarOpen(true); // Open another sidebar for the About Us submenu
//     }

//     if (menu === 'services') {
//       setIsSubSidebarOpen(true); // Open another sidebar for the About Us submenu
//     }
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//     setIsSubSidebarOpen(false); // Close both sidebars
//   };

//   const handleClickOutside = (event) => {
//     const sidebar = document.getElementById('sidebar');
//     const subSidebar = document.getElementById('subSidebar');

//     if (
//       sidebar &&
//       !sidebar.contains(event.target) &&
//       subSidebar &&
//       !subSidebar.contains(event.target)
//     ) {
//       closeSidebar();
//     }
//   };

//   useEffect(() => {
//     if (isSidebarOpen || isSubSidebarOpen) {
//       document.addEventListener('click', handleClickOutside);
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isSidebarOpen, isSubSidebarOpen]);

//   return (
//     <div className="z-20 sticky top-0 flex justify-between items-center bg-gradient-to-r from-gray-200 via-white w-full h-20 shadow-md">
      
//       {/* Main Sidebar */}
//       {isSidebarOpen && (
//         <div
//           id="sidebar"
//           className="fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-200 shadow-lg z-30"
//         >
//           <button
//             className="p-2 text-gray-800 hover:bg-gray-300"
//             onClick={toggleSidebar}
//           >
//             <CloseOutlined className="w-6" />
//           </button>

//           {/* Sidebar Menu */}
//           <nav>
//             <ul className="space-y-4 p-4">
//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">
//                   Home
//                 </a>
//               </li>

//               {/* About Us with Submenu */}
//               <li className="relative">
//                 <div
//                   className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
//                   onClick={() => toggleSubMenu('about')}
//                 >
//                   <span>About Us</span>
//                   {openMenu === 'about' ? <UpOutlined /> : <DownOutlined />}
//                 </div>
//               </li>

//               {/* Services */}
//               <li className="relative">
//                 <div
//                   className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
//                   onClick={() => toggleSubMenu('services')}
//                 >
//                   <span>Services</span>
//                   {openMenu === 'services' ? <UpOutlined /> : <DownOutlined />}
//                 </div>
//               </li>

//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}

//       {/* Sub Sidebar for About Us */}
//       {isSubSidebarOpen && (
//         <div
//           id="subSidebar"
//           className="fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-100 shadow-lg z-40"
//         >
//           <button
//             className="p-2 text-gray-800 hover:bg-gray-300"
//             onClick={() => setIsSubSidebarOpen(false)}
//           >
//             <CloseOutlined className="w-6" />
//           </button>

//           {/* About Us Submenu */}
//           <ul className="space-y-4 p-4">
//             <li>
//               <a href="#" className="block text-gray-700 hover:text-gray-900">
//                 Our Team
//               </a>
//             </li>
//             <li>
//               <a href="#" className="block text-gray-700 hover:text-gray-900">
//                 Our Story
//               </a>
//             </li>
//           </ul>

          
//         </div>
//       )}
//       {isSubSidebarOpen && (
//         <div
//           id="subSidebar"
//           className="fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-100 shadow-lg z-40"
//         >
//           <button
//             className="p-2 text-gray-800 hover:bg-gray-300"
//             onClick={() => setIsSubSidebarOpen(false)}
//           >
//             <CloseOutlined className="w-6" />
//           </button>

//           {/* About Us Submenu */}
        

          
//         </div>
//       )}

//       {/* Logo Section */}
//       <div className="flex-none w-20 h-12 md:w-32 md:h-20">
//         <img src={Image1} alt="Logo" className="h-30 w-full object-contain" />
//       </div>

//       {/* Location Selector and Search Bar */}
//       <div className="flex-grow flex items-center justify-center w-32 h-12 md:h-20 space-x-2 md:space-x-4">
//         <Select
//           defaultValue="Select Location"
//           className="w-28 md:w-48"
//           size="large"
//         >
//           <Option value="location1">Location 1</Option>
//           <Option value="location2">Location 2</Option>
//           <Option value="location3">Location 3</Option>
//         </Select>

//         {/* Search Input */}
//         <Space direction="vertical">
//           <Search
//             size="large"
//             placeholder="Search Products"
//             allowClear
//             onSearch={onSearch}
//             enter={
//               <img src={Image5} alt="Search Icon" className="w-6 h-6 bg-none" />
//             }
//             style={{
//               width: '100%',
//               maxWidth: 300,
//             }}
//           />
//         </Space>
//       </div>

//       {/* Icons Section */}
//       <div className="flex justify-between items-center w-20 md:w-32 h-12 md:h-20 space-x-2">
//         <img
//           src={Image2}
//           alt="Icon 1"
//           className="w-8 h-8 hidden lg:block border border-black rounded"
//         />
//         <img
//           src={Image3}
//           alt="Icon 2"
//           className="w-8 h-8 hidden lg:block border border-black rounded"
//         />
//         <img
//           src={Image4}
//           alt="Icon 3"
//           className="w-8 h-8 block lg:block border border-black rounded cursor-pointer"
//           onClick={toggleSidebar}
//         />
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import Image1 from '../Assests/image1.png';
// import Image2 from '../Assests/image2.png';
// import Image3 from '../Assests/image3.png';
// import Image4 from '../Assests/image4.png';
// import Image5 from '../Assests/image5.png';
// import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
// import { Input, Select, Space } from 'antd';

// const { Search } = Input;
// const { Option } = Select;

// export default function Header() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null); // To control the open submenu

//   const onSearch = (value) => {
//     console.log(value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
  
//   const toggleSubMenu = (menu) => {
//     setOpenMenu(openMenu === menu ? null : menu);
//     setIsSubSidebarOpen(menu !== null);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//     setIsSubSidebarOpen(false); // Close both sidebars
//   };

//   const handleClickOutside = (event) => {
//     const sidebar = document.getElementById('sidebar');
//     const subSidebar = document.getElementById('subSidebar');

//     if (
//       sidebar &&
//       !sidebar.contains(event.target) &&
//       subSidebar &&
//       !subSidebar.contains(event.target)
//     ) {
//       closeSidebar();
//     }
//   };

//   useEffect(() => {
//     if (isSidebarOpen || isSubSidebarOpen) {
//       document.addEventListener('click', handleClickOutside);
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isSidebarOpen, isSubSidebarOpen]);

//   return (
//     <div className="z-20 sticky top-0 flex justify-between items-center bg-gradient-to-r from-gray-200 via-white w-full h-20 shadow-md">
      
//       {/* Main Sidebar */}
//       {isSidebarOpen && (
//         <div
//           id="sidebar"
//           className="fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-200 shadow-lg z-30"
//         >
//           <button
//             className="p-2 text-gray-800 hover:bg-gray-300"
//             onClick={toggleSidebar}
//           >
//             <CloseOutlined className="w-6" />
//           </button>

//           {/* Sidebar Menu */}
//           <nav>
//             <ul className="space-y-4 p-4">
//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
//               </li>

//               {/* About Us with Submenu */}
//               <li className="relative">
//                 <div
//                   className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
//                   onClick={() => toggleSubMenu('about')}
//                 >
//                   <span>About Us</span>
//                   {openMenu === 'about' ? <UpOutlined /> : <DownOutlined />}
//                 </div>
//               </li>

//               {/* Services with Submenu */}
//               <li className="relative">
//                 <div
//                   className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
//                   onClick={() => toggleSubMenu('services')}
//                 >
//                   <span>Services</span>
//                   {openMenu === 'services' ? <UpOutlined /> : <DownOutlined />}
//                 </div>
//               </li>

//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">Contact</a>
//               </li>
//               <li>
//                 <a href="#" className="block text-gray-700 hover:text-gray-900">Blog</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}

//       {/* Sub Sidebar for About Us and Services */}
//       {isSubSidebarOpen && (
//         <div
//           id="subSidebar"
//           className="fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-100 shadow-lg z-40  *:file: "
//         >
//           <button
//             className="p-2 text-gray-800 hover:bg-gray-300"
//             onClick={() => setIsSubSidebarOpen(false)}
//           >
//             <CloseOutlined className="w-6" />
//           </button>

//           {/* Submenu Content */}
//           <ul className="space-y-4 p-4  ">
//             {openMenu === 'about' && (
//               <>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-gray-900">Our Team</a>
//                 </li>               
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-gray-900">Our Story</a>
//                 </li>
//               </>
//             )}
//             {openMenu === 'services' && (
//               <>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-gray-900">Web Development</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-gray-900">Mobile Development</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block text-gray-700 hover:text-gray-900">UI/UX Design</a>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}

//       {/* Logo Section */}
//       <div className="flex-none w-20 h-12 md:w-32 md:h-20">
//         <img src={Image1} alt="Logo" className="h-30 w-full object-contain" />
//       </div>

//       {/* Location Selector and Search Bar */}
//       <div className="flex-grow flex items-center justify-center w-32 h-12 md:h-20 space-x-2 md:space-x-4">
//         <Select
//           defaultValue="Select Location"
//           className="w-28 md:w-48"
//           size="large"
//         >
//           <Option value="location1">Location 1</Option>
//           <Option value="location2">Location 2</Option>
//           <Option value="location3">Location 3</Option>
//         </Select>

//         {/* Search Input */}
//         <Space direction="vertical">
//           <Search
//             size="large"
//             placeholder="Search Products"
//             allowClear
//             onSearch={onSearch}
//             enter={
//               <img src={Image5} alt="Search Icon" className="w-6 h-6 bg-none" />
//             }
//             style={{
//               width: '100%',
//               maxWidth: 300,
//             }}
//           />
//         </Space>
//       </div>

//       {/* Icons Section */}
//       <div className="flex justify-between items-center w-20 md:w-32 h-12 md:h-20 space-x-2">
//         <img
//           src={Image2}
//           alt="Icon 1"
//           className="w-8 h-8 hidden lg:block border border-black rounded"
//         />
//         <img
//           src={Image3}
//           alt="Icon 2"
//           className="w-8 h-8 hidden lg:block border border-black rounded"
//         />
//         <img
//           src={Image4}
//           alt="Icon 3"
//           className="w-8 h-8 block lg:block border border-black rounded cursor-pointer"
//           onClick={toggleSidebar}
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import Image1 from '../Assests/image1.png';
import Image2 from '../Assests/image2.png';
import Image3 from '../Assests/image3.png';
import Image4 from '../Assests/image4.png';
import Image5 from '../Assests/image5.png';
import { CloseOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Input, Select, Space } from 'antd';

const { Search } = Input;
const { Option } = Select;

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // To control the open submenu

  const onSearch = (value) => {
    console.log(value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setIsSubSidebarOpen(menu !== null);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsSubSidebarOpen(false); // Close both sidebars
  };

  const handleClickOutside = (event) => {
    const sidebar = document.getElementById('sidebar');
    const subSidebar = document.getElementById('subSidebar');

    if (
      sidebar &&
      !sidebar.contains(event.target) &&
      subSidebar &&
      !subSidebar.contains(event.target)
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    if (isSidebarOpen || isSubSidebarOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen, isSubSidebarOpen]);

  return (
    <div className=" container z-20 sticky top-0 flex justify-between items-center bg-gradient-to-r from-gray-200 via-white w-full h-20 shadow-md p-1">
      
      {/* Main Sidebar */}
      {isSidebarOpen && (
        <div
          id="sidebar"
          className={`fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-200 shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            className="p-2 text-gray-800 hover:bg-gray-300"
            onClick={toggleSidebar}
          >
            <CloseOutlined className="w-6" />
          </button>

          {/* Sidebar Menu */}
          <nav>
            <ul className="space-y-4 p-4">
              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Home</a>
              </li>

              {/* About Us with Submenu */}
              <li className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
                  onClick={() => toggleSubMenu('about')}
                >
                  <span>About Us</span>
                  {openMenu === 'about' ? <UpOutlined /> : <DownOutlined />}
                </div>
              </li>

              {/* Services with Submenu */}
              <li className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-gray-900"
                  onClick={() => toggleSubMenu('services')}
                >
                  <span>Services</span>
                  {openMenu === 'services' ? <UpOutlined /> : <DownOutlined />}
                </div>
              </li>

              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Contact</a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-gray-900">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sub Sidebar for About Us and Services */}
      {isSubSidebarOpen && (
        <div
          id="subSidebar"
          className={`fixed top-0 right-0 h-full w-full lg:w-1/3 bg-gray-100 shadow-lg z-40 transform transition-transform duration-700 ease-in-out ${isSubSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            className="p-2 text-gray-800 hover:bg-gray-300"
            onClick={() => setIsSubSidebarOpen(false)}
          >
            <CloseOutlined className="w-6" />
          </button>

          {/* Submenu Content */}
          <ul className="space-y-4 p-4">
            {openMenu === 'about' && (
              <>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-gray-900">Our Team</a>
                </li>               
                <li>
                  <a href="#" className="block text-gray-700 hover:text-gray-900">Our Story</a>
                </li>
              </>
            )}
            {openMenu === 'services' && (
              <>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-gray-900">Web Development</a>
                </li>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-gray-900">Mobile Development</a>
                </li>
                <li>
                  <a href="#" className="block text-gray-700 hover:text-gray-900">UI/UX Design</a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Logo Section */}
      <div className="flex-none w-20 h-12 md:w-32 md:h-20">
        <img src={Image1} alt="Logo" className="h-30 w-full object-contain" />
      </div>

      {/* Location Selector and Search Bar */}
      <div className="flex-grow flex items-center justify-center w-32 h-12 md:h-20 space-x-2 md:space-x-4">
        <Select
          defaultValue="Select Location"
          className="w-28 md:w-48"
          size="large"
        >
          <Option value="location1">Location 1</Option>
          <Option value="location2">Location 2</Option>
          <Option value="location3">Location 3</Option>
        </Select>

        {/* Search Input */}
        <Space direction="vertical">
          <Search
            size="large"
            placeholder="Search Products"
            allowClear
            onSearch={onSearch}
            enter={
              <img src={Image5} alt="Search Icon" className="w-6 h-6 bg-none" />
            }
            style={{
              width: '100%',
              maxWidth: 300,
            }}
          />
        </Space>
      </div>

      {/* Icons Section */}
      <div className="flex justify-between items-center w-20 md:w-32 h-12 md:h-20 space-x-2">
        <img
          src={Image2}
          alt="Icon 1"
          className="w-8 h-8 hidden lg:block border border-black rounded"
        />
        <img
          src={Image3}
          alt="Icon 2"
          className="w-8 h-8 hidden lg:block border border-black rounded"
        />
        <img
          src={Image4}
          alt="Icon 3"
          className="w-8 h-8 block lg:block border border-black rounded cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
}



