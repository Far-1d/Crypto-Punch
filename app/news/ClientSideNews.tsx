'use client';
import { TracingBeam } from "@/components/aceternity/traceBeam";
import BlurIn from "@/components/magic/blurIn";
import SVGFrame from "@/components/sub/frame";
import { motion } from "framer-motion";
import Link from "next/link";
import React from 'react'

const ClientSideNews = () => {
  return (
    <div className="w-full">
        <BlurIn
        word="News"
        className="text-4xl font-bold text-black dark:text-white"
        />
        <SVGFrame className="top-10 h-auto"/>
    </div>
  )
}

export default ClientSideNews