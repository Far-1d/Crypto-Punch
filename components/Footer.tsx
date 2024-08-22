import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { StarsBackground } from "@/components/aceternity/stary-background";
import { TbCircleLetterC } from "react-icons/tb";
import ScrollToTopButton from '@/components/aceternity/scrollUp';
import { TbMessage } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandTelegram } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
import { Logo } from './logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='relative flex items-center justify-center w-full h-[60vh] sm:h-[75vh]
       p-4'>
        <StarsBackground />
        <div className='grid grid-cols-2 sm:grid-cols-3 h-full'>
          <div className='col-span-1 flex flex-col items-start justify-start min-w-44 sm:min-w-64'>
            <div className='flex flex-row'>
              <Logo/>
              <p className='text-md font-normal p-4 pl-2 sm:pl-6'>
              Crypto Punch LTD
              </p>
            </div>
            <div className='flex flex-col items-start gap-16'>
              <div className='flex flex-row items-start '>
                <div className="flex items-center">
                  <IoLocationOutline/>
                </div>
                <div className="flex z-10 px-2">
                  <span className='text-sm font-normal'>
                    Dubai, United Arab Emirates, 1 Sheikh Mohammed bin Rashid Boulevard, 
                    Khalife tower
                  </span>
                </div>
              </div>
              <div className="flex flex-col z-10 px-2 gap-1">
                <div className='flex flex-row items-center gap-2'>
                  <TbMessage />
                  <h1 className='heading text-lg'>
                    Contact
                  </h1>
                </div>
                <span className='text-xs font-normal'>
                    admin@cryptopunch.com
                </span>
                <span className='text-xs font-normal'>
                    +1 1234-1234
                </span>
              </div>
              <div className="flex flex-col z-10 px-2 gap-1">
                <div className='flex flex-row'>
                  <div>  
                    <TbCircleLetterC />
                  </div>
                  <div className='text-xs font-normal pl-2'>  
                   Copyright 2024
                  </div>
                </div>
                <span className='text-xs font-thin'>
                    Crypto Punch LTD
                </span>
                <span className='text-xs font-thin'>
                    PRIVATE LIMITED
                </span>
              </div>
            </div>
          </div>

          <div className='col-span-1 flex flex-col items-center justify-start pt-4'>
            
            <h1 className='heading text-lg'>Site Map</h1>
            <div className='flex flex-col items-center justify-center gap-4 pt-6'>
              <Link href="#" className='z-20 hover:underline'>Sign Up</Link>
              <Link href="#" className='z-20 hover:underline'>Pricing</Link>
              <Link href="#" className='z-20 hover:underline'>Blog</Link>
              <Link href="#" className='z-20 hover:underline'>FAQs</Link>
              <Link href="#" className='z-20 hover:underline'>Features</Link>
              <Link href="/about-us" className='z-20 hover:underline'>About Us</Link>
              <div className='hidden sm:block my-4 h-[3px] w-full bg-black dark:bg-white'/>
              <div className='hidden sm:flex flex-col h-full w-full items-center gap-2 '>
                <Link href="/privacy-policy" className='pt-4 text-xs z-20 hover:underline'>Privacy Policy</Link>
                <Link href="/terms-and-conditions" className='text-xs z-20 hover:underline'>Terms and Conditions</Link>
                <Link href="/refund-policy" className='text-xs z-20 hover:underline'>Refund Policy</Link>
              </div>
            </div>
          </div>

          <div className='col-span-2 sm:col-span-1 flex flex-col items-center justify-start pt-4'>
            
            <h1 className='heading text-lg'>Social Media</h1>
            <div className='flex flex-row sm:flex-col items-center justify-center gap-4 pt-6'>
              <a href="https://instagram.com" className='z-20 hover:underline flex flex-row items-center gap-2'><TbBrandInstagram/> <span className='hidden sm:flex'>Instagram</span></a>
              <a href="https://linkedin.com" className='z-20 hover:underline flex flex-row items-center gap-2'><TbBrandLinkedin /> <span className='hidden sm:flex'>Linkedin</span></a>
              <a href="https://telegram.com" className='z-20 hover:underline flex flex-row items-center gap-2'><TbBrandTelegram /> <span className='hidden sm:flex'>Telegram</span></a>
              <a href="https://x.com" className='z-20 hover:underline flex flex-row items-center gap-2'><TbBrandTwitter /> <span className='hidden sm:flex'>Twitter</span></a>
              <a href="https://whatsapp.com" className='z-20 hover:underline flex flex-row items-center gap-2'><TbBrandWhatsapp /> <span className='hidden sm:flex'>Wharsapp</span></a>
            </div>
          </div>
          
          <div className='sm:hidden col-span-2 sm:col-span-1 flex flex-col items-center justify-start pt-4 pb-16 sm:pb-1'>
            
            <div className='h-[1px] w-full bg-neutral-700'/>
            <div className='flex flex-row sm:flex-col items-center justify-center gap-4 pt-6'>
              <Link href="/privacy-policy" className='text-xs z-20 hover:underline'>Privacy Policy</Link>
              <Link href="/terms-and-conditions" className='text-xs z-20 hover:underline'>Terms and Conditions</Link>
              <Link href="/refund-policy" className='text-xs z-20 hover:underline'>Refund Policy</Link>
            </div>
          </div>
        </div>
        <div className='absolute -bottom-10 sm:bottom-10 right-8'>
            <ScrollToTopButton/>
        </div>
    </footer>
  )
}

export default Footer