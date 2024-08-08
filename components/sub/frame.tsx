import { cn } from '@/lib/utils';
import React from 'react'

interface SVGInterface  {
    className?: string;
}

const SVGFrame = ( {className}: SVGInterface) => {
  return (
    <svg width="433" height="117" viewBox="0 0 433 117" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={cn('stroke-1 stroke-neutral-700 dark:stroke-neutral-300 w-full absolute', className)}>
        <line y1="56.5" x2="433" y2="56.5" stroke-linecap="round"/>
        <line x1="107.5" y1="15.5" x2="107.5" y2="107.5"  stroke-linecap="round" stroke-dasharray="2.5 5.5"/>
        <line x1="305.5" y1="8.99652" x2="305.5" y2="80.5" stroke-linecap="round"/>
        <line x1="305.5" y1="80.5" x2="20.0" y2="80.5" stroke-linecap="round"/>
        <path d="M320 81C320 89.0081 313.508 95.5 305.5 95.5C297.492 95.5 291 89.0081 291 81" stroke-linecap="round" stroke-dasharray="2.5 5.5"/>
        <path d="M320 81.5C320 73.4919 313.508 67 305.5 67" stroke-dasharray="2.5 5.5" stroke-linecap="round"/>
    </svg>
  )
}

export default SVGFrame