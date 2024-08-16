'use client';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/shadcn/avatar"
  import { RxPerson } from "react-icons/rx";
  import { Button } from "@/components/shadcn/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/shadcn/dropdown-menu"
import LoginDialog from "../Login";
import SignupDialog from "../Signup";
import { useEffect, useState } from "react";
import { getUserFromToken } from "@/lib/jwt";
import { LogoutUser } from "@/lib/logout";
import { useAppContext } from "@/context";


export function UserNav() {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { user, setUser } = useAppContext();

    useEffect(() => {
      setUser(getUserFromToken)
    }, [sessionStorage.getItem('token')]);

    const handleSignupOpen = (e:any) => {
      e.stopPropagation(); // Prevent dropdown from closing
      setIsSignupOpen(true);
      setIsLoginOpen(false);
    };
    const handleSignupClose = () => {
      setIsSignupOpen(false);
    };

    const handleLoginOpen = (e:any) => {
      e.stopPropagation(); // Prevent dropdown from closing
      setIsLoginOpen(true);
      setIsSignupOpen(false);
    };
    const handleLoginClose = () => {
      setIsLoginOpen(false);
    };
    
    const handleLogout = () => {
      LogoutUser()
      setUser('');
    };

    const loggedIn = user ? true : false;


    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.image} alt="@shadcn" />
                <AvatarFallback><RxPerson/></AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          {loggedIn &&(  
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.username}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <a href={`/profile?id=${user.id}`} className="w-full">Profile</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href={`/profile?id=${user.id}/setting`} className="w-full">Settings</a> 
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/support" className="w-full">Support</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <a href="#" className="w-full">Log out</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
          {!loggedIn &&(
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem onClick={handleLoginOpen}>
                {/* <a href={`/login`} className="w-full">Log in</a> */}
                Log in
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignupOpen}>
                {/* <a href={`/signup`} className="w-full">Sign up</a> */}
                Sign up
              </DropdownMenuItem>
            </DropdownMenuContent>
          )}
        </DropdownMenu>

        <LoginDialog isOpen={isLoginOpen} onclose={handleLoginClose}/>
        <SignupDialog isOpen={isSignupOpen} onclose={handleSignupClose}/>
      </div>
    )
  }