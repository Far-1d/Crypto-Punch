import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/shadcn/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from './logo';
import Link from 'next/link';
import { UserNav } from './chart/user-nav';

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
                <NavigationMenuItem><Link href="/news">News</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/chart">Chart</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/analytics">Analytics</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/assets">Assets</Link></NavigationMenuItem>
                <NavigationMenuItem><Link href="/about-us">About us</Link></NavigationMenuItem>
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