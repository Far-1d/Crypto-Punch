'use client';
import { motion } from "framer-motion";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState }    from 'react'
import Head from "next/head";
import { getUserFromToken } from "@/lib/jwt";
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { FaUserPen } from "react-icons/fa6";
import { useAppContext } from "@/context";

function ClientSideProfile () {
    const { user, setUser } = useAppContext();
    const [profile, setProfile] = useState<any>('');
    const [self, setSelf] = useState(false);
    const [not_found, setNot_found] = useState(false);
    const searchParams = useSearchParams();
    let id = searchParams.get("id");

    useEffect(() => {
        const fetchUser = async () => {
            const userData:any = await getUserFromToken();
            setUser(userData);
            if (!id) {
                if (userData) {
                    console.log("mode 1")
                    setProfile(userData)
                    setSelf(true)
                } else {
                    setNot_found(true)
                }
                return;
            }
            if (userData.id == id) {
                setProfile(userData)
                setSelf(true);
            }else {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/api/user/get/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        setNot_found(true)
                        return;
                    }

                    const result = await response.json();
                    setProfile(result);
                    console.log("----.>>   ",result)
                    setSelf(false);
                } catch (error) {
                    setNot_found(true)
                }
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {   // check self when user or profile change
        setSelf(profile.id === user.id);
    }, [user, profile]);

    if (not_found && user==='') return notFound()
    
    return (
        <div className="w-full h-full">
            <Head>
                <title>{`${profile.username}'s Profile | crypto Punch`}</title>
            </Head>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 w-full h-full">
                <div className="col-span-1 p-2 flex flex-col items-center justify-center w-full h-full sm:border-r sm:border-neutral-400">
                    <Avatar className='w-32 h-32 rounded-full'>
                        <AvatarImage src={profile.image} className="aspect-auto"/>
                        <AvatarFallback className="text-4xl">{profile ? getInitials(profile.username): ''}</AvatarFallback>
                    </Avatar>
                    <div className="w-full">
                        <h1 className="heading text-3xl font-semibold text-center pt-1">
                            {profile.username} 
                        </h1>
                        <p className="text-base font-normal text-center">
                            {profile.email}
                        </p>
                    </div>
                    <div className="w-full mt-2">
                        <div className="mt-2">
                            <h1 className="font-light text-neutral-600 text-center">
                                Joined at
                            </h1>
                            <p className="text-base font-normal text-center">
                                {profile.created_at}
                            </p>
                        </div>
                        <div className="mt-2">
                            <h1 className="font-light text-neutral-600 text-center">
                                Last seen
                            </h1>
                            <p className="text-base font-normal text-center">
                                {profile.last_login_formatted}
                            </p>
                        </div>
                    </div>
                    {self && 
                        <div>
                            <button><FaUserPen/></button>
                        </div>
                    }
                </div>
                <div className="col-span-1 sm:col-span-2 p-2 w-full flex flex-col items-center justify-center sm:ml-4 min-h-screen">
                    <p className="text-center">
                        user blog coming soon ...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ClientSideProfile

const getInitials = (name:string) => {
    // Split the name by spaces and map over the words
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase()) // Get the first letter of each word
        .join(''); // Join the letters together
};