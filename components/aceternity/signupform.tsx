"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/aceternity/label";
import { Input } from "@/components/aceternity/input";
import { cn } from "@/lib/utils";
import {
  TbBrandGithub,
  TbBrandGoogle,
} from "react-icons/tb";
import { toast } from "sonner";
import Link from "next/link";
import { getUserFromToken } from "@/lib/jwt";
import { useAppContext } from "@/context";

export function SignupFormDemo() {
    let token = '';
    const { user, setUser } = useAppContext();
    const [isLoading2, setIsLoading2] = useState<boolean>(false)
    const [errorUser2, setErrorUser2] = useState<string | null>(null)
    const [errorEmail2, setErrorEmail2] = useState<string | null>(null)
    const [errorp12, setErrorp12] = useState<string | null>(null)
    const [errorp22, setErrorp22] = useState<string | null>(null)
    const [error2, setError2] = useState<string | null>(null)

    useEffect(() => {
        const clearErrorsTimeout = setTimeout(() => {
            setErrorUser2(null);
            setErrorEmail2(null);
            setErrorp12(null);
            setErrorp22(null);
            setError2(null);
            }, 5000);
  
            return () => clearTimeout(clearErrorsTimeout);
        }, [errorUser2, errorEmail2, errorp12, errorp22, error2]);
      
      const openToast = () => {
        
        const user:any = getUserFromToken();
        toast("Your account created successfully", {
          description: "check your email for verification link",
          action: {
            label: "Profile",
            //@ts-ignore
            // onClick: () => push(`/profile?id=${user.id}`),
            onClick: () => {
              // Use Link to create a navigable link
              <Link href={`/profile?id=${user.id}`}>
                <a>Prof1le</a>
              </Link>;
            }
          },
        })
      }
    
    const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading2(true)

        const username = (document.getElementById('username2') as HTMLInputElement).value;
        const email = (document.getElementById('email2') as HTMLInputElement).value;
        const password = (document.getElementById('password2') as HTMLInputElement).value;
        const password2 = (document.getElementById('password22') as HTMLInputElement).value;
        
        if (password.length < 8) {
          setErrorp12('password must be 8 or more characters')
          setIsLoading2(false) 
          return;
        }
        if (password != password2) {
          setErrorp22('passwords do not match')
          setIsLoading2(false) 
          return;
        }
        // Prepare the data to send
        const data = {
          username: username,
          email: email,
          password: password,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Check if the response is ok (status code 200-299)
            if (response.ok) {
                setUser(response);
                token = await response.json();
                setErrorUser2(null)
                setErrorEmail2(null)
                setErrorp12(null)
                setErrorp22(null)
                sessionStorage.setItem('token', token)
                openToast();
            } else {
                const errorData = await response.json();
                sessionStorage.removeItem('token');
                if (errorData.username) {
                  setErrorUser2(errorData.username)
                } else{
                  setErrorUser2(null)
                }
                if (errorData.email) {
                  setErrorEmail2(errorData.email)
                } else {
                  setErrorEmail2(null)
                }
            }
        } catch (error:any) {
          sessionStorage.removeItem('token');
          setError2(error.message)
        } finally {
          setIsLoading2(false)
        }
    };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Crypto Punch
      </h2>
      {error2 && <div className='text-red-500 text-sm z-10 h-5 text-right pb-1 animate-fadeOut'>{error2}</div>}
      <form className="my-8" onSubmit={handleSubmit2}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="username2">Username</Label>
            <Input id="username2" placeholder="username" type="text" />
            {errorUser2 && <div className={`text-red-500 text-sm z-10 h-5 text-right pb-1 animate-fadeOut`}>{errorUser2}</div>}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email2">Email Address</Label>
          <Input id="email2" placeholder="me@email.com" type="email" />
          {errorEmail2 && <div className={`text-red-500 text-sm z-10 h-5 text-right pb-1 animate-fadeOut`}>{errorEmail2}</div>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password2">Password</Label>
          <Input id="password2" placeholder="••••••••" type="password" />
          {errorp12 && <div className={`text-red-500 h-5 text-sm z-10 text-right pb-1 animate-fadeOut`}>{errorp12}</div>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password22">Confirm password</Label>
          <Input id="password22" placeholder="••••••••" type="password" />
          {errorp22 && <div className={`text-red-500 h-5 text-sm z-10 text-right pb-1 animate-fadeOut`}>{errorp22}</div>}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit" disabled={isLoading2}
        >
          {isLoading2 ? 'Loading...' : 'Sign up  →'}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex space-x-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <TbBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <TbBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
