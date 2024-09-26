// import React from 'react'
// import image6 from '../Assests/image6.png'
// import { UserOutlined } from '@ant-design/icons';
// import { CalendarOutlined } from '@ant-design/icons';

// export default function Latestpost() {
//   return (

//     <div className=' container mx-auto grid grid-cols-3 gap-5 mt-9'>
//       <div className='border p-6 bg-gray-100  flex justify-center'>
//         <div><img className='h-auto' src={image6} />
//           <div className='flex gap-10'><span className='flex'>
//             <UserOutlined />
//             Affiliate
//           </span>
//             <span className='flex'>
//               <CalendarOutlined />
//               Affiliate
//             </span></div> <br></br>
//           <h4 className='font-bold '>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</h4> <br></br>
//           <p>There are many variations of passages of Lorem Ipsum available,</p>

//         </div>

       
//       </div>

//       <div className='border p-6 bg-gray-100'>
//           <img src={image6} />
//           <div className='flex gap-10'><span className='flex'>
//             <UserOutlined />
//             Affiliate
//           </span>
//             <span className='flex'>
//               <CalendarOutlined />
//               Affiliate
//             </span></div> <br></br>
//           <h4 className='font-bold '>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</h4> <br></br>
//           <p>There are many variations of passages of Lorem Ipsum available,</p>

//         </div>

//         <div className='border p-6 bg-gray-100'>
//           <img src={image6} />
//           <div className='flex gap-10'><span className='flex'>
//             <UserOutlined />
//             Affiliate
//           </span>
//             <span className='flex'>
//               <CalendarOutlined />
//               Affiliate
//             </span></div> <br></br>
//           <h4 className='font-bold '>Bal Ram Lalla Murti 3.5 Inch Murti Nakesha</h4> <br></br>
//           <p>There are many variations of passages of Lorem Ipsum available,</p>

//         </div>

        

        
//       </div>
//     )      
     
// }

import React from 'react';
import image6 from '../Assests/image6.png';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';

export default function Latestpost() {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9'>
      {/* Post 1 */}
      <div className='border p-6 bg-gray-100 flex flex-col items-center'>
        <img className='w-full h-auto object-cover' src={image6} alt="Post Image" />
        <div className='flex justify-between w-full mt-4 text-sm text-gray-600'>
          <span className='flex items-center gap-2'>
            <UserOutlined />
            Affiliate
          </span>
          <span className='flex items-center gap-2'>
            <CalendarOutlined />
            Affiliate
          </span>
        </div>
        <h4 className='font-bold mt-4 text-center'>
          Bal Ram Lalla Murti 3.5 Inch Murti Nakesha
        </h4>
        <p className='text-center mt-2'>
          There are many variations of passages of Lorem Ipsum available.
        </p>
      </div>

      {/* Post 2 */}
      <div className='border p-6 bg-gray-100 flex flex-col items-center'>
        <img className='w-full h-auto object-cover' src={image6} alt="Post Image" />
        <div className='flex justify-between w-full mt-4 text-sm text-gray-600'>
          <span className='flex items-center gap-2'>
            <UserOutlined />
            Affiliate
          </span>
          <span className='flex items-center gap-2'>
            <CalendarOutlined />
            Affiliate
          </span>
        </div>
        <h4 className='font-bold mt-4 text-center'>
          Bal Ram Lalla Murti 3.5 Inch Murti Nakesha
        </h4>
        <p className='text-center mt-2'>
          There are many variations of passages of Lorem Ipsum available.
        </p>
      </div>

      {/* Post 3 */}
      <div className='border p-6 bg-gray-100 flex flex-col items-center'>
        <img className='w-full h-auto object-cover' src={image6} alt="Post Image" />
        <div className='flex justify-between w-full mt-4 text-sm text-gray-600'>
          <span className='flex items-center gap-2'>
            <UserOutlined />
            Affiliate
          </span>
          <span className='flex items-center gap-2'>
            <CalendarOutlined />
            Affiliate
          </span>
        </div>
        <h4 className='font-bold mt-4 text-center'>
          Bal Ram Lalla Murti 3.5 Inch Murti Nakesha
        </h4>
        <p className='text-center mt-2'>
          There are many variations of passages of Lorem Ipsum available.
        </p>
      </div>
    </div>
  );
}

