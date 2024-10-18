import React, { useState, useEffect } from 'react';
import {CaretUpOutlined   } from '@ant-design/icons'; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to top
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 h-16 w-16  bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 animate-bounce "
        >
         
         <img width="100" height="100" src="https://img.icons8.com/quill/100/up.png" alt="up"/>

        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
