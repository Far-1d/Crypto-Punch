import React from 'react'
import { Component } from '@/components/shadcn/barChart'
import { motion } from 'framer-motion'


const GrowthChart = () => {

  return (
    <div className='flex flex-col items-center justify-center px-8 sm:px-16 pt-12 mx-2'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div 
            className='overflow-hidden relative col-span-1 order-0
            border bg-slate-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-lg px-6 py-6 xl:px-12'>
                <h1 className='heading font-bold text-xl'>
                    Delivering lightning-fast crypto API results for developers and businesses alike
                </h1>
                <p className='text-sm text-pretty pt-6 text-justify'>
                We understand that in the fast-paced world of digital currencies, timely and accurate data is crucial for making informed decisions. That's why we've invested heavily in cutting-edge technology and infrastructure, ensuring that our API can handle a high volume of requests with exceptional speed and reliability.
                </p>
                <Noise />
            </div>

            <div className='col-span-1 lg:col-span-2 order-last md:order-2 lg:order-1'>
                <Component/>
            </div>

            <div className='overflow-hidden relative col-span-1 lg:col-span-3 order-1 lg:order-2
            border bg-slate-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-lg px-6 py-6 xl:px-12'>
                <h1 className='heading font-bold text-xl z-10'>
                    Dedication to excellence extends beyond just speed
                </h1>
                <p className='text-sm text-pretty pt-6 text-justify z-10'>
                    <span>
                        we strive to make your job easier by offering a user-friendly interface and comprehensive documentation. 
                        We recognize that navigating the complexities of cryptocurrency data can be challenging, which is why we've streamlined our services to ensure a seamless experience. 
                    </span>
                    <span className='hidden md:inline'>
                        With our robust API, you can focus on what truly matters—developing innovative solutions and driving your projects forward—while we take care of the heavy lifting. 
                        Join our growing community of users who rely on our API for their daily data needs, and experience the difference that our commitment to quality and performance can make.
                    </span>
                </p>
                <Noise />
            </div>
            
        </div>
    </div>
  )
}

export default GrowthChart


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