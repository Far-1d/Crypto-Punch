'use client';
import { SignupFormDemo } from "@/components/aceternity/signupform";
import { useAppContext } from "@/context";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import React from 'react'

const ClientSideSignup = () => {
    const pics = ["/s1.jpg", "/s2.jpg"];
    const randomIndex = Math.floor(Math.random() * pics.length);
    const { user, setUser } = useAppContext();

        
  return (
    <div className="flex flex-row w-full h-full relative">
        <div className={`z-0 absolute sm:relative w-full h-screen pb-10 flex flex-col items-start justify-end bg-[url("/s2.jpg")] bg-cover`}>
            <div className="flex m-4 ">
                <h1 className="max-w-96 text-lg leading-relaxed text-white"><Quote className="w-3 h-3 inline mb-2 rotate-180"/> If you only read the books that everyone else is reading, you can only think what everyone else is thinking. <Quote className="w-3 h-3 inline mb-2"/></h1>
            </div>
            <p className="mx-4 text-white">- Haruki Murakami <small>Norwegian Wood</small></p>
        </div>
        <div className=" z-10 w-full h-screen pb-10">
            <div className="mx-auto mt-2 ">
                {!user &&( <SignupFormDemo/>)}
                {user && (
                    <div className="flex flex-col items-center justify-center w-full h-screen text-2xl">
                        <p className="text-white">You are already logged in </p>
                        <p className="text-white">go to your <a href={`/profile?id=${user.id}`} className="hover:underline bg-neutral-900">Profile</a></p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ClientSideSignup