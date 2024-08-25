'use client';

import BlurIn from "@/components/magic/blurIn";
import React from 'react'

const ClientSideAnalytic = () => {
  return (
    <div className="flex flex-col items-start justify-center">
        <BlurIn
        word="Analytics"
        className="text-4xl font-bold text-black dark:text-white"
        />
        <p 
        className='animate-pulse text-xl font-semibold mt-12 text-center w-full'>
          coming soon ...
        </p>
    </div>
  )
}

export default ClientSideAnalytic