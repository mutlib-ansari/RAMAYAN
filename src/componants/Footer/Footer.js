// import React from 'react'

// export default function Footer() {
//   return (
//     <div></div>
//   )
// }

// import React from 'react';
// import logo from '../Assests/logo.png';
// import footerlogo from '../Assests/footerlogo.png'
// import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';

// export default function Footer() {
//     return (
//         <div className="bg-yellow-600 text-white py-12 mt-10">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
//                 {/* Contact Us Section */}
//                 <div>
//                     <h2 className="text-2xl font-bold">Contact Us</h2>
//                     <p className="mt-4">
//                         <strong>Location</strong><br />
//                         Jhotwara Pin Code is 302012.<br />
//                         Jhotwara is located in Jaipur in Rajasthan, India.
//                     </p>
//                     <p className="mt-4">
//                         <strong>Have Questions?</strong><br />
//                         +91 9876543210<br />
//                         +91 9876543210
//                     </p>
//                 </div>

//                 {/* Logo & Description Section */}
//                 <div className="flex flex-col items-center justify-center text-center">
//                     <img src={logo} alt="Cosmic Logo" className="mx-auto w-60  z-20  " />
//                     <p>
//                         There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
//                     </p>
//                     <div className="flex justify-center mt-6 space-x-4">
//                         <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><FacebookOutlined /></a>
//                         <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><InstagramOutlined /></a>
//                         <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><LinkedinOutlined /></a>
//                         <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><YoutubeOutlined /></a>
//                     </div>
//                 </div>

//                 {/* Quick Links Section */}
//                 <div className="text-right">
//                     <h2 className="text-2xl font-bold">Quick Links</h2>
//                     <ul className="mt-4 space-y-2">
//                         <li><a href="#" className="hover:underline">Home</a></li>
//                         <li><a href="#" className="hover:underline">About Us</a></li>
//                         <li><a href="#" className="hover:underline">Blog</a></li>
//                         <li><a href="#" className="hover:underline">Shop</a></li>
//                         <li><a href="#" className="hover:underline">My Cart</a></li>
//                         <li><a href="#" className="hover:underline">Contact Us</a></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm flex justify-between ">
//                 <p>All Rights Reserved 2024</p>
//                 <div className="flex justify-center mt-4 space-x-2">
//                     {/* Example payment method icons */}
//                     <img src={footerlogo} alt="Visa" className="h-6" />

//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import logo from '../Assests/logo.png';
import footerlogo from '../Assests/footerlogo.png';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className="bg-yellow-600 text-white py-6 mt-10">
            {/* Container */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                {/* Contact Us Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p className="mt-4">
                        <strong>Location</strong><br />
                        Jhotwara Pin Code is 302012.<br />
                        Jhotwara is located in Jaipur in Rajasthan, India.
                    </p>
                    <p className="mt-4">
                        <strong>Have Questions?</strong><br />
                        +91 9876543210<br />
                        +91 9876543210
                    </p>
                </div>

                {/* Logo & Description Section */}
                <div className="flex flex-col items-center justify-center text-center">
                    <img src={logo} alt="Cosmic Logo" className="mx-auto w-40 md:w-60 z-20 mb-4" />
                    <p className="text-center max-w-sm">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                    </p>
                    <div className="flex justify-center mt-6 space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><FacebookOutlined /></a>
                        <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><InstagramOutlined /></a>
                        <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><LinkedinOutlined /></a>
                        <a href="#" className="text-white hover:text-gray-300 border rounded-full p-2"><YoutubeOutlined /></a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="text-center md:text-right">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">Shop</a></li>
                        <li><a href="#" className="hover:underline">My Cart</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p>All Rights Reserved 2024</p>
                <div className="flex justify-center space-x-2">
                    {/* Example payment method icons */}
                    <img src={footerlogo} alt="Visa" className="h-6" />
                </div>
            </div>
        </div>
    );
}
