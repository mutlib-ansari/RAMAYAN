// src/components/Loader.js
// import React from 'react';

// const Loader = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//     </div>
//   );
// };

// export default Loader;


// src/components/Loader.js
import React from 'react';
import loadingAnimation from './Assests/loader.gif'; // Adjust the path as necessary

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={loadingAnimation} alt="Loading..." className="h-32 w-32" />
    </div>
  );
};

export default Loader;
