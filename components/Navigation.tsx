import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/shadcn/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from './logo';
import Link from 'next/link';
import { UserNav } from './sub/user-nav';

const Navigation = () => {
  return (
    <div className='fixed w-full top-0 left-0 z-20 shadow-lg
    backdrop-filter backdrop-blur-md'>

      <div className='bg-white dark:bg-neutral-800 absolute
        h-full w-full opacity-20'></div>

      <div className='flex justify-between'>
        <div className='px-3 z-30'>
          <Link href="/" className='w-full h-full'>
            <Logo/>
          </Link>
        </div>
        <NavigationMenu className='w-full gap-28 flex justify-between'>
            <NavigationMenuList className='gap-8'>
                <NavigationMenuItem><Link href="/news" className='hover:underline'>News</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/assets" className='hover:underline'>Assets</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/web3" className='hover:underline'>Web 3</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/analytics" className='hover:underline'>Analytics</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/about-us" className='hover:underline'>About us</Link></NavigationMenuItem>
                <NavigationMenuItem></NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        
        <div className='object-right flex flex-row pr-4 lg:pr-8'> 
          <div className='pt-2 pr-3'>
            <ModeToggle />
          </div>
          <div className="flex items-center space-x-2">
              <UserNav />
          </div>
        </div> 
      </div>

    </div>
  )
}

export default Navigation