"use client";
import { getUserFromToken } from "@/lib/jwt";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({children}:{
    children: React.ReactNode;
}) {
    let [user, setUser] = useState(getUserFromToken())

    return (
        <AppContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

// this function return the value that is provided upper to anythin that need it
export function useAppContext(){
    return useContext(AppContext)
}