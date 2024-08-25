"use client";
import React from 'react';
import { FaArrowDown } from "react-icons/fa6";

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


export const ScrollToMidButton: React.FC = () => {
  const handleScrollToMid = () => {
    window.scrollTo({
      top: 800,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    <button
      onClick={handleScrollToMid}
      className="group border-0 pt-4 w-2/3 text-base text-center"
      aria-label="Scroll to mid"
    >
      <span className='group-hover:text-amber-500 duration-200 inline'>
        scroll down to see more <FaArrowDown className='inline'/>
      </span>
    </button>
  );
};