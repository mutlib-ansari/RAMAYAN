// import React, { useEffect} from "react";
// import Stachu from '../Assests/stachu.png'
// const BlogPage = () => {
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to top
//       }, []);


//   return (
//     <div className="container mx-auto p-4 xl:max-w-6xl relative top-20 mb-36  ">
//       <div className="flex flex-col md:flex-row ">
       
//         <div className="md:w-1/2 mb-4 md:mb-0 mt-6">
//           <img
//             src={Stachu} 
//             alt="Blog Image"
//             className="w-1/2"
//           />
//         </div>

        
//         <div className="md:w-1/2 md:pl-8 mt-7">
//           <h1 className="text-3xl font-bold mb-4">Blog Title</h1>
//           <p className="text-gray-700 mb-4">
//             This is the introductory paragraph of the blog. It gives a brief overview of what the blog is about. 
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Suspendisse varius enim in eros elementum tristique.
//           </p>
//           <p className="text-gray-700 mb-4">
//             This paragraph will go into more detail about the blog topic. You can include images, links, or any other content 
//             you want to share with your readers. Tailwind CSS makes it easy to style your components.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Continue adding more content as needed. You can use additional HTML tags to format your text, like <strong>bold</strong>, 
//             <em>italic</em>, and even lists.
//           </p>
//           <ul className="list-disc pl-5 mb-4">
//             <li>Point one about the blog topic</li>
//             <li>Point two that adds more detail</li>
//             <li>Point three with interesting information</li>
//           </ul>
//           <p className="text-gray-700">
//             Conclude your blog post with a summary or call to action, encouraging readers to engage or share their thoughts in the comments.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useEffect } from "react";
import Stachu from '../Assests/stachu.png';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, []);

  return (
    <div className="container mx-auto p-4 xl:max-w-6xl relative top-20 mb-36">
      <div className="flex flex-col md:flex-row">
        
    
        <div className="md:w-1/2 mb-4 md:mb-0 mt-6 flex justify-center">
          <img
            src={Stachu}
            alt="Blog Image"
            className="w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        
        <div className="md:w-1/2 md:pl-8 mt-7">
          <h1 className="text-3xl font-bold mb-4">Blog Title</h1>
          <p className="text-gray-700 mb-4">
            This is the introductory paragraph of the blog. It gives a brief overview of what the blog is about. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-700 mb-4">
            This paragraph will go into more detail about the blog topic. You can include images, links, or any other content 
            you want to share with your readers. Tailwind CSS makes it easy to style your components.
          </p>
          <p className="text-gray-700 mb-4">
            Continue adding more content as needed. You can use additional HTML tags to format your text, like <strong>bold</strong>, 
            <em>italic</em>, and even lists.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Point one about the blog topic</li>
            <li>Point two that adds more detail</li>
            <li>Point three with interesting information</li>
          </ul>
          <p className="text-gray-700">
            Conclude your blog post with a summary or call to action, encouraging readers to engage or share their thoughts in the comments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

