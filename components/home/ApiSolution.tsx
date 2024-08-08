import React from 'react'
import { AnimatedBeamMultipleOutputDemo } from "@/components/magic/all-to-one-beam";
import Image from 'next/image';

const ApiSolution = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <div className=' pt-24  pb-12'>
            <p className='heading text-bold text-2xl sm:text-3xl text-center'>
              Aggregating Data from Multiple <span className='underline'>Endpoints </span>
              <span className='block'>  
                Delivering the <span className='underline'>Finest</span> Crypto Intelligence 
              </span>
            </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full px-12'>
          <div className='bg-neutral-400 dark:bg-neutral-900 relative p-1 sm:p-10 rounded-3xl
          flex flex-col md:flex-row lg:flex-col items-center justify-center sm:m-8 mt-6 lg:mt-0
          overflow-hidden [background-image:radial-gradient(68%_80%_at_top,rgba(255,255,255,0.6),rgba(155,155,155,0))]
          dark:[background-image:radial-gradient(68%_80%_at_top,rgba(215,215,215,0.3),rgba(205,205,205,0))]'>
            <AnimatedBeamMultipleOutputDemo/>
            <Noise/>
          </div>
          <div className='bg-neutral-400 dark:bg-neutral-800 relative p-6 sm:p-10 flex flex-col rounded-3xl
            md:flex-row lg:flex-col items-center justify-center sm:m-8 overflow-hidden mt-6 sm:mt-0
            [background-image:radial-gradient(68%_80%_at_top,rgba(255,255,255,0.6),rgba(155,155,155,0))]
            dark:[background-image:radial-gradient(68%_80%_at_top,rgba(215,215,215,0.3),rgba(205,205,205,0))]'>
            <p className='z-10 p-2 sm:p-4 pt-0 text-justify border-neutral-100 dark:border-neutral-500
            border-b md:border-r md:border-b-0 lg:border-b lg:border-r-0 border-dashed'>
            At Crypto punch, we specialize in aggregating cryptocurrency data from a diverse array of <span className='underline'>reliable</span> endpoints, ensuring that you receive the most comprehensive and <span className='underline'>accurate</span> information available. 
            Our advanced API seamlessly connects to multiple sources, providing you with <span className='underline'>real-time</span> market data, historical trends, and insightful analytics.
            </p>
            <p className='z-10 p-2 sm:p-4 pb-0 text-justify'>
            Whether you’re developing trading algorithms, building financial applications, or conducting market research, our API is designed to empower your projects with the finest crypto intelligence.
            </p>
            <Noise/>
          </div>
        </div>
    </div>
  )
}

export default ApiSolution

const Noise = () => {
  return (
    <div
      className="z-[1] absolute inset-0 w-full h-full scale-[1.2] transform opacity-30 dark:opacity-5 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};