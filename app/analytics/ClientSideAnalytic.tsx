'use client';
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react'

const ClientSideAnalytic = () => {
  return (
    <div>
        <BlurIn
        word="Analytics"
        className="text-4xl font-bold text-black dark:text-white"
        />
        
    </div>
  )
}

export default ClientSideAnalytic