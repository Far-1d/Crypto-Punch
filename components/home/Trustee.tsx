import React from 'react'
import { motion } from "framer-motion";
import {trusted} from '@/data'
import Image from 'next/image';

const Trustee = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='pb-2'>
            <p className='font-bold text-2xl sm:text-4xl'>Trusted By</p>
        </div>
        <div className='grid grid-flow-col auto-cols-max gap-4 py-2'>
            {trusted.map((item, index) => (
            <div className='flex size-[10vw] justify-center items-center' key={index}>
                <div className='flex flex-col items-center justify-center'>
                  <Image src={item.img} alt={item.name} width={100} height={100}
                  className={`size-[7vw] lg:size-[5vw] ${[1, 3].includes(item.id) ?
                  'dark:invert' : ''}`}/>
                  <p className='text-xs sm:text-lg'>{item.name}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Trustee