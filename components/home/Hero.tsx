import React from 'react'
import { WavyBackground } from "../aceternity/wavy-background";
import WordRotate from '../magic/word-rotate';
import { cn } from "@/lib/utils";
import Image from 'next/image';
// import { AnimatedBeamDemo } from '../magic/beam';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <WavyBackground>
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className="relative flex flex-col items-center justify-start 
              col-span-1 pl-0 pt-0 md:pl-20 md:pt-20 sm:min-w-[500px]">
                  <div className='pb-4'>
                    <p className="text-5xl sm:3xl sm:text-6xl font-bold text-neutral-800 dark:text-neutral-100">Crypto Punch</p>
                    <div>
                      <div className="absolute inset-x-20 top-14 sm:top-[4.5rem] md:top-[9.5rem] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                      <div className="absolute inset-x-20 top-14 sm:top-[4.5rem] md:top-[9.5rem] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                      <div className="absolute inset-x-60 top-14 sm:top-[4.5rem] md:top-[9.5rem] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                      <div className="absolute inset-x-60 top-14 sm:top-[4.5rem] md:top-[9.5rem] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    </div>
                  </div>
                  <div className='h-10'>
                  <WordRotate
                  className="inline text-xl sm:text-4xl text-black dark:text-white"
                  words={["Market News", "Blockchain Data", "Onboard Chart", "Asset Analytic"]}
                  
                  /></div>
                  <span className='pt-10 sm:pt-16 w-1/2 text-sm text-center'>Our goal is to bring you simple Crypto data using different API endpoints. scroll down and use our integrated Crypto functionalities.</span>
                  
              </div>

              <div className='hidden md:block col-span-1'>
                <Image src={'/signal_animation.svg'} width={600} height={600} alt=""
                className='absolute -top-20 left-[50vw]'/>
                <Image src={'/animated_cubes.svg'} width={600} height={600} alt=""
                className='absolute -top-44 left-[50vw]'/>   
              </div>
            </div>
        </WavyBackground>
        
    </div>
  )
}

export default Hero