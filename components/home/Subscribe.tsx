import React from 'react'
import { Button } from '../shadcn/button'
import { ChevronRight } from 'lucide-react'
import { BorderBeam } from '../magic/beam-border'
import DotPattern from '../magic/dot-patten-bg'

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-16 w-full'>
        <div className='relative grid grid-cols-1 sm:grid-cols-2 py-8 w-full'>
            <div className='z-10 col-span-1 py-8 px-16 rounded-2xl sm:translate-x-5'>
                
                <h1 className='heading text-2xl font-bold'>
                    Join the Watchlist
                </h1>
                <p className='text-lg font-normal max-w-72'>
                    Recieve market news and data before anyone else 
                </p>
            </div>
            <div className='z-10 relative overflow-hidden col-span-1 py-8 px-16 rounded-2xl
                md:-translate-x-10'>
                <div className='w-[100vw] h-[50vh] -translate-y-16 -translate-x-20 absolute bg-zinc-800 -z-10 opacity-30'/>
                <BorderBeam delay={7.6} borderWidth={2}/>
                <input
                    type="text"
                    placeholder="me@email.com"
                    className="p-4 rounded-lg border caret-amber-500 h-10 w-full relative z-10
                      mt-2 bg-neutral-100 dark:bg-neutral-950 placeholder:text-neutral-700
                      focus:border-0 focus:ring-1 focus:ring-amber-600 focus:outline-none
                      transition duration-500"
                />
                <Button className='mt-4 w-32 hover:gap-1 z-10 hover:border-indigo-700' variant="outline" asChild>
                    <a href='#'>
                        <span>Subscribe</span> <ChevronRight className="h-4 w-4" />
                    </a>
                </Button>
            </div>

            <DotPattern className='z-0'/>
        </div>
    </div>
  )
}

export default Subscribe
