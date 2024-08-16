import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/shadcn/dialog"
import { LuAlignJustify } from "react-icons/lu";
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { UserNav } from './sub/user-nav';


const NavigationSmall = () => {
  return (
    <div className='fixed w-full top-0 left-0 z-20'>
        <Dialog>
            <DialogTrigger >
                <button className="px-6 py-4 text-black dark:text-white rounded-lg font-bold transform hover:translate-x-1 transition duration-400">
                    <LuAlignJustify/>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Menu</DialogTitle>
                </DialogHeader>

                <div className='flex flex-col justify-center items-center gap-1 pt-2'>
                    <Link href="/">Home</Link>
                    <Link href="/news">News</Link>
                    <Link href="/chart">Chart</Link>
                    <Link href="/analytics">Analytics</Link>
                    <Link href="/assets">Assets</Link>
                    <Link href="/about-us">About us</Link>
                </div>
            </DialogContent>
        </Dialog>
        
        <div className='absolute flex flex-row top-[1vh] right-[4vw]'>
            <div className='pr-4'>
                <ModeToggle/>
            </div>
            <div className="flex items-center space-x-2">
                <UserNav />
            </div>
        </div>
    </div>
  )
}

export default NavigationSmall