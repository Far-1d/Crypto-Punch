"use client";
import React from 'react';

const ScrollToTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="group animate-bounce  h-12 w-12 bg-black text-white dark:bg-white 
      dark:text-black rounded-full shadow-lg transition duration-1000 p-1"
      aria-label="Scroll to top"
    >
      <span className='group-hover:text-amber-500 text-2xl duration-200'>
        ↑
      </span>
    </button>
  );
};

export default ScrollToTopButton;